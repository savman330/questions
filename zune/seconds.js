
class Zune {
    
    constructor(seconds, year){
        this.seconds = seconds;
        this.year = 1980;
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


    
   
    
    



var time = new Zune(12000);