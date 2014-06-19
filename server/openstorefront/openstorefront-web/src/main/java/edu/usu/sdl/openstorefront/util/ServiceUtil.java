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

package edu.usu.sdl.openstorefront.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import java.lang.reflect.InvocationTargetException;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.beanutils.BeanUtils;

/**
 *
 * @author dshurtleff
 */
public class ServiceUtil
{
	private static final ObjectMapper objectMapper = new ObjectMapper();
	
	public static ObjectMapper defaultObjectMapper()
	{
		objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
		return objectMapper;
	}
	
	public static String printObject(Object o)
	{
		StringBuilder sb = new StringBuilder();
		
		if (o != null)
		{
			try
			{
				Map fieldMap = BeanUtils.describe(o);
				fieldMap.keySet().stream().forEach((key) ->
				{
					sb.append(key).append(" = ").append(fieldMap.get(key)).append("\n");										
				});
			}
			catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException ex)
			{
				Logger.getLogger(ServiceUtil.class.getName()).log(Level.SEVERE, null, ex);
			}
		}
		else
		{
			sb.append(o);
		}
		
		return sb.toString();
	}
	
}
