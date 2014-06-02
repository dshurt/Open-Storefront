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

package edu.usu.sdl.opencatalog.exception;

/**
 *  This the base class for runtime exception
 * @author dshurtleff
 */
public class OpenCatalogRuntimeException
	extends RuntimeException
{
	private String potentialResolution;	
	
	public OpenCatalogRuntimeException()
	{
	}

	public OpenCatalogRuntimeException(String message)
	{
		super(message);		
	}
	
	public OpenCatalogRuntimeException(String message, String potentialResolution)
	{
		super(message);		
		this.potentialResolution = potentialResolution;
	}	

	public OpenCatalogRuntimeException(String message, Throwable thrwbl)
	{	
		super(message, thrwbl);
	}
	
	public OpenCatalogRuntimeException(String message, String potentialResolution, Throwable thrwbl)
	{	
		super(message, thrwbl);
		this.potentialResolution = potentialResolution;
	}	

	public OpenCatalogRuntimeException(Throwable thrwbl)
	{	
		super(thrwbl);		
	}	

	public String getPotentialResolution()
	{
		return potentialResolution;
	}

	public void setPotentialResolution(String potentialResolution)
	{
		this.potentialResolution = potentialResolution;
	}	
	
}
