   // permitive data type
    // number, string, boolean, null, undefined, char, pointer
    // non-primitive data type
    // object, array, function, date, regexp, error, map, set, weakmap, weakset, symbol
    // objest is a collection of key-value pairs
    let book = {
        title: 'JavaScript',
        author:  'usman'    ,
        publisher: 'usman',
        year: '2020',
        price: '10000'};
    console.log(book ['price']);
    // nested
    let user = {
        name: 'usman',
        age: '20',
        address: {
            city: 'karachi',
            country: 'pakistan'
        }
    }  
    console.log(user.address.city);
    // aray in js is dynamic, it can add or remove element in array in is better for memory usage
    // dublicate element in array is allowed
    const name = ["ali", "veli", "ayse"];
    console.log(name[0]);
    //push is used to add element in array in last
    name.push("mehmet");
    console.log(name);
   let books= ["java", "python", "c++"];
    console.log(books);

    const num = [1,2,3,4,5,6,7,8,9,10];
 console.log (num[num.length-1]);
 // unshift is used to add element in array in  the begining
num.unshift(0);
console.log(num);
// pop is used to remove element in array in the last
num.pop();
console.log(num);
// shift is used to remove element in array in the begining
num.shift();
console.log(num);
 // slice is used to remove element in array in the begining and last
 // slice(start, end)
 num.slice(0,3);
    console.log(num);
num[0] = 100;
  // concat is used to add element in array in the begining and last
    // concat(array)
    num.concat([100,200,300]);
    console.log(num);
// indexOf is used to find index of element in array
// join is used to convert array to string
 let students = ["w", "x", "y", "z"];
    console.log(students.indexOf("y"));
    console.log(students.join("-"));

let names = ["ali", "veli", "ayse", "hero", "josph"];
console.log(names.indexOf("ali"));
console.log(names.lastIndexOf("hero"));
//find is used to find element in array
// arow function is 
let found = num.find(Element => Element == 5);
console.log(found);
 // filter is used to filter element in array
 // map is used to map element in array
 
 let city =[{
    name: "karachi",
    poplation: "20000",
  }
  ,{ name: "lahore",
    poplation: "30000",
  }
  ,{ name: "islamabad",
    poplation: "40000",
  }
  ,{ name: "peshawar",
    poplation: "50000",
  }
];
console.log(city.filter(city => city.poplation > "30000"))
console.log(city.map(city => city.poplation * 2))
// lexical scope is used to define variable in function 