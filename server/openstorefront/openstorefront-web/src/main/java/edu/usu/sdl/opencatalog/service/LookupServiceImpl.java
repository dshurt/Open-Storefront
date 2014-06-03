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

import edu.usu.sdl.opencatalog.api.LookupService;
import edu.usu.sdl.opencatalog.api.model.jpa.BaseEntity;
import edu.usu.sdl.opencatalog.api.model.jpa.Test;
import edu.usu.sdl.opencatalog.exception.OpenCatalogRuntimeException;
import edu.usu.sdl.opencatalog.service.query.QueryByExample;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.ejb.Local;
import javax.ejb.Stateless;

/**
 *
 * @author dshurtleff
 */
@Stateless
@Local(LookupService.class)
public class LookupServiceImpl
	implements LookupService
{
	private static final Logger log = Logger.getLogger(LookupServiceImpl.class.getName());
	
	@EJB
	PersistantServiceImpl ps;
		
	@Override
	public <T extends BaseEntity> List<T> findLookup(Class<T> lookTableClass)
	{
		return findLookup(lookTableClass, false);
	}	
	
	@Override
	public <T extends BaseEntity> List<T> findLookup(Class<T> lookTableClass, boolean all)
	{
		try
		{
			T testExample = lookTableClass.newInstance();
			if (all == false)
			{
				testExample.setActiveStatus(Test.ACTIVE_STATUS);		
			}
			return ps.queryByExample(new QueryByExample(testExample));			
		} catch (InstantiationException | IllegalAccessException ex)
		{		
			throw new OpenCatalogRuntimeException(ex);
		}				
	}
	
}
