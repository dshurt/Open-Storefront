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

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.CookieParam;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.MatrixParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import org.apache.commons.lang3.StringUtils;

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
		mapParameters(resourceModel.getResourceParams(), resource.getDeclaredFields());
		
		//methods
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
		objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
		for (Method method : resource.getDeclaredMethods())
		{

			APIMethodModel methodModel = new APIMethodModel();
			
			//rest method
			List<String> restMethods = new ArrayList<>();			
			GET getMethod = (GET) method.getAnnotation(GET.class);
			POST postMethod = (POST) method.getAnnotation(POST.class);
			PUT putMethod = (PUT) method.getAnnotation(PUT.class);
			DELETE deleteMethod = (DELETE) method.getAnnotation(DELETE.class);
			if (getMethod != null)
			{
				restMethods.add("GET");
			}
			if (postMethod != null)
			{
				restMethods.add("POST");
			}
			if (putMethod != null)
			{
				restMethods.add("PUT");
			}			
			if (deleteMethod != null)
			{
				restMethods.add("DELETE");
			}
			methodModel.setRestMethod(String.join(",", restMethods));
									
			//produces
			Produces produces = (Produces) method.getAnnotation(Produces.class);
			if (produces != null)
			{
				methodModel.setProducesTypes(String.join(",", produces.value()));
			}
			
			//consumes
			Consumes consumes = (Consumes) method.getAnnotation(Consumes.class);
			if (consumes != null)
			{
				methodModel.setConsumesTypes(String.join(",", consumes.value()));
			}			
			
			aPIDescription = (APIDescription) method.getAnnotation(APIDescription.class);
			if (aPIDescription != null)
			{
				methodModel.setDescription(aPIDescription.value());
			}

			path = (Path) method.getAnnotation(Path.class);
			if (path != null)
			{
				methodModel.setMethodPath(path.value());
			}

			requireAdmin = (RequireAdmin) method.getAnnotation(RequireAdmin.class);
			if (requireAdmin != null)
			{
				methodModel.setRequireAdmin(true);
			}

//			try
//			{
//				//FIX ME: We need to capture more info
//				methodModel.setReturnObject(objectMapper.writeValueAsString(method.getReturnType().newInstance()));
//				
//				
//			}
//			catch (InstantiationException | IllegalAccessException | JsonProcessingException ex)
//			{
//				log.log(Level.WARNING, null, ex);
//			}
			
			
			//method parameters	
			mapMethodParameters(methodModel.getMethodParams(), method.getParameters());
			
			resourceModel.getMethods().add(methodModel);
		}	
		return resourceModel;
	}
	
	private static void mapMethodParameters(List<APIParamModel> parameterList, Parameter parameters[])
	{
		for (Parameter parameter : parameters)
		{
			APIParamModel paramModel = new APIParamModel();
			paramModel.setFieldName(parameter.getName());
			
			QueryParam queryParam = (QueryParam) parameter.getAnnotation(QueryParam.class);
			FormParam formParam = (FormParam) parameter.getAnnotation(FormParam.class);
			MatrixParam matrixParam = (MatrixParam) parameter.getAnnotation(MatrixParam.class);
			HeaderParam headerParam = (HeaderParam) parameter.getAnnotation(HeaderParam.class);
			CookieParam cookieParam = (CookieParam) parameter.getAnnotation(CookieParam.class);
			PathParam pathParam = (PathParam) parameter.getAnnotation(PathParam.class);
			BeanParam beanParam = (BeanParam) parameter.getAnnotation(BeanParam.class);

			if (queryParam != null)
			{
				paramModel.setParameterType(QueryParam.class.getSimpleName());
				paramModel.setParameterName(queryParam.value());
			}
			if (formParam != null)
			{
				paramModel.setParameterType(FormParam.class.getSimpleName());
				paramModel.setParameterName(formParam.value());
			}
			if (matrixParam != null)
			{
				paramModel.setParameterType(MatrixParam.class.getSimpleName());
				paramModel.setParameterName(matrixParam.value());
			}
			if (pathParam != null)
			{
				paramModel.setParameterType(PathParam.class.getSimpleName());
				paramModel.setParameterName(pathParam.value());
			}
			if (headerParam != null)
			{
				paramModel.setParameterType(HeaderParam.class.getSimpleName());
				paramModel.setParameterName(headerParam.value());
			}
			if (cookieParam != null)
			{
				paramModel.setParameterType(CookieParam.class.getSimpleName());
				paramModel.setParameterName(cookieParam.value());
			}
			

			if (beanParam != null)
			{
				Class paramClass = parameter.getType();
				mapParameters(parameterList, paramClass.getDeclaredFields());
			}
			if (StringUtils.isNotBlank(paramModel.getParameterType()))
			{
				APIDescription aPIDescription = (APIDescription) parameter.getAnnotation(APIDescription.class);
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
				if (defaultValue != null)
				{
					paramModel.setDefaultValue(defaultValue.value());
				}
			}


			parameterList.add(paramModel);
		}		
	}
	
	
	private static void mapParameters(List<APIParamModel> parameterList,  Field fields[])
	{
		for (Field field : fields)
		{
			APIParamModel paramModel = new APIParamModel();
			paramModel.setFieldName(field.getName());

			QueryParam queryParam = (QueryParam) field.getAnnotation(QueryParam.class);
			FormParam formParam = (FormParam) field.getAnnotation(FormParam.class);
			MatrixParam matrixParam = (MatrixParam) field.getAnnotation(MatrixParam.class);
			HeaderParam headerParam = (HeaderParam) field.getAnnotation(HeaderParam.class);
			CookieParam cookieParam = (CookieParam) field.getAnnotation(CookieParam.class);			
			PathParam pathParam = (PathParam) field.getAnnotation(PathParam.class);
			BeanParam beanParam = (BeanParam) field.getAnnotation(BeanParam.class);

			if (queryParam != null)
			{
				paramModel.setParameterType(QueryParam.class.getSimpleName());
				paramModel.setParameterName(queryParam.value());
			}
			if (formParam != null)
			{
				paramModel.setParameterType(FormParam.class.getSimpleName());
				paramModel.setParameterName(formParam.value());
			}
			if (matrixParam != null)
			{
				paramModel.setParameterType(MatrixParam.class.getSimpleName());
				paramModel.setParameterName(matrixParam.value());
			}
			if (pathParam != null)
			{
				paramModel.setParameterType(PathParam.class.getSimpleName());
				paramModel.setParameterName(pathParam.value());
			}
			if (headerParam != null)
			{
				paramModel.setParameterType(HeaderParam.class.getSimpleName());
				paramModel.setParameterName(headerParam.value());
			}
			if (cookieParam != null)
			{
				paramModel.setParameterType(CookieParam.class.getSimpleName());
				paramModel.setParameterName(cookieParam.value());
			}			

			if (beanParam != null)
			{
				Class fieldClass = field.getDeclaringClass();				
				mapParameters(parameterList, fieldClass.getDeclaredFields());
			}

			if (StringUtils.isNotBlank(paramModel.getParameterType()))
			{

				APIDescription aPIDescription = (APIDescription) field.getAnnotation(APIDescription.class);
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
				if (defaultValue != null)
				{
					paramModel.setDefaultValue(defaultValue.value());
				}

				parameterList.add(paramModel);
			}
		}	
	}
	
}
