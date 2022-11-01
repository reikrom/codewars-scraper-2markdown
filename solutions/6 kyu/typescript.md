## 1. [Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)

```typescript
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


completed: 04/07/2022 | 6 kyu


------


<br>


<br>
