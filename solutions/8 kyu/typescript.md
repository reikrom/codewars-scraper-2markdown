## 1. [Learning TypeScript. Basic Types](https://www.codewars.com/kata/5914c6ee51f1d39b5600001c)

```typescript
export enum Color {Red = 1, Green = 2, Blue = 4}

export const var1Boolean: boolean = true;
export const var2Decimal: number = 13;
export const var3Hex: number = 0xf00d;
export const var4Binary: number = 0b111111;
export const var5Octal: number = 0o744;
export const var6String: string = 'Hello, world!';
export const var7Array: any[] = [1, 'test', {a: 3}, 4, 5];
export const var8NumericArray: number[] = [1, 2, 3, 4, 5];
export const var9Tuple: [string,number] = ['key', 12345];
export const var10Enum: Color = Color.Blue;
export const var11ArrayOfAny: Array<any> = [1, 'test', {a: 3}, 4, 5];
export const var12VoidFunction =(): void =>{}
export const var13Null: null = null;
export const var14Undefined: undefined = undefined;
export const var15NeverFunction =():never=>{throw new Error('')};
```


completed: 02/11/2022 | 8 kyu


------


<br>


<br>

## 2. [Difference of Volumes of Cuboids](https://www.codewars.com/kata/58cb43f4256836ed95000f97)

```typescript
export function findDifference(a: [number, number, number], b: [number, number, number]): number{
  const volA = a.reduce((a,b) => a*b)
  const volB = b.reduce((a,b) => a*b)
  
  return [volA, volB].sort((a,b) => b - a).reduce((a,b) => a - b);
}
```


completed: 02/11/2022 | 8 kyu


------


<br>


<br>

## 3. [How many stairs will Suzuki climb in 20 years?](https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e)

```typescript
export function stairsIn20(stairs:number[][]) {
  return stairs.flat().reduce((a,b) => a+b) * 20;
}
```


completed: 02/11/2022 | 8 kyu


------


<br>


<br>

## 4. [Grasshopper - Messi goals function](https://www.codewars.com/kata/55f73be6e12baaa5900000d4)

```typescript
export const goals = (...numbers: number[]): number  => numbers.reduce((a,b) => a+b);,export function goals (laLigaGoals:number, copaDelReyGoals:number, championsLeagueGoals:number): number {
  //show me the goals!
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
```


completed: 02/11/2022 | 8 kyu


------


<br>


<br>

## 5. [Function 2 - squaring an argument](https://www.codewars.com/kata/523b623152af8a30c6000027)

```typescript
export const square = (num: number): number => num ** 2;
```


completed: 02/11/2022 | 8 kyu


------


<br>


<br>

## 6. [Convert to Binary](https://www.codewars.com/kata/59fca81a5712f9fa4700159a)

```typescript
export function toBinary(n:number):number {
  return Number(n.toString(2))
}
```


completed: 02/11/2022 | 8 kyu


------


<br>


<br>

## 7. [Grasshopper - Terminal game move function](https://www.codewars.com/kata/563a631f7cbbc236cf0000c2)

```typescript
export function move(currPosition: number, roll: number): number {
  const spacesToMove = roll * 2;
  return currPosition + spacesToMove;
}
```


completed: 02/11/2022 | 8 kyu


------


<br>


<br>

## 8. [Grasshopper - Basic Function Fixer](https://www.codewars.com/kata/56200d610758762fb0000002)

```typescript
export const addFive = (num : number) : number => {
  let total = num + 5
  return total;
}

// const addFive = (num : number) : number => num+5;

```


completed: 02/11/2022 | 8 kyu


------


<br>


<br>

## 9. [Beginner Series #1 School Paperwork](https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd)

```typescript
export function paperwork(n: number, m :number): number{
  if (n <0 || m < 0) {
      return 0;    
  } else return n * m

}
// export const paperwork = (n: number, m :number): number =>  n < 0 || m < 0 ? 0 : n * m;
```


completed: 02/11/2022 | 8 kyu


------


<br>


<br>

## 10. [Plural](https://www.codewars.com/kata/52ceafd1f235ce81aa00073a)

```typescript
export function plural(n:number):boolean {
  return n === 1 ? false : true
}
```


completed: 29/04/2022 | 8 kyu


------


<br>


<br>
