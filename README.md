js-xmlhttprequest-mock
======================
A Javascript object that simulates and can override the XMLHttpRequest object. Intended to be used for testing.

Fast reference
==============
This library exposes an object called XMLHttpRequestMock, with the following methods:

- XMLHttpRequestMock.get(): Returns an instance of XMLHttpRequest, with the same interface that the regular XMLHttpRequest object in
modern browsers.

- XMLHttpRequestMock.override(): Override the native XMLHttpRequest object.

- XMLHttpRequestMock.spy(): Override partially the native XMLHttpRequest object, wrapping its functionality,
so we can be notified of who is calling its methods and the different events that occur.

- XMLHttpRequestMock.restore(): Restore the native implementation.

Brief history of the XMLHttpRequest object
============================================
- The XMLHttpRequest object was designed by Microsoft, originally created by developers of Outlook Web Access, for
Microsoft Exchange Server 2000. It was included as an interface called IXMLHTTPRequest in the MSXML library.

In March 1999 Internet Explorer 5.0 was released, including access via ActiveX to the IXMLHTTPRequest interface.

```javascript
// Using the right version of msxml in Internet Explorer 5.x-6.x
if (type of XMLHttpRequest === 'undefined') {
	XMLHttpRequest = function() {
		try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); }
		catch(e) {}
		try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); }
		...
		...
	}
}
```

- Later on, Mozilla implemented a similar interface, and a Javascript object called XMLHttpRequest as a wrapper
of the interface.

- On April 2006, W3C published a draft for the XMLHttpRequest object.

Reference
=========
Latest working draft for the XMLHttpRequest:
http://www.w3.org/TR/XMLHttpRequest/

Mozilla Developer Network - XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
