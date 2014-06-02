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

package edu.usu.sdl.opencatalog.web.action;


import java.util.HashMap;
import java.util.Map;
import net.sourceforge.stripes.action.HandlesEvent;
import net.sourceforge.stripes.action.RedirectResolution;
import net.sourceforge.stripes.action.Resolution;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;

/**
 * Login/Logoff Handling
 * @author dshurtleff
 */
public class LoginAction
	extends BaseAction
{
	private String username;
	private String password;
	private boolean remember;
	
	@HandlesEvent("Login")
	public Resolution login()
	{
		Map<String, String> errors = new HashMap<>();
		
		Subject currentUser = SecurityUtils.getSubject();	
		UsernamePasswordToken token = new UsernamePasswordToken(username, password);
		token.setRememberMe(remember);		
		try
		{		  
			currentUser.login(token);			
		}
		 catch (AuthenticationException uea) {
			errors.put("username", "Unable to login. Check username and password.");
			errors.put("password", "Unable to login. Check username and password.");
		}		
		return streamErrorResponse(errors);		
	}
	
	@HandlesEvent("Logoff")
	public Resolution logoff()
	{
		Subject currentUser = SecurityUtils.getSubject();		
		currentUser.logout();
		return new RedirectResolution("/login.jsp");
	}

	public String getUsername()
	{
		return username;
	}

	public void setUsername(String username)
	{
		this.username = username;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public boolean getRemember()
	{
		return remember;
	}

	public void setRemember(boolean remember)
	{
		this.remember = remember;
	}
	
}
