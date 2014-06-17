<!DOCTYPE html>
<!--
Copyright 2014 Space Dynamics Laboratory - Utah State University Research Foundation.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
<html>
	<head>
		<title>Open Storefront API</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="css/apidoc.css" rel="stylesheet" type="text/css"/>
	</head>
	<body>
		<h1>Open Storefront API</h1>
		<br>
		<br>
		<div id="apidesc">
			This document describes the API interface for the open storefront project.<br>			
			<br>			
			<b>Base Path:</b> /api<br>
			<b>Security: </b> Basic Auth, API Key<br>
			<b>Supported Content Type: </b>JSON <br><br>
			For JSONP support set "callback" parameter.  For example: "callback=processResponse" the response would be "processResponse({"data":"data"});" <br>
			The server also supports CORS.
			
			
		</div>
		<h2>Resources</h2>
		(/api/resource/)  - Resources are entities that the server manages.  API provides CRUD support, querying and some resource specific behavior.
		<div class="apilist">
			<ul>
				<li>
					<a href="API.action?resourceClass=UserProfile">User Profile</a>
				</li>
				<li>
					<a href="component.html">Component</a>
				</li>
				<li>
					<a href="attributeTypes.html">Attributes Types</a>
				</li>	
				<li>
					<a href="lookup.html">Lookup Type </a> (User Types, Media Types, Resource Types, Evaluation Types, Rating Types ..etc)
				</li>				
			</ul>	
		
			<h4>Application Resources</h4>	
			<ul>
				<li>
					<a href="branding.html">Branding</a>
				</li>
				<li>
					<a href="appproperties.html">Application Properties</a>
				</li>
				<li>
					<a href="userTracking.html">User Tracking</a>
				</li>				
				<li>
					<a href="componentTracking.html">Component Tracking</a>
				</li>
				<li>
					<a href="errorTickets.html">Error Ticket</a>
				</li>				
			</ul>			
				
				
				

				
		</div>
		
		<h2>Services</h2>
		Services are actions related that act across resources or apply behavior to the system.
		<div class="apilist">
	
				
		</div>		
		
		<h2>Common Application Success Codes</h2>	
		Note: Redirection follows the HTTP protocols see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">HTTP codes</a><br>
		<table>
			<tr>
				<th style='text-align: left;'>
					Code
				</th>
				<th style='text-align: left;'>
					Description
				</th>
			</tr>
			<tr>
				<td width="175">
					200 OK
				</td>
				<td>
					The request has succeeded.
				</td>
			</tr>
			<tr>
				<td>
					201 Created
				</td>
				<td>
					The request has been fulfilled and resulted in a new resource being created.
					Location header is returned with the URI for the new resource.
				</td>
			</tr>			
		</table>		
		
		<h2>Common Application Error Codes</h2>		
		<table>
			<tr>
				<th style='text-align: left;'>
					Code
				</th>
				<th style='text-align: left;'>
					Description
				</th>
			</tr>
			<tr>
				<td width="175">
					400 Bad Request
				</td>
				<td>
					The request could not be understood by the server due to malformed syntax. 
					Also can occur if the  required parameters are missing.
				</td>
			</tr>			
			<tr>
				<td width="175">
					401 Unauthorized
				</td>
				<td>
					The request requires user authentication. 
				</td>
			</tr>
			<tr>
				<td>
					404 Not Found
				</td>
				<td>
					The server has not found anything matching the Request-URI.
				</td>
			</tr>	
			<tr>
				<td>
					405 Method Not Allowed
				</td>
				<td>
					The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.
					Also note, some method require the Admin role to accept the request.
				</td>
			</tr>			
		</table>
		<br>
		
		<h2>Validation Error Model</h2>		
		<pre>
{
	"success": "",
	"errors": [
	...'fieldname' : 'error message', 
	...
	]
}			
		</pre>		
		
		<h2>System Error Model</h2>
		(Internal Errors;  Typically unexpected)
		<pre>
{
	"message": "",
	"errorTicketNumber": "",
	"potentialResolution": ""
}			
		</pre>		
		
		
		
	</body>
</html>

