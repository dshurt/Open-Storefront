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
*  {
*    "code": "APPS"
*  },
*  {
*    "code": "TOOLS"
*  }
*  ]
*  "categories": [
*  {
*    "code": "MDATA"
*  },
*  {
*    "code": "COLLECTION"
*  }
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
    out = _.filter(input, function(item) {  // if value passes with true it remains
      return _.every(filters, function(filter) {  //we return true if it passes all of these filters
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
