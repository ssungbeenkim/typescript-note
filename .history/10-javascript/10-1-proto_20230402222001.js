// 브라우저 콘솔에서 확인해 볼것.
/* 
프로토타입은 자바스크립트에서 객체 지향 프로그래밍을 하기 위해 만들어진 것이다.
TypeScript 파일을 JS 파일로 컴파일 하면 ES5 정도부터는(클래스 지원 x) 
프로토타입을 사용해 상속을 이용하는 것을 볼 수 있다. 
*/
const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true

const array = [];
console.log(array); // Array proto 를 상속하고 그 안에 Object proto 를 가지고 있다.

console.clear();

function CoffeeMachine(beans) {
  /* Constructor Function  */
  this.beans = beans;
  // Instance member level
  /* this.makeCoffee = shots => {
    console.log('making... ☕️');
  }; */
}
// Prototype member level -> Array, Object에서 __proto__ 에 정의되어 있던 함수처럼.
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making... ☕️');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);
machine1.makeCoffee(3); // 마치.. wrapper 함수나 built in object를 쓰는 것 같다.

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
// LatteMachine은 CoffeeMachine을 상속.
// Proto에 직접 넣어줄 수 있다.

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee(); //!!!
