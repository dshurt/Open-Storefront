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
public class APIParamModel
{
	private String parameterName;
	private String parameterDescription;
	private boolean required;
	private String defaultValue;
	private String restrictions;
	private String parameterType;
	private String fieldName;
	
	public APIParamModel()
	{
	}

	public String getParameterName()
	{
		return parameterName;
	}

	public void setParameterName(String parameterName)
	{
		this.parameterName = parameterName;
	}

	public String getParameterDescription()
	{
		return parameterDescription;
	}

	public void setParameterDescription(String parameterDescription)
	{
		this.parameterDescription = parameterDescription;
	}

	public boolean isRequired()
	{
		return required;
	}

	public void setRequired(boolean required)
	{
		this.required = required;
	}

	public String getDefaultValue()
	{
		return defaultValue;
	}

	public void setDefaultValue(String defaultValue)
	{
		this.defaultValue = defaultValue;
	}

	public String getRestrictions()
	{
		return restrictions;
	}

	public void setRestrictions(String restrictions)
	{
		this.restrictions = restrictions;
	}

	public String getParameterType()
	{
		return parameterType;
	}

	public void setParameterType(String parameterType)
	{
		this.parameterType = parameterType;
	}

	public String getFieldName()
	{
		return fieldName;
	}

	public void setFieldName(String fieldName)
	{
		this.fieldName = fieldName;
	}
		
}
