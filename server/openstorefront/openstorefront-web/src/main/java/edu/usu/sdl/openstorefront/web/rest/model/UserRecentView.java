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

package edu.usu.sdl.openstorefront.web.rest.model;

import edu.usu.sdl.openstorefront.doc.ParamTypeDescription;
import javax.validation.constraints.NotNull;

/**
 *
 * @author dshurtleff
 */
public class UserRecentView
{
	@NotNull
	@ParamTypeDescription("NUMBER")
	private long viewId;
	
	@NotNull
	@ParamTypeDescription("TEXT")
	private String componentName;
	
	@NotNull
	@ParamTypeDescription("NUMBER")
	private long componentId;

	public UserRecentView()
	{
	}

	public long getViewId()
	{
		return viewId;
	}

	public void setViewId(long viewId)
	{
		this.viewId = viewId;
	}

	public String getComponentName()
	{
		return componentName;
	}

	public void setComponentName(String componentName)
	{
		this.componentName = componentName;
	}

	public long getComponentId()
	{
		return componentId;
	}

	public void setComponentId(long componentId)
	{
		this.componentId = componentId;
	}
	
}
