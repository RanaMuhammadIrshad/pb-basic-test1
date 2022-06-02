// Add answers here
console.log(`********1. Los or New?*******`);
const _nameOfCity_ = function (str) {
  let myString = str.toLowerCase().substring(0, 3);

  let city1 = "_New_".substring(1, 4).toLocaleLowerCase();

  let city2 = "_Los_".substring(1, 4).toLocaleLowerCase();

  if (myString === city1) return str;

  if (myString === city2) return str;
  else return `"_The city name does not begin with Los or New_"`;
};

const returnedStr = _nameOfCity_("New York");
// const returnedStr = _nameOfCity_("newark");
// const returnedStr = _nameOfCity_("London");
console.log(returnedStr);

/* #### 2. isDivisible?
Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.

##### Examples
````javascript
isDivisible(1) ➞ false
isDivisible(1000) ➞ true
isDivisible(100) ➞ true */

console.log(`*******2. isDivisible?********`);

const _isDivisible_ = function (int) {
  if (int % 100 === 0) {
    return true;
  } else {
    return false;
  }
};

const retDivisible = _isDivisible_(100);
console.log(retDivisible);

/* #### 4. What's the weather?
Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

##### Example
````javascript
isRaining(true) ➞ 'wet day - you need an umbrella'
```` */
console.log(`********4. What's the weather?*******`);

const _isRaining_ = (par) =>
  par
    ? console.log(`_wet day - you need an umbrella_`)
    : console.log(`_dry day - leave your umbrella at home_`);

// _isRaining_(false);
_isRaining_(true);

/* ### Loops 

#### 1. Sequence
Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

##### Example
````javascript
geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'
```` */
console.log(`********1. Sequence*******`);
let result = "";
const _geometricalSequence_ = function (x = 2, y = 8) {
  for (let i = 0; i <= y; i++) {
    result += x ** i + " ";
  }

  return result;
};
const myResult = _geometricalSequence_();
console.log(`' ${myResult}'`);

/* #### 2. Multiples
Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

##### Example
````javascript
multiplesOfThree() ➞ '3 6 9 12 15' */

console.log(`******** 2. Multiples*******`);
let values = "";
const _multiplesOfThree_ = function (num1 = 3, num2 = 5) {
  for (let i = 1; i <= num2; i++) {
    values += num1 * i + " ";
  }

  return values;
};

const retVal = _multiplesOfThree_();
console.log(`' ${retVal}'`);

/* ### Math

#### 1. You've got the power
Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

##### Examples
````javascript
powerOf(3) ➞ 27
powerOf(4) ➞ 256
```` */

console.log(`*******1. You've got the power********`);

const _powerOf_ = function (num) {
  return Math.pow(num, num);
};

// const powerOfNum = _powerOf_(3);
const powerOfNum = _powerOf_(4);
console.log(powerOfNum);

// /* ### Problem Solving

/* #### 1. How many?
Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string.

##### Examples
````javascript
vowelCount("hello") ➞ 2
vowelCount("test") ➞ 1
vowelCount("fbw") ➞ 0

````  */
console.log(`********1. How many?*******`);

const _vowelCount_ = function (str) {
  let myString = str.match(/[aeiou]/gi);
  return myString === null ? 0 : myString.length;
};

const numOfVowels = _vowelCount_("hello");
// const numOfVowels = _vowelCount_("test");
// const numOfVowels = _vowelCount_("fbw");
console.log(numOfVowels);

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
