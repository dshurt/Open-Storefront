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

package edu.usu.sdl.openstorefront.web.rest.resource;

import edu.usu.sdl.openstorefront.doc.APIDescription;
import edu.usu.sdl.openstorefront.doc.RequireAdmin;
import edu.usu.sdl.openstorefront.web.rest.model.UserProfileView;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author dshurtleff
 */
@Path("userprofiles/{id}")
@APIDescription("A user profile contain information about the user and user specific data. A user profile is created at the time the user logins in.<br>"
		           + "Note: id can be set to \"CURRENTUSER\" to perform operations on the currently logged in user.")
public class UserProfile
{
	private static final String DEFAULT_USER = "CURRENTUSER";
	
	@PathParam("id")
	@DefaultValue(DEFAULT_USER)
	private String userId;
	
	@GET
	@APIDescription("Get a list of user profiles or an user profile matching Id. ")
	@RequireAdmin
	@Produces({MediaType.APPLICATION_JSON})
	public List<UserProfileView> userProfiles()
	{
		List<UserProfileView> userProfileViews = new ArrayList<>();
	
		
		return userProfileViews;
	}
	
	
}
