(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
Helper functions to determine if a year is a leap year.

If a year is divisible by 4 it is a leap year unless it is also divisible by 100.
The only exception to the rule is if the year is also divisible by 400.
i.e. the excepetion is divisible by 4, 100 and 400.
*/

'use strict';

module.exports = class isLeapYear {
    
    constructor(year){
        this.year = year;
    }
    
    checker(){
        if (this.year%4 == 0){
            if (this.year%100 == 0){
                return this.leapHundred();
            }else{
                return true;
            }
        }else{
            return false;
        }
    }
    
    leapHundred(){
        if (this.year % 400 == 0){
            return true;
        }else{
            return false;
        }
    }
} 



},{}],2:[function(require,module,exports){
'use strict';

const isLeapYear = require('./leap.js');
const Zune = require('./seconds.js');

/*
let date = 2100;
var year = new isLeapYear(date);
console.log('checking the year', date, ':', year.checker());
*/



window.onload = () => {
    const input = document.getElementById('year');
    const display = document.getElementById('container');
    const btnYear = document.getElementById('button_year');
    const leapOutput = document.getElementById('leap_output');
    const leapPara = document.getElementById('leap_para');
    
    btnYear.onclick = () => {
      
      var year = new isLeapYear(input.value);
      //console.log('is', input.value, 'a leap year?', year.checker());
      leapOutput.innerHTML = 'Is the year ' + year.year + ' a leap year?';
      leapPara.innerHTML = year.checker();
      
      };
      
    var seconds = new Zune(1000);
};





},{"./leap.js":1,"./seconds.js":3}],3:[function(require,module,exports){
module.exports = class Zune {
    
    constructor(seconds){
        this.seconds = seconds;
    }
}
},{}]},{},[2]);
