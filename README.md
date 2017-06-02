# thrift-get-started

## Welcome
Install [Thrift](https://thrift.apache.org/docs/install/os_x).

## Node.js (Works)
```
thrift -r --gen js:node sample.thrift
cd src/nodejs
npm install
```

start server
```
node server.js
```

test with client
```
node client.js
```

## CPP (Not works)
```
src/cpp/compile-server
```

Trace
```
In file included from CppServer.cpp:4:
In file included from /Users/hain/trio/thrift-get-started/src/cpp/../../gen-cpp/AddService.h:12:
/Users/hain/trio/thrift-get-started/src/cpp/../../gen-cpp/sample_types.h:23:17: error: cannot combine with previous 'type-name' declaration specifier
typedef int32_t int;
                ^
/Users/hain/trio/thrift-get-started/src/cpp/../../gen-cpp/sample_types.h:23:1: warning: typedef requires a name [-Wmissing-declarations]
typedef int32_t int;
^~~~~~~~~~~~~~~~~~~
1 warning and 1 error generated.
```
