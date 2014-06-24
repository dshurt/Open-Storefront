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
	<script src="script/jquery/jquery-1.11.1.min.js" type="text/javascript"></script>
        <title>API Details</title>
    </head>
    <body>
		
       <h1>${actionBean.resourceModel.resourceName}</h1>
	      ${actionBean.resourceModel.resourceDescription}<br>
	<c:if test="${!empty actionBean.resourceModel.requireAdmin}">
		<br>
		<span class="resource-admin">Requires Admin Privilege</span>	  
	</c:if>	  
	
	<h3>Resource Path: ${actionBean.resourceModel.resourcePath}</h3>
	<c:if test="${!empty actionBean.resourceModel.methods}">
		<h2>Paths</h2>
		<ul>
		<c:forEach var="item" items="${actionBean.resourceModel.methods}">
			<li><span class="${item.restMethod}" style="line-height: 28px;">${item.restMethod}</span> - ${actionBean.resourceModel.resourcePath}${item.methodPath}</li>
		</c:forEach>
		</ul>	
	</c:if>
	
	
	<c:if test="${!empty actionBean.resourceModel.resourceParams}">
		<h3>Resource Parameters: </h3>	  
		<table>
			<tr>
				<th>Parameter</th>
				<th>Description</th>
				<th>Required</th>
				<th>Default Value</th>
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
		<h2>Details</h2>
		<table width="100%">
			<tr>
				<th style='text-align: center;'>Method</th>
				<th style='text-align: center;'>Requires Admin</th>
				<th style='text-align: left;'>Description</th>
				<th style='text-align: left;'>Path</th>
				<th style='text-align: left;'>Parameters</th>				
				<th style='text-align: left;'>Produces/Consumes Type(s)</th>
			</tr>		
			<c:forEach var="item" items="${actionBean.resourceModel.methods}">
			<tr style="background-color: white;">
				<td align="center"><span class="${item.restMethod}">${item.restMethod}</span></td>
				<td align="center">${item.requireAdmin}</td>
				<td>${item.description}</td>
				<td><span class="resourcePath">${actionBean.resourceModel.resourcePath}${item.methodPath}</span></td>
				<td>
					<c:if test="${!empty item.methodParams}">
					<table width="100%">
						<tr>
							<th>Parameter</th>
							<th>Description</th>
							<th>Required</th>
							<th>Defaults</th>
							<th>Restrictions</th>
							<th>Parameter Type</th>
						</tr>		
						<c:forEach var="methodParam" items="${item.methodParams}">
						<tr>
							<td>${methodParam.parameterName}</td>
							<td>${methodParam.parameterDescription}</td>
							<td>${methodParam.required}</td>
							<td>${methodParam.defaultValue}</td>
							<td>${methodParam.restrictions}</td>
							<td>${methodParam.parameterType}</td>				
						</tr>
						</c:forEach>
					</table> 					
					</c:if>
				</td>
				<td>
					<c:if test="${item.producesTypes != null}">
						<b>Produces:</b><br> 					
						${item.producesTypes}<br>						
					</c:if>
					<c:if test="${item.consumesTypes != null}">
						<b>Consumes:</b><br> 					
						${item.consumesTypes}<br>						
					</c:if>
				</td>				
			</tr>
			<c:if test="${item.consumeObject != null}">
				<tr style="background-color: lightgrey;">
					<td colspan="6">
						<div class="returnInfo">
							<div id="ctitle-${item.id}" class="returnInfo-title"
								 onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';"
								 onclick="$('#cinfo-${item.id}').toggle('slow');">	
								<c:if test="${item.consumeObject.typeObject != null}">
									Consume Object: <span class="value-object-name">${item.consumeObject.valueObjectName} (${item.consumeObject.typeObjectName})</span>									
								</c:if>
								<c:if test="${item.consumeObject.typeObject == null}">
									Consume Object: <span class="value-object-name">${item.consumeObject.valueObjectName}</span>
								</c:if>
							</div>
							<div id="cinfo-${item.id}" class="returnInfo-contents">								
								<c:if test="${item.consumeObject.valueObject != null}">
									<pre>
