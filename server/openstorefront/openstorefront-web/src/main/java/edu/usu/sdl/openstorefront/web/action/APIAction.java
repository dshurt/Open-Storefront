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
import edu.usu.sdl.openstorefront.exception.OpenStorefrontRuntimeException;
import edu.usu.sdl.openstorefront.model.jpa.BaseEntity;
import edu.usu.sdl.openstorefront.web.viewmodel.RestErrorModel;
import java.util.logging.Level;
import java.util.logging.Logger;
import net.sourceforge.stripes.action.DefaultHandler;
import net.sourceforge.stripes.action.ErrorResolution;
import net.sourceforge.stripes.action.ForwardResolution;
import net.sourceforge.stripes.action.Resolution;
import net.sourceforge.stripes.validation.Validate;
import org.apache.commons.lang3.StringUtils;

/**
 *
 * @author dshurtleff
 */
public class APIAction
	extends BaseAction
{
	private static final Logger log = Logger.getLogger(APIAction.class.getName());
	
	@Validate(required = true)
	private String resourceClass;
			
	private APIResourceModel resourceModel;
	
	@DefaultHandler
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
	
}
