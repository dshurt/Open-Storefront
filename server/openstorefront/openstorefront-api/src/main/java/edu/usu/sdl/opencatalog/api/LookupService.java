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

package edu.usu.sdl.opencatalog.api;

import edu.usu.sdl.opencatalog.api.model.jpa.BaseEntity;
import java.util.List;


/**
 *  This service handles system tables 
 * @author dshurtleff
 */
public interface LookupService
{	
	
	/**
	 * This return only active
	 * @see findLookup(Class<T> lookTableClass, boolean all);
	 * @param <T>
	 * @param lookTableClass
	 * @return 
	 */
	public <T extends BaseEntity>  List<T> findLookup(Class<T> lookTableClass);
	
	/**
	 *  Find items for a given Look up resource
	 * @param <T>
	 * @param lookTableClass
	 * @param all - default to just active
	 * @return 
	 */
	public <T extends BaseEntity>  List<T> findLookup(Class<T> lookTableClass, boolean all);
		
}
