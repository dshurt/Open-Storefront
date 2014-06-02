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
			
			<link rel="stylesheet" type="text/css" href="resources/css/ext-all-neptune.css?4.2.1" />
			<script type="text/javascript" src="scripts/extjs4.2.1/bootstrap.js"></script>
			<script type="text/javascript" src="scripts/common/global.js?1.0"></script>
			<title><fmt:message key="page.title" /></title>			
			<stripes:layout-component name="html_head"/>
		</head>
		<body>
			<stripes:layout-component name="contents"/>
		</body>
	</html>
</stripes:layout-definition>

