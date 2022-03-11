https://www.geeksforgeeks.org/node-js-http2-connect-method/

Node.js http2.connect() Method

The http2.connect() is an inbuilt application programming interface of class http2 within the http2 module which is used to return a ClientHttp2Session instance.

Syntax:

const http2.connect(authority[, options][, listener])
Parameters: This method takes the following argument as a parameter:

authority: It is the URL representing a remote HTTP/2 server to connect to.
options: It can be maxDeflateDynamicTableSize, maxSettings, maxSessionMemory, etc option can be used according to need.
listener: It is the one time listener of the ‘connect’ event.
Return Value: This method returns the object of the ClientHttp2Session instance.