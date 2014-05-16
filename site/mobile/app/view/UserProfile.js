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
Ext.define('openstorefront.view.UserProfile', {
    extend: 'Ext.Container',
    xtype: 'userProfile',
 
      requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],
    
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'formpanel',
                items: [
                    {
                        xtype: 'fieldset',
                        defaults: {
                            labelWidth: '35%'
                        },
                        title: 'Information',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'First Name',
                                name: 'firstName'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Last Name',
                                name: 'lastName'
                            },
                            {
                                xtype: 'selectfield',
                                label: 'Role',
                                name: 'role',
                                options: [
                                    {text: 'Developer',  value: 'dev'},
                                    {text: 'Project Manager', value: 'pm'},
                                    {text: 'End-User',  value: 'eu'}
                                ]                                
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        defaults: {
                            labelWidth: '35%'
                        },
                        title: 'Contact Information',
                        items: [
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                name: 'email'
                            }
                        ]
                    }
                ]
            }
        ]      
    }
    
    
 });
