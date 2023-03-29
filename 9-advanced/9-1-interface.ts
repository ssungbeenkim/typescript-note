{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1, //*1
  };

  // class ★
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

  interface ZPositionInterface extends PositionInterface {
    z: number; // 상속을 통해 확장 가능
  }

  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number;
  } // 같은 이름으로 인터페이스를 정의하면 사용하는 곳에서는 두가지를 합한 형태로 사용해야 한다. (*1)

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
