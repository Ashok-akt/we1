var a = 5;
var b = 10;
if(a > b){
    console.log(a)
}else if (b > a) {
    console.log(b)
}else {
    console.log("both are equal")
}

//problem 2
var pass1 = "ashok";
var pass2 = "ashok"
if (pass1 === pass2) {
    console.log("valid password")
}else {
    console.log("invalid password")
}

//problem 3
var num = 21;
if (num % 2 == 0){
    console.log("even")
}else {
    console.log("odd")
}

//problem 4

var dob = 1996;
var age = 2021 - dob;
if (age >= 13 && age <= 19){
    console.log("teenage")
}
else if(age >= 20 && age <= 29){
    console.log("twenties")
}

// problem 5

var a = 10;
var b = 18;
var c = 14;
// descending order

if (c > b && c > a) {
    if (b > a){
        console.log(" c b a")
    }else {
        console.log(" c a b")
    }
}else if ( b > a){
    if (a > c ){
        console.log("b a c")
    }else {
        console.log("b c a")
    }
}else {
    if (b > c){
        console.log(" a b c")
    }else {
        console.log(" a c b")
    }
}

//ascending order

if (a < b && a < c){
    if (b < c){
        console.log("a b c")
    }else {
        console.log("a c b")
    }
}else if(b < c){
    if(c < a){
        console.log("b c a")
    }else {
        console.log("b a c")
    }
}else {
    if (b < a){
        console.log("c b a")
    }else {
        console.log("c a b")
    }
}

//problem 6

var a = 10;
var b = 10;

 (a == b) ?  console.log("a = b") : console.log("different")

 // problem 7

 var month = "december"
 switch (month) {
    case "january":
         console.log("jan")
         
        break;
    case "february":
        console.log("feb")
         
        break;
    case "march":
            console.log("mar")
            
            break; 
    case "april":
                console.log("apr")
                
                break;

    case "may":
        console.log("may")

        break;   
    
    case "june":
        console.log("jun")
        
        break;

    case "july":
        console.log("jul")
        
        break;

    case "August":
        console.log("aug")
        
        break;

    case "september":
        console.log("sept")
        
        break;

    case "october":
    console.log("oct")
    
    break;

    case "november":
    console.log("nov")
    
    break;

    case "december":
    console.log("dec")
    
    break;

     default:
         console.log("wrong month")
         break;
 }
