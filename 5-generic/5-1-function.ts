{
  // 제네릭을 활용하여 재활용성이 높은 함수를 만들 수 있다.
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  } // 타입별로 다 만들어야 하나?

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  } // 타입 보장이 되지 않는다. 그리고 any는 쓰지 않는 것이 좋다.
  const result = checkNotNullAnyBad(123);

  function checkNotNull<T>(arg: T | null): T {
    // 제네릭 이용하기
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123); // 이 시점에 number로 결정된다.
  const boal: boolean = checkNotNull(true);
}
