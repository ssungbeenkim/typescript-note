{
  // 타입스크립트의 타입이 강력한 이유는 첫째로 바로 Type Aliase 때문이다.
  // 새로운 타입을 정의할 수 있다.
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    // Object type
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
    // animal: dog // error
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json'; // 'json' 만 할당할 수 있음

  type Boal = true;
}
