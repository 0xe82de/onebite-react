function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

// console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례
function printName(person) {
  // console.log(person && person.name);

  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
