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

num[0] = 100;
let names = ["ali", "veli", "ayse", "hero", "josph"];
console.log(names.indexOf("ali"));
console.log(names.lastIndexOf("hero"));
//find is used to find element in array
let found = num.find(Element => Element == 5);
console.log(found);
 