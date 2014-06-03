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

package edu.usu.sdl.opencatalog.service;

import edu.usu.sdl.opencatalog.service.query.QueryByExample;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang3.StringUtils;

/**
 *
 * @author dshurtleff
 */
@Stateless
@LocalBean
public class PersistantServiceImpl
{
	private static final Logger log = Logger.getLogger(PersistantServiceImpl.class.getName());
	
	@PersistenceContext(unitName = "opencatalog-ds") 
	EntityManager entityManager;

	public EntityManager getEntityManger()
	{
		return entityManager;
	}
	
	public <T> T persist(T entity)
	{
		getEntityManger().persist(entity);
		return entity;
	}	
	
	public <T> T update(T entity)
	{
		return getEntityManger().merge(entity);		
	}	
	
	public <T> T findById(Class<T> entity, Object id)
	{
		return  getEntityManger().find(entity, id);
	}
	
	public <T> List<T> queryByExample(QueryByExample queryByExample)
	{
		StringBuilder queryString = new StringBuilder();
		
		switch (queryByExample.getQueryType())
		{
			case SELECT:
				queryString.append("select instance ");
				break;
			case COUNT:
				queryString.append("select count(instance) ");
				break;
			case COUNT_DISTINCT:
				queryString.append("select count(distinct instance) ");
				break;				
			case UPDATE:
				queryString.append("update ");
				break;
			case DELETE:
				queryString.append("delete  ");
				break;			
		}
		queryString.append("from ").append(queryByExample.getExample().getClass().getSimpleName()).append(" instance ");
		
		String whereClause = generateWhereClause(queryByExample.getExample());
		if (StringUtils.isNotBlank(whereClause))
		{
			queryString.append("where ").append(whereClause);		
		}

		Query query = getEntityManger().createQuery(queryString.toString());
		mapParameters(query, queryByExample.getExample());
		return query.getResultList();
	}
	
	public <T> T queryByOneExample(QueryByExample example)
	{		
		List<T> results = queryByExample(example);
		if (results.size() > 0)
		{
			return results.get(0);
		}
		return null;		
	}	
	
	private <T> String generateWhereClause (T example)
	{
		StringBuilder where = new StringBuilder();
		
		try
		{
			Map fieldMap = BeanUtils.describe(example);			
			boolean addAnd = false;
			for (Object field :  fieldMap.keySet())
			{
				
				if ("class".equalsIgnoreCase(field.toString()) == false)
				{
					Object value = fieldMap.get(field);
					if (value != null)
					{
						if (addAnd)
						{
							where.append(" AND ");
						}						
						else
						{
							addAnd = true;
							where.append(" ");
						}						
						
						where.append("instance.").append(field).append(" = :").append(field).append("Param");
					}
				}
			}
		} catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException ex)
		{
			log.log(Level.SEVERE, null, ex);
		}
		return where.toString();
	}
	
	private <T>  void mapParameters(Query query, T example)
	{
		try
		{
			Map fieldMap = BeanUtils.describe(example);	
			fieldMap.keySet().stream().filter((field) -> ("class".equalsIgnoreCase(field.toString()) == false)).forEach((field) ->
			{
				Object value = fieldMap.get(field);
				if (value != null)
				{
					query.setParameter(field + "Param", value);
				}
			});
		} catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException ex)
		{
			log.log(Level.SEVERE, null, ex);
		}		
	}	
	
}
