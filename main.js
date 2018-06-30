"use strict"

// default parameter 
function greet($greeting = 'Hello World') { 
  console.log($greeting);
}

greet(); // this will log the default value 'Hello World' to console
greet('Hello'); // this will log 'Hello'


// spread operator
let args1 = [1,2,3];
let args2 = [4,5,6];

function test() { 
  console.log(args1 + ',' + args2);
}

// --- to use the args array as a parameter and log the whole array

// the old way is
// test.apply(null, args);

// the ES6 way is
// test(...args1);
test(...args1, ...args2);
// '...' is the spread operator