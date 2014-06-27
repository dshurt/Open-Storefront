/* 
* Copyright 2014 Space Dynamics Laboratory - Utah State University Research Foundation.
*
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an 'AS IS' BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';


/*******************************************************************************
* This filter requires that you pass in the filters ;) it is an array of objects
* in this format:
*[
*  {
*    "name": "Types",
*    "key": "type",   // The key for the attribute in the object you're looking for
*    "collection": [
*      {
*        "code": "APPS",  // the value of the attribute in the object you wish to find
*        "type": "Application", // periferal information
*        "desc": "Applications are ...",
*        "src": "images/icon/pastel/locationOfFilterImage.png",
*        "checked": true // whether or not this portion of the filter defaults to checked (implemented) or not
*      },
*      {
*        "code": "WIDGET",
*        "type": "Widget",
*        "desc": "Filter description",
*        "src": "images/icon/pastel/locationOfFilterImage.png",
*        "checked": false
*      }
*      ...
*    ]
*  },
*  {
*    "name": "Categories",
*    "key": "categories", 
*    "collection": [
*      {
*        "code": "MDATA",
*        "type": "Data Management",
*        "desc": "Data management is......",
*        "src": "images/icon/pastel/locationOfFilterImage.png",
*        "checked": false
*      },
*      ...
*    ]
*  }
*]
*******************************************************************************/
/*******************************************************************************
* The object you're looking for must be in a format similar to this:
*{
*  "id": 34,
*  "guid": "6482B5F8-CB71-E00D-8FA4-16529549EC22",
*  "type": [
*    {
*      "code": "APPS"
*    },
*    {
*      "code": "TOOLS"
*    }
*  ],
*  "categories": [
*    {
*      "code": "MDATA"
*    },
*    {
*      "code": "COLLECTION"
*    }
*  ]
*}
*******************************************************************************/
app.filter('componentFilter', function()  {
  var allChecked = function(collection) {
    var none = _.every(collection, function(item) {
      return (item.checked === false);
    });
    var all = _.every(collection, function(item) {
      return (item.checked === true);
    });
    return (none || all);
  };

  return function (input, filters) {
    var out = null;
    // if value passes with true it remains
    out = _.filter(input, function(item) {
      //we return true if it passes all of these filters
      return _.every(filters, function(filter) {
        var collection = filter.collection;
        var key = filter.key;
        // if the filter isn't being used, or all are checked, we know its true
        if (!allChecked(collection)) {
          // otherwise we return true if it passes some portion of the filter
          return _.some(collection, function(checkedFilter) {
            if (checkedFilter.checked === true) {
              var check = _.pluck(item[key], 'code');
              // if the filter is checked, we need to check the item
              return _.contains(check, checkedFilter.code);
            } else {
              // if it isn't checked we default to false
              return false;
            }
          });
        } else {
          return true;
        }
      });
    });
    return out;
  };
});
