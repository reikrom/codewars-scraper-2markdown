## 1. [Reverse List Order](https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b)

```javascript
function reverseList(list) {
  return list.reverse()

}
```


completed: 2022-07-04T13:28:33.666+0000 | 8 kyu


------


<br>


<br>

## 2. [Find numbers which are divisible by given number](https://www.codewars.com/kata/55edaba99da3a9c84000003b)

```javascript
function divisibleBy(numbers, divisor){
  return numbers.filter(x => x % divisor === 0);
}
```


completed: 2020-10-18T15:40:38.953+0000 | 8 kyu


------


<br>


<br>

## 3. [Remove exclamation marks](https://www.codewars.com/kata/57a0885cbb9944e24c00008e)

```javascript
function removeExclamationMarks(s) {
  return s.replace(/!/g,'');
}
```


completed: 2020-10-18T15:39:55.188+0000 | 8 kyu


------


<br>


<br>

## 4. [I love you, a little , a lot, passionately ... not at all](https://www.codewars.com/kata/57f24e6a18e9fad8eb000296)

```javascript
function howMuchILoveYou(nbPetals) {
  const res = ['I love you','a little','a lot','passionately','madly','not at all'];
  return res[(nbPetals - 1) % 6];
}

```


completed: 2020-10-18T15:38:14.371+0000 | 8 kyu


------


<br>


<br>

## 5. [Correct the mistakes of the character recognition software](https://www.codewars.com/kata/577bd026df78c19bca0002c0)

```javascript
function correct(string)
{
  return string.replace(/[501]/g, c => corrections[c]);
}

const corrections = {
  5: 'S',
  0: 'O',
  1: 'I'
},function correct(string)
{
  let s = string.replace(/5/g,'S');
  s = s.replace(/0/g,'O');
  s = s.replace(/1/g,'I');
  return s;
}
```


completed: 2020-10-18T15:31:41.767+0000 | 8 kyu


------


<br>


<br>

## 6. [Calculate BMI](https://www.codewars.com/kata/57a429e253ba3381850000fb)

```javascript
function bmi(weight, height) {
  const bmi = weight/Math.pow(height,2);
  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 25.0) return "Normal";
  if (bmi <= 30.0) return "Overweight";
  if (bmi > 30) return "Obese";
}
```


completed: 2020-10-17T13:34:11.187+0000 | 8 kyu


------


<br>


<br>

## 7. [Convert a string to an array](https://www.codewars.com/kata/57e76bc428d6fbc2d500036d)

```javascript
const stringToArray = (string) => string.split(' ');
```


completed: 2020-10-17T13:24:44.063+0000 | 8 kyu


------


<br>


<br>

## 8. [Transportation on vacation ](https://www.codewars.com/kata/568d0dd208ee69389d000016)

```javascript
function rentalCarCost(d) {
  let total = d * 40;
  if (d >= 3 && 7 > d) return total - 20;
  else if (d >= 7) return total - 50;
  else return total;
}
```


completed: 2020-10-17T13:22:10.376+0000 | 8 kyu


------


<br>


<br>

## 9. [Volume of a Cuboid](https://www.codewars.com/kata/58261acb22be6e2ed800003a)

```javascript
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
```


completed: 2020-10-12T13:58:46.325+0000 | 8 kyu


------


<br>


<br>

## 10. [MakeUpperCase](https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7)

```javascript
function makeUpperCase(str) {
  return str.toUpperCase();
}
```


completed: 2020-10-12T13:58:05.383+0000 | 8 kyu


------


<br>


<br>

## 11. [Convert a Boolean to a String](https://www.codewars.com/kata/551b4501ac0447318f0009cd)

```javascript
function booleanToString(b){
  return b+"";
}
```


completed: 2020-10-12T13:57:09.200+0000 | 8 kyu


------


<br>


<br>

## 12. [Are You Playing Banjo?](https://www.codewars.com/kata/53af2b8861023f1d88000832)

