'use strict';
// 1. 
// let obj = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }

// }

// multiplyNumeric(obj);
// console.log(obj);

// 2.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);;

// 3.
// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert( this.name ); // Error: Cannot read property 'name' of null
//   }

// };


// let admin = user;
// user = null; // user를 null로 덮어씁니다.

// admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생했습니다.


//  -메서드와 this-
// 1.
/*let calculator = {
  firstNum: +prompt("숫자를 입력하세요", 0),
  secondNum: +prompt("두번째 숫자를 입력하세요", 0),
  read() {
    return `${this.firstNum, this.secondNum}`;
  },
  sum() {
    return `${this.firstNum + this.secondNum}`;
  },
  mul() {
    return `${this.firstNum * this.secondNum}`;
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
    비교해보기
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('첫 번째 값:', 0);
    this.b = +prompt('두 번째 값:', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

// 2.
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// }

// ladder.up().up().down().showStep();

// - new 연산자와 생성자 함수 -

// 1.
// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// let a = new A;
// let b = new B;

// alert( new A() == new B() ); // true

// 2.
// function Calculator() {
//   return {
//     sum() {
//       return this.a + this.b;
//     },
//     mul() {
//       return this.a * this.b;
//     },
//     read() {
//       this.a = +prompt('첫 번째 값:', 0);
//       this.b = +prompt('두 번째 값:', 0);
//     },
//   };
// };

// 3.
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt("값을 입력하시오");
//   };
// }

// let accumulator = new Accumulator(1); // 최초값: 1

// accumulator.read(); // 사용자가 입력한 값을 더해줌
// accumulator.read(); // 사용자가 입력한 값을 더해줌

// alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함

// - 숫자형 -
// 1.
// const num1 = +prompt("숫자를 입력하세요", 0);
// const num2 = +prompt("두번째 숫자를 입력하세요, 0");

// function sum() {
//   return Number(num1.toFixed(1)) + Number(num2.toFixed(1));
// }

// console.log(sum());

// 2.
// function readNumber() {
//   let num;

//   do {
//     num = prompt("숫자를 입력하시오.", 0);
//   } while ( !isFinite(num) )
  
//   return (num === null || num === '') ? null : +num;
// }

// console.log(readNumber());

// 3.
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );

// 4.
// function randomInteger(min, max) {
//   return Math.round(min + Math.random() * (max - min));
// }

// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) );

// - 문자열 -
// 1.
// function ucFirst() {
//   let str = prompt("문자를 입력하시오.");
//   return alert(str.charAt(0).toUpperCase() + str.slice(1));
// }

// ucFirst();

// 2.
// function checkSpam(str) {
  
//   if (str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX")) {
//     return alert("true");
//   } else {
//     return alert("False");
//   }
// }

// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
// checkSpam("innocent rabbit");

// // 비교하기

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// 3.
// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return alert(`${str.slice(0, maxlength - 1)}...`);
//   } else {
//     return alert(str);
//   }
// }

// truncate("What I'd like to tell on this topic is:", 20);
// truncate("Hi everyone!", 20);

// 비교하기

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }

// 4.
// function extractCurrencyValue(str) {
//   str = +str.slice(1);
//   return str;
// }

// alert( extractCurrencyValue('$120') === 120 );