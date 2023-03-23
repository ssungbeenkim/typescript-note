{
  // 클래스 레벨에서 제네릭 사용하기
  // either: a or b
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }
  const either = new SimpleEither(4, 5);
  // const either: Either<number,number> 와 동일하다.
  either.left(); // 4
  either.right(); //5
  const best = new SimpleEither({ name: 'ellie' }, 'hello');
  // -> best 에 mouse over 하면 타입이 정해졌음을 알 수 있다.
  // 쓰는 사람이 어떤 타입이든 타입을 결정할 수 있다.
}
