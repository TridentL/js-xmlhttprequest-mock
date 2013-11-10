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
   * @object XMLHttpRequest
   */
  namespace.XMLHttpRequest = function() {
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
    get: function() {
      // Returns a non-native version of the XMLHttpRequest
      // TODO: Check if we have overriden the native object already
      // What to do in that case?
      return new namespace.XMLHttpRequest();
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
