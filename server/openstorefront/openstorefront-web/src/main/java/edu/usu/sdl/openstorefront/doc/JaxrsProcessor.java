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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.MatrixParam;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

/**
 *
 * @author dshurtleff
 */
public class JaxrsProcessor
{
	private static final Logger log = Logger.getLogger(JaxrsProcessor.class.getName());

	private JaxrsProcessor()
	{
	}
	
	public static APIResourceModel processRestClass(Class resource)
	{
		APIResourceModel resourceModel = new APIResourceModel();
		
		resourceModel.setClassName(resource.getName());
		resourceModel.setResourceName(resource.getSimpleName());
		
		APIDescription aPIDescription = (APIDescription) resource.getAnnotation(APIDescription.class);
		if (aPIDescription != null)
		{
			resourceModel.setResourceDescription(aPIDescription.value());
		}
		
		Path path = (Path) resource.getAnnotation(Path.class);
		if (path != null)
		{
			resourceModel.setResourcePath(path.value());
		}		
		
		RequireAdmin requireAdmin = (RequireAdmin) resource.getAnnotation(RequireAdmin.class);
		if (requireAdmin != null)
		{
			resourceModel.setRequireAdmin(true);			
		}
		
		
		//class parameters		
		for (Field field :  resource.getDeclaredFields())
		{
			APIParamModel paramModel  = new APIParamModel();
			paramModel.setParameterName(field.getName());
			
			aPIDescription = (APIDescription) field.getAnnotation(APIDescription.class);
			if (aPIDescription != null)
			{
				paramModel.setParameterDescription(aPIDescription.value());
			}
			
			ParameterRestrictions restrictions = (ParameterRestrictions) field.getAnnotation(ParameterRestrictions.class);
			if (restrictions != null)
			{
				paramModel.setRestrictions(restrictions.value());				
			}			
			
			RequiredParam requiredParam = (RequiredParam) field.getAnnotation(RequireAdmin.class);
			if (requiredParam != null)
			{
				paramModel.setRequired(true);				
			}			
			
			DefaultValue defaultValue = (DefaultValue) field.getAnnotation(DefaultValue.class);
			if (requiredParam != null)
			{
				paramModel.setDefaultValue(defaultValue.value());				
			}			
			
			QueryParam queryParam = (QueryParam) field.getAnnotation(QueryParam.class);
			FormParam formParam = (FormParam) field.getAnnotation(FormParam.class);			
			MatrixParam matrixParam = (MatrixParam) field.getAnnotation(MatrixParam.class);
			PathParam pathParam = (PathParam) field.getAnnotation(PathParam.class);
			
			if (queryParam != null)
			{
				paramModel.setParameterType(QueryParam.class.getSimpleName());				
			}
			if (formParam != null)
			{
				paramModel.setParameterType(FormParam.class.getSimpleName());				
			}
			if (matrixParam != null)
			{
				paramModel.setParameterType(MatrixParam.class.getSimpleName());				
			}			
			if (pathParam != null)
			{
				paramModel.setParameterType(PathParam.class.getSimpleName());				
			}			
			
			resourceModel.getResourceParams().add(paramModel);
		}
		
		//methods
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
		objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
		for (Method method : resource.getDeclaredMethods())
		{

			APIMethodModel methodModel = new APIMethodModel();

			aPIDescription = (APIDescription) method.getAnnotation(APIDescription.class);
			if (aPIDescription != null)
			{
				methodModel.setDescription(aPIDescription.value());
			}

			path = (Path) resource.getAnnotation(Path.class);
			if (path != null)
			{
				methodModel.setMethodPath(path.value());
			}

			requireAdmin = (RequireAdmin) resource.getAnnotation(RequireAdmin.class);
			if (requireAdmin != null)
			{
				methodModel.setRequireAdmin(true);
			}

			try
			{
				methodModel.setReturnObject(objectMapper.writeValueAsString(method.getReturnType().newInstance()));

				resourceModel.getMethods().add(methodModel);
			}
			catch (InstantiationException | IllegalAccessException | JsonProcessingException ex)
			{
				log.log(Level.WARNING, null, ex);
			}

			//method parameters
			for (Parameter parameter : method.getParameters())
			{
				APIParamModel paramModel = new APIParamModel();
				paramModel.setParameterName(parameter.getName());

				aPIDescription = (APIDescription) parameter.getAnnotation(APIDescription.class);
				if (aPIDescription != null)
				{
					paramModel.setParameterDescription(aPIDescription.value());
				}

				ParameterRestrictions restrictions = (ParameterRestrictions) parameter.getAnnotation(ParameterRestrictions.class);
				if (restrictions != null)
				{
					paramModel.setRestrictions(restrictions.value());
				}

				RequiredParam requiredParam = (RequiredParam) parameter.getAnnotation(RequireAdmin.class);
				if (requiredParam != null)
				{
					paramModel.setRequired(true);
				}

				DefaultValue defaultValue = (DefaultValue) parameter.getAnnotation(DefaultValue.class);
				if (requiredParam != null)
				{
					paramModel.setDefaultValue(defaultValue.value());
				}

				QueryParam queryParam = (QueryParam) parameter.getAnnotation(QueryParam.class);
				FormParam formParam = (FormParam) parameter.getAnnotation(FormParam.class);
				MatrixParam matrixParam = (MatrixParam) parameter.getAnnotation(MatrixParam.class);
				PathParam pathParam = (PathParam) parameter.getAnnotation(PathParam.class);

				if (queryParam != null)
				{
					paramModel.setParameterType(QueryParam.class.getSimpleName());
				}
				if (formParam != null)
				{
					paramModel.setParameterType(FormParam.class.getSimpleName());
				}
				if (matrixParam != null)
				{
					paramModel.setParameterType(MatrixParam.class.getSimpleName());
				}
				if (pathParam != null)
				{
					paramModel.setParameterType(PathParam.class.getSimpleName());
				}

				methodModel.getMethodParams().add(paramModel);
			}

			resourceModel.getMethods().add(methodModel);
		}
				
		return resourceModel;
	}
	
	
}
