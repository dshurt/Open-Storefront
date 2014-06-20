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
import edu.usu.sdl.openstorefront.doc.DataType;
import edu.usu.sdl.openstorefront.doc.RequireAdmin;
import edu.usu.sdl.openstorefront.doc.RequiredParam;
import edu.usu.sdl.openstorefront.web.rest.model.RestListResponse;
import edu.usu.sdl.openstorefront.web.rest.model.UserProfileView;
import edu.usu.sdl.openstorefront.web.rest.model.UserRecentView;
import edu.usu.sdl.openstorefront.web.rest.model.UserWatchView;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author dshurtleff
 */
@Path("v1/resource/userprofiles")
@APIDescription("A user profile contain information about the user and user specific data. A user profile is created at the time the user logins in.<br>"
		           + "Note: id can be set to \"CURRENTUSER\" to perform operations on the currently logged in user.")
public class UserProfile
{
	private static final String DEFAULT_USER = "CURRENTUSER";
	
	@GET
	@APIDescription("Get a list of user profiles")
	@RequireAdmin
	@Produces({MediaType.APPLICATION_JSON})
	@DataType(UserProfileView.class)
	public RestListResponse userProfiles()
	{
		RestListResponse restListResponse = new RestListResponse();
		
		List<UserProfileView> userProfileViews = new ArrayList<>();
	
		
		return restListResponse;
	}
	
	@GET
	@APIDescription("Gets user profile specified by id.")
	@RequireAdmin
	@Produces({MediaType.APPLICATION_JSON})
	@Path("/{id}")
	public UserProfileView userProfile(
			@PathParam("id") 
			@DefaultValue(DEFAULT_USER) 
			@RequiredParam		
			String userId)
	{
		UserProfileView userProfileView = new UserProfileView();
		
		return userProfileView;
	}
	
	@PUT
	@APIDescription("Update user profile returns updated profile.")
	@RequireAdmin
	@Produces({MediaType.APPLICATION_JSON})
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{id}")
	public UserProfileView updateProile(
			@PathParam("id") 
			@DefaultValue(DEFAULT_USER) 
			@RequiredParam		
			String userId,  
			UserProfileView inputProfile) 
	{
		UserProfileView userProfileView = new UserProfileView();
		
		return userProfileView;
	}
	
	@GET
	@APIDescription("Retrieves Active User Watches.")
	@RequireAdmin
	@Produces({MediaType.APPLICATION_JSON})
	@Path("/{id}/watches")
	@DataType(UserWatchView.class)
	public RestListResponse getWatches(
			@PathParam("id") 
			@DefaultValue(DEFAULT_USER) 
			@RequiredParam		
			String userId)
	{
		RestListResponse restListResponse = new RestListResponse();
		
		return restListResponse;
	}	
	
	@GET
	@APIDescription("Retrieves an user watch by id or componentId.")
	@RequireAdmin
	@Produces({MediaType.APPLICATION_JSON})
	@Path("/{id}/watches/{watchIdorComponetId}")
	public UserWatchView getWatch(
			@PathParam("id") 
			@DefaultValue(DEFAULT_USER) 
			@RequiredParam		
			String userId,
			@PathParam("watchIdorComponetId") 			
			@RequiredParam		
			Long watchIdorComponentId)
	{
		UserWatchView userWatchView = new UserWatchView();
		
		return userWatchView;
	}	
	
	@POST
	@APIDescription("Adds existing new watch.")
	@RequireAdmin	
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{id}/watches")
	public Response addWatch(
			@PathParam("id") 
			@DefaultValue(DEFAULT_USER) 
			@RequiredParam		
			String userId,  
			UserWatchView userWatchView) 
	{
		UserProfileView userProfileView = new UserProfileView();
		
		//TODO: return the location of the created watch
		return Response.created(URI.create("watches")).build();
	}
	
	@PUT
	@APIDescription("Update existing new watch. On update: it will update the last view date.")
	@RequireAdmin
	@Produces({MediaType.APPLICATION_JSON})
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{id}/watches/{watchId}")
	public UserWatchView updateWatch(			
			@PathParam("id") 
			@DefaultValue(DEFAULT_USER) 
			@RequiredParam		
			String userId, 
			
			@PathParam("watchId") 			
			@RequiredParam
			long watchId,
			
			UserWatchView userWatchView) 
	{
		UserWatchView userWatchViewUpdate = new UserWatchView();
		
		return userWatchViewUpdate;
	}	
	
	@DELETE
	@APIDescription("Removes a Users Watch.")
	@RequireAdmin
	@Path("/{id}/watches/{watchId}")
	public Response updateWatch(			
			@PathParam("id") 
			@DefaultValue(DEFAULT_USER) 
			@RequiredParam		
			String userId,
			@PathParam("watchId") 			
			@RequiredParam		
			Long watchId) 
	{
		
		
		return Response.noContent().build();
	}	
	
	@GET
	@APIDescription("Retrieves Recent Views.  The system keep the 5 most recent.  Sorted by most recent.")
	@RequireAdmin
	@Produces({MediaType.APPLICATION_JSON})
	@Path("/{id}/recentviews")
	@DataType(UserRecentView.class)
	public RestListResponse getRecentviews(
			@PathParam("id") 
			@DefaultValue(DEFAULT_USER) 
			@RequiredParam		
			String userId)
	{
		RestListResponse restListResponse = new RestListResponse();
		
		return restListResponse;
	}	
	
}
