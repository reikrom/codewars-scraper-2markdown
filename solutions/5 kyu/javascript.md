## 1. [Valid Parentheses](https://www.codewars.com/kata/52774a314c2333f0a7000688)

```javascript
function validParentheses(parens){
  let str = parens;
  const regEx = /\(\)/
  
  while (regEx.test(str)) {
    str = str.replace(regEx, "");
  }
  
  return !str
  
}
```


completed: 2022-07-04T13:32:56.463+0000 | 5 kyu


------


<br>


<br>

## 2. [Rot13](https://www.codewars.com/kata/530e15517bc88ac656000716)

```javascript
function rot13(message){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
return  message.split('').map(c => {
  let rotIndex;
  // return non alphanumeric chars
  if (c.match(/[\d\W]/)) return c;
  // upperCase chars
  else if (c === c.toUpperCase() ) {
    c = c.toLowerCase()
    rotIndex = (alphabet.indexOf(c) + 13) % 26
    return alphabet[rotIndex].toUpperCase();
  // regular chars
  } else {
    rotIndex = (alphabet.indexOf(c) + 13) % 26;
    return alphabet[rotIndex]
  }
 }).join('')
}
```


completed: 2020-11-12T18:19:06.617+0000 | 5 kyu


------


<br>


<br>

## 3. [First non-repeating character](https://www.codewars.com/kata/52bc74d4ac05d0945d00054e)

```javascript
function firstNonRepeatingLetter(s) {
  let arr = s.toLowerCase().split('');
  let res = '';  
  for (i = 0; i<arr.length; i++ ){
     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
       return res = s[i];
     }  
    }
  return res;
  }
```


completed: 2020-10-29T15:26:57.554+0000 | 5 kyu


------


<br>


<br>

## 4. [Human Readable Time](https://www.codewars.com/kata/52685f7382004e774f0001f7)

```javascript
function humanReadable(seconds) {
  var hh = ~~(seconds / 3600);
  var mm = ~~((seconds % 3600) / 60);
  var ss = ~~seconds % 60;

  if (hh < 10)  hh = `0${hh}`; 
  if (mm < 10)  mm = `0${mm}`; 
  if (ss < 10)  ss = `0${ss}`; 

  
  return `${hh}:${mm}:${ss}`
}
```


completed: 2020-10-28T16:18:29.716+0000 | 5 kyu


------


<br>


<br>

## 5. [Moving Zeros To The End](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

```javascript
var moveZeros = function (arr) {
  let newArr = arr.filter(n => n !== 0);
  let zeros = arr.length - newArr.length;
  console.log(zeros)
  return [...newArr, ...Array(zeros).fill(0)]
}
```


completed: 2020-10-14T16:59:48.031+0000 | 5 kyu


------


<br>


<br>

## 6. [Simple Pig Latin](https://www.codewars.com/kata/520b9d2ad5c005041100000f)

```javascript
function pigIt(str){
  return str.split(' ').map(w => { 
    if (w.length === 1 && w.match(/\W/) ) 
    {
      return w; 
    } 
    else return w.slice(1) + w.charAt(0)+"ay" }).join(' ');

},function pigIt(str){
  console.log(str)
  return str.split(' ').map(w => { 
    if (w.length === 1 && w.match(/\W/) ) return w 
    else return w.slice(1) + w.charAt(0)+"ay" }).join(' ');
}
```


completed: 2020-10-14T16:49:44.967+0000 | 5 kyu


------


<br>


<br>
