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

package edu.usu.sdl.openstorefront.service;

import edu.usu.sdl.openstorefront.service.api.OpenStorefrontService;
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
	
//	public static final String JINI_NAMES[] = {"java:global/openstorefront-web/CatalogProxyService!edu.usu.sdl.openstorefront.api.openstorefrontService",
//							     "java:app/openstorefront-web/CatalogProxyService!edu.usu.sdl.openstorefront.api.openstorefrontService",
//							     "java:module/CatalogProxyService!edu.usu.sdl.openstorefront.api.openstorefrontService",
//							     "java:global/openstorefront-web/CatalogProxyService",
//							     "java:app/openstorefront-web/CatalogProxyService",
//							     "java:module/CatalogProxyService"};
	
	public static final String JINI_NAMES[] = {"java:module/CatalogProxyService"};	
	
	private static OpenStorefrontService openstorefrontService;
	
	
	public static OpenStorefrontService  getProxy()
	{		
		if (openstorefrontService == null)
		{
			ReentrantLock lock  = new ReentrantLock();
			lock.lock();
			if (openstorefrontService == null)
			{
				for (String name : JINI_NAMES)
				{
					try
					{
						InitialContext initialContext = new InitialContext();
						openstorefrontService = (OpenStorefrontService) initialContext.lookup(name);
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
		
		return openstorefrontService;
	}

}
