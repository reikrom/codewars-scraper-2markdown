## 1. [Ramda #2 - Counting stars](https://www.codewars.com/kata/5a539360145c465f8b00030f)

```javascript
const sumStars = R.compose(
  R.sum,
  R.map(R.path(['node','stargazers','totalCount'])),
  R.path(['data','search','edges']),
  )

const sumStars_1 = data => R.pipe(
  R.path(['data','search','edges']),
  R.map(R.path(['node','stargazers','totalCount'])),
  R.sum)(data)

const sumStars_2 = R.pipe(
  R.path(['data','search','edges']),
  R.map(R.path(['node','stargazers','totalCount'])),
  R.sum)


const sumStars_3 = data => R.sum(
  R.map(R.path(['node','stargazers','totalCount']),
  R.path(['data', 'search', 'edges'], 
  data)));

```


completed: 2022-05-03T16:24:41.720+0000 | Retired


------


<br>


<br>

## 2. [Form The Largest ](https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e)

```javascript
maxNumber = (n) => +(""+n).split('').sort((a,b) => b-a).join('');
```


completed: 2020-11-28T23:31:54.818+0000 | Retired


------


<br>


<br>

## 3. [Vasya - Clerk](https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8)

```javascript
function tickets(peopleInLine){
  let [c25, c50, c100] = [0,0,0];
  let answer = "YES";
  
  peopleInLine.forEach(bill => {
    if (bill === 25 ) {
      c25++
    }
    else if (bill === 50 && c25 > 0) {
      c25-- , c50++
    }
    else if (bill === 100 && c25 >= 1 && c50 >= 1 ) {
      c100++, c50--, c25--
    }
    else if (bill === 100 && c25 >= 3) {
      c100++ , c25 -= 3
    }
    else answer = "NO"
  
  });
  return answer;
},function tickets(peopleInLine){
  let change = {
    25: 0,
    50: 0,
    100: 0
  }
  let answer = "YES";
  
  peopleInLine.forEach(person => {
    if (person === 25 ) {
      change[25] += 1
    }
    else if (person === 50 && change[25] > 0) {
      change[25] -= 1 , change[50] += 1
    }
    else if (person === 100 && change[25] >= 1 && change[50] >= 1 ) {
      change[100] += 1, change[50] -= 1, change[25] -= 1
    }
    else if (person === 100 && change[25] >= 3) {
      change[100] += 1, change[25] -= 3
    }
    else answer = "NO"
  
  });
  return answer;
}
```


completed: 2020-11-20T15:51:41.295+0000 | Retired


------


<br>


<br>

## 4. [Thinkful - String Drills: Repeater](https://www.codewars.com/kata/585a1a227cb58d8d740001c3)

```javascript
function repeater(string, n){
  return string.repeat(n);
}
```


completed: 2020-11-17T10:27:51.756+0000 | Retired


------


<br>


<br>

## 5. [IQ Test](https://www.codewars.com/kata/552c028c030765286c00007d)

```javascript
function iqTest(numbers){
  const n = numbers.split(' ');
  const evens = [n[0],n[1],n[2]].filter(x => x % 2 === 0).length;
  return evens === 1 || evens === 0 ?
    n.findIndex(x => x % 2 ===0) + 1
   :n.findIndex(x => x % 2 !==0) + 1;
}
```


completed: 2020-11-06T14:44:49.921+0000 | Retired


------


<br>


<br>

## 6. [Format a string of names like 'Bart, Lisa & Maggie'.](https://www.codewars.com/kata/53368a47e38700bd8300030d)

```javascript
function list(names){
  if (!names.length) return '';
  let arr = names.map(x=> x.name);
  if (arr.length === 2) return arr.join(' & ');
  else  { 
    return arr.join(', ').replace(/\(?(?=, \w*$)(,)/,' &');
  }
}
```


completed: 2020-10-21T09:27:11.308+0000 | Retired


------


<br>


<br>

## 7. [Dubstep](https://www.codewars.com/kata/551dc350bf4e526099000ae5)

```javascript
function songDecoder(song){
  return song.replace(/WUB/g,' ').replace(/\s+/g,' ').trim();
}
```


completed: 2020-10-16T13:11:15.173+0000 | Retired


------


<br>


<br>

## 8. [Sum of all the multiples of 3 or 5](https://www.codewars.com/kata/57f36495c0bb25ecf50000e7)

```javascript
function findSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 ) {
      sum += i;
    }
  }
  return sum;
},function findSum(n) {
  return Array
    .from(new Array(n), (x, i) => i+1)
    .filter( x=> x % 5 === 0 || x % 3  === 0)
    .reduce((a,b) => a + b, 0);
}
```


completed: 2020-10-12T15:31:44.603+0000 | Retired


------


<br>


<br>

## 9. [Character Frequency](https://www.codewars.com/kata/548ef5b7f33a646ea50000b2)

```javascript
function charFreq(message) {
  let counts = {};
  
  for (let i = 0; i < message.length; i++) {
    var num = message[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
}
```


completed: 2020-09-28T17:03:27.453+0000 | Retired


------


<br>


<br>

## 10. [Can we divide it?](https://www.codewars.com/kata/5a2b703dc5e2845c0900005a)

```javascript
function isDivideBy(number, a, b) {
  return number % a ===0 && number % b === 0
}
```


completed: 2020-09-28T16:13:41.063+0000 | Retired


------


<br>


<br>
