{
  /*
  타입스크립트에서는 타입을 변환하는 것이 가능하다. (다른 언어에서는 거의 없음)
  인덱스 기반의 타입을 사용할 수 있다. 
  
   * index를 이용하면 다른 타입의 키의 value타입을 사용할 수 있다. 
  interface : 클래스 등에서 구현하고 따라가야 할 규격사항을 정의할 때 사용한다. 
  type : 데이터의 모습, 타입을 정의한다. 
  */

  const obj = {
    name: 'ellie',
  };
  obj.name; // ellie
  obj['name']; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string type이 된다.
  const text: Name = 'hello';

  type Gender = Animal['gender']; //'male' | 'female'

  type Keys = keyof Animal; //* 'name' | 'age' | 'gender' 마치 유니온타입처럼
  //모든 value의 타입들이 할당된다.
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender']; //gender : male|female
  };
  const person: Person = {
    name: 'ellie',
    gender: 'male',
  };
}
