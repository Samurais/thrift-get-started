/**
 * Thrift Get Started in Node.js
 * https://thrift.apache.org/tutorial/nodejs
 */
var thrift = require("thrift");
var AddService = require("../../gen-nodejs/AddService");
var ttypes = require("../../gen-nodejs/sample_types");

var data = {};

var server = thrift.createServer(AddService, {
    add: function (n1, n2, result) {
        console.log("add(", n1, ",", n2, ")");
        result(null, n1 + n2);
    }
});

server.listen(9090);