'use strict';

app.factory('localCache', function () {
  //TODO: Add some more cross-browser stuff here.
  var cache = window.sessionStorage;

  /**
  * Stores the value into the cache.  Will convert objects to strings.
  * key - a string value
  * value - string or object.  If object, it is converted to string.
  */
  var save = function (key, value) {
    if (typeof key !== 'string') {
      throw new Error('Key must be a string');
    }
    if (typeof value === 'object') {
      if (value instanceof Date) {
        value = value.toString();
      } else {
        value = JSON.stringify(value);
      }
    }
    cache.setItem(key, value);
  };

  /**
  * Retrieves a value from the cache.
  * key - string value
  * type - optional parameter.  If it equals "object" a conversion to
  *        object will occur. "date" will convert it to a JS Date object.
  */
  var get = function (key, type) {
    if (typeof key !== 'string') {
      throw new Error('Key must be a string');
    }
    if ((typeof type !== 'undefined') && (type === 'object')) {
      return JSON.parse(cache.getItem(key));
    }
    if ((typeof type !== 'undefined') && (type === 'date')) {
      return new Date(cache.getItem(key));
    }
    return cache.getItem(key);
  };

  /**
  * Clears out all key/value pairs currently stored.
  * TODO: Make this a bit less destructive, so that it only wipes I-Learn
  *       specific items.
  */
  var clearAll = function () {
    cache.clear();
  };

  /**
  * Wipes out one element from the cache.
  * @param  {String} key The specified element.
  */
  var clear = function (key) {
    if (typeof key !== 'string') {
      throw new Error('Key must be a string');
    } else {
      cache.removeItem(key);
    }
  };

  return {
    save:save,
    get:get,
    clearAll: clearAll,
    clear: clear
  };
});
