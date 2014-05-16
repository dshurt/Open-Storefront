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
Ext.define('openstorefront.view.SearchResults', {
    extend: 'Ext.dataview.List',
    xtype: 'searchResults',
    
    requires: [
        'Ext.TitleBar',
        'Ext.data.*',
        'Ext.field.*',
        'Ext.dataview.*'      
    ],
    
    categoryIcons: function(key){
       var categoryIcons = new Array();
      categoryIcons['REFDOCS'] = 'image/icon/pastel/32/table-multiple.png';
      categoryIcons['WIDGET'] = 'image/icon/pastel/32/application-double.png';
      categoryIcons['APPS'] = 'image/icon/pastel/32/application-xp-terminal.png';
      categoryIcons['ENTERPRISE'] = 'image/icon/pastel/32/world-link.png';
      categoryIcons['SOFTLIB'] = 'image/icon/pastel/32/book-link.png';
      categoryIcons['TOOLS'] = 'image/icon/pastel/32/cog.png';      
    },   
    
    config: {
       title: 'Search Results',
       store: 'Assets',
      itemTpl: new Ext.XTemplate([
        '<table><tr><td style="padding-right: 10px;"><img src="{[this.getIcon(values.type)]}"></td> ',
        '<td valign="center">{name}<div style="color: grey; font-size: 10px;">{[this.trimDesc(values.description)]}</div></td> ',
        '</tr></table>'
      ].join(''), {
          getIcon: function(key){
               var categoryIcons = new Array();
              categoryIcons['REFDOCS'] = 'image/icon/pastel/32/table-multiple.png';
              categoryIcons['WIDGET'] = 'image/icon/pastel/32/application-double.png';
              categoryIcons['APPS'] = 'image/icon/pastel/32/application-xp-terminal.png';
              categoryIcons['ENTERPRISE'] = 'image/icon/pastel/32/world-link.png';
              categoryIcons['SOFTLIB'] = 'image/icon/pastel/32/book-link.png';
              categoryIcons['TOOLS'] = 'image/icon/pastel/32/cog.png'; 
              return  categoryIcons[key];
          },
          trimDesc: function(desc){
            return Ext.String.ellipsis(desc, 80);
          }
      })
      
    }
    
});

