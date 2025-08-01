// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 곱하기 연산이 더하기 연산보다 우선순위가 높다.
let num6 = 1 + 2 * 10;
// console.log(num6);

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;
// console.log(num7);

// 4. 증감 연산자
let num8 = 10;
// console.log(++num8); // 11 전위 연산
// console.log(num8++); // 11 후위 연산
// console.log(num8); // 12

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
// console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // false
// let comp1 = 1 == "1"; // true
let comp2 = 1 !== 2;
// console.log(comp1, comp2);

let comp3 = 2 > 1; // true
let comp4 = 2 < 1; // false
// console.log(comp3, comp4);

let comp5 = 2 >= 2; // true
let comp6 = 2 <= 2; // true
console.log(comp5, comp6);
