/*
## JavaScript data types:

-> Number => An integer or a floating-point number. Example: 3, 3.234, 3e-2 etc.
-> String => It represents textual data. Example: 'hello', "hello world!" etc.
-> Boolean => Any of two values: true or false. Example: true or false
-> Undefined => a data type whose variable is not initialized. Example: let a
-> Null => denotes a null value. Example: let a = null
-> Object => It's key-value pairs of collection of data. Example: let student = { }

## Math operator:

-> Addition => +
-> Subtraction => -
-> Multiplication => *
-> Divide => /
-> Exponential => **
-> Modulo => %

## Math Method:

-> Math.floor() => This function always rounds down and returns the largest integer less than or equal to a given number.
-> Math.ceil() => This function always rounds up and returns the smaller integer greater than or equal to a given number.
-> Math.randorm() => This function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1

## Variable Declaration:

-> const => The value of a variable can not be changed
-> let => The value of a variable can be changed
-> var => The value of a variable can be changed [Not recommended]
*/

const value = Math.random() *3
console.log(Math.floor(value))