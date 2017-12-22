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
I decided that I may as well spin up an instance of Node.js on AWS and go ahead and develop a rudimentary interactive webpage to test the logic in. my code.

While I won't be doing this for every single question/mini-project it was worth the effort to combine everything into a working pseudo app. 

_side note: I'm using bowserify to handle the export and import dependacies as browser support for require and module.exports isn't native afaik._

Full disclaimer: I put the absolute minimum effort into styling the project /disclaimer.

So now that I have a completed helper method to check if the year is a leap year or not it's onto the actual problem.



