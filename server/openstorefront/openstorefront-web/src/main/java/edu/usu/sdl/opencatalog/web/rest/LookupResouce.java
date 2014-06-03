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

package edu.usu.sdl.opencatalog.web.rest;

import edu.usu.sdl.opencatalog.api.model.jpa.BaseEntity;
import edu.usu.sdl.opencatalog.web.viewmodel.RestErrorModel;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author dshurtleff
 */
@Path("{version}/Lookup/{type}")
public class LookupResouce
	extends BaseResource
{
	private static final Logger log = Logger.getLogger(LookupResouce.class.getName());
	
	@PathParam("type")
	private String type;
	
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public Object lookup(@QueryParam("all") boolean all)
	{
		Object data;
		try
		{			
			Class lookupClass = Class.forName("edu.usu.sdl.opencatalog.api.model.jpa." + type);
			Object obj = lookupClass.newInstance();
			if (obj instanceof BaseEntity)
			{				
				data = service.findLookup(lookupClass, all);
			}
			else
			{
				RestErrorModel errorModel = new RestErrorModel();
				errorModel.getErrors().put("request", "Type exists but is not a lookup enity.");
				data = errorModel;
			}
			
		} catch (ClassNotFoundException | InstantiationException | IllegalAccessException ex)
		{
			String message = "Type: " + type + " doesn't exist";
			log.log(Level.SEVERE, message);
			log.log(Level.FINEST, message ,ex);
			RestErrorModel errorModel = new RestErrorModel();
			errorModel.getErrors().put("request", message);
			data = errorModel;
		}		
		return data;
	}
	
}
