// 클래스 레멜에서 제네릭 사용하기
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
const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); //5
const best = new SimpleEither({ name: 'ellie' }, 'hello');
// 쓰는 사람이 어떤 타입이든 타입을 결정할 수 있다.