```javascript
function areYouPlayingBanjo(name) {
  
  return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`;
}
```


completed: 2020-10-12T13:55:59.709+0000 | 8 kyu


------


<br>


<br>

## 13. [You Can't Code Under Pressure #1](https://www.codewars.com/kata/53ee5429ba190077850011d4)

```javascript
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}
```


completed: 2020-10-12T13:50:48.691+0000 | 8 kyu


------


<br>


<br>

## 14. [Gravity Flip](https://www.codewars.com/kata/5f70c883e10f9e0001c89673)

```javascript
const flip=(d, arr)=> {
  return arr.sort((a , b) => d === 'R' ? a - b : b - a );
}
```


completed: 2020-10-11T13:11:10.117+0000 | 8 kyu


------


<br>


<br>

## 15. [The Feast of Many Beasts](https://www.codewars.com/kata/5aa736a455f906981800360d)

```javascript
function feast(beast, dish) {
  const a = [...beast];
  const b = [...dish];
return a.pop() === b.pop() && a.shift() === b.shift();
}


```


completed: 2020-10-09T13:21:55.796+0000 | 8 kyu


------


<br>


<br>

## 16. [Double Char](https://www.codewars.com/kata/56b1f01c247c01db92000076)

```javascript
function doubleChar(str) {
  return Array.from(str).map( x => x.repeat(2)).join('');
}

```


completed: 2020-10-09T13:08:10.488+0000 | 8 kyu


------


<br>


<br>

## 17. [Beginner Series #2 Clock](https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a)

```javascript
function past(h, m, s) {
  return (h * 3600000) + (m * 60000) + (s * 1000);
}
```


completed: 2020-10-09T13:05:18.101+0000 | 8 kyu


------


<br>


<br>

## 18. [Get Nth Even Number](https://www.codewars.com/kata/5933a1f8552bc2750a0000ed)

```javascript
function nthEven(n){
  return n * 2 -2;
}
```


completed: 2020-10-09T10:55:44.832+0000 | 8 kyu


------


<br>


<br>

## 19. [Will you make it?](https://www.codewars.com/kata/5861d28f124b35723e00005e)

```javascript
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump;
};
```


completed: 2020-10-08T10:35:50.736+0000 | 8 kyu


------


<br>


<br>

## 20. [Is integer safe to use?](https://www.codewars.com/kata/55a4f9afeffe4231090000d6)

```javascript
function SafeInteger(n) {
  return Number.isSafeInteger(n); 
}
```


completed: 2020-10-08T10:23:02.205+0000 | 8 kyu


------


<br>


<br>

## 21. [Duck Duck Goose](https://www.codewars.com/kata/582e0e592029ea10530009ce)

```javascript
function duckDuckGoose(players, goose) {
  return players[(goose -1) % players.length ].name;
}
```


completed: 2020-10-08T10:18:51.815+0000 | 8 kyu


------


<br>


<br>

## 22. [My head is at the wrong end!](https://www.codewars.com/kata/56f699cd9400f5b7d8000b55)

```javascript
function fixTheMeerkat(arr) {
 return arr.reverse(); 
}
```


completed: 2020-10-08T09:33:33.962+0000 | 8 kyu


------


<br>


<br>

## 23. [Removing Elements](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2)

```javascript
function removeEveryOther(arr){
  return arr.filter((_,i) => i % 2 === 0);
}
```


completed: 2020-10-07T15:55:16.039+0000 | 8 kyu


------


<br>


<br>

## 24. [Sum Arrays](https://www.codewars.com/kata/53dc54212259ed3d4f00071c)

```javascript
// Sum Numbers
function sum (numbers) {
    "use strict";
  return numbers.reduce((sum, x) => sum + x, 0);
    
    
};
```


completed: 2020-10-05T17:19:07.356+0000 | 8 kyu


------


<br>


<br>

## 25. [Simple multiplication](https://www.codewars.com/kata/583710ccaa6717322c000105)

```javascript
function simpleMultiplication(number) {
   return number % 2 === 0 ? number * 8 : number * 9;
}

