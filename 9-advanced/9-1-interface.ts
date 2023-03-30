{
  // type And Interface

  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★ -> 비슷하게 사용 가능하다.
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1, //*1
  };

  // class ★ -> 비슷하게 사용 가능.
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends
  type ZPositionType = PositionType & { z: number };
  // type은 intersaction 이용해서 두가지를 묶은 타입을 만들 수 있다.
  //https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types

  interface ZPositionInterface extends PositionInterface {
    z: number; // 상속을 통해 확장 가능
  }

  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number;
  } // interface에서 같은 이름으로 인터페이스를 다시 정의하면 사용하는 곳에서는 두가지를 병합한 타입이 된다.  (*1)

  // type PositionType { // Type cannot be merged.
  // }

  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right'; // interface cannot do this
}
