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

//This will need to be dynamic
   
var Translate = function(key){
    var desc = Translate.data[key];
    if (desc === undefined || desc === null)
    {
      desc = "???" + key + "???";
    }
    return desc;
};

Translate.data = new Array();

//Types
Translate.data['REFDOCS'] = 'Reference Documents';
Translate.data['APPS'] = 'Applications';
Translate.data['ENTERPRISE'] = 'Enterprise Services';
Translate.data['SOFTLIB'] = 'Software Libraries';
Translate.data['TOOLS'] = 'Tools';
Translate.data['WIDGET'] = 'Widgets';