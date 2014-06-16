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

package edu.usu.sdl.openstorefront.doc;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author dshurtleff
 */
public class APIResourceModel
{
	private String resourceName;
	private String resourceDescription;
	private String className;
	private String resourcePath;
	private boolean requireAdmin;
	private List<APIParamModel> resourceParams = new ArrayList<>();
	private List<APIMethodModel> methods = new ArrayList<>();

	public APIResourceModel()
	{
	}

	public String getResourceName()
	{
		return resourceName;
	}

	public void setResourceName(String resourceName)
	{
		this.resourceName = resourceName;
	}

	public String getResourceDescription()
	{
		return resourceDescription;
	}

	public void setResourceDescription(String resourceDescription)
	{
		this.resourceDescription = resourceDescription;
	}

	public String getClassName()
	{
		return className;
	}

	public void setClassName(String className)
	{
		this.className = className;
	}


	public String getResourcePath()
	{
		return resourcePath;
	}

	public void setResourcePath(String resourcePath)
	{
		this.resourcePath = resourcePath;
	}

	public boolean getRequireAdmin()
	{
		return requireAdmin;
	}

	public void setRequireAdmin(boolean requireAdmin)
	{
		this.requireAdmin = requireAdmin;
	}

	public List<APIParamModel> getResourceParams()
	{
		return resourceParams;
	}

	public void setResourceParams(List<APIParamModel> resourceParams)
	{
		this.resourceParams = resourceParams;
	}

	public List<APIMethodModel> getMethods()
	{
		return methods;
	}

	public void setMethods(List<APIMethodModel> methods)
	{
		this.methods = methods;
	}

}
