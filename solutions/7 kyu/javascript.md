## 1. [Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer](https://www.codewars.com/kata/5827bc50f524dd029d0005f2)

```javascript
const R = require('ramda');

function getFirstPython(list) {
  
  return R.find(R.propEq('language','Python'))(list) ?
    R.pipe(
      R.find(R.propEq('language','Python')),
      R.pickAll(['firstName','country']),
      R.values,
      R.join(', '))(list)
  : 'There will be no Python developers' 

}

```


completed: 04/05/2022 | 7 kyu


------


<br>


<br>

## 2. [Ones and Zeros](https://www.codewars.com/kata/578553c3a1b8d5c40300037c)

```javascript
const R = require('ramda');

const binaryArrayToNumber_ = arr => {
return parseInt(arr.join(''),2)
};

const binaryArrayToNumber = arr => {
return R.pipe(R.join(''),parseBinary)(arr)
};



// helpers
const parseBinary = (binnary) => parseInt(binnary,2);,const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''),2);
};
```


completed: 03/05/2022 | 7 kyu


------


<br>


<br>

## 3. [Split In Parts](https://www.codewars.com/kata/5650ab06d11d675371000003)

```javascript
var splitInParts = function(s, partLength){
  let regex = new RegExp(".{1," + partLength + "}", "g");
  return s.match(regex).join(' ');
}
```


completed: 06/01/2021 | 7 kyu


------


<br>


<br>

## 4. [Band name generator](https://www.codewars.com/kata/59727ff285281a44e3000011)

```javascript
function bandNameGenerator(str) {
  const capitalized = str[0].toUpperCase();
  const rem = str.slice(1)
  
  if (str[0] === str[str.length-1]) { 
    return capitalized + rem + rem 
  } else return "The "+ capitalized + rem;
},function bandNameGenerator(str) {
  const firstLetter = str[0].toUpperCase();
  const rem = [...str].splice(1).join('');
  if (str[0] === str[str.length -1]) return firstLetter + rem + rem;
  else return "The "+firstLetter + rem;
}

```


completed: 04/01/2021 | 7 kyu


------


<br>


<br>

## 5. [Refactored Greeting](https://www.codewars.com/kata/5121303128ef4b495f000001)

```javascript
function Person(myName, yourName) {
  this.name = myName;
  this.greet = function(yourName){ 
    return "Hello " + yourName + ", my name is " + myName;
  }
}
```


completed: 28/12/2020 | 7 kyu


------


<br>


<br>

## 6. [Boiled Eggs](https://www.codewars.com/kata/52b5247074ea613a09000164)

```javascript
function cookingTime(eggs) {
  if (!Number.isInteger(eggs)) return false;
  if (eggs < 0) return false;
  if (eggs === 0) return 0;
  if (eggs <= 8) return 5;
  else return Math.ceil(eggs/8)*5;
}
```


completed: 27/12/2020 | 7 kyu


------


<br>


<br>

## 7. [Gauß needs help! (Sums of a lot of numbers).](https://www.codewars.com/kata/54df2067ecaa226eca000229)

```javascript
function f(n){
  if (n < 1 || !Number.isInteger(n) ) return false;
   return (n*(n + 1)) / 2;
};
```


completed: 27/12/2020 | 7 kyu


------


<br>


<br>

## 8. [A Rule of Divisibility by 7](https://www.codewars.com/kata/55e6f5e58f7817808e00002e)

```javascript
function seven(m) {
    let steps = 0;
    if (m < 100) return [m,steps];
    let mArr = [...""+m];
    while (mArr.length >= 2) {
      steps ++;
      let y = parseInt(mArr.pop())*2;
      let x = parseInt(mArr.join(''));
      if (x-y < 100) return [x-y,steps];
      mArr = [...""+(x-y)];
      
      

    }
}
```


completed: 15/12/2020 | 7 kyu


------


<br>


<br>

## 9. [Find all occurrences of an element in an array](https://www.codewars.com/kata/59a9919107157a45220000e1)

```javascript
const findAll = (arr, n) => {
  let indexes = [];
  arr.forEach((num,i) => num === n && indexes.push(i))
  return indexes;
}
```


completed: 12/12/2020 | 7 kyu


------


<br>


<br>

## 10. [Basic Sequence Practice](https://www.codewars.com/kata/5436f26c4e3d6c40e5000282)

```javascript
function sumOfN(n) {
  let arr = [];
  let negative = false;
  if (n < 0) negative = true, n = -n;
    
 for (let i = 0; i <= n; i ++) {
   arr[i] = i
   if (arr[i-1] > 0) arr[i] += arr[i-1]
 }
  if (negative) {
    return arr.map(nr => {
      // 0 * -1 = -0
      return nr > 0 ? nr * -1 : 0
    })
    } else return arr
};
```


completed: 05/12/2020 | 7 kyu


------


<br>


<br>

## 11. [Factorial](https://www.codewars.com/kata/57a049e253ba33ac5e000212)

```javascript
factorial = n => n < 1 ? 1 : n * factorial(n-1);
```


completed: 29/11/2020 | 7 kyu


------


<br>


<br>

## 12. [Indexed capitalization](https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1)

```javascript
function capitalize(s,arr){
  let sArr = s.split('');
  arr.map(val => {
    return sArr.splice(val,1,s.charAt(val).toUpperCase());
  })
  return sArr.join('');
};
```


completed: 29/11/2020 | 7 kyu


------


<br>


<br>

