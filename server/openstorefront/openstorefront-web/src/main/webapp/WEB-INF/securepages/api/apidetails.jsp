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
	<link href="css/apidoc.css" rel="stylesheet" type="text/css"/>
        <title>API Details</title>
    </head>
    <body>
        <a href="index.html">Back to Index</a><br>
       <h1>${actionBean.resourceModel.resourceName}</h1>
	      ${actionBean.resourceModel.resourceDescription}<br>   
	   
    </body>
</html>
