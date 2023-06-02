# OOP 4 principles

## Encapsulation

- 고양이의 기분을 직접 변경할 수 없지만 놀아주므로써 기분이 좋게 할 수 있다.
- 정보은닉

## Abstraction

- 내부의 복잡한 구현사항을 모르더라도 기능을 외부에서 보이는 interface를 통해 사용할 수 있다.

## Inheritance

- 상속을 통해 기능을 이용할 수 있다.
- ex\)브라우저 돔 모델은 Event Target을 상속한다.

## Polymorphism

- 부모의 클래스나 인터페이스를 상속받아 자신에게 맞게 다양한 형태로 만들 수 있다.

## Composition

- 상속의 문제점
  - 상속의 깊이가 길어질수록 관계가 복잡해 질 수 있다.
  - 부모클래스를 수정하거나 새로운 기능을 도입하려 하면 자식 클래스 전부에 영향이 간다.
  - 다중 상속은 TypeScript에서 지원하지 않음.
- Favor Composition over inheritance라는 말이 있다.
- 필요한 것들을 가져와서 조립해 나가는 것.
- Dependancy Injection
- 클래스 간에 상호작용을 하는 경우에는 interface를 통해 의사소통 해야 한다.
