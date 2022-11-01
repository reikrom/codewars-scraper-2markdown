## 1. [Ramda #4 - Mean numbers](https://www.codewars.com/kata/5a53f4adb3bfa861120003e6)

```javascript
const isDivisibleBy3 = R.pipe(
  R.modulo(R.__, 3),
  R.equals(0)
)

const isNotEmpty = R.complement(R.isEmpty)

const mean3 =  R.ifElse(
  R.allPass([isNotEmpty, R.all(isDivisibleBy3)]),
  R.mean,
  () => null
),

// const mean3_ = numbers => {
//   if (R.isEmpty(numbers)) { return null; }
    
//   if (R.all(isDivisibleBy3,numbers)) {
//       return R.mean(numbers)
//       } else return null;
 
// }

//  );

const isDivisibleBy3 = R.pipe(
  R.modulo(R.__, 3),
  R.equals(0)
)

const isNotEmpty = R.complement(R.isEmpty)

const mean3 =  R.ifElse(
  R.allPass([isNotEmpty, R.all(isDivisibleBy3)]),
  R.mean,
  () => null
)
```


completed: 2022-05-04T14:54:07.585+0000 | Beta


------


<br>


<br>

## 2. [Ramda #1 - Books with errors](https://www.codewars.com/kata/5a5394b780eba8f6c3000553)

```javascript


const issueErrorNotice = books => {
  const { when, propEq, map, __, mergeLeft} = R;
  
  return map(
      when(propEq('errors', true), 
           mergeLeft(__, {errorNotice: true})
      ), books);
}
```


completed: 2022-05-03T15:32:20.387+0000 | Beta


------


<br>


<br>
