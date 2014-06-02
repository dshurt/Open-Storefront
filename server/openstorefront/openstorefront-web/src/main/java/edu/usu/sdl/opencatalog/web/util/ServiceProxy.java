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

package edu.usu.sdl.opencatalog.web.util;

import edu.usu.sdl.opencatalog.api.OpenCatalogService;
import edu.usu.sdl.opencatalog.api.impl.RestCatalogProxyService;
import edu.usu.sdl.opencatalog.api.impl.ServiceConfig;
import edu.usu.sdl.opencatalog.service.ServiceProxyFactory;
import edu.usu.sdl.opencatalog.service.manager.PropertiesManager;

/**
 * This the main service entry point
 * @author dshurtleff
 */
public class ServiceProxy
{


	private ServiceProxy(){}
		
	public static OpenCatalogService getProxy()
	{
		//TODO: one setting file to pull configuration on
		boolean useRestProxy = Boolean.parseBoolean(PropertiesManager.getValue("service.rest.proxy", "false"));
		if (useRestProxy)
		{
			return getRestProxy(new ServiceConfig());
		}
		else
		{
			return getServiceProxy();
		}	
	}
	
	public static OpenCatalogService getServiceProxy()
	{
		OpenCatalogService service = ServiceProxyFactory.getProxy();
		return service;
	}
	
	public static OpenCatalogService getRestProxy(ServiceConfig serviceConfig)
	{
		OpenCatalogService service = new RestCatalogProxyService(serviceConfig);
		return service;
	}	
	
}