## 13. [Small enough? - Beginner](https://www.codewars.com/kata/57cc981a58da9e302a000214)

```javascript
function smallEnough(a, limit){
  return a.every(num => num <= limit);
}
```


completed: 29/11/2020 | 7 kyu


------


<br>


<br>

## 14. [Simple remove duplicates](https://www.codewars.com/kata/5ba38ba180824a86850000f7)

```javascript
function solve(arr){
  return [...new Set(arr.reverse())].reverse();
}
```


completed: 29/11/2020 | 7 kyu


------


<br>


<br>

## 15. [Reverse a Number](https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5)

```javascript
function reverseNumber(n) {
  if (n < 0) return -(""+(-n)).split('').reverse().join('');
  else return +(""+n).split('').reverse().join('');
}
```


completed: 29/11/2020 | 7 kyu


------


<br>


<br>

## 16. [Averages of numbers](https://www.codewars.com/kata/57d2807295497e652b000139)

```javascript
function averages(numbers) {
  // remove trash inputs
 if (!numbers || numbers.length <= 1) return [];
  else return numbers.map((num,i,arr) => (num + arr[i+1])/2)
  .slice(0,-1);
}
```


completed: 29/11/2020 | 7 kyu


------


<br>


<br>

## 17. [Halving Sum](https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d)

```javascript
function halvingSum(n) {
  if (n < 1) return 0;
  return n + halvingSum(Math.floor(n/2));
    
}

```


completed: 29/11/2020 | 7 kyu


------


<br>


<br>

## 18. [Complete The Pattern #1 ](https://www.codewars.com/kata/5572f7c346eb58ae9c000047)

```javascript
function pattern(n){
  var output="";
  // remove trash inputs
  if (n < 0) return '';
  
  for (let i = 1; i <= n; i++) {
    output = output +=((""+i).repeat(i));
    
    // add newline except last line
    if ( i !== n) output += "\n";
  }
  return output;
}
```


completed: 29/11/2020 | 7 kyu


------


<br>


<br>

## 19. [Alphabet war](https://www.codewars.com/kata/59377c53e66267c8f6000027)

```javascript
function alphabetWar(fight)
{
  const  left = {'w': 4, 'p': 3, 'b': 2, 's': 1};
  const  right = {'m': 4, 'q': 3, 'd': 2, 'z': 1};
  
  // w p b s  |0|   m q d z
  let balance = 0;

  fight.split('').forEach(x => {
    if (x in left) balance += left[x];
    else if (x in right) balance -= right[x];
  })
  if (balance === 0) return "Let's fight again!";
  else return balance > 0 ? 'Left side wins!' : 'Right side wins!';
}
```


completed: 29/11/2020 | 7 kyu


------


<br>


<br>

## 20. [Sort Out The Men From Boys ](https://www.codewars.com/kata/5af15a37de4c7f223e00012d)

```javascript
function menFromBoys(arr){
  arr = [...new Set(arr)]
  let men = arr.filter(x=> x % 2 === 0 ).sort((a,b) => a-b);
  let boys = arr.filter(x=> x % 2 !== 0 ).sort((a,b) => b-a);
  return men.concat(boys);
},function menFromBoys(arr){
  let men = [...new Set(arr)].filter(x=> x % 2 === 0 ).sort((a,b) => a-b);
  let boys = [...new Set(arr)].filter(x=> x % 2 !== 0 ).sort((a,b) => b-a);
  return men.concat(boys);
}
```


completed: 28/11/2020 | 7 kyu


------


<br>


<br>

## 21. [Row Weights](https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9)

```javascript
function rowWeights(arr){
  let teams = [0,0];
  arr.forEach((m,i) => i % 2 === 0 ? teams[0] += m : teams[1] += m);
  return teams;
}
```


completed: 25/11/2020 | 7 kyu


------


<br>


<br>

## 22. [Coloured Triangles](https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111)

```javascript
function triangle(row) {
  const color = {
    'GG': 'G',
    'BB': 'B',
    'RR': 'R',
    'BG': 'R',
    'RG': 'B',
    'BR': 'G',
    'GB': 'R',
    'GR': 'B',
    'RB': 'G',
  }
  let res = '';

  if (row.length === 1) return row;
  for (let i = 0; i < row.length -1; i++) {
    res += color[row[i]+row[i+1]]
  }
  return (res === 1 ) ? row : triangle(res);
}

```


completed: 24/11/2020 | 7 kyu


------


<br>


<br>

## 23. [Triangular Treasure](https://www.codewars.com/kata/525e5a1cb735154b320002c8)

```javascript
// Return the nth triangular number
function triangular( n ) {
  
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i+1;
  }
  return sum;
}

```


completed: 20/11/2020 | 7 kyu


------


<br>


<br>

## 24. [Caffeine Script](https://www.codewars.com/kata/5434283682b0fdb0420000e6)

```javascript
function caffeineBuzz(n){
  let res;
  if (n % 3 === 0 && n % 4 === 0 ) res = "Coffee";
  else if (n % 3 === 0) res = "Java";
  else return "mocha_missing!";
  if (n % 2 === 0) res += "Script";
  return res;
}
```


completed: 17/11/2020 | 7 kyu


------


<br>


<br>

## 25. [Find the vowels](https://www.codewars.com/kata/5680781b6b7c2be860000036)

```javascript
function vowelIndices(word){
  const regex = /[aeiouy]/gi;
  let indexes = [];
  word.split('').forEach((c,i) => c.match(regex) && indexes.push(i+1));
  return indexes;
}
```


