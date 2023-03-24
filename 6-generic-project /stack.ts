// Generic을 이용해서 Generic Type으로 바꿔보자.
// 어떤 타입이든 넣을 수 있는 스택으로 만들어보기.
{
  // 스택 인터페이스 선언
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  // 스택 노드 타입 정의
  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  // 스택 클래스 구현
  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    // 생성자에서 스택의 용량(capacity)을 받아서 설정
    constructor(private capacity: number) {}

    // size getter 구현
    get size() {
      return this._size;
    }

    // push 메소드 구현
    push(value: T) {
      // 스택이 가득 찬 경우 에러 던지기
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      // 새로운 노드를 생성해서 head에 추가
      const node = { value, next: this.head };
      //node는 타입 head에 정확한 타입이 명시되어 있기 때문에
      //명확한 경우에는 추론을 이용하기에 타입을 적지 않아도 된다.
      this.head = node;
      this._size++;
    }

    // pop 메소드 구현
    pop(): T {
      // 스택이 비어있는 경우 에러 던지기
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      // head 노드를 제거하고 head를 다음 노드로 변경
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  // 스택 객체 생성 후 값 추가
  const stack = new StackImpl<string>(10); // string을 명시하지 않으면 unknown이 된다.
  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');
  stack.push('Vincent 4');

  // 스택 출력
  console.log(stack);
  console.dir(stack, { depth: null });
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  // 스택 객체 생성 후 값 추가
  const stack2 = new StackImpl<number>(10); // string을 명시하지 않으면 unknown이 된다.
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  stack2.push(4);

  // 스택 출력
  console.log(stack2);
  console.dir(stack2, { depth: null });
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
