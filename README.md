# Interview Questions

### Zune Question
    
    The Zune Clock Driver problem

TLDR: Write a function that takes the number of seconds elapsed since 1/1/1980 at midnight and prints out the exact month, day, and year. You're given an already implemented "isLeapYear" function. You can't use the built-in date/time functions.

Microsoft used to make a portable MP3 player known as the Zune.  The Zune had a front facing LED display that would show among other things, the current date and time. The date and time was internally stored in CMOS (battery) memory as an integer that represented "the number of seconds since January 1, 1980 at 00:00 (midnight)"  When the Zune was started, it would read this value from the CMOS memory and print it on the screen as month/day/year and hour:minute:second.

On December 31, 2008, all the Zunes of a particular model were unable to boot. It turns out, there was an infinite loop in the code that converted the number of seconds since January 1 1980 into a printable date and time.  The bug had something to do with leap years.  Let's see if we can do better than those folks...

Background: Leap years are normally understood as occurring "every 4 years".  This isn't entirely correct. Normally if the year is divisible by 4 (e.g. 2016), it's a leap year.  But if the year is divisible by 100, it's not a leap year unless it's also divisible by 400.  Hence, the year 2000 was a leap year, but the year 2100 will not be leap year.  Hence, you can't assume leap years are every four year.  If you're confused at this point, don't worry. Because I've already provided you an already written and tested library function that will tell you if a year is a leap year or not.  It has any of the following forms depending on which language you want to use:

    ```
    def isLeapYear(year):      # Python

    bool isLeapYear(int year);  // C, C++, Java)

    function isLeapYear(year);  // JavaScript
    ```

Your job is to implement a function that will convert the number of seconds since Jan 1 1980 at midnight and turn that value into a into printable date (month/day/year).  We'll skip the hh:mm:ss part for now.  The declaration for this function you are to implement is given below.

    ```
    def printDate(seconds):      # Python
        # your code goes here

    void printDate(int seconds)  // C, C++, Java
    {
          // your code goes here
    }

    function printDate(seconds) { // Javascript
        // your code goes here
    }
    ```

Example: If invoke your code as printDate(0), it should print out "1/1/1980".  If I invoke printDate(24*60*60), it should print out "1/2/1980" and so forth. I'm not so concerned with how you print and format out the final strings - as long as you have the correct values for month, day, and year in a variable before the function exits.

Obviously, leap years need to be accounted for. That's why you've been given the "isLeapYear" helper function that you can just use within your own code.

Constraint: Because of the limited amount of storage on this device, the date, time, and calendar libraries normally provided by the language functionality was not included. Hence, you won't be able to use the simple function provided by the language that normally makes this task easy.  You'll have to manually write the code.

Hint #1: I've already provided one helper function called "isLeapYear".  You may need to declare and implement additional helper functions.

Hint #2: There are multiple solutions to this problem, but there's no magic math formula (that I know of) that will instantly convert the seconds counter into a date. You'll likely have to write some "loops".

Hint #3: 365 days in a normal non-leap year. 366 days in a leap-year (29 days in February). Number of seconds in a day is 24*60*60 == 86400.  1980 was a leap year.

Hint #4: Days in month table for a non-leap year:  [31,28,31,30,31,30,31,31,30,31,30,31]

Bonus: Print the hour:minute:second as well.



### Poker Question


Given an array of cards that represent a hand in Poker consisting of N count cards  Write a pair of functions that will determine if a hand contains a "straight" (5 cards with sequential values) or a "flush" (4 cards with same suit).  The array that is passed in is a list of tuples of the form: [("suit", value),("suit", value)...].  Where "value" is between 2-14 (Jack is 10, Queen is 11, King is 13, Ace is 14). Don't forget that the ACE can be used as a "1" as well for purposes of computing a straight.  

Example:

```    
cards = [("spades", 13), ("diamonds", 7), ("clubs", 11), ("hearts", 2), ("spades", 9), ("diamonds", 12), ("clubs", 10)]

def hasFlush(cards):
    # your code goes here, return True or False

def hasStraight(cards):
    # your code goes here, return True or False
```
    

### Design Question

Design a class or data structure that represents the board for a "Connect 4" game.  Now implement the function where a player drops a checker into one of the columns and detect if that was a winning move.

### Binary Tree Question

Imagine a binary tree where each node contains a unique letter.  Now you are given only the original pre-order and in-order traversal of the tree as a pair of strings (or array of chars).  Construct the original tree.