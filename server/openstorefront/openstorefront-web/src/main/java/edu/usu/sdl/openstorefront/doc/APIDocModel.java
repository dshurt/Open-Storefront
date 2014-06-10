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

/**
 *
 * @author dshurtleff
 */
public class APIDocModel
{
	private String resourceName;
	private String resourceDescription;
	private String className;
	private String restMethod;
	private String methodDescription;
	private String resourcePath;
	private String methodPath;
	private String returnObject;
	private String requiresAdmin;

	public APIDocModel()
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

	public String getRestMethod()
	{
		return restMethod;
	}

	public void setRestMethod(String restMethod)
	{
		this.restMethod = restMethod;
	}

	public String getMethodDescription()
	{
		return methodDescription;
	}

	public void setMethodDescription(String methodDescription)
	{
		this.methodDescription = methodDescription;
	}

	public String getResourcePath()
	{
		return resourcePath;
	}

	public void setResourcePath(String resourcePath)
	{
		this.resourcePath = resourcePath;
	}

	public String getMethodPath()
	{
		return methodPath;
	}

	public void setMethodPath(String methodPath)
	{
		this.methodPath = methodPath;
	}

	public String getReturnObject()
	{
		return returnObject;
	}

	public void setReturnObject(String returnObject)
	{
		this.returnObject = returnObject;
	}

	public String getRequiresAdmin()
	{
		return requiresAdmin;
	}

	public void setRequiresAdmin(String requiresAdmin)
	{
		this.requiresAdmin = requiresAdmin;
	}

}
