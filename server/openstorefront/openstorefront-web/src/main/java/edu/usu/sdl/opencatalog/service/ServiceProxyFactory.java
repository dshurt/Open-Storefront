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

package edu.usu.sdl.opencatalog.service;

import edu.usu.sdl.opencatalog.api.OpenCatalogService;
import java.util.concurrent.locks.ReentrantLock;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.naming.NamingException;

/**
 *
 * @author dshurtleff
 */
public class ServiceProxyFactory
{
	private static final Logger log = Logger.getLogger(ServiceProxyFactory.class.getName());
	
//	public static final String JINI_NAMES[] = {"java:global/opencatalog-web/CatalogProxyService!edu.usu.sdl.opencatalog.api.OpenCatalogService",
//							     "java:app/opencatalog-web/CatalogProxyService!edu.usu.sdl.opencatalog.api.OpenCatalogService",
//							     "java:module/CatalogProxyService!edu.usu.sdl.opencatalog.api.OpenCatalogService",
//							     "java:global/opencatalog-web/CatalogProxyService",
//							     "java:app/opencatalog-web/CatalogProxyService",
//							     "java:module/CatalogProxyService"};
	
	public static final String JINI_NAMES[] = {"java:module/CatalogProxyService"};	
	
	private static OpenCatalogService openCatalogService;
	
	
	public static OpenCatalogService  getProxy()
	{		
		if (openCatalogService == null)
		{
			ReentrantLock lock  = new ReentrantLock();
			lock.lock();
			if (openCatalogService == null)
			{
				for (String name : JINI_NAMES)
				{
					try
					{
						InitialContext initialContext = new InitialContext();
						openCatalogService = (OpenCatalogService) initialContext.lookup(name);
						break;
					} catch (NamingException ex)
					{
						lock.unlock();
						log.log(Level.WARNING, "Unable to lookup Service using name: {0}", name);						
					}
				}
				lock.unlock();
			}
		}
		
		return openCatalogService;
	}

}
