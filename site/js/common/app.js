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

/*  
 *  Application framework
 */
var OpenCatalog = function (){
      var internal = {};
      
      internal.showAbout = function(){
            
             Ext.create('Ext.window.Window', {
               title: 'About',               
               closeAction: 'destroy',
               width: 400,
               autoScroll: true,
               modal: true,
               bodyStyle: 'padding: 20px;',
               dockedItems: [
                 {
                   xtype: 'toolbar',
                   ui: 'Footer',
                   border: false,
                   dock: 'bottom',
                   items: [
                     {
                       xtype: 'tbfill'
                     },
                     {
                       text: 'Ok',
                       minWidth: 100,
                       handler: function(){
                         this.up('window').close();
                       }
                     },
                     {
                       xtype: 'tbfill'
                     }
                   ]
                 }
               ],
               html: 'The DI2E Framework storefront provides a user-friendly and easy to use interface for users to locate DI2E Framework services. The storefront contains information about Services, Widgets, Applications, Software, etc. (SWASe) as well as on the cookbooks and other DI2E Framework guidance to support DI2E.s user community of developers, system integrators and operational end users. The storefront will greatly simplify the process of publishing, identifying, and locating reusable services across the DI2E. It will also allow for easy side-by-side comparison of ratings and reviews and aide in decision making by a variety of stakeholders. The storefront will also participate in the overall applications mall architecture and share information with the storefront warehouse and contain public services from other related storefronts. The DI2E Framework storefront will be part of a storefront ecosystem that will facilitate discovery and reuse of shareable DI2E services across the community.'
             }).show();
             
      };
      
      internal.categoryIcons = new Array();
      internal.categoryIcons['REFDOCS'] = 'image/icon/pastel/table-multiple.png';
      internal.categoryIcons['WIDGET'] = 'image/icon/pastel/application-double.png';
      internal.categoryIcons['APPS'] = 'image/icon/pastel/application-xp-terminal.png';
      internal.categoryIcons['ENTERPRISE'] = 'image/icon/pastel/world-link.png';
      internal.categoryIcons['SOFTLIB'] = 'image/icon/pastel/book-link.png';
      internal.categoryIcons['TOOLS'] = 'image/icon/pastel/cog.png';
      
        
      return internal;
}();

