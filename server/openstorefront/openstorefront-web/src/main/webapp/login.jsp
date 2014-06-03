<%-- 
    Document   : login
    Created on : Apr 25, 2014, 3:18:20 PM
    Author     : dshurtleff
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="stripes" uri="http://stripes.sourceforge.net/stripes.tld" %>
<stripes:layout-render name="/layout/mainLayout.jsp">
    <stripes:layout-component name="contents">
		
		login
			
		<script type="text/javascript">
			
			Ext.onReady(function(){
			
				var submitForm = function(){
					Ext.getCmp('loginForm').submit({
						url: 'Login.action?Login',
						success: function(form, action){
							window.location.href = 'Landing.action';
						}
					});
				};
			
				var loginWin = Ext.create('Ext.window.Window', {
					title: 'Login',
					float: false,
					width: 400,
					closable: false,
					draggable: false,
					resizable: false,
					y: 200,
					dockedItems: [
						{
							xtype: 'toolbar',
							dock: 'bottom',
							ui: 'Footer',
							border: false,
							items: [
								{
									xtype: 'tbfill'
								},
								{
									text: 'Login',
									minWidth: 100,
									handler: function(){
										submitForm();
									}
								},
								{
									xtype: 'tbfill'
								}
							]
						}
					],
					items: [
						{
							xtype: 'form',
							id: 'loginForm',
							padding: 20,
							border: false,
							layout: 'anchor',
							defaults: {
								labelAlign: 'top',
								msgTarget: 'under'
							},
							items: [
								{
									xtype: 'textfield',
									anchor: '100%',
									fieldLabel: 'Username',
									allowBlank: false,
									labelSeparator: '<span style="color: red; font-weight: bold;">*</span>',								
									name: 'username'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									fieldLabel: 'Password',
									allowBlank: false,
									labelSeparator: '<span style="color: red; font-weight: bold;">*</span>',
									inputType: 'password',
									name: 'password',
									enableKeyEvents: true,
									listeners: {
										keypress: function(textfield, e, eOpts){
											if (e.ENTER === e.getKey())
											{
												submitForm();
											}
										}
									}
								},
								{
									xtype: 'checkbox',
									boxLabel: 'Remember me',
									name: 'remember'
								}
							]
						}
					]
				});
				loginWin.show();
				
			});
			
		</script>	
		
    </stripes:layout-component>
</stripes:layout-render>