completed: 15/11/2020 | 7 kyu


------


<br>


<br>

## 26. [Love vs friendship](https://www.codewars.com/kata/59706036f6e5d1e22d000016)

```javascript
function wordsToMarks(string){
 const alphabet = [...'abcdefghijklmnopqrstuvwxyz'.split('')]
 return string.split('').reduce((acc, char) => acc += alphabet.indexOf(char )+1,0);
}
```


completed: 15/11/2020 | 7 kyu


------


<br>


<br>

## 27. [Even or Odd - Which is Greater?](https://www.codewars.com/kata/57f7b8271e3d9283300000b4)

```javascript
function evenOrOdd(str) {
  const arr = str.split('');
  const odd = arr.reduce((acc, e) => e % 2 !== 0 ? acc + parseInt(e) : acc, 0 )
  const even = arr.reduce((acc, e) => e % 2 === 0 ? acc + parseInt(e) : acc, 0 )
  if (odd === even) return 'Even and Odd are the same';
  if (odd > even) return 'Odd is greater than Even';
  else return 'Even is greater than Odd';
}
```


completed: 04/11/2020 | 7 kyu


------


<br>


<br>

## 28. [Sum of Minimums!](https://www.codewars.com/kata/5d5ee4c35162d9001af7d699)

```javascript
function sumOfMinimums(arr) {
  return arr.reduce((a,b) => a + Math.min(...b) ,0)
}
```


completed: 23/10/2020 | 7 kyu


------


<br>


<br>

## 29. [Maximum Multiple](https://www.codewars.com/kata/5aba780a6a176b029800041c)

```javascript
function maxMultiple(divisor, bound){
  return bound - (bound % divisor);
},function maxMultiple(divisor, bound){
  let res = 0;
  for (let i = bound; i>0; i--){
    if (i % divisor === 0) return res = i;
  }
  return res;
}
```


completed: 23/10/2020 | 7 kyu


------


<br>


<br>

## 30. [Moves in squared strings (I)](https://www.codewars.com/kata/56dbe0e313c2f63be4000b25)

```javascript
function vertMirror(str) {
  return str.split('\n').map(s => s.split('').reverse().join('')).join('\n');
}
function horMirror(str) {
    return str.split('\n').reverse().join('\n');
}
function oper(fct, s) {
  return fct(s);
}
```


completed: 23/10/2020 | 7 kyu


------


<br>


<br>

## 31. [Largest 5 digit number in a series](https://www.codewars.com/kata/51675d17e0c1bed195000001)

```javascript
function solution(digits){
  let res = 0;

  for (let i = 0; i < digits.length -4; i++) {
    let nr = parseInt(digits.slice(i,i+5));
    if (nr > res) res = nr;
  }
  return res;
}
```


completed: 23/10/2020 | 7 kyu


------


<br>


<br>

## 32. [All Star Code Challenge #22](https://www.codewars.com/kata/5865cff66b5699883f0001aa)

```javascript
function toTime(seconds) {
  let hrs = ~~(seconds / 3600);
  let mins = ~~((seconds % 3600) / 60);
  return `${hrs} hour(s) and ${mins} minute(s)`;
}
```


completed: 22/10/2020 | 7 kyu


------


<br>


<br>

## 33. [Homogenous arrays](https://www.codewars.com/kata/57ef016a7b45ef647a00002d)

```javascript
function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  function isHomogenous(arr) { 
    return arr.length && arr.every((el,i) => typeof arr[0] === typeof(arr[i])); 
  }
  
  return arrays.filter(isHomogenous);
}
```


completed: 22/10/2020 | 7 kyu


------


<br>


<br>

## 34. [Parts of a list](https://www.codewars.com/kata/56f3a1e899b386da78000732)

```javascript
function partlist(arr) {
    return arr.map((_, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1);
}



```


completed: 22/10/2020 | 7 kyu


------


<br>


<br>

## 35. [Flatten and sort an array](https://www.codewars.com/kata/57ee99a16c8df7b02d00045f)

```javascript
"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.reduce((acc,val) => acc.concat(val)).sort((a,b) => a-b);
}
```


completed: 22/10/2020 | 7 kyu


------


<br>


<br>

## 36. [JavaScript Array Filter](https://www.codewars.com/kata/514a6336889283a3d2000001)

```javascript
function getEvenNumbers(numbersArray){
  return numbersArray.filter(n => n % 2 === 0 && n);
}
```


completed: 22/10/2020 | 7 kyu


------


<br>


<br>

## 37. [Sort arrays - 1](https://www.codewars.com/kata/51f41b98e8f176e70d0002a8)

```javascript
// input: names - unsorted array
// output: sorted array
sortme = function( names ){ 
  return names.sort();
}
```


completed: 22/10/2020 | 7 kyu


------


<br>


<br>

## 38. [Number Of Occurrences](https://www.codewars.com/kata/52829c5fe08baf7edc00122b)

```javascript
Array.prototype.numberOfOccurrences = function(n) {
  return this.filter(val => val === n).length;
}
```


completed: 22/10/2020 | 7 kyu


------


<br>


<br>

## 39. [Sum of angles](https://www.codewars.com/kata/5a03b3f6a1c9040084001765)

```javascript
function angle(n) {
  return (n-2) * 180;
}
```


completed: 22/10/2020 | 7 kyu


------


<br>


<br>

## 40. [Greet Me](https://www.codewars.com/kata/535474308bb336c9980006f2)

