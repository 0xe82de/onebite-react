// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치라 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
// let arr1 = []; // arr2 => [4, 5, 6]
let arr2 = [4, ...arr1, 5, 6];

// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
  c: 13,
};
let obj2 = {
  c: 3,
  d: 4,
  ...obj1,
};
// console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
// funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one, two, ...rest) {
  console.log(one);
  console.log(two);
  console.log(rest);
}

funcB(...arr1, ...arr2);
