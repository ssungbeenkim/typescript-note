/**
 * Type Inference
 */
let text = 'hello'; // 에러가 발생하지 않음. 타입이 뻔한 경우에는 생략 가능하다.
function print(message = 'hello') {
  // 인자에는 타입을 명시해주는 것이 좋다.
  // 이 함수에서는 기본값을 문자열로 지정해주므로써 TS가 자동으로 string type이라고 판단하므로 이렇게 전달해도 좋다.
  console.log(message);
}
print('hello');

function add(x: number, y: number): number {
  // return값의 type: number을 명시하지 않아도 알아서 inference한다. 하지만 적어주는 것이 좋다.
  return x + y;
}
const result = add(1, 2); // result는 자동으로 숫자 타입으로 정해진 것을 알 수 있다.
// 꼬박꼬박 타입을 명시해주지 않아도 되기는 하지만 보통 프로그램에서는 이렇게 간단히 작성하지 않으므로
// 타입을 꼭 명시해 주는 습관을 들이는 것이 좋다.
// 보통 프로젝트를 진행하는 팀에서 스타일 가이드를 정해서 일관성 있는 타입추론 사용 범위를 논함.
