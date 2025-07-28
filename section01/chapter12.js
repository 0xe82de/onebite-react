// 1. 함수 표현식

function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
// console.log(varA);
varA();

// varB(); // 호이스팅 되지 않음

let varB = function funcB() {
  // 익명 함수
  //   console.log("funcB");
};

varB();

// funcB(); // Uncaught ReferenceError

// 2. 화살표 함수
let varC = (value) => value + 1;

console.log(varC());
