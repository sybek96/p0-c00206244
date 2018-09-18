/*! fizzbuzz v0.0.0 - MIT license */
'use strict';

var fizzbuzz = function (num) {
  // your code goes here
    if (num < 0)
    {
        return num;
    }
    else if (num % 3 === 0 && num % 5 === 0) {
        return 0;
    }
    else if (num % 3 === 0) {
        return 3;
    }
    else if (num % 5 === 0) {
        return 5;
    }
    else {
        return num;
    }
}

if ( typeof module !== "undefined" ) {
  module.exports = fizzbuzz;
}