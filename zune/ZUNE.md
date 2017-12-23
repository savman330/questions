#### Helper Functions

First I needed to construct a helper function to determine if a year is a leap year.  

The logic was straight forward. I chose to construct the helper fucntion in a new class so I could easily make the code modular and keep the 
the components of the problem seperate.

```javascript
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
```

At first I created a new instance of the isLeapYear class and began logging to the output of the checker() method to the console.  
But, since I want to get in the habit of creating actual assets as opposed to just a bunch of disparate scripts littered on my local hard drive, 
I decided that I may as well spin up an instance of Node.js on AWS and go ahead and develop a rudimentary interactive webpage to test the logic in my code.

While I won't be doing this for every single question/mini-project it was worth the effort to combine everything into a working pseudo app. 

_side note: I'm using bowserify to handle the export and import dependacies as browser support for require and module.exports isn't native afaik._

Full disclaimer: I put the absolute minimum effort into styling the project /disclaimer.

So now that I have a completed helper method to check if the year is a leap year or not it's onto the actual problem.

## Thoughts

Known:

  * We have a working helper function that will determing if a given year is a leap year
  * A non leap year is 365 days
  * A leap year is 366
  * There are 60 seconds in a minute, 3600 seconds in an hour, and 86400 seconds in a day
  * We will store the days in a month is an array: const date = [31,28,31,30,31,30,31,31,30,31,30,31]
  * We will alse need another array for leap years: const dateLeap = [31,29,31,30,31,30,31,31,30,31,30,31]

So I know given a number of seconds _n_ that I first need to track the state of the year with a beginning state of 1980.  And I will need a flag
or something to adjust my year, and potential month, day calculations for leap years.  

My plan is increment the state of each respective unit (year, month, day, hour, etc.) so long as _n_ is greater than the largest unit; then I 
will proceed to the next smallest unit and continue until I have less than a minute left at which point I cam simply append the remaining value
to the seconds place. 

Since I'm essentially performing the same operation on each unit I will be looking to build a function that can take a unit parameter 
(e.g. year, day, hour, etc.) as well as a isLeapYear parameter as well....or actually maybe I can use a wrapper function that will resolve the year, 
and can then pass the remaining seconds _n_ and a parameter indicating whether or not there has been a leap year. 

That sounds like a good plan:

    Wrapper function: parameters(seconds)
    
        Increment the year state for every 86400 * 365 seconds (366 for leap years)
        return [year, incrementor(isLeapYear, _n_)]
        
    Incrementor function: parameters(isLeapYear[true or false], seconds remaining (_n_))
    
        date variable will be leapYear if true, regular date otherwise
    
        While _n_ larger than month (days\_in\_month * 86400) in year
            increment month
            return month state, seconds left
        while _n_ is larger than day (86400)
            increment days
            return day state, seconds left
        while _n_ is larger than hour (3600)
            increment hours
            return hour state, seconds left
        while _n_ is larger than minute (60)
            increment minute
            return minute state, seconds left
        while _n_ is larger than second (1)
            increment second state
            

Lets see some code:

```javascript

```


