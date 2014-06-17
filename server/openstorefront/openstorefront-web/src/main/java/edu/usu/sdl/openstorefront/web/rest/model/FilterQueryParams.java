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

import edu.usu.sdl.openstorefront.util.OpenStorefrontConstant;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.QueryParam;

/**
 *
 * @author dshurtleff
 */
public class FilterQueryParams
{
	@QueryParam("max")
	@DefaultValue("10000")		
	private int max;
	
	@QueryParam("sortField")
	@DefaultValue("description")		
	private String sortField;
	
	@QueryParam("sortOrder")
	@DefaultValue(OpenStorefrontConstant.SORT_DESCENDING)		
	private String sortOrder;
	
	@QueryParam("offset")
	@DefaultValue("0")		
	private int offset;
	
	@QueryParam("status")
	@DefaultValue("A")		
	private String status;
	
	@QueryParam("details")
	@DefaultValue("A")		
	private boolean details;

	public FilterQueryParams()
	{
	}

	public int getMax()
	{
		return max;
	}

	public void setMax(int max)
	{
		this.max = max;
	}

	public String getSortField()
	{
		return sortField;
	}

	public void setSortField(String sortField)
	{
		this.sortField = sortField;
	}

	public String getSortOrder()
	{
		return sortOrder;
	}

	public void setSortOrder(String sortOrder)
	{
		this.sortOrder = sortOrder;
	}

	public int getOffset()
	{
		return offset;
	}

	public void setOffset(int offset)
	{
		this.offset = offset;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public boolean isDetails()
	{
		return details;
	}

	public void setDetails(boolean details)
	{
		this.details = details;
	}
		
}
