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
Ext.define('openstorefront.view.Details', {
    extend: 'Ext.Container',
    xtype: 'details',
    
    requires: [
        'Ext.TitleBar',
        'Ext.data.StoreManager',
        'Ext.field.*',
        'Ext.dataview.*'      
    ],
    
    config: {
       title: 'Details',
       scrollable: true,
       items: [
                 {
                id: 'content',
                tpl: new Ext.XTemplate([
                    '<div style="padding: 10px;">',                        
                            '<table><tr><td style="padding: 10px;"><img src="{[this.getIcon(values.type)]}"></td> ',
                            '<td valign="center" class="details-name">{name} <div style="color: grey; font-size: 10px;">{owner}</div></td> ',
                            '</tr></table><br>',                    
                           '<span>{description}</span><br><br>',
                           '<div class="detailSectionHeader">',						
							'<span style="font-size: 14pt;">Resources</span>',
					'</div>',
					'<div class="resource-list detailSection">',
                            
                            '</div><br>',
                           '<div class="detailSectionHeader">',						
							'<span style="font-size: 14pt;">Evaluation Levels</span>',
					'</div>',
					'<div class="resource-list detailSection">',
                                    '<a href="" target="_blank">',
                                      '<img src="image/icon/silk/medal_bronze_1.png" title="Evaluated" width="22" height="22" />',
                                      '<span class="conformance_badge">Evaluation</span><br>',
                                    '</a> ',
                                    '<a href="" target="_blank">',
                                      '<img src="image/icon/silk/medal_silver_1.png" title="Evaluated" width="22" height="22" />',
                                      '<span class="conformance_badge">Testing</span><br>',
                                    '</a>',
                                            '<a href="" target="_blank">',
                                      '<img src="image/icon/silk/medal_gold_1.png" title="Evaluated" width="22" height="22" />',
                                      '<span class="conformance_badge">Reference Integration</span><br>',
                                    '</a>',            
                            '</div><br>',
                           '<div class="detailSectionHeader">',						
							'<span style="font-size: 14pt;">Relations</span>',
					'</div>',
					'<div class="resource-list detailSection">',
                            
                            '</div><br>',
                           '<div class="detailSectionHeader">',						
							'<span style="font-size: 14pt;">Details</span>',
					'</div>',
					'<div class="resource-list detailSection">',
                            
                            '</div><br>',          
                           '<div class="detailSectionHeader">',						
							'<span style="font-size: 14pt;">Comments</span>',
					'</div>',
					'<div class="resource-list detailSection">',
                            
                            '</div><br>',   
                           '<div class="detailSectionHeader">',						
							'<span style="font-size: 14pt;">Related Components</span>',
					'</div>',
					'<div class="resource-list detailSection">',
                                
                            '</div><br>',  
                          
                         
                    '</div>'
                ].join(''), {
                  getIcon: function(key){
                       var categoryIcons = new Array();
                      categoryIcons['REFDOCS'] = 'image/icon/pastel/table-multiple.png';
                      categoryIcons['WIDGET'] = 'image/icon/pastel/application-double.png';
                      categoryIcons['APPS'] = 'image/icon/pastel/application-xp-terminal.png';
                      categoryIcons['ENTERPRISE'] = 'image/icon/pastel/world-link.png';
                      categoryIcons['SOFTLIB'] = 'image/icon/pastel/book-link.png';
                      categoryIcons['TOOLS'] = 'image/icon/pastel/cog.png'; 
                      return  categoryIcons[key];
                  }               
                })
            }
       ],
      record: null
      
    },
    
    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }
    
});