${item.consumeObject.valueObject}									
									</pre>								
									<table>
										<tr>
											<th style='text-align: left;'>Field Name</th>
											<th style='text-align: center;'>Required</th>
											<th style='text-align: left;'>Type</th>
											<th style='text-align: left;'>Notes</th>
										</tr>
										<c:forEach var="field" items="${item.consumeObject.valueFields}">
										<tr>
											<td>
												${field.fieldName}
											</td>
											<td align="center">
												${field.required}
											</td>
											<td>
												${field.type}
											</td>
											<td>
												${field.validation}
											</td>										
										</tr>
										</c:forEach>
									</table>								
								</c:if>
								<c:if test="${item.consumeObject.typeObject != null}">
									<h3>Data Type Details</h3>
									<pre>
${item.consumeObject.typeObject}									
									</pre>								
									<table>
										<tr>
											<th style='text-align: left;'>Field Name</th>
											<th style='text-align: center;'>Required</th>
											<th style='text-align: left;'>Type</th>
											<th style='text-align: left;'>Notes</th>
										</tr>
										<c:forEach var="field" items="${item.consumeObject.typeFields}">
										<tr>
											<td>
												${field.fieldName}
											</td>
											<td  align="center">
												${field.required}
											</td>
											<td>
												${field.type}
											</td>
											<td>
												${field.validation}
											</td>										
										</tr>
										</c:forEach>
									</table>								
								</c:if>
							</div>
						</div>
							
					</td>					
				</tr>	
			</c:if>			
			<c:if test="${item.responseObject != null}">
				<tr style="background-color: lightgrey;">
					<td colspan="6">
						<div class="returnInfo">
							<div id="rtitle-${item.id}" class="returnInfo-title"
								 onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';"
								 onclick="$('#rinfo-${item.id}').toggle('slow');">	
								<c:if test="${item.responseObject.typeObject != null}">
									Response Object: <span class="value-object-name">${item.responseObject.valueObjectName} (${item.responseObject.typeObjectName})</span>
								</c:if>
								<c:if test="${item.responseObject.typeObject == null}">
									Response Object: <span class="value-object-name">${item.responseObject.valueObjectName}</span>
								</c:if>
							</div>
													
							<div id="rinfo-${item.id}" class="returnInfo-contents">								
								<c:if test="${item.responseObject.valueObject != null}">
									<pre>
${item.responseObject.valueObject}									
									</pre>								
									<table>
										<tr>
											<th style='text-align: left;'>Field Name</th>
											<th style='text-align: center;'>Required</th>
											<th style='text-align: left;'>Type</th>
											<th style='text-align: left;'>Notes</th>
										</tr>
										<c:forEach var="field" items="${item.responseObject.valueFields}">
										<tr>
											<td>
												${field.fieldName}
											</td>
											<td align="center">
												${field.required}
											</td>
											<td>
												${field.type}
											</td>
											<td>
												${field.validation}
											</td>										
										</tr>
										</c:forEach>
									</table>								
								</c:if>
								<c:if test="${item.responseObject.typeObject != null}">
									<h3>Data Type Details</h3>
									<pre>
${item.responseObject.typeObject}									
									</pre>								
									<table>
										<tr>
											<th style='text-align: left;'>Field Name</th>
											<th style='text-align: center;'>Required</th>
											<th style='text-align: left;'>Type</th>
											<th style='text-align: left;'>Notes</th>
										</tr>
										<c:forEach var="field" items="${item.responseObject.typeFields}">
										<tr>
											<td>
												${field.fieldName}
											</td>
											<td  align="center">
												${field.required}
											</td>
											<td>
												${field.type}
											</td>
											<td>
												${field.validation}
											</td>										
										</tr>
										</c:forEach>
									</table>								
								</c:if>
							</div>
						</div>
							
					</td>					
				</tr>	
			</c:if>
			</c:forEach>
		</table> 
			
	</c:if>
	
	
	   
    </body>
</html>
