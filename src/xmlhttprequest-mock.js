/**
 * @object XMLHttpRequestMock  
 */

// Initialize the namespace
var XMLHttpRequestMock = XMLHttpRequestMock || null;

XMLHttpRequestMock = (function(namespace, nativeObject) {

  /**
   * Used by the override method, to store the native
   * XMLHttpRequest object.
   *
   * @type {XMLHttpRequest|null} 
   * @private
   */
  var _nativeXMLHttpRequest = null;

  /**
   * @param {Object} params
   *  {delay} Number Request delay in ms
   *  {Object} response
   *  {Function| onreadystatechange
   * @object XMLHttpRequest
   */
  namespace.XMLHttpRequest = function(params) {
    this.params = {
      delay: params.delay || 100,
      onreadystatechange: params.onreadystatechange || null,
      response: params.response || null,
    };
  };

  /**
   * @method open 
   * @public
   */
  namespace.XMLHttpRequest.prototype.open = function(method, url, async) {
  };

  /**
   * @method setRequestHeader 
   * @public
   */
  namespace.XMLHttpRequest.prototype.setRequestHeader = function(header, value) {
  };

  /**
   * @method send 
   * @public
   */
  namespace.XMLHttpRequest.prototype.send = function() {
    var self = this;
    window.setTimeout(function() {
      if (typeof self.params.onreadystatechange === 'function') {
        self.params.onreadystatechange(self.params.response);
      }
    }, this.params.delay);
  };

  /**
   * @method abort 
   * @public
   */
  namespace.XMLHttpRequest.prototype.abort = function() {
  };

  return {

    /**
     * @return {XMLHttpRequest}
     * @method get 
     * @public
     */
    get: function(params) {
      // Returns a non-native version of the XMLHttpRequest
      // TODO: Check if we have overriden the native object already
      // What to do in that case?
      return new namespace.XMLHttpRequest(params);
    },

    /**
     * @method override 
     * @public
     */
    override: function() {
      var _nativeXMLHttpRequest = nativeObject;
      nativeObject = new namespace.XMLHttpRequest();
    },

    /**
     * @method restore 
     * @public
     */
    restore: function() {
      nativeObject = _nativeXMLHttpRequest;
    },

    /**
     * @param {Object} callbacks
     * @method spy 
     * @public
     */
    spy: function(callbacks) {
    }

  };

})(XMLHttpRequestMock, XMLHttpRequest);
