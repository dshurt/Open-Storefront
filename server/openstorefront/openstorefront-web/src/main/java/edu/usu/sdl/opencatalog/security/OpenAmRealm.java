/*
 * Copyright 2014 Space Dynamics Laboratory - Utah State University Research Foundation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package edu.usu.sdl.opencatalog.security;

import edu.usu.sdl.opencatalog.service.manager.PropertiesManager;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

/**
 *
 * @author dshurtleff
 */
public class OpenAmRealm
	extends AuthorizingRealm
{

	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals)
	{
		OpenAmUser openAmUser = (OpenAmUser) principals.getPrimaryPrincipal();		
		return populateAccount(openAmUser.getTokenId(), openAmUser.getUsername());
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException
	{		
		WebTarget target = restClient("json/authenticate");
		UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) token;
		Response response = target.request(MediaType.APPLICATION_JSON).header("X-OpenAM-Username", usernamePasswordToken.getUsername())
				.header("X-OpenAM-Password", String.valueOf(usernamePasswordToken.getPassword())).post(null);

		OpenAmResponse openAmResponse = response.readEntity(OpenAmResponse.class);
		if (StringUtils.isNotBlank(openAmResponse.getTokenId()))
		{
			OpenAmAccount account = populateAccount(openAmResponse.getTokenId(), token.getPrincipal().toString());
			account.setCredentials(usernamePasswordToken.getPassword());
			return account;
		} else
		{
			throw new AuthenticationException(openAmResponse.getReason());
		}	
	}
	
	private OpenAmAccount populateAccount(String token, String username)
	{		
		//TODO: Check to see if this should be cached		
		OpenAmAccount openAmAccount = new OpenAmAccount();
		OpenAmUser openAmUser = new OpenAmUser();
		openAmUser.setTokenId(token);
		openAmUser.setUsername(username);		
		openAmAccount.getSimplePrincipals().add(openAmUser, "Open AM");
					
		//Add Authorization info   We just need to know if the user is an admin or not.		
		WebTarget target = restClient("identity/authorize");
		Response response = target.queryParam("uri", "/admin").queryParam("subjectid", token)
						.request(MediaType.APPLICATION_JSON).get();
		
		String data = response.readEntity(String.class);
		if (StringUtils.isNotBlank(data) && data.equalsIgnoreCase("boolean=true\n"))
		{
			openAmUser.setAdmin(true);
			openAmAccount.getRoles().add("administrator");
		}
		
		return openAmAccount;
	}
	
	private WebTarget restClient(String operationURL)
	{
		Client client = ClientBuilder.newClient();
		String server = PropertiesManager.getValue("openam.url", "http://openam.example.com:6800/openam/");
		if (server.endsWith("/") == false)
		{
			server += "/"; 
		}
		WebTarget webTarget = client.target(server + operationURL);
		return webTarget;
	}
	
}