```javascript
var greet = function(name) {
  return `Hello ${name.charAt(0).toUpperCase()+name.toLowerCase().slice(1)}!`;
};
```


completed: 21/10/2020 | 7 kyu


------


<br>


<br>

## 41. [Get key/value pairs as arrays](https://www.codewars.com/kata/515dfd2f1db09667a0000003)

```javascript
function keysAndValues(data){
  return [
  Object.keys(data),
  Object.values(data)
  ];
  
}
```


completed: 21/10/2020 | 7 kyu


------


<br>


<br>

## 42. [Palindrome chain length](https://www.codewars.com/kata/525f039017c7cd0e1a000a26)

```javascript
var palindromeChainLength = function(n) {
  let res = 0;
  let pali = parseInt((n+"").split('').reverse().join(''))
   while (pali !== n) {
      n = parseInt(n) + parseInt(pali);
      pali = parseInt((n + "").split('').reverse().join(''));
      ++res;
    }
  return res;
};
```


completed: 21/10/2020 | 7 kyu


------


<br>


<br>

## 43. [Power of two](https://www.codewars.com/kata/534d0a229345375d520006a0)

```javascript
function isPowerOfTwo(n){
  if(n==0) { return false; }
        while(n != 1)
        {
            n = n/2;
            if(n%2 != 0 && n != 1){ return false; }
        }
        return true;
}
```


completed: 21/10/2020 | 7 kyu


------


<br>


<br>

## 44. [Flatten](https://www.codewars.com/kata/5250a89b1625e5decd000413)

```javascript
var flatten = function (array){
  return array.reduce((acc, val) => acc.concat(val), []);
  }
```


completed: 21/10/2020 | 7 kyu


------


<br>


<br>

## 45. [Building Strings From a Hash](https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2)

```javascript
function solution(pairs){
 const str = [...Object.entries(pairs)].map(([a,b]) => `${a} = ${b}`);
 return str.join(',');

 }
```


completed: 20/10/2020 | 7 kyu


------


<br>


<br>

## 46. [Sum of the first nth term of Series](https://www.codewars.com/kata/555eded1ad94b00403000071)

```javascript
function SeriesSum(n)
{
  let rev = 1;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      res = 1;
    }
    else { 
      rev += 3; 
      res = res + ( 1 / rev );
    }
  }
  return res.toFixed(2)
}
```


completed: 20/10/2020 | 7 kyu


------


<br>


<br>

## 47. [Sorted? yes? no? how?](https://www.codewars.com/kata/580a4734d6df748060000045)

```javascript
function isSortedAndHow(arr) {
  let ascending = 0;
  let descending = 0;
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] < arr[i+1]) ascending++;
    if (arr[i] > arr[i+1]) descending++
  }
  if (ascending > 0 && descending === 0) return 'yes, ascending';
  else if (descending > 0 && ascending === 0) return 'yes, descending';
  else return 'no';
}
```


completed: 20/10/2020 | 7 kyu


------


<br>


<br>

## 48. [Fix string case](https://www.codewars.com/kata/5b180e9fedaa564a7000009a)

```javascript
function solve(s){
  const upperCase = s.match(/[A-Z]/g);
  const lowerCase = s.match(/[a-z]/g);
    if (!upperCase || !lowerCase ) return s;
  else return upperCase.length > lowerCase.length ? s.toUpperCase() : s.toLowerCase();
}
```


completed: 20/10/2020 | 7 kyu


------


<br>


<br>

## 49. [Functional Addition](https://www.codewars.com/kata/538835ae443aae6e03000547)

```javascript
function add(n) {
  return function(m) {
    return n + m;
  };
}

```


completed: 19/10/2020 | 7 kyu


------


<br>


<br>

## 50. [Round up to the next multiple of 5](https://www.codewars.com/kata/55d1d6d5955ec6365400006d)

```javascript
function roundToNext5(n){
  return Math.ceil(n/5)*5;
}
```


completed: 15/10/2020 | 7 kyu


------


<br>


<br>

## 51. [Predict your age!](https://www.codewars.com/kata/5aff237c578a14752d0035ae)

```javascript
function predictAge(...ages){
  return Math.floor(Math.sqrt([...ages].map(n => n*n).reduce((a,b) => a+b, 0)) / 2);
}
```


completed: 15/10/2020 | 7 kyu


------


<br>


<br>

## 52. [Sort the Gift Code](https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3)

```javascript
function sortGiftCode(code){
  return code.split('').sort().join('');
}
```


completed: 15/10/2020 | 7 kyu


------


<br>


<br>

## 53. [Find the capitals](https://www.codewars.com/kata/539ee3b6757843632d00026b)

```javascript
var capitals = function (word) {
  let arr = word.split('');
  return word.split('').map((c,i) => c === c.toUpperCase() && i).filter(Number.isFinite);
};
```


completed: 15/10/2020 | 7 kyu


------


<br>


<br>

## 54. [Make a function that does arithmetic!](https://www.codewars.com/kata/583f158ea20cfcbeb400000a)

```javascript
function arithmetic(a, b, operator){
  switch (operator) {
      case 'add':
      return a + b;
      case 'subtract':
      return a - b;
      case 'multiply':
      return a * b;
      case 'divide':
      return a / b;
      default:
        console.log(`Sorry, invalid operator`);
  }
},function arithmetic(a, b, o){
  const operators = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
  }
  return eval(a + operators[o] + b);
}
```


completed: 15/10/2020 | 7 kyu


------


<br>


<br>

## 55. [Categorize New Member](https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa)

