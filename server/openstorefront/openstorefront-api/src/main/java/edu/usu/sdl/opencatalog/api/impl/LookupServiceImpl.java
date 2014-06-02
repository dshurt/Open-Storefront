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

import edu.usu.sdl.opencatalog.api.LookupService;
import edu.usu.sdl.opencatalog.api.model.jpa.BaseEntity;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.apache.commons.beanutils.BeanUtils;

/**
 *
 * @author dshurtleff 
 */
public class LookupServiceImpl
	extends BaseRestServiceImpl
	implements LookupService
{
	private static final Logger log = Logger.getLogger(LookupServiceImpl.class.getName());
	
	private static final String SERVICE = "Lookup";
	
	
	public LookupServiceImpl(ServiceConfig serviceConfig)
	{
		super(serviceConfig);
	}	

	@Override
	public <T extends BaseEntity> List<T> findLookup(Class<T> lookTableClass)
	{
		return findLookup(lookTableClass, false);
	}	
	
	@Override
	public <T extends BaseEntity> List<T> findLookup(Class<T> lookTableClass, boolean all)
	{
		List<T> correctedList = new ArrayList<>();
	
		//Route request
		WebTarget target = getRestTarget(SERVICE + "/" + lookTableClass.getSimpleName());
		Response response = target.queryParam("all", all).request(MediaType.APPLICATION_JSON).get();
		
		//TODO: handle failed case (Look at status to provide meaningful errors
		
		//String rawData = response.readEntity(String.class);
		
//		try
//		{
//			ObjectMapper objectMapper = new ObjectMapper();
//			correctedList = objectMapper.readValue(rawData, new TypeReference<List<T>>() {});
//		} catch (IOException ex)
//		{
//			throw new RuntimeException(ex);
//		}
		
		List<LinkedHashMap<String, String>> linkedMap = response.readEntity(new GenericType<List>(){});
	
	
		if (linkedMap.isEmpty() == false)
		{		
			for (LinkedHashMap<String, String> map : linkedMap)
			{
				try
				{
					T dataObject = lookTableClass.newInstance();
					for (String key : map.keySet())
					{
						BeanUtils.setProperty(dataObject, key, map.get(key));												
					}
					correctedList.add(dataObject);
				} catch (InstantiationException | IllegalAccessException | InvocationTargetException ex)
				{
					log.log(Level.SEVERE, null, ex);
				}
			}
		}
		
		return correctedList;
	}

}
