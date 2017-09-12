#!/usr/bin/env node

var sread = require('./sread');
var input = sread('Question? ');
console.log('Answer:', input);
console.log('End');

