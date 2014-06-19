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
	private String returnObject;
	private String typeObject;
	private List<APIValueFieldModel> returnFields = new ArrayList<>();
	private List<APIValueFieldModel> typeFields = new ArrayList<>();

	public APIValueModel()
	{
	}

	public String getReturnObject()
	{
		return returnObject;
	}

	public void setReturnObject(String returnObject)
	{
		this.returnObject = returnObject;
	}

	public String getTypeObject()
	{
		return typeObject;
	}

	public void setTypeObject(String typeObject)
	{
		this.typeObject = typeObject;
	}

	public List<APIValueFieldModel> getReturnFields()
	{
		return returnFields;
	}

	public void setReturnFields(List<APIValueFieldModel> returnFields)
	{
		this.returnFields = returnFields;
	}

	public List<APIValueFieldModel> getTypeFields()
	{
		return typeFields;
	}

	public void setTypeFields(List<APIValueFieldModel> typeFields)
	{
		this.typeFields = typeFields;
	}

}