```


completed: 2020-10-05T17:16:53.663+0000 | 8 kyu


------


<br>


<br>

## 26. [Sum Mixed Array](https://www.codewars.com/kata/57eaeb9578748ff92a000009)

```javascript
function sumMix(x){
  return x.reduce((sum, x) => sum + +x, 0);
},function sumMix(x){
  return x.map(x => Number(x)).reduce((sum, x) => sum + x, 0);
}
```


completed: 2020-10-05T17:14:56.878+0000 | 8 kyu


------


<br>


<br>

## 27. [Beginner - Reduce but Grow](https://www.codewars.com/kata/57f780909f7e8e3183000078)

```javascript
function grow(x){
  return x.reduce((sum, x) => sum * x, 1 );
}
```


completed: 2020-10-05T17:03:56.773+0000 | 8 kyu


------


<br>


<br>

## 28. [Find Maximum and Minimum Values of a List](https://www.codewars.com/kata/577a98a6ae28071780000989)

```javascript
var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}
```


completed: 2020-10-05T17:00:57.595+0000 | 8 kyu


------


<br>


<br>

## 29. [Is n divisible by x and y?](https://www.codewars.com/kata/5545f109004975ea66000086)

```javascript
 isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
```


completed: 2020-10-05T16:58:37.444+0000 | 8 kyu


------


<br>


<br>

## 30. [Grasshopper - Function syntax debugging](https://www.codewars.com/kata/56dae9dc54c0acd29d00109a)

```javascript
const main = (verb, noun) => verb +''+ noun;
```


completed: 2020-10-05T16:56:08.382+0000 | 8 kyu


------


<br>


<br>

## 31. [Count by X](https://www.codewars.com/kata/5513795bd3fafb56c200049e)

```javascript
function countBy(x, n) {
  return Array(n).fill().map((_,i) => (i + 1)  * x );
}
```


completed: 2020-10-05T15:43:37.261+0000 | 8 kyu


------


<br>


<br>

## 32. [altERnaTIng cAsE <=> ALTerNAtiNG CaSe](https://www.codewars.com/kata/56efc695740d30f963000557)

```javascript
String.prototype.toAlternatingCase = function () {
  return this.split('')
             .map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
             .join('');


}
```


completed: 2020-10-05T15:28:11.914+0000 | 8 kyu


------


<br>


<br>

## 33. [If you can't sleep, just count sheep!!](https://www.codewars.com/kata/5b077ebdaf15be5c7f000077)

```javascript
var countSheep = function (num){
  const sheep = new Array(num).fill().map((shep, i) => `${i+1} sheep...`).join(''); 
  return sheep;
}
```


completed: 2020-10-05T15:17:53.367+0000 | 8 kyu


------


<br>


<br>

## 34. [Reversed Words](https://www.codewars.com/kata/51c8991dee245d7ddf00000e)

```javascript
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
```


completed: 2020-10-05T15:10:55.450+0000 | 8 kyu


------


<br>


<br>

## 35. [How good are you really?](https://www.codewars.com/kata/5601409514fc93442500010b)

```javascript
function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((sum, x) => sum + x, 0) / classPoints.length;
  return yourPoints > average ? true : false;
}

