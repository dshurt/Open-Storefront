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

package edu.usu.sdl.opencatalog.web.viewmodel;

/**
 *  This represent an system error (typically unexpected) that we will pass back to the client
 *  UI form/validation error should be more friendly and integrated into the UI 
 * @author dshurtleff
 */
public class SystemErrorModel
{
	private String message;
	private String errorTicketNumber;
	private String potentialResolution;

	public SystemErrorModel()
	{
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}

	public String getErrorTicketNumber()
	{
		return errorTicketNumber;
	}

	public void setErrorTicketNumber(String errorTicketNumber)
	{
		this.errorTicketNumber = errorTicketNumber;
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
