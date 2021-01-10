var a = 3;
var b = 4;
if (a < b){
    console.log("a is smaller")
}else if (b < a){
    console.log("b is smaller")
}else {
    console.log("both are equal")
}

//problem 2
var p1 = "Ashok";
var p2 = "masai";
if (p1 !== p2){
    console.log("wrong password");
}

//problem 3

var n1 = 3;
if(n1 % 2 !== 0){
    console.log("odd")
}

//problem 4
var year = 1999;
var age = 2021 - year;
if (age >= 20 && age <= 29) {
    console.log("twenties")
    
}

var a = 19;
var b = 20;
var c = 21;

if (c > b && c > a) {
    if( b > a){
        console.log("c b a")
    }else{
        console.log("c a b")
    }
    
}else if (b > a){
    if (a > c){
        console.log("b a c")
    }else {
        console.log("b c a")
    }
}else {
    if (b > c){
        console.log(" a b c")
    }else {
        console.log("a c b")
    }
}

//problem 5

var a = 12;
var b = 10;

a > b ? console.log("a is greater") : console.log("b is greater")

var day = "Saturday";
switch (day) {
    case "Monday":
        console.log("mon")
        
        break;
    case "Tuesday":
        console.log("Tue") 
        break;   
    case "Wednesday":
        console.log("wed")
            
        break;
    case "Thursday":
          console.log("Thu")
            
        break;

    case "Friday":
        console.log("Fri")
        
        break;

    case "Saturday":
            console.log("Sat")
            
            break;
            
    case "Sunday":
        console.log("Sun")
                
                break;           
    default:
        console.log("wrong day")
        break;
}
    
