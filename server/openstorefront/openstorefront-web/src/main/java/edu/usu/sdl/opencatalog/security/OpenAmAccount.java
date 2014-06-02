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

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import org.apache.shiro.authc.Account;
import org.apache.shiro.authz.Permission;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.SimplePrincipalCollection;

/**
 *  This represents an open am account
 * @author dshurtleff
 */
public class OpenAmAccount implements Account
{
	private final SimplePrincipalCollection principalCollection = new SimplePrincipalCollection();
	private  Object credentials ;
	private final List<String> roles  = Collections.synchronizedList(new ArrayList<>());
	private final List<String> permissions  = Collections.synchronizedList(new ArrayList<>());
	private final List<Permission> objectPermissions  = Collections.synchronizedList(new ArrayList<>());
	
	@Override
	public PrincipalCollection getPrincipals()
	{
		return principalCollection;
	}
	
	public SimplePrincipalCollection getSimplePrincipals()
	{
		return principalCollection;
	}
	
	@Override
	public Object getCredentials()
	{
		return credentials;
	}

	@Override
	public Collection<String> getRoles()
	{
		return roles;
	}

	@Override
	public Collection<String> getStringPermissions()
	{
		return permissions;
	}

	@Override
	public Collection<Permission> getObjectPermissions()
	{
		return objectPermissions;
	}

	public void setCredentials(Object credentials)
	{
		this.credentials = credentials;
	}

}