```javascript
function openOrSenior(data){
  return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior':'Open');
},function openOrSenior(data){
  return data.map(senior => senior[0] >= 55 && senior[1] > 7 ? 'Senior' : 'Open');
}
```


completed: 14/10/2020 | 7 kyu


------


<br>


<br>

## 56. [Sentences should start with capital letters.](https://www.codewars.com/kata/5bf774a81505a7413400006a)

```javascript
function fix(paragraph){
  if (paragraph === '') return '';
  const arr = paragraph.split('. ');
  return arr.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('. ');
}
```


completed: 14/10/2020 | 7 kyu


------


<br>


<br>

## 57. [Remove duplicate words](https://www.codewars.com/kata/5b39e3772ae7545f650000fc)

```javascript
function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ');
}
```


completed: 12/10/2020 | 7 kyu


------


<br>


<br>

## 58. [Sum of numbers from 0 to N](https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763)

```javascript
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) return count+"<0";
    if (count === 0) return "0=0";
    
    let chain = '';
    let sum = 0;
    
    for (let i = 0; i <= count; i ++) {
      if (i === count) { 
        chain = chain.concat(`${i} =`)
      } else
      chain = chain.concat(`${i}+`);
      sum += i;
    }
    return chain +" "+sum;
  };

  return SequenceSum;

})();
```


completed: 12/10/2020 | 7 kyu


------


<br>


<br>

## 59. [Remove anchor from URL](https://www.codewars.com/kata/51f2b4448cadf20ed0000386)

```javascript
function removeUrlAnchor(url){
  let index = url.indexOf('#');
  return index !== -1 ? url.slice(0,index) : url;
}
```


completed: 12/10/2020 | 7 kyu


------


<br>


<br>

## 60. [Are the numbers in order?](https://www.codewars.com/kata/56b7f2f3f18876033f000307)

```javascript
function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
},function inAscOrder(arr) {
  const sArr = [...arr].sort((a, b) => a - b)
  let sorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sArr[i]) {
      sorted = false;
      break;
    }
  }
  return sorted;
}
```


completed: 12/10/2020 | 7 kyu


------


<br>


<br>

## 61. [Sort Numbers](https://www.codewars.com/kata/5174a4c0f2769dd8b1000003)

```javascript
function solution(nums){
  if (!nums) return []
  return nums.sort((a,b) => a - b);
}
```


completed: 12/10/2020 | 7 kyu


------


<br>


<br>

## 62. [The highest profit wins!](https://www.codewars.com/kata/559590633066759614000063)

```javascript
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
},function minMax(arr){
  console.log(arr)
  arr.sort((a,b) => a - b);
  return [arr[0], arr[arr.length - 1]];
}
```


completed: 12/10/2020 | 7 kyu


------


<br>


<br>

## 63. [No oddities here](https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce)

```javascript
function noOdds( values ){
  return values.filter(x => x % 2 === 0);
}
```


completed: 12/10/2020 | 7 kyu


------


<br>


<br>

## 64. [Summing a number's digits](https://www.codewars.com/kata/52f3149496de55aded000410)

```javascript
function sumDigits(number) {
  return [...Math.abs(number)+""].reduce((a,b) => parseInt(a)+ parseInt(b), 0);
}

```


completed: 12/10/2020 | 7 kyu


------


<br>


<br>

## 65. [Factorial](https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc)

```javascript
function factorial(n)
{
  if ( n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12');
  if (n > 1 ) return n * factorial(n -1);
  else return 1;
}


```


completed: 12/10/2020 | 7 kyu


------


<br>


<br>

## 66. [Find the middle element](https://www.codewars.com/kata/545a4c5a61aa4c6916000755)

```javascript
var gimme = function (inputArray) {
  const sorted = [...inputArray].sort((a,b) => a - b);
  return inputArray.indexOf(sorted[1])
};
```


completed: 11/10/2020 | 7 kyu


------


<br>


<br>

## 67. [Sum of a sequence](https://www.codewars.com/kata/586f6741c66d18c22800010a)

```javascript
const sequenceSum = (begin, end, step) => {
  let count = 0;
  for (let i = begin; i <= end; i += step) {
    count += i
  }
  return count;
};
```


completed: 11/10/2020 | 7 kyu


------


<br>


<br>

## 68. [Longest vowel chain](https://www.codewars.com/kata/59c5f4e9d751df43cf000035)

```javascript
function solve(s){
  const regex = /[^aoeiu]/i
  return Math.max(...s.split(regex).map(c => c.length));
}


```


completed: 11/10/2020 | 7 kyu


------


<br>


<br>

## 69. [Recursion #2 - Fibonacci](https://www.codewars.com/kata/569512b7707bc1b88200002f)

```javascript
const fibonacci = n => {
  if ( n < 2) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1)
};
```


completed: 10/10/2020 | 7 kyu


------


<br>


<br>

## 70. [Recursion #1 - Factorial](https://www.codewars.com/kata/5694cb0ec554589633000036)

```javascript
const factorial = n => {
  if ( n === 1 || n === 0) {
    return 1;
  }
   return n * factorial( n - 1 );
};
```


completed: 10/10/2020 | 7 kyu


------


<br>


<br>

## 71. [Recursion 101](https://www.codewars.com/kata/5b752a42b11814b09c00005d)

```javascript
function solve(a,b){
  while (a >= (2 * b) || b >= (2 * a)) {
    if (a == 0 || b == 0) {
      return [a, b];
    } else if (a >= (2 * b)) {
      a =a - (2 * b);
    } else if (b >= 2 * a) {
      b =b - (2 * a);
    }
  }
  return [a, b];
}
```


