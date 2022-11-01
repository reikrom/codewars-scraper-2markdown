## 1. [Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)

```javascript
const duplicateCount = (text) => {
  const lowerArr = text.toLowerCase().split('');
  
  const obj = {};
  let finalCount = 0;
  
  lowerArr.forEach(el => {
    obj[el] ? obj[el]++ : obj[el] = 1
  })
  
  Object.values(obj).forEach(val => {val > 1 && finalCount++})
  
  return finalCount;
},export function duplicateCount(text: string): number{
  const lowerArr = text.toLowerCase().split('');
  
  const obj:Record<string,number> = {};
  let finalCount = 0;
  
  lowerArr.forEach((el: string) => {
    obj[el] ? obj[el]++ : obj[el] = 1
  })
  
  Object.values(obj).forEach((val:number) => {val > 1 && finalCount++})
  
  return finalCount;
}

```


completed: 2022-07-04T13:48:12.533+0000 | 6 kyu


------


<br>


<br>

## 2. [Delete occurrences of an element if it occurs more than n times](https://www.codewars.com/kata/554ca54ffa7d91b236000023)

```javascript
function deleteNth(arr,n){
  let newArr = [];
  let count = {};
  arr.forEach(pic => {
    count[pic] = count[pic] ? count[pic] + 1: 1;
    count[pic] <= n && newArr.push(pic);
  })
  return newArr;
}
```


completed: 2020-12-12T15:52:07.241+0000 | 6 kyu


------


<br>


<br>

## 3. [Pokemon Damage Calculator](https://www.codewars.com/kata/536e9a7973130a06eb000e9f)

```javascript
function calculateDamage(yourType, opponentType, attack, defense){
  let effectiveness = 1;
  let battleTypes = {
    fire: {
      superEffective: 'grass' ,
      neutral: 'electric',
      notEffective: ['fire','water'],
    },
    water:{
      superEffective: 'fire' ,
      neutral: '',
      notEffective: ['water','grass','electric'],
    },
    grass: {
      superEffective: 'water' ,
      neutral: 'electric',
      notEffective: ['grass','fire'],
    },
    electric: {
      superEffective: 'water' ,
      neutral: ['fire','grass'],
      notEffective: ['electric'],
    }
  }
  if (battleTypes[yourType].superEffective.includes(opponentType)) effectiveness = 2
  else if (battleTypes[yourType].notEffective.includes(opponentType)) effectiveness = 0.5
  return 50 * (attack / defense) * effectiveness
}
```


completed: 2020-12-08T15:56:05.468+0000 | 6 kyu


------


<br>


<br>

## 4. [Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272)

```javascript
function high(x){
  const values = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let res = {};
  x.split(' ').forEach(word => {
    res[word] = word.split('').reduce((acc,cur) => acc += values.indexOf(cur) +1,0)
  })
  return Object.keys(res).reduce((a, b) => res[a] >= res[b] ? a : b);
}
```


completed: 2020-11-16T19:22:55.809+0000 | 6 kyu


------


<br>


<br>

## 5. [Count the smiley faces!](https://www.codewars.com/kata/583203e6eb35d7980400002a)

```javascript
//return the total number of smiling faces in the array
function countSmileys(arr) {
  const faces = /[:;][-~]?[D\)]/g
  return arr.filter(n => n.match(faces)).length;
}
```


completed: 2020-11-12T16:16:05.882+0000 | 6 kyu


------


<br>


<br>

## 6. [Bouncing Balls](https://www.codewars.com/kata/5544c7a5cb454edb3c000047)

```javascript
function bouncingBall(h,  bounce,  window) {
 const condition = h > 0 &&  bounce > 0 && bounce < 1 && h > window;
  if (condition) {
    return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
  } else return -1;
}
```


completed: 2020-11-11T21:36:13.904+0000 | 6 kyu


------


<br>


<br>

## 7. [Take a Ten Minutes Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

```javascript
function isValidWalk(walk) {
  if (!walk || walk.length !== 10 ) return false
  else {
    let n = 0,e = 0,s = 0,w = 0;
    var count = 0;
    for(var i = 0; i < walk.length; ++i){
      switch(walk[i]) {
        case 'n':
        n += 1;
        break;
        case 'e':
        e += 1;
        break;
        case 's':
        s += 1;
        break;
        case 'w':
        w += 1;
        break;
      }
    }
    return n === s && e === w;
  }
}
```


completed: 2020-11-07T18:08:19.959+0000 | 6 kyu


------


<br>


<br>

## 8. [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c)