```


completed: 2020-10-05T15:01:11.549+0000 | 8 kyu


------


<br>


<br>

## 36. [Get the mean of an array](https://www.codewars.com/kata/563e320cee5dddcf77000158)

```javascript
function getAverage(marks){
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}
```


completed: 2020-10-05T13:55:33.720+0000 | 8 kyu


------


<br>


<br>

## 37. [Array plus array](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)

```javascript
function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a,b) => a + b, 0);
},function arrayPlusArray(arr1, arr2) {
  return [...arr1,...arr2].reduce((a,b) => a + b);
}
```


completed: 2020-10-05T13:51:00.224+0000 | 8 kyu


------


<br>


<br>

## 38. [Reversed sequence ](https://www.codewars.com/kata/5a00e05cc374cb34d100000d)

```javascript
const reverseSeq = n => {
  return new Array(n).fill().map((_,i) => i + 1).sort((a,b) => b - a);
};
```


completed: 2020-10-05T13:46:57.250+0000 | 8 kyu


------


<br>


<br>

## 39. [Do I get a bonus?](https://www.codewars.com/kata/56f6ad906b88de513f000d96)

```javascript
function bonusTime(salary, bonus) {
if (!bonus) { return `£${salary}`}
  else return `£${salary * 10}`
}
```


completed: 2020-10-05T13:25:31.006+0000 | 8 kyu


------


<br>


<br>

## 40. [Generate range of integers](https://www.codewars.com/kata/55eca815d0d20962e1000106)

```javascript
function generateRange(min, max, step){
  let arr = [];
  for (let i = min; i <= max; i += step ) {
    arr.push(i)
  }
  return arr;
}
```


completed: 2020-10-04T22:36:53.086+0000 | 8 kyu


------


<br>


<br>

## 41. [Grasshopper - Summation](https://www.codewars.com/kata/55d24f55d7dd296eb9000030)

```javascript
var summation = function (num) {
  let arr = new Array(num).fill().map((n, i) => Number(i + 1)).reduce((a,b) => a + b);
  return arr;
}
```


completed: 2020-10-04T15:25:09.650+0000 | 8 kyu


------


<br>


<br>

## 42. [Training JS #10: loop statement --for](https://www.codewars.com/kata/5721a78c283129e416000999)

```javascript
function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i<arr.length; i++) {
    if (arr[i] % 2 === 0 ) {
      even.push(arr[i]);
    } else odd.push(arr[i]);
  }
  
  
  return [odd,even];
}
```


completed: 2020-10-03T18:51:44.131+0000 | 8 kyu


------


<br>


<br>

## 43. [Regex count lowercase letters](https://www.codewars.com/kata/56a946cd7bd95ccab2000055)

```javascript
function lowercaseCount(str){
    return (str.match(/[a-z]/g)||[]).length;
}
```


completed: 2020-10-03T18:48:43.782+0000 | 8 kyu


------


<br>


<br>

## 44. [Training JS #8: Conditional statement--switch](https://www.codewars.com/kata/572059afc2f4612825000d8a)

```javascript
function howManydays(month){
  var days;
  switch (month){
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2:
        days = 28;
        break;
      default:
        days = 31;
        break;
  }
  return days;
},function howManydays(month){
  var days;
  switch (month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2:
        days = 28;
        break;
  
  }
  return days;
}
```


completed: 2020-10-03T18:29:50.296+0000 | 8 kyu


------


<br>


<br>

## 45. [Find the first non-consecutive number](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)

```javascript
function firstNonConsecutive (arr) {
  let odd =  arr.find((n, i) => n != i + arr[0]);
  return Number.isInteger(odd) ? odd : null;
},function firstNonConsecutive (arr) {
  const start = arr[0];
  let odd = null;
  const compareArr = [...new Array(arr.length + 1)].map((n, i) => arr[0] + i);
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] !== compareArr[i]) {
      odd = arr[i];
      break;
    }
  }
  return odd;
  }
  
```


completed: 2020-10-03T18:19:31.599+0000 | 8 kyu


------


<br>


<br>

## 46. [Get Planet Name By ID](https://www.codewars.com/kata/515e188a311df01cba000003)

```javascript
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}
```


completed: 2020-10-03T01:39:11.881+0000 | 8 kyu


------


<br>


<br>

## 47. [Welcome!](https://www.codewars.com/kata/577ff15ad648a14b780000e7)

```javascript
function greet(language) {
  return greeting[language]||'Welcome';
}

