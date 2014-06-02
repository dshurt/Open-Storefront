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

import edu.usu.sdl.opencatalog.api.model.jpa.LookupEntity;
import edu.usu.sdl.opencatalog.api.util.LookupComparator;
import edu.usu.sdl.opencatalog.web.viewmodel.LookupModel;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import net.sourceforge.stripes.action.DefaultHandler;
import net.sourceforge.stripes.action.Resolution;
import net.sourceforge.stripes.validation.Validate;

/**
 *
 * @author dshurtleff
 */
public class LookupAction
	extends BaseAction
{
	private static final Logger log = Logger.getLogger(LookupAction.class.getName());
	
	@Validate(required = true)
	private String type;
	private boolean all;	
	
	@DefaultHandler
	public Resolution lookup()
	{
		List<LookupModel> lookups = new ArrayList<>();
		try
		{			
			Class lookupClass = Class.forName("edu.usu.sdl.opencatalog.api.model.jpa." + type);
			Object obj = lookupClass.newInstance();
			if (obj instanceof LookupEntity)
			{
				List<LookupEntity> data = service.findLookup(lookupClass, all);
				data.sort(new LookupComparator<>());
				data.forEach(d -> {
					LookupModel lookup = new LookupModel();
					lookup.setCode(d.getCode());
					lookup.setDescription(d.getDescription());			
					lookups.add(lookup);
				});				
			}
			else
			{
				Map<String, String> errors = new HashMap<>();
				errors.put("request", "Type exists but is not a lookup enity.");
				return streamErrorResponse(errors);
			}
			
		} catch (ClassNotFoundException | InstantiationException | IllegalAccessException ex)
		{
			String message = "Type: " + type + " doesn't exist";
			log.log(Level.SEVERE, message);
			log.log(Level.FINEST, message ,ex);
			Map<String, String> errors = new HashMap<>();
			errors.put("request", message);
			return streamErrorResponse(errors);
		}
		return streamResults(lookups);
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public boolean getAll()
	{
		return all;
	}

	public void setAll(boolean all)
	{
		this.all = all;
	}
	
}