```javascript
function duplicateEncode(word){
    console.log(word)
  const arr = word.toLowerCase().split('');
  let newArr = []
  for (let i=0; i< arr.length; i++) {
    newArr.push(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) ? '(' : ')' )
  }
  return newArr.join('');
}

```


completed: 2020-11-05T19:54:36.727+0000 | 6 kyu


------


<br>


<br>

## 9. [WeIrD StRiNg CaSe](https://www.codewars.com/kata/52b757663a95b11b3d00062d)

```javascript
function toWeirdCase(string){
  return string.split(' ').map( function(word) {
    return word.split('').map( function(char,i) {
     return i % 2 === 0 ? 
        char.toUpperCase()
       :char.toLowerCase() 
    }).join('')
    }).join(' ');
},function toWeirdCase(string){
  return string.split(' ').map(word => word.split('').map((c,i) => i % 2 === 0 ? c.toUpperCase():c.toLowerCase() ).join('')).join(' ');
}
```


completed: 2020-11-03T12:00:11.724+0000 | 6 kyu


------


<br>


<br>

## 10. [Sort the odd](https://www.codewars.com/kata/578aa45ee9fd15ff4600090d)

```javascript
function sortArray(arr) {
  let odds = arr.filter(n => n % 2).sort((a,b) => a - b);
  return arr.map(x => x % 2 ? odds.shift() : x);
  
}
```


completed: 2020-10-28T16:37:12.010+0000 | 6 kyu


------


<br>


<br>

## 11. [Count characters in your string](https://www.codewars.com/kata/52efefcbcdf57161d4000091)

```javascript
function count (string) {  
  let count = {}
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    count[char] = count[char] ? count[char] += 1: 1;
  }
   return count;
}
```


completed: 2020-10-27T14:58:20.603+0000 | 6 kyu


------


<br>


<br>

## 12. [Build Tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b)

```javascript
function towerBuilder(nFloors) {
 let space, star, tower = [];
  for (let i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat((2 * i) - 1);
    tower.push(`${space}${star}${space}`)
  }
  return tower;
}
```


completed: 2020-10-26T15:58:25.382+0000 | 6 kyu


------


<br>


<br>

## 13. [Is a number prime?](https://www.codewars.com/kata/5262119038c0985a5b00029f)

```javascript

function isPrime(num) {
   for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
  return num > 1;
}

```


completed: 2020-10-26T15:27:22.801+0000 | 6 kyu


------


<br>


<br>

## 14. [Tribonacci Sequence](https://www.codewars.com/kata/556deca17c58da83c00002db)

```javascript
function tribonacci(sig,n){
  let tri = sig;
  for (i = 0; i < n; i++) {
    tri.push(tri[i] + tri[i+1] + tri[i+2]);
  }
  return tri.slice(0,n);
},function tribonacci(sig,n){
  let tri = sig;
  for (let i = 3; i < n; i++) {
    tri.push((tri[i-1] + tri[i-2] + tri[i-3]))
  }
  return tri.slice(0,n);
}

```


completed: 2020-10-26T10:24:33.593+0000 | 6 kyu


------


<br>


<br>

## 15. [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009)

```javascript
function arrayDiff(a, b) {
  for (let i = 0; i< b.length; i++) {
    a = a.filter(n => n !== b[i])
  }
  return a;
}
```


completed: 2020-10-26T09:49:27.285+0000 | 6 kyu


------


<br>


<br>

## 16. [Find the unique number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)

```javascript
function findUniq(arr) {
  return +arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x));
}
,function findUniq(arr) {
  const unique = [...new Set(arr)];
  const firstIndex = arr.indexOf(unique[0]);
  const lastIndex =arr.lastIndexOf(unique[0]);
  
  if (firstIndex === lastIndex) return unique[0];
  else return unique[1];
}

```


completed: 2020-10-21T09:42:10.210+0000 | 6 kyu


------


<br>


<br>

## 17. [Your order, please](https://www.codewars.com/kata/55c45be3b2079eccff00010f)

```javascript
function order(words){
  return words.split(' ').sort((a,b)=> a.match(/\d/)-b.match(/\d/)).join(' ');
}
```


completed: 2020-10-21T09:02:42.521+0000 | 6 kyu


------


<br>


<br>

## 18. [Sum of Digits / Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00)

```javascript
function digital_root(n) {
  while (n > 9) {
  n = (n+"").split('').reduce((acc,x) => acc + parseInt(x ),0);
  }
  return n;
}
```


completed: 2020-10-21T08:56:34.647+0000 | 6 kyu


