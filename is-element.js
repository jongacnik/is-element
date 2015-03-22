(function(root) {
  function isElement(value) {
    return (value && value.nodeType === 1) &&
           (value && typeof value == 'object') &&
           (Object.prototype.toString.call(value).indexOf('Element') > -1);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isElement;
    }
    exports.isElement = isElement;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isElement;
    });
  } else {
    root.isElement = isElement;
  }

})(this);
