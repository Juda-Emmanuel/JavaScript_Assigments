alert("Welcome To Assignments");

//1. Write a JS program to print fibonacci sequence (read about fibonacci series and then do) - At Least print 10 values :

var a = 0, b = 1;

for (var i = 0; i <= 10; i++ ) {

  var temp = a + b;
  a = b;
  b = temp;
  console.log(temp);

}


//2. What is the output of the below program ?

function outer() {

    var x = 10;
    
    function inner() {
    
    console.log(x);
    
    }
    
    return inner;
    
    }
    
    var innerFunc = outer();
    
    innerFunc(); //Output : 10.

  
//3. By what all means an array can be iterated. Please try out all loops and just for now console log the array values (Sample array: [1,2,3,4,5,6] :

// Using For Loop :
const array = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Using For of Loop :
const array1 = [1, 2, 3, 4, 5, 6];
for (const element of array1) {
  console.log(element);
}

// Using forEach Method :
const array2 = [1, 2, 3, 4, 5, 6];
array2.forEach(element => {
  console.log(element);
});

// While Loop :
const array3 = [1, 2, 3, 4, 5, 6];
let i1 = 0;
while (i1 < array3.length) {
  console.log(array3[i1]);
  i1++;
}

// Do While Loop :
const array4 = [1, 2, 3, 4, 5, 6];
let i2 = 0;
do {
  console.log(array4[i2]);
  i2++;
} while (i2 < array4.length);

//4. How to implement a function of this type mul(3)(4)(2) => result should be 24 :

function mul(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
    };
  };
}

const result = mul(3)(4)(2);
console.log(result); // Output: 24


//5.How to iterate an object in JS. Please try out all possible options Sample object = { a: 10, b: 20, c: { x: 10, y: 20 } } Please print all values of the object.

// Using For Loop :
const obj = { a: 10, b: 20, c: { x: 10, y: 20 } };
for (const key in obj) {
  console.log(obj[key]);
}

// Using Object.keys() with forEach:
const obj1 = { a: 10, b: 20, c: { x: 10, y: 20 } };
Object.keys(obj1).forEach(key => {
  console.log(obj1[key]);
});

// Object.values() with forEach:
const obj2 = { a: 10, b: 20, c: { x: 10, y: 20 } };
Object.values(obj2).forEach(value => {
  console.log(value);
});

// Using Object.entries() with forEach:
const obj3 = { a: 10, b: 20, c: { x: 10, y: 20 } };
Object.entries(obj3).forEach(([key, value]) => {
  console.log(value);
});


 /* 6. Difference between == vs === in JS ? Please explain with example ?

    == (Equality Operator):The == operator is used for equality comparison. It checks whether the values on both sides are equal, but it performs type coercion, which means it converts the values to a common type before making the comparison. This can sometimes lead to unexpected results because different data types might be considered equal when using ==.

    === ( Equality Operator): The === operator is used for strict equality comparison. It checks whether the values on both sides are equal and of the same data type. Unlike the == operator, it does not perform type coercion, so values of different types are not considered equal even if their content is the same.
*/

// Example of (Equality Operator):
console.log(10 == 10); //Result would be "True".

// Example of (Strict Equality Operator):
console.log(10 === "10"); //Result would be "False" as the value of datatype is not equal to key.


// 7. Explain JS hoisting with an example ?

/*JS Hoisting : Hoisting is a JavaScript behavior that allows variable and function declarations to be moved to the top of their containing scope during the compilation phase. This means that you can use variables and call functions before they are actually declared in the code. However, only the declarations are hoisted, not the initializations or assignments.*/

// 1.Variable Hoisting:
console.log(v); // Output would be : Uncaught ReferenceError: v is not defined (Undefined)
var v = 8;
console.log(v); // Output would be : 8. (v assigned with the Value)

// 2.Function Hoisting:

hos(); // Output: "Hello, from jude!" ( The hos(); call works without any issues even though the function declaration function hos() {...} comes after the call. This is because function declarations are hoisted to the top of their containing scope.)
function hos() {
  console.log("Hello, from Jude!");
}

// fun(); // Output: Uncaught TypeError: fun is not a function (However, with fun();, you'll encounter a TypeError because bar is not hoisted in the same way. The var fun = function() {...} statement is treated as a variable declaration, and the assignment is not hoisted. As a result, fun is still undefined when the call is made, and you cannot call an undefined value as a function.)
// var fun = function() {
//   console.log("Hello, from Jude!");
// };

// 8. Given two strings “test” and “plugin”, please write a program to output “test plugin”. Try all possible ways :

// Using String Concatenation:
const str1 = "test";
const str2 = "plugin";
const result1 = str1 + " " + str2;
console.log(result1);

// Using Template Literals:
const str10 = "test";
const str20 = "plugin";
const result2 = `${str10} ${str20}`;
console.log(result2);

// Using Array Join:
const str100 = "test";
const str200 = "plugin";
const result3 = [str100, str200].join(" ");
console.log(result3);

// Using Concatenation Assignment:
const str1000 = "test";
const str2000 = "plugin";
let result4 = "";
result4 += str1000 + " " + str2000;
console.log(result4);


//9. For the given input below, take out only the id property from the array using array.map :

let employees = [
    {
    "id": 11,
    "name":"Abhinav",
    "salary":75000
    },
    {
    "id": 2131,
    "name":"Raj",
    "salary":62000
    },
    {
    "id": 3012,
    "name":"Raj",
    "salary":32000
    }]

    let employeeIds = employees.map(employee => employee.id);
console.log(employeeIds);

// 10 .  Using the same employee array, just filter out records which has salary > 30000 :

let highSalaryEmployees = employees.filter(employee => employee.salary > 30000);
console.log(highSalaryEmployees);

//11 .  Using the same employee array, find out a record with id - 3012 :

let employeeWithId3012 = employees.find(employee => employee.id === 3012);
console.log(employeeWithId3012);

//12. What is the output of the below code? 

for (var i = 0; i < 3; i++) {
    setTimeout(function() { alert(i); }, 1000 + i);
  } // (Output : Alerting three time wwith the value of 3)
   
//13. Creating document/txt file shows how javascrip internally works : Added in separate txt file.

//14. Creating document/txt file shows how webpage rendering on browser : Added in separate txt file.

//15.  What is the output of the below program ?

const object5 = {
    message: 'Hello, World!',
    
    getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
    }
    };
    
    console.log(object5.getMessage()); // What is logged? Output : Hello, World!   
    
    
//16.  Add code to print hello world (use concepts - call, apply and bind) :

const object = {

    message: 'Hello, World!'
};

function logMessage() {
    console.log(this.message);
}

// Using call
logMessage.call(object); // Prints "Hello, World!" using call

// Using apply
logMessage.apply(object); // Prints "Hello, World!" using apply

// Using bind
const boundLogMessage = logMessage.bind(object);
boundLogMessage(); // Prints "Hello, World!" using bind


//17.  What will be the output of the below program ?

const object1 = {

  who: 'World',

  greet() {
      return `Hello, ${this.who}!`;
  },

  farewell: () => {
      return `Goodbye, ${this.who}!`;
  }
};

console.log(object1.greet()); //Output : Hello, World!
console.log(object1.farewell()); // Output : Goodbye, undefined!

// 18. Exploring few String Operations: Added in seprate JS file

// 19. Todo UI Completed.