completed: 10/10/2020 | 7 kyu


------


<br>


<br>

## 72. [Printer Errors](https://www.codewars.com/kata/56541980fa08ab47a0000040)

```javascript
function printerError(s) {
  let regex = /[n-z]/gi;
  let errors = Array.from(s).filter( x=> x.match(regex));
  return `${errors.length}/${s.length}`;
}
```


completed: 09/10/2020 | 7 kyu


------


<br>


<br>

## 73. [max diff - easy](https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095)

```javascript
function maxDiff(list) {
  if (!list.length) { return 0 };
  return Math.max(...list) - Math.min(...list);
};
```


completed: 08/10/2020 | 7 kyu


------


<br>


<br>

## 74. [Breaking chocolate problem](https://www.codewars.com/kata/534ea96ebb17181947000ada)

```javascript
function breakChocolate(n,m) {
  if ([n,m].includes(0)) {return 0 };
  return n*m -1;
}
```


completed: 07/10/2020 | 7 kyu


------


<br>


<br>

## 75. [Find the divisors! ](https://www.codewars.com/kata/544aed4c4a30184e960010f4)

```javascript
function divisors(n) {
const arr = [...Array(n).keys()].filter((x) => x !== 1 && n % x  === 0);
  return arr.length ? arr : `${n} is prime`;
};
```


completed: 07/10/2020 | 7 kyu


------


<br>


<br>

## 76. [Credit Card Mask](https://www.codewars.com/kata/5412509bd436bd33920011bc)

```javascript
// return masked string
function maskify(cc) {
  let str = cc+"";
  if (cc.length < 4) {
    return cc;
  } else return "#".repeat(str.length -4)+str.slice(str.length -4);

}

```


completed: 06/10/2020 | 7 kyu


------


<br>


<br>

## 77. [Find the next perfect square!](https://www.codewars.com/kata/56269eb78ad2e4ced1000013)

```javascript
function findNextSquare(sq) {
  let sqrted = Math.sqrt(sq)
  return Number.isInteger(sqrted) ? (sqrted +1) * (sqrted +1) : -1;
}
```


completed: 05/10/2020 | 7 kyu


------


<br>


<br>

## 78. [Two Oldest Ages](https://www.codewars.com/kata/511f11d355fe575d2c000001)

```javascript
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  return ages.sort((a,b) => a - b).slice(-2);
}

```


completed: 05/10/2020 | 7 kyu


------


<br>


<br>

## 79. [Max-min arrays](https://www.codewars.com/kata/5a090c4e697598d0b9000004)

```javascript
function solve(arr){
  const sorted = [...arr].sort((a,b) => a - b);
  return arr.map((_, i) => (i % 2 === 0 ? sorted.pop() : sorted.shift() ));
};


```


completed: 04/10/2020 | 7 kyu


------


<br>


<br>

## 80. [Fizz Buzz](https://www.codewars.com/kata/5300901726d12b80e8000498)

```javascript
function fizzbuzz(n) {
  const arr = [...new Array(n)].map((e,i) => {
  let num = i + 1;
  let fizz = (num % 3 == 0);
  let buzz = (num % 5 == 0);
    
    if (fizz && buzz) { return 'FizzBuzz'};
    if (fizz) { return 'Fizz'};
    if (buzz) { return 'Buzz'};
    return num;
  })
  return arr;
}
,// Return an array
function fizzbuzz(n) {
  console.log(n)
  const arr = [...new Array(n)].map( (num, index) =>  {
    if ((index + 1) % 3 === 0 && (index + 1) % 5 === 0 ) {
      return 'FizzBuzz';
    }
    if ((index + 1) % 3 === 0) {
      return 'Fizz';
    }
    if ((index + 1) % 5 === 0) {
      return 'Buzz';
    }
    return index + 1;
  });
  return arr;
}

```


completed: 03/10/2020 | 7 kyu


------


<br>


<br>

## 81. [Count the divisors of a number](https://www.codewars.com/kata/542c0f198e077084c0000c2e)

```javascript
function getDivisorsCnt(n){
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  } 
  return d;
}
```


completed: 03/10/2020 | 7 kyu


------


<br>


<br>

## 82. [Form The Minimum](https://www.codewars.com/kata/5ac6932b2f317b96980000ca)

