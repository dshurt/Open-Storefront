<%-- 
    Document   : mainLayout
    Created on : Apr 25, 2014, 12:42:09 PM
    Author     : dshurtleff
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="stripes" uri="http://stripes.sourceforge.net/stripes.tld" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<stripes:layout-definition>
	<!DOCTYPE html>
	<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
			<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
			<link href="css/ui-lightness/jquery-ui-1.10.4.custom.min.css" rel="stylesheet" type="text/css"/>
		
			<script src="script/jquery/jquery-1.11.1.min.js" type="text/javascript"></script>
			<script src="script/jquery/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>			
			<title><fmt:message key="page.title" /></title>			
			<stripes:layout-component name="html_head"/>
		</head>
		<body>
			<stripes:layout-component name="contents"/>
		</body>
	</html>
</stripes:layout-definition>

