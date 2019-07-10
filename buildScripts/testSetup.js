// This file will not be transpiled, so use CommonJS and ES5

//Register babel to transpile before our tests run
require('@babel/register')();

//Disable webpack features that mocha won't understand
require.extensions['.css'] = function() {};
