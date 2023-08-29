// Certainly! JavaScript offers a variety of string operations that you can use to manipulate and work with strings. Here are a few commonly used string operations:

// 1. Concatenation:
//    You can combine strings using the `+` operator or the `concat()` method.


const strh = "Hello";
const strw = "world";
const combined = strh + " " + strw; // OutPut : "Hello world"
const concatenated = strh.concat(" ", strw); // OutPut : "Hello world"
console.log(strh);
console.log(strw);
console.log(combined);
console.log(concatenated);



// 2. Length:
//    You can determine the length of a string using the `length` property.


const text = "Hello, world!";
const length = text.length; // OutPut: 13
console.log(text);
console.log(length);


// 3. Accessing Characters:
//    You can access individual characters within a string using square brackets `[]`.


const str = "JavaScript";
const firstChar = str[0]; // OutPut: "J"
console.log(str);
console.log(firstChar);

// 4. Substring and Slice:
//    You can extract a portion of a string using `substring()` or `slice()` methods.


const text1 = "Hello, world!";
const substring = text1.substring(0, 5); // OutPut: "Hello"
const sliced = text.slice(7, 12); // OutPut: "world"
console.log(text1);
console.log(substring);
console.log(sliced);


// 5. Lowercase and Uppercase:
//    You can convert strings to lowercase or uppercase using `toLowerCase()` and `toUpperCase()` methods.


const message = "Hello, World!";
const lower = message.toLowerCase(); // OutPut: "hello, world!"
const upper = message.toUpperCase(); // OutPut: "HELLO, WORLD!"
console.log(message);
console.log(lower);
console.log(upper);


// 6. Trimming:
//    The `trim()` method removes leading and trailing whitespace from a string.


const input = "   some text   ";
const trimmed = input.trim(); // OutPut: "some text"
console.log(input);
console.log(trimmed);

// 7. Searching and Finding:
//    You can search for substrings within a string using `indexOf()`, `lastIndexOf()`, `includes()`, and `startsWith()`/`endsWith()` methods.


const sentence = "JavaScript is fun!";
const position = sentence.indexOf("is"); // OutPut: 11
const includes = sentence.includes("fun"); // OutPut: true
console.log(sentence);
console.log(position);
console.log(includes);


// 8. Replacing:
//    You can replace occurrences of a substring using the `replace()` method.


const sentence1 = "JavaScript is fun!";
const newSentence = sentence1.replace("fun", "awesome"); // OutPut: "JavaScript is awesome!"
console.log(sentence1);
console.log(newSentence);


// 9. Splitting and Joining:
//    You can split a string into an array of substrings using `split()`, and join an array of strings into a single string using `join()`.


const sentence2 = "JavaScript is awesome!";
const words = sentence2.split(" "); //  OutPut: ["JavaScript", "is", "awesome!"]
const joined = words.join("-"); //  OutPut: "JavaScript-is-awesome!"
console.log(sentence2);
console.log(words);
console.log(joined);


// These are just a few examples of the many string operations available in JavaScript. Strings are an integral part of web development and programming in general, so it's important to be familiar with these operations to effectively manipulate and work with textual data.