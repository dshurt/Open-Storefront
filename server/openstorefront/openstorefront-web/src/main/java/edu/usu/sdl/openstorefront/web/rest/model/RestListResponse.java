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
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author dshurtleff
 * @param <T>
 */
public class RestListResponse<T>
{
	@ParamTypeDescription("NUMBER")
	private long totalResults;
	
	@ParamTypeDescription("NUMBER (Returned record count)")
	private long results;
	
	@ParamTypeDescription("ARRAY")
	private List<T> data = new ArrayList<>();
	
	public RestListResponse()
	{
	}

	public long getTotalResults()
	{
		return totalResults;
	}

	public void setTotalResults(long totalResults)
	{
		this.totalResults = totalResults;
	}

	public long getResults()
	{
		return results;
	}

	public void setResults(long results)
	{
		this.results = results;
	}

	public List<T> getData()
	{
		return data;
	}

	public void setData(List<T> data)
	{
		this.data = data;
	}

}
