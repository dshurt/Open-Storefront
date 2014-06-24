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
public class APIValueModel
{
	private String valueObject;
	private String valueObjectName;
	private String typeObject;
	private String typeObjectName;
	private List<APIValueFieldModel> valueFields = new ArrayList<>();
	private List<APIValueFieldModel> typeFields = new ArrayList<>();

	public APIValueModel()
	{
	}

	public String getValueObject()
	{
		return valueObject;
	}

	public void setValueObject(String valueObject)
	{
		this.valueObject = valueObject;
	}

	public String getTypeObject()
	{
		return typeObject;
	}

	public void setTypeObject(String typeObject)
	{
		this.typeObject = typeObject;
	}

	public List<APIValueFieldModel> getTypeFields()
	{
		return typeFields;
	}

	public void setTypeFields(List<APIValueFieldModel> typeFields)
	{
		this.typeFields = typeFields;
	}

	public String getValueObjectName()
	{
		return valueObjectName;
	}

	public void setValueObjectName(String valueObjectName)
	{
		this.valueObjectName = valueObjectName;
	}

	public String getTypeObjectName()
	{
		return typeObjectName;
	}

	public void setTypeObjectName(String typeObjectName)
	{
		this.typeObjectName = typeObjectName;
	}

	public List<APIValueFieldModel> getValueFields()
	{
		return valueFields;
	}

	public void setValueFields(List<APIValueFieldModel> valueFields)
	{
		this.valueFields = valueFields;
	}

}
