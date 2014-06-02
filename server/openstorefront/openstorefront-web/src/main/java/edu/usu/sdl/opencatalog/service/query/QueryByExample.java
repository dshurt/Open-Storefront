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

package edu.usu.sdl.opencatalog.service.query;

import edu.usu.sdl.opencatalog.api.model.jpa.BaseEntity;

/**
 *  Query by Example model
 * @author dshurtleff
 * @param <T>
 */
public class QueryByExample<T extends BaseEntity>
{
	private QueryType queryType = QueryType.SELECT;	
	private T example;
	private Integer firstResult;
	private Integer maxResults;	
	
	public QueryByExample()
	{
	}
	
	public QueryByExample(T example)
	{
		this.example = example;
	}
	
	public QueryType getQueryType()
	{
		return queryType;
	}

	public void setQueryType(QueryType queryType)
	{
		this.queryType = queryType;
	}

	public T getExample()
	{
		return example;
	}

	public void setExample(T example)
	{
		this.example = example;
	}

	public Integer getFirstResult()
	{
		return firstResult;
	}

	public void setFirstResult(Integer firstResult)
	{
		this.firstResult = firstResult;
	}

	public Integer getMaxResults()
	{
		return maxResults;
	}

	public void setMaxResults(Integer maxResults)
	{
		this.maxResults = maxResults;
	}
		
}