```javascript
function minValue(values){
  const newArr = [...new Set(values)].sort((a,b) => a - b);
  return parseInt(newArr.map(n=> n+"").join(''),10);
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 83. [The Coupon Code](https://www.codewars.com/kata/539de388a540db7fec000642)

```javascript
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) { return false; }
  if (Date.parse(currentDate) > Date.parse(expirationDate )) {return false; }
  return true;
},function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode ) { return false }
  if (Date.parse(currentDate) > Date.parse(expirationDate)) { return false }
  else return true
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 84. [Most digits](https://www.codewars.com/kata/58daa7617332e59593000006)

```javascript
function findLongest(array){
 let digitLengths = array.map(n => (n+"").length );
  let index = digitLengths.indexOf(Math.max(...digitLengths));

  return array[index];
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 85. [Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

```javascript
function capitalize(s){
  let newStr = s.toLowerCase().split('');
  let s1, s2;
  
  s1= newStr
    .map((character, index) => index % 2 ? character : character.toUpperCase())
    .join('');
  s2= newStr
    .map((character, index) => index % 2 ? character.toUpperCase() : character)
    .join('');
  return [s1, s2];
};


```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 86. [Sort array by string length](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)

```javascript
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 87. [Testing 1-2-3](https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9)

```javascript
const number = arr => {
  return arr.map((line,index) => (index + 1)+ ": "+ line);
},var number=function(array) {

  let newArr = [];
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    newArr.push(count+": "+array[i])
    count++
  }

  return newArr;
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 88. [Find the stray number](https://www.codewars.com/kata/57f609022f4d534f05000024)

```javascript
function stray(numbers) {
  return numbers.reduce((a,b) => a ^ b);
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 89. [Money, Money, Money](https://www.codewars.com/kata/563f037412e5ada593000114)

```javascript
function calculateYears(principal, interest, tax, desired) {
  let P = principal, I = interest, T = tax, D = desired, Y = 0;
  if (P>=D) { return 0 };
  while (P <= D ) {
      P += ((P * I) - ((P * I) * T))
      Y++
    };

  return Y;
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 90. [Don't give me five!](https://www.codewars.com/kata/5813d19765d81c592200001a)

```javascript
function dontGiveMeFive(start, end) {
  let arr = [];
  let i = start;
  while ( i <= end ) {
    !(i+"").includes("5") && arr.push(i) 
    i++
  }
  return arr.length;
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 91. [String ends with?](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d)

```javascript
function solution(str, ending){
  let special = /[\[\\\^\$\.\|\?\*\+\(\)]/g;
  
  // decontaminate
  if ( ending.match(special)) {
   ending = ending.split('').map(c => c.match(special) ? "\\"+c : c).join('');
  };
  
  const regex = new RegExp(ending +"$");

  return str.match(regex) ? true : false ;
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 92. [Odd or Even?](https://www.codewars.com/kata/5949481f86420f59480000e7)

```javascript
function oddOrEven(array) {
   return array.reduce((a,b) => a + b, 0) % 2 ? 'odd' : 'even';
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 93. [Reverse words](https://www.codewars.com/kata/5259b20d6021e9e14c0010d4)

```javascript
function reverseWords(str) {
  return str
          .split(' ')
          .map(w => w
                     .split('')
                     .reverse()
                     .join(''))
          .join(' ');
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 94. [Remove the minimum](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)

```javascript
function removeSmallest(numbers) {
  let removed = [...numbers];
  let indexOfMin = removed.indexOf(Math.min(...removed));
  removed.splice(indexOfMin,1);
  
  return removed;
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 95. [Number of People in the Bus](https://www.codewars.com/kata/5648b12ce68d9daa6b000099)

```javascript
var number = function(busStops){
  return busStops.reduce((rem,[on, off]) => rem += on - off, 0);
},var number = function(busStops){
  return busStops.map( stop => stop[0] - stop[1] ).reduce((a,b) => a + b, 0);
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 96. [Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139)

```javascript
function addBinary(a,b) {
 return (a + b).toString(2);
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 97. [Friend or Foe?](https://www.codewars.com/kata/55b42574ff091733d900002f)

```javascript
function friend(friends){
  return friends.filter( f => f.length === 4);
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 98. [Is this a triangle?](https://www.codewars.com/kata/56606694ec01347ce800001b)

```javascript
function isTriangle(a,b,c) {
 const sorted =  [a,b,c].sort((a,b) => a - b);
   return sorted[0] + sorted[1] > sorted[2];
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 99. [Regex validate PIN code](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132)

```javascript
function validatePIN (pin) {
  return /^([\d]{6})$|^([\d]{4})$/g.test(pin);
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 100. [Two to One](https://www.codewars.com/kata/5656b6906de340bd1b0000ac)

```javascript
function longest(s1, s2) {
  return [
    ...new Set([...s1.split(''),...s2.split('')])
    ]
    .sort()
    .join('');
}
```


completed: 02/10/2020 | 7 kyu


------


<br>


<br>

## 101. [Growth of a Population](https://www.codewars.com/kata/563b662a59afc2b5120000c6)

```javascript
function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
      p0 = p0 + p0 * (percent/100) + aug
    years++
    }
  return years;
}

```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 102. [List Filtering](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd)

```javascript
function filter_list(l) {
  return l.filter(e =>typeof e !== 'string');
}
```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 103. [Beginner Series #3 Sum of Numbers](https://www.codewars.com/kata/55f2b110f61eb01779000053)

```javascript
function getSum( a,b ) {
  let sorted = [a,b].sort((a,b) => a - b);
  let sum = 0;

   for (let i = sorted[0]; i <= sorted[1]; i++) {
     sum += i;
   }
  return sum;
}
```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 104. [Jaden Casing Strings](https://www.codewars.com/kata/5390bac347d09b7da40006f6)

```javascript
String.prototype.toJadenCase = function () {
  return this.split(' ')
         .map(w => w[0]
         .toUpperCase() + w.slice(1))
         .join(' ');
};
```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 105. [Complementary DNA](https://www.codewars.com/kata/554e4a2f232cdd87d9000038)

```javascript
function DNAStrand(dna){

  return dna.replace(/[GCTA]/g, c =>  pair[c] );
}
let pair = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'T',
  },function DNAStrand(dna){
  return dna.split('').map( c => {
    if (c == 'A') { return c='T'}
    if (c == 'T') { return c='A'}
    if (c == 'G') { return c='C'}
    if (c == 'C') { return c='G'}
  }).join('');
}
```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 106. [Isograms](https://www.codewars.com/kata/54ba84be607a92aa900000f1)

```javascript
function isIsogram(str){
  if (!str) { return true };
 let letters = str.toLowerCase().split('');
  return 0 < letters.filter( (a, index, arr) => arr.lastIndexOf(a) !== index).length ? false : true;
  
}
```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 107. [You're a square!](https://www.codewars.com/kata/54c27a33fb7da0db0100040e)

```javascript
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}
```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 108. [Shortest Word](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9)

```javascript
function findShort(s){
  let result = s
    .split(' ')
    .reduce( (a,b) => a.length <= b.length ? a : b, 0);
 
  return result.length;
}
```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 109. [Descending Order](https://www.codewars.com/kata/5467e4d82edf8bbf40000155)

```javascript
function descendingOrder(n){
  return Number(n
                .toString()
                .split('')
                .map( n => parseInt(n))
                .sort((a,b) => b - a)
                .join('')
               );
}
```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 110. [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020)

```javascript
function squareDigits(num){
  let result = num.toString()
                    .split('')
                    .map( n => parseInt(n) * parseInt(n))
                    .join('');
  return parseInt(result);
}
```


completed: 01/10/2020 | 7 kyu


------


<br>


<br>

## 111. [Highest and Lowest](https://www.codewars.com/kata/554b4ac871d6813a03000035)

```javascript
function highAndLow(numbers){
  let num = numbers.split(' ').map( n =>  parseInt(n)).sort((a,b) => a - b);
  return `${num[num.length-1]} ${num[0]}`;
}
```


completed: 30/09/2020 | 7 kyu


------


<br>


<br>

## 112. [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039)

```javascript
accum = (s) => {
  return s.toLowerCase()
    .split('')
    .map( (c, index) => c.toUpperCase() + c.repeat(index))
    .join('-');
}

```


completed: 30/09/2020 | 7 kyu


------


<br>


<br>

## 113. [Vowel Count](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

```javascript
function getCount(str) {
  let vowelsCount = 0;
  const regex = RegExp('[aeiou]');
  str.split('').map( c => regex.test(c) && vowelsCount++ );
  
  return vowelsCount;
}
```


completed: 30/09/2020 | 7 kyu


------


<br>


<br>

## 114. [Sum of two lowest positive integers](https://www.codewars.com/kata/558fc85d8fd1938afb000014)

```javascript
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b) => a-b).slice(0,2).reduce((a,b) => a + b,0);
},function sumTwoSmallestNumbers(numbers) {  
  numbers.sort( (a, b) => a- b);
  return numbers[0]+numbers[1];
}
```


completed: 30/09/2020 | 7 kyu


------


<br>


<br>

## 115. [Merge two arrays](https://www.codewars.com/kata/583af10620dda4da270000c5)

```javascript
function mergeArrays(a, b) {
  let arr = [];
  let length = a.length > b.length ? a.length : b.length;
  
  for (let i = 0; i < length; i++) {
    a[i] && arr.push(a[i]),
    b[i] && arr.push(b[i]);
    }
  return arr;
}
```


completed: 29/09/2020 | 7 kyu


------


<br>


<br>

## 116. [Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028)

```javascript
function getMiddle(s){
  let median = Math.floor(s.length / 2);
  
  if (s.length % 2 === 0) {
    return s[median-1]+s[median]
  } else {
    return s[median]
  }
}
```


completed: 28/09/2020 | 7 kyu


------


<br>


<br>

## 117. [Sum of array singles](https://www.codewars.com/kata/59f11118a5e129e591000134)

```javascript
function repeats(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};,function repeats(arr){
  let unique = [];
  arr.sort();
  for (let i = 0; i<arr.length; i++) {
    if(arr[i] != arr[i+1] && arr[i] != arr[i-1]) unique.push(arr[i])
  }
  return unique.reduce( (a, b) =>  a + b);
};
```


completed: 28/09/2020 | 7 kyu


------


<br>


<br>

## 118. [Simple Fun #136: Missing Values](https://www.codewars.com/kata/58a66c208b88b2de660000c3)

```javascript
function missingValues(arr) {
  let itemCount = {};
  let x, y;
  
  arr.forEach( value => {
      if(value in itemCount) itemCount[value] = itemCount[value] + 1;
      else itemCount[value] = 1;
  });
  
  for (const property in itemCount) {
   if (itemCount[property] === 1){
      x = parseInt(property);
   }
   if (itemCount[property] === 2){
      y = parseInt(property);
   }
  }
  return x ** 2 * y;
}
```


completed: 27/09/2020 | 7 kyu


------


<br>


<br>

## 119. [Disemvowel Trolls](https://www.codewars.com/kata/52fba66badcd10859f00097e)

```javascript
function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'');
},function disemvowel(str) {
  return str.replace(/[aeoui]/gmi, '');
}
```


completed: 27/09/2020 | 7 kyu


------


<br>


<br>

## 120. [Exes and Ohs](https://www.codewars.com/kata/55908aad6620c066bc00002a)

```javascript
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi)
  return (x && x.length) === (o && o.length);
},function XO(str) {
  str = str.toLowerCase()
  const kisses = /o/gm;
  const hugs = /x/gm;
  const o = str.match(kisses);
  const x = str.match(hugs);
  
  if (!o && !x ) {
    return true;
  }
  if (!o || !x ) {
    return false
  }
  if (o.length === x.length ) {
    return true;
  } else {
    return false;
  }
}
```


completed: 27/09/2020 | 7 kyu


------


<br>


<br>
