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

Ext.define('Stats', {
    extend: 'Ext.data.Model',
    fields: ['averageRating', 'numberRatings', 'comments', 'views'],
    
    belongsTo: 'Asset'
});

Ext.define('Asset', {
    extend: 'Ext.data.Model',
    fields: [
      {name: 'id', type: 'int'},
      {name: 'name', type: 'string'},      
      {name: 'shortDescription', type: 'string'},
      {name: 'description', type: 'string'},
      {name: 'owner', type: 'string'},
      {name: 'type', type: 'string'}
    ],
    hasOne: {model: 'Stats', name: 'stats'}
});



