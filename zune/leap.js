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


