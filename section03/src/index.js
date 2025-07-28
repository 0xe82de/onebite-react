// Common JS
// const { add, sub } = require("./math");

// ES module
// default function 은 중괄호 필요 없으며, 이름도 변경할 수 있다.
import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
