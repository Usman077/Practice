
    // console.log practice
    console.log("Hello World");



  
    // variables practice
    // varible statement
   
    var x,y,z; //declare variable
    x = 10; y=5; //assign  variable
    z = x + y; //compute variable
    // 3 type  variable declaration in js (var, let, const)
    // difference between var and let: var is function scope, let is block scope
    // difference between var and const: var is function scope, const is block scope
    var a = 10;
    var b = 20;
    var score = a + b;
    console.log(score);
     
 
    var a = "hell to this website ";
    alert(a);

    // In  parimtive data type we have  number,string, boolean, null, undefined,char, pointer
    var c = 10;
    console.log(typeof c);// number
    var d = "hello";
    console.log(typeof d); // string
    var e = true;
    console.log(typeof e); // boolean
    var f = null;
    console.log(typeof f); // object
    var g = undefined;
    console.log(typeof g); // undefined
    var h =  2==2;
    console.log(typeof h); // boolean true
     // operators in js
    // + add, - sub, * mul, / div, % modulus, ++ increment, -- decrement, ==equal, !=not equal, === equal value and type, !== not eqal value, >greater, <less,  && logical and, || logicalor, 
   
    // statements in js
     //  if else switch case
    var a = 10;
    var b = 20;
    if(a > b){
        console.log("a is greater than b");
    }else{
        console.log("b is greater than a");
    }
    // switch case
    var a = 10;
    switch(a){
        case 10:
            console.log("a is 10");
            break;
        case 20:
            console.log("a is 20");
            break;
        case 30:
            console.log("a is 30");
            break;
        default:
            console.log("a is not 10,20,30");
            break;
    }

