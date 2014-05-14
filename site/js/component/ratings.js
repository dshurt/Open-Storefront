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

Ext.define('OpenCatalog.ratings.Panel', {
     extend: 'Ext.container.Container',
     cls: 'ratings',
     border: false,
     ratings: {
         averageRating: 0,
         numberRatings: 0,
         comments: 0,
         views: 0   
     },
     maxRating: 5,
  
     constructor: function (config) {
        this.callParent(arguments); // calls Ext.panel.Panel's constructor
     },
     
     initComponent: function(){
       
        var ratingsPanel = this;

      var content = '<div style="width: 154; ">' +
              '<span>';

      for (var i = 1; i <= ratingsPanel.maxRating; i++) {
        if (i <= ratingsPanel.ratings.averageRating) {
          content += '<img title="Average Rating" id="" src="image/icon/pastel/star.png" border="0">';
        } else {
          content += '<img title="Average Rating" src="image/icon/pastel/star-disabled.png" border="0">';
        }
      }
      content += '(' + ratingsPanel.ratings.numberRatings + ')</span></div>';
      content += '<div >' + ratingsPanel.ratings.comments + ' comment(s),  ' + ratingsPanel.ratings.views + ' view(s)</div>';

      ratingsPanel.html = content;       
       
        this.callParent(arguments);
     }
     
 });
