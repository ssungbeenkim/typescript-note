/* 
Javascript에서 쓰이는 this는 다른 언어와 다르게 행동한다. 
누가 부르냐에 따라 달라짐.. 호출한 문맥에 따라 달라진다. 
*/
console.log(this); // globalthis

function simpleFunc() {
  console.log(this);
}
simpleFunc();
window.simpleFunc(); // global에서 함수를 호출하는 것은 window에서 호출하는 것과 같다. globalthis

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // Counter{...} , this는 Counter가 된다.
const caller = counter.increase;
//const caller = counter.increase.bind(counter);
//-> Counter object에 bind를 해 주면 정보를 기억한다. 그래서 아래의 Bob에서 호출해도 Counter를 가리킨다.
// 혹은 클래스 내에서 Arrow function을 사용하게 되면 선언될 당시 스코프의 this를 기억하고,
// 다른 프로그래밍 언어처럼 행동하게 할 수 있다.

/* 보충설명
글로벌에서 선언한 함수는 글로벌 객체에 등록이 된다. 하지만 let,const로 선언한 변수는 그렇지 않다. 
여기에서 예외적인 것은, var 선언한 변수이다. 쓰지 말것!
*/

/* caller는 counter.increase 함수를 참조하는 변수이다.  
이 변수는 함수를 참조하는 것일 뿐, 실제로 함수를 호출하지는 않는다. 
따라서 caller 함수 내에서 this 키워드를 사용하면 undefined가 반환된다. 

일반적으로 함수를 호출할 때, this 키워드는 호출한 객체를 가리킨다. 
하지만 caller는 counter.increase 함수를 참조하는 변수일 뿐, 객체와는 
직접적인 연관이 없기 때문에 this 키워드가 가리키는 값은 undefined가 됨. */

caller(); // undefined;  let과 const로 선언한 변수는 window에 등록되어지지 않는다.
// caller를 호출하는 것은 window 도 그 어떤 객체도 아니기 때문에 undefined가 호출하는 것과 마찬가지이다.

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob{f run()} -> bind를 해 주면 Counter()