------


<br>


<br>

## 19. [Split Strings](https://www.codewars.com/kata/515de9ae9dcfc28eb6000001)

```javascript
function solution(str){
  if (!str) return [];
  if (str.length % 2 !== 0 ) {
    str = str+"_"
  }
  return str.match(/[\w]{2}/g);
}
```


completed: 2020-10-15T12:53:26.011+0000 | 6 kyu


------


<br>


<br>

## 20. [Find the missing letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)

```javascript
function findMissingLetter(arr)
{
  for (let i = 0; i<arr.length; i++ ) {
    console.log( arr[i].charCodeAt(0))
    if (arr[i].charCodeAt(0) + 1 !== arr[i+1].charCodeAt(0) ) {
      return String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
  }
}
```


completed: 2020-10-15T12:29:31.014+0000 | 6 kyu


------


<br>


<br>

## 21. [Find The Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dc)

```javascript
function findOutlier(integers){
  let evens = 0;
  
  for (let i = 0; i<3; i++){
    integers[i] % 2 === 0 && evens++;
  }
  return integers.filter(x => evens > 1 ? x % 2 !== 0 : x % 2 === 0 )[0];
}


```


completed: 2020-10-14T16:11:12.397+0000 | 6 kyu


------


<br>


<br>

## 22. [Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4)

```javascript
var countBits = function(n) {
  return n.toString(2).split('').reduce((a,b) => Number(a) + Number(b), 0);
};
```


completed: 2020-10-14T15:28:24.637+0000 | 6 kyu


------


<br>


<br>

## 23. [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)

```javascript
function spinWords(words){
  return words.split(' ')
          .map( w => w.length >= 5 ? w.split('').reverse().join('') : w)
          .join(' ');
}
```


completed: 2020-10-14T15:25:27.576+0000 | 6 kyu


------


<br>


<br>

## 24. [Decode the Morse code ](https://www.codewars.com/kata/54b724efac3d5402db00065e)

```javascript
decodeMorse = function(morseCode){
return morseCode.trim()
      .split('   ')
      .map((e) => e.split(' ')
      .map((e) => MORSE_CODE[e])
      .join("") + " ")
      .join("").trim();
  }


```


completed: 2020-10-13T17:43:52.154+0000 | 6 kyu


------


<br>


<br>

## 25. [Convert string to camel case](https://www.codewars.com/kata/517abf86da9663f1d2000003)

```javascript
function toCamelCase(str){
  let arr = [];
  arr = str.includes('_') ? str.split('_') : str.split('-');
  return arr.map( (s,i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s ).join('');
}
```


completed: 2020-10-13T13:09:00.963+0000 | 6 kyu


------


<br>


<br>

## 26. [Unique In Order](https://www.codewars.com/kata/54e6533c92449cc251001667)

```javascript
var uniqueInOrder=function(iterable){
let arr = [];  
for (let i = 0; i<iterable.length; i++) {
    if (iterable[i] !== iterable[i+1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
}
```


completed: 2020-10-13T12:53:41.771+0000 | 6 kyu


------


<br>


<br>

## 27. [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)

```javascript
function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx"
  for (let i = 0; i < numbers.length; i++) {
   format = format.replace('x', numbers[i]);
  }
  return format;
}
```


completed: 2020-10-13T12:30:54.441+0000 | 6 kyu


------


<br>


<br>

## 28. [Multiples of 3 or 5](https://www.codewars.com/kata/514b92a657cdc65150000006)

```javascript
function solution(number){
  if (number <= 0) return 0;
  return [...Array.from(
    new Array(number), (_, i) => i % 3 === 0 || i % 5 === 0 ? i : '' )]
    .reduce((a,b) => Number(a) + Number(b),0);

}
```


completed: 2020-10-13T11:32:06.148+0000 | 6 kyu


------


<br>


<br>

## 29. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836)

```javascript
function findOdd(A) {
  let count = {}
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    count[num] = count[num] ? +count[num] + 1 : 1;
  }

  let odd = Object.entries(count).map(([key, value]) => value % 2 !== 0 && key).filter(a => a);
  return parseInt(odd);
}
```


completed: 2020-09-30T23:11:33.309+0000 | 6 kyu


------


<br>


<br>

## 30. [Who likes it?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)

```javascript
function likes(names) {
   if (names.length === 0) return `no one likes this`
  if (names.length === 1) return `${names[0]} likes this`
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
  
```


completed: 2020-09-24T21:48:44.032+0000 | 6 kyu


------


<br>


<br>
