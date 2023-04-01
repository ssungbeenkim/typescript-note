import * as calculator from './10-3-module1.js';
console.log(calculator.add(1, 2));
calculator.print();
calculator.number;

/* 
add(1,2); html 파일에 연결해서 브라우저에서 그냥 실행이 정상적으로 된다. 모듈화를 하지 않으면 
기본적으로 함수는 글로벌 스코프에서 측정이 되기 때문이다.
문제점 
1. 두 파일에서 동일한 이름의 함수를 작성한다면 글로벌에서는 어떤 함수가 호출될지 알 수 없다. 
2. 함수를 두번 선언하는 문제가 발생한다. 그래서 모듈화 해서 작성하는 것이 중요하다.
* html file에서  type="module"로 작성하는 순간 두 파일은 export,import해서 사용하지 
않는 이상 접근할 수 없는 상태가 된다. 
모듈화 하면 
1. 이름충돌을 방지할 수 있다. 
2. 코드를 분리하므로써 모듈성을 높여준다. 
3. 모듀간에 재사용성을 높여준다. 
  */
