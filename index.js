let str1 = "Ehtesham"

//Template literals for long lines and variable embading!
let str2 = `hello ${str1}!`

// console.log(str2);

//To find the length of the string!
console.log(str2.length);

//For type Chanking
console.log(typeof(str2[5]));

//To check Characaters at a specific index!
console.log(typeof(str2.charAt(5)));

//Extracts part of the string (from, to) or (start, end)!
console.log(str2.slice(3, 7));

//Create a substring from the main string!
console.log(str1.substring(2,4));

//Convert lowercase letters to uppercase!
console.log(str1.toUpperCase());

//Converts uppercase letters to lowercase!
console.log(str1.toLowerCase());

//Trim the main string to that explicit size!
console.log("Eh".trim());

//Checks if main string contains that given substring or not
console.log("Ehtesham".includes("sham"));

//Find the index number where it is present!
console.log("Ehtesham".indexOf("s"));

//Last occurance of the given argument!
console.log("Ehtesham".lastIndexOf("e"));

//Varify if it starts with the given argument!
console.log(str1.startsWith("Eh"));

//This should produce true
console.log(str1.endsWith("am"));

//Repeats the given arguments at times!
console.log(`${"Ha"}`.repeat(3));

//Replace the given string with the given argument.
console.log(`${"hi hi"}`.replace("hi", "Hey"));

//Replace all the strings similar values to the given argumant.
console.log(`${"Hi Hi Hi"}`.replaceAll("Hi", "Hey"));

//Split the String into Array of given elements of the string char.
console.log(`${"a, b, c, d"}`.split(" "));

//Concat (Add) Two or more elements.
console.log(`${"Hello"}, ${"World! "}`. concat("Everyone"));