var thrift = require('thrift');
var AddService = require('../../gen-nodejs/AddService');
var ttypes = require('../../gen-nodejs/sample_types');

var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

var connection = thrift.createConnection("localhost", 9090, {
    transport: transport,
    protocol: protocol
});

connection.on('error', function (err) {
    assert(false, err);
});

// Create a Calculator client with the connection
var client = thrift.createClient(AddService, connection);

client.add(1, 1, function (err, response) {
    console.log("1+1=" + response);
    connection.end();
});