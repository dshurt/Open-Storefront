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

package edu.usu.sdl.opencatalog.api.impl;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;

/**
 *  Handle common client behavior
 * @author dshurtleff
 */
public abstract class BaseRestServiceImpl
{
	protected final ServiceConfig serviceConfig;
	
	public BaseRestServiceImpl(ServiceConfig serviceConfig)
	{
		this.serviceConfig = serviceConfig;
	}
	
	protected WebTarget getRestTarget(String service)
	{
		Client client = ClientBuilder.newClient().register(new BasicAuthenticator(serviceConfig.getUsername(), serviceConfig.getPassword()));
		WebTarget webTarget = client.target(serviceConfig.getServerUrl() + serviceConfig.getVersion() +"/" + service);
		return webTarget;
	}
	
}
