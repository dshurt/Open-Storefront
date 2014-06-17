<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link href="css/apidoc.css" rel="stylesheet" type="text/css"/>
        <title>API Details</title>
    </head>
    <body>
        <a href="index.html">Back to Index</a><br>
       <h1>${actionBean.resourceModel.resourceName}</h1>
	      ${actionBean.resourceModel.resourceDescription}<br>
	<h3>Resource Path: ${actionBean.resourceModel.resourcePath}</h3>
	<c:if test="${!empty actionBean.resourceModel.resourceParams}">
		<h3>Resource Parameters: </h3>	  
		<table>
			<tr>
				<th>Parameter</th>
				<th>Description</th>
				<th>Required</th>
				<th>Defaults</th>
				<th>Restrictions</th>
				<th>Parameter Type</th>
			</tr>		
			<c:forEach var="item" items="${actionBean.resourceModel.resourceParams}">
			<tr>
				<td>${item.parameterName}</td>
				<td>${item.parameterDescription}</td>
				<td>${item.required}</td>
				<td>${item.defaultValue}</td>
				<td>${item.restrictions}</td>
				<td>${item.parameterType}</td>				
			</tr>
			</c:forEach>
		</table> 
		
	</c:if>
	<c:if test="${!empty actionBean.resourceModel.methods}">
		<h2>Methods</h2>
		<table width="100%" border="1">
			<tr>
				<th style='text-align: left;'>Method</th>
				<th style='text-align: left;'>Security</th>
				<th style='text-align: left;'>Description</th>
				<th style='text-align: left;'>Path</th>
				<th style='text-align: left;'>Parameters</th>				
				<th style='text-align: left;'>Accept/Return Object</th>
			</tr>		
		
			
	</c:if>
	
	   
    </body>
</html>