const greeting = {
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
```


completed: 2020-10-03T01:36:06.786+0000 | 8 kyu


------


<br>


<br>

## 48. [Function 1 - hello world](https://www.codewars.com/kata/523b4ff7adca849afe000035)

```javascript
const greet = () => 'hello world!';
```


completed: 2020-10-03T01:31:40.061+0000 | 8 kyu


------


<br>


<br>

## 49. [DNA to RNA Conversion](https://www.codewars.com/kata/5556282156230d0e5e000089)

```javascript
function DNAtoRNA(dna) {
  return dna.replace(/t/gi,'U')
}
```


completed: 2020-09-30T17:16:12.082+0000 | 8 kyu


------


<br>


<br>

## 50. [Rock Paper Scissors!](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)

```javascript
const rps = (p1, p2) => {
  if ( p1 === p2 ) return  'Draw!';
  
  const rules = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  }
  
  return rules[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
    
};
```


completed: 2020-09-30T17:11:42.098+0000 | 8 kyu


------


<br>


<br>

## 51. [Jenny's secret message](https://www.codewars.com/kata/55225023e1be1ec8bc000390)

```javascript
function greet(name){
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}
```


completed: 2020-09-30T16:57:24.101+0000 | 8 kyu


------


<br>


<br>

## 52. [You only need one - Beginner](https://www.codewars.com/kata/57cc975ed542d3148f00015b)

```javascript
function check(a, x) {
  return a.includes(x);
}
```


completed: 2020-09-30T16:55:41.953+0000 | 8 kyu


------


<br>


<br>

## 53. [Calculate average ](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921)

```javascript
function find_average(array) {
  return array.reduce(( a,b ) => a + b,0) / array.length;
}
```


completed: 2020-09-30T16:53:46.351+0000 | 8 kyu


------


<br>


<br>

## 54. [Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d)

```javascript
function fakeBin(x){
  return x.split('').map( n => n < 5 ? 0 : 1 ).join('');
}
```


completed: 2020-09-30T16:48:32.101+0000 | 8 kyu


------


<br>


<br>

## 55. [Count the Monkeys!](https://www.codewars.com/kata/56f69d9f9400f508fb000ba7)

```javascript
function monkeyCount(n) {
  count = [];
  for (let i = 1; i<=n; i++) {
    count.push(i);
  }
  return count;
}
```


completed: 2020-09-30T16:44:12.967+0000 | 8 kyu


------


<br>


<br>

## 56. [Total amount of points](https://www.codewars.com/kata/5bb904724c47249b10000131)

```javascript
function points(games) {
  return games
          .map( g => g.split(':')
          .reduce( (a,b) => a === b ? 1 : a < b ? 0 : 3 ))
          .reduce( (a,b) => a + b, 0);
}
```


completed: 2020-09-30T16:38:34.875+0000 | 8 kyu


------


<br>


<br>

## 57. [Invert values](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad)

```javascript
function invert(array) {
   return array.map(e => e * -1);
},invert = (array) => array.map( e => e>0? -Math.abs(e) : Math.abs(e));

```


completed: 2020-09-30T16:22:43.490+0000 | 8 kyu


------


<br>


<br>

## 58. [Convert a String to a Number!](https://www.codewars.com/kata/544675c6f971f7399a000e79)

```javascript
var stringToNumber = function(str){
  // put your code here
  return parseInt(str, 10);
}
```


completed: 2020-09-30T16:16:38.779+0000 | 8 kyu


------


<br>


<br>

## 59. [Sum without highest and lowest number](https://www.codewars.com/kata/576b93db1129fcf2200001e6)

```javascript
 const sumArray = array => array ? array.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

```


completed: 2020-09-30T16:01:36.330+0000 | 8 kyu


------


<br>


<br>

## 60. [Beginner - Lost Without a Map](https://www.codewars.com/kata/57f781872e3d8ca2a000007e)

```javascript
function maps(x){
  return x.map(e => e*2);
}
```


completed: 2020-09-30T15:36:29.467+0000 | 8 kyu


------


<br>


<br>

## 61. [Count of positives / sum of negatives](https://www.codewars.com/kata/576bb71bbbcf0951d5000044)

```javascript
function countPositivesSumNegatives(input) {
  if (input && input.length) {
    return [
      input.filter(p => p > 0).length,
      input.filter(n => n < 0).reduce((a,b)=> a+b,0)
    ];
  } else return [];
},function countPositivesSumNegatives(input) {
  
  if (!input || input.length < 1) {
    return [];
  }
  let count = [0,0];

  for (let i = 0; i < input.length; i++){
    if (input[i] > 0) {
      count[0] += 1;
    } else { count[1] += input[i]}
  }
  

  return count;
  
}
```


completed: 2020-09-30T15:35:14.916+0000 | 8 kyu


------


<br>


<br>

## 62. [A Needle in the Haystack](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c)

```javascript
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
```


completed: 2020-09-30T11:46:52.650+0000 | 8 kyu


------


<br>


<br>

## 63. [Abbreviate a Two Word Name](https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3)

```javascript
function abbrevName(name){
  let initials = name.split(' ')
                  .map(n => n.slice(0,1)
                  .toUpperCase());
  return initials.join('.');
}
```


completed: 2020-09-30T11:43:35.721+0000 | 8 kyu


------


<br>


<br>

## 64. [Keep Hydrated!](https://www.codewars.com/kata/582cb0224e56e068d800003c)

```javascript
function litres(time) {
  return Math.floor(time * .5);
}
```


completed: 2020-09-30T11:33:03.410+0000 | 8 kyu


------


<br>


<br>

## 65. [Convert number to reversed array of digits](https://www.codewars.com/kata/5583090cbe83f4fd8c000051)

```javascript
function digitize(n) {
  return (""+n).split('')
    .reverse()
    .map( s => parseInt(s));
}
```


completed: 2020-09-30T11:30:25.332+0000 | 8 kyu


------


<br>


<br>

## 66. [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

```javascript
function squareSum(numbers){
  return numbers.reduce((acc, cur) => (cur * cur) + acc, 0);
},function squareSum(numbers){
  const sq = [];
  for (i in numbers) {
    let num = Math.abs(numbers[i]);
    sq.push(num * num)
  };
  return sq.reduce( (a,b) => a+b,0);
}
```


completed: 2020-09-30T11:25:24.816+0000 | 8 kyu


------


<br>


<br>

## 67. [Century From Year](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)

```javascript
function century(year) {
  return Math.ceil(year / 100);
}
```


completed: 2020-09-30T11:08:49.301+0000 | 8 kyu


------


<br>


<br>

## 68. [Convert a Number to a String!](https://www.codewars.com/kata/5265326f5fda8eb1160004c8)

```javascript
function numberToString(num) {
  return String(num);
},function numberToString(num) {
  return `${num}`
}
```


completed: 2020-09-30T10:19:29.098+0000 | 8 kyu


------


<br>


<br>

## 69. [Counting sheep...](https://www.codewars.com/kata/54edbc7200b811e956000556)

```javascript
function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach( s => { s && count++});
  return count;
//   return count > 0 ? ` There are ${count} sheeps in total`: 'There are no sheeps at all'
}
```


completed: 2020-09-30T10:03:56.877+0000 | 8 kyu


------


<br>


<br>

## 70. [Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

```javascript
function solution(str){
  if (str.length <= 1)  return str;
  return str.split('').reverse().join('');
}
```


completed: 2020-09-30T09:51:52.403+0000 | 8 kyu


------


<br>


<br>

## 71. [Remove String Spaces](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)

```javascript
function noSpace(x){
  return x
    .split('')
    .filter(e => e !== ' ')
    .join('');

}
```


completed: 2020-09-29T20:25:42.853+0000 | 8 kyu


------


<br>


<br>

## 72. [Find the smallest integer in the array](https://www.codewars.com/kata/55a2d7ebe362935a210000b2)

```javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a,b)=> a - b);
    return args[0];
  }
}
```


completed: 2020-09-29T18:36:58.950+0000 | 8 kyu


------


<br>


<br>

## 73. [Return Negative](https://www.codewars.com/kata/55685cd7ad70877c23000102)

```javascript
function makeNegative(num) {
  return -Math.abs(num);
}
```


completed: 2020-09-29T18:35:04.346+0000 | 8 kyu


------


<br>


<br>

## 74. [Remove First and Last Character](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)

```javascript
function removeChar(str){
 return str.slice(1,str.length-1);

};




