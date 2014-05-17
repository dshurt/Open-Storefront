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

 Ext.create('Ext.data.Store', {
  fields: ['type', 'desc'],
  storeId: 'typesStore',
  data: {'items': [
      {code: 'REFDOCS', 'type': 'Reference Documents', "desc": "Standards, Specifications, and APIs"},
      {code: 'APPS', 'type': 'Applications', "desc": "Redeployable, Middleware"},
      {code: 'ENTERPRISE', 'type': 'Enterprise Services', "desc": "Soap, REST, ..."},
      { code: 'SOFTLIB', 'type': 'Software Libraries', "desc": "javascript, java, .net, python"},
      {code: 'TOOLS', 'type': 'Tools', "desc": "Test scripts, Development Tools"},
      {code: 'WIDGET', 'type': 'Widgets', "desc": "Ozone widgets"}
    ]},
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      root: 'items'
    }
  }
});

var catStore = Ext.create('Ext.data.Store', {
  fields: ['type', 'desc'],
  storeId: 'categoryStore',
  data: {'items': [
      {'type': 'VISUAL', "desc": "Visualization"},
      {'type': 'DATAM', "desc": "Data Management"},
      {'type': 'COLLECT', "desc": "Collection"},
      {'type': 'COLLAB', "desc": "Collaboration"},
      {'type': 'SECM', "desc": "Security Management"},
      {'type': 'PLAN', "desc": "Planning and Direction"}
    ]},
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      root: 'items'
    }
  }
});

Ext.create('Ext.data.Store', {
  fields: ['desc'],
  storeId: 'stateStore',
  data: {'items': [
      {"desc": "No Evaluation Planned"},
      {"desc": "Level 0 - Not Assessed"},
      {"desc": "Level 1 - Checklist Complete"},
      {"desc": "Level 2 - DI2E Tested"},
      {"desc": "Level 3 - DI2E Framework Conformant"}
    ]},
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      root: 'items'
    }
  }
});	

Ext.create('Ext.data.Store', {
    autoLoad: true,
    storeId: 'Assets', 
    pageSize: 20,
    proxy: {
        type: 'pagingmemory',
        enablePaging: true,
        data : MOCKDATA.assets,
        model: 'Asset',
        reader: {
            type: 'json',
            root: 'assets'
        }
    }
});
