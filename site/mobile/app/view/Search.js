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
Ext.define('openstorefront.view.Search', {
    extend: 'Ext.dataview.List',
    xtype: 'searchpanel',
    
    requires: [
        'Ext.TitleBar',
        'Ext.data.StoreManager',
        'Ext.field.*',
        'Ext.dataview.*'      
    ],
    
    config: {
       title: 'DI2E Storefront Catalog',      
      store:  {
        fields: ['name', 'icon', 'desc'],
        data: [
            {name: 'Reference Documents', icon: 'image/icon/pastel/table-multiple.png', desc: 'Standards, Specifications, and APIs'},
            {name: 'Widgets', icon: 'image/icon/pastel/application-double.png', desc: 'OWF widgets'},
            {name: 'Applications', icon: 'image/icon/pastel/application-xp-terminal.png', desc: 'Redeployable, Middleware'},
            {name: 'Enterprise Services', icon: 'image/icon/pastel/world-link.png', desc: 'SOAP, REST, ...'},
            {name: 'Software Libraries', icon: 'image/icon/pastel/book-link.png', desc: 'javascript, java, .net, python'},
            {name: 'Tools', icon: 'image/icon/pastel/cog.png', desc: 'Test scripts, Development tools'}
        ]
      },
      itemTpl: [
        '<table><tr><td style="padding-right: 10px;"><img src="{icon}"></td> ',
        '<td valign="center">{name}<div style="color: grey; font-size: 10px;">{desc}</div></td> ',
        '</tr></table>'
      ].join(''),
      items: [
          {
              xtype: 'searchfield',
              docked: 'top',
             // label: 'Search',
              placeHolder: 'Search...',
              name: 'query'
          }
      ]
    }
    
});

