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

package edu.usu.sdl.openstorefront.web.action;

import edu.usu.sdl.openstorefront.doc.APIResourceModel;
import edu.usu.sdl.openstorefront.doc.JaxrsProcessor;
import java.util.logging.Logger;
import net.sourceforge.stripes.action.ErrorResolution;
import net.sourceforge.stripes.action.ForwardResolution;
import net.sourceforge.stripes.action.HandlesEvent;
import net.sourceforge.stripes.action.Resolution;
import net.sourceforge.stripes.validation.Validate;

/**
 *
 * @author dshurtleff
 */
public class APIAction
	extends BaseAction
{
	private static final Logger log = Logger.getLogger(APIAction.class.getName());
	
	@Validate(required = true, on="API")
	private String resourceClass;
	
	@Validate(required = true, on="Page")
	private String page;
			
	private APIResourceModel resourceModel;
	
	@HandlesEvent("API")
	public Resolution apiDetails()
	{		
		try
		{			
			Class resource = Class.forName("edu.usu.sdl.openstorefront.web.rest.resource." + resourceClass);
			 resourceModel = JaxrsProcessor.processRestClass(resource);			
		} catch (ClassNotFoundException ex)
		{			
			return new ErrorResolution(404, "resource not found");
		}
		return new ForwardResolution("/WEB-INF/securepages/api/apidetails.jsp");
	}

	@HandlesEvent("Page")
	public Resolution apiPage()			
	{
		page = page.replace("../", "");
		if (page.equalsIgnoreCase("apidetails.jsp"))
		{
			page = "404";
		}
		return new ForwardResolution("/WEB-INF/securepages/api/" + page + ".jsp");
	}
	
	
	public String getResourceClass()
	{
		return resourceClass;
	}

	public void setResourceClass(String resourceClass)
	{
		this.resourceClass = resourceClass;
	}

	public APIResourceModel getResourceModel()
	{
		return resourceModel;
	}

	public void setResourceModel(APIResourceModel resourceModel)
	{
		this.resourceModel = resourceModel;
	}

	public String getPage()
	{
		return page;
	}

	public void setPage(String page)
	{
		this.page = page;
	}
	
}
