{
  /*
   * index를 이용하면 다른 타입의 키의 value타입을 사용할 수 있다. */
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

  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Gender = Animal['gender']; //'male' | 'female'

  type Keys = keyof Animal; //* 'name' | 'age' | 'gender' 마치 유니온타입
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