```


completed: 2020-09-29T18:33:49.736+0000 | 8 kyu


------


<br>


<br>

## 75. [Opposite number](https://www.codewars.com/kata/56dec885c54a926dcd001095)

```javascript
function opposite(number) {
 return -number;
},function opposite(number) {
  if (number > 0) {
    return -Math.abs(number);
  } else return Math.abs(number);
}


```


completed: 2020-09-29T18:31:52.048+0000 | 8 kyu


------


<br>


<br>

## 76. [Sum of positive](https://www.codewars.com/kata/5715eaedb436cf5606000381)

```javascript
function positiveSum(arr) {
  return arr
            .filter( e => e > 0)
            .reduce((a,b)=> a+b, 0);
}
```


completed: 2020-09-29T18:17:51.994+0000 | 8 kyu


------


<br>


<br>

## 77. [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)

```javascript
function even_or_odd(number) {
  return number % 2 ? 'Odd' : 'Even';
}
```


completed: 2020-09-29T18:10:46.467+0000 | 8 kyu


------


<br>


<br>

## 78. [Beginner Series #4 Cockroach](https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6)

```javascript
const cockroachSpeed = (s) =>  Math.floor(s / 0.036) 
```


completed: 2020-09-29T15:04:25.437+0000 | 8 kyu


------


<br>


<br>

## 79. [Returning Strings](https://www.codewars.com/kata/55a70521798b14d4750000a4)

```javascript
greet = (name) =>  `Hello, ${name} how are you doing today?`
```


completed: 2020-09-29T14:56:25.021+0000 | 8 kyu


------


<br>


<br>

## 80. [Smallest unused ID](https://www.codewars.com/kata/55eea63119278d571d00006a)

```javascript
function nextId(ids){
  const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i
  }


}
```


completed: 2020-09-29T14:51:48.823+0000 | 8 kyu


------


<br>


<br>

## 81. [N-th Power](https://www.codewars.com/kata/57d814e4950d8489720008db)

```javascript
function index(array, n){
  return array[n] ** n || -1;
},function index(array, n) {
//   if (n === 0 && array[n] === 0) return 1;
  if (n === 0) { return  1 }
  if (array[n] === 0 ) { return -1}
  return array[n] ?  array[n] ** n :  -1;
}
```


completed: 2020-09-28T22:33:28.869+0000 | 8 kyu


------


<br>


<br>

## 82. [Holiday VI - Shark Pontoon](https://www.codewars.com/kata/57e921d8b36340f1fd000059)

```javascript
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin) { sharkSpeed /= 2 };
  if (sharkDistance / sharkSpeed > pontoonDistance / youSpeed) {
    return 'Alive!'
  } else return 'Shark Bait!'
  
}
```


completed: 2020-09-28T22:17:18.527+0000 | 8 kyu


------


<br>


<br>

## 83. [Is he gonna survive?](https://www.codewars.com/kata/59ca8246d751df55cc00014c)

```javascript
function hero(bullets, dragons){
  return  bullets / 2 >= dragons;
}

