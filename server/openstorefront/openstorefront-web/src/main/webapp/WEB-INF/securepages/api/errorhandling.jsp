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
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
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
