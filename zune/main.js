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




