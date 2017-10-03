'use strict';

const clock = require('./lib/index');

let original = '2017-10-03 16:40:07';
// console.log(original);


//console.log(dateTest.toTimezone('America/Sao_Paulo').toString());
// console.log(dateTest.toString());
// console.log(dateTest.toUTCString());
// console.log(dateTest.toTimestamp()); // Get date timestamp
// console.log(dateTest.format('yyyy-dd-mm')); // Format Date

console.log(".....");
let datelalala = new Date(new Date().toUTCString());

console.log(datelalala.toString())
console.log(datelalala.toUTCString());

let dateTest = new clock(datelalala.toUTCString());

console.log(datelalala.toString());