```


completed: 2020-09-28T22:08:58.985+0000 | 8 kyu


------


<br>


<br>

## 84. [Hello, Name or World!](https://www.codewars.com/kata/57e3f79c9cb119374600046b)

```javascript
function hello(name) {
  if (!name ) return 'Hello, World!';
  const capitalizedName = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
  return `Hello, ${capitalizedName}!`;
}
```


completed: 2020-09-28T08:58:38.883+0000 | 8 kyu


------


<br>


<br>

## 85. [Grasshopper - If/else syntax debug](https://www.codewars.com/kata/57089707fe2d01529f00024a)

```javascript
function checkAlive (health) {
  return health > 0
},function checkAlive (health) { 
  if (health > 0) return true; 
  else return false
}
```


completed: 2020-09-28T08:42:15.709+0000 | 8 kyu


------


<br>


<br>

## 86. [String repeat](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e)

```javascript
function repeatStr (n, s) {
  let nStr = '';
  for (let i = 0; i<n; i++) {
      nStr += s 
  
  }
  return nStr
}
```


completed: 2020-09-26T23:25:40.213+0000 | 8 kyu


------


<br>


<br>

## 87. [Convert boolean values to strings 'Yes' or 'No'.](https://www.codewars.com/kata/53369039d7ab3ac506000467)

```javascript
function boolToWord( bool ){
  return bool ? 'Yes' : 'No'
}
```


completed: 2020-09-26T22:30:48.582+0000 | 8 kyu


------


<br>


<br>

## 88. [Basic Mathematical Operations](https://www.codewars.com/kata/57356c55867b9b7a60000bd7)

```javascript
function basicOp(operation, value1, value2)
{
  switch (operation){
      case '+':
      return value1 + value2
      break;
      case '-':
      return value1 - value2
      break;
      case '*':
      return value1 * value2
      break;
      case '/':
      return value1 / value2
      break;
      default:
    console.log("error using operator", operation);
  }
}
```


completed: 2020-09-26T22:29:03.802+0000 | 8 kyu


------


<br>


<br>

## 89. [Filling an array (part 1)](https://www.codewars.com/kata/571d42206414b103dc0006a1)

```javascript
const arr = N => {
  let array = []
  for (let i = 0; i < N; i++) {
    array.push(i)
  }
  return array
}
```


completed: 2020-09-26T22:17:35.444+0000 | 8 kyu


------


<br>


<br>

## 90. [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004)

```javascript
function multiply(a, b){
  return a * b
}

```


completed: 2019-08-13T00:37:51.745+0000 | 8 kyu


------


<br>


<br>
