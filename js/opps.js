

    // functions are first class citizens in js
    // function declaration
    function add(a,b){
        return a+b;
       
    }
    function avarage(a,b){
        return (a+b)/2;
    }
    // constructor function is a function that is used to create objects
    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    new Person1 = new Person('John',20);
    new Person2 = new Person('Jane',30);

    console.log(add(10,20));
    console.log(avarage(10,20)); 
    // loop in js
    // for, while, do while
    for(var i = 0; i < 10; i++){
        console.log(i);
    }
    // while loop
    var i = 0;
    while(i < 10){
        console.log(i);
        i++;
    }
    // do while loop
    var i = 0;
    do{
        console.log(i);
        i++;
    }while(i < 10);
    // break and continue
    for(var i = 0; i < 10; i++){
        if(i == 5){
            break;
        }
        console.log(i);
    }
     // classes in js is a way to create objects
    // class is a blueprint for an object
    // declare a class
    class product{
        constructor(name,price){
            this.name = name;
            this.price = price;
        }
        getinfo(){
            return this.name + ' costs ' + this.price;
        } 

    }
    // super fuction is a function that is used to call the constructor function of the parent class
    class  store extends product{
        constructor(name,price,location){
            super(name,price);
          
      
    };

    let p1 = new product('apple',10);
    let p2 = new product('banana',20);
    console.log(p1);
    // class expression
    let product1 = class{
        constructor(name,price){
            this.name = name;
            this.price = price;
        }
    }
let chair = new product1('chair',100);
// getter  is a function that is used to get the value of a property
// setter is a function that is used to set the value of a property
//  get name(){
//     return this._name;
// };
//  set setname(value){
//     this._name = value;
// }


