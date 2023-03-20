{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4]; // refer generics
  // const scores: number[] = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    //function printArray(fruits: readonly Array<number>) { 이렇게 작성하는 것은 아직 허용되지 않는다.
    // readonly 를 작성할 때 이렇게 해야한다.
    // fruits.push // error 발생. 변경할 수 없다.
  }

  // Tuple -> interface, type alias, class 대체해서 사용하는 것이 좋다.
  // 배열에 서로 다른 타입을 담을 수 있게 해준다. 사용 권장되지 않는다.
  /* 
  인덱스로 접근하기 때문에 데이터에 접근할 때 값을 출력하거나 정의된 곳으로 가지 않는 이상 어떤 데이터가 들어있는지 알기 불편하다. 
  */
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
  // object destructuring이용하면 조금 더 명확하게 사용할 수 있지만
  // 하지만 데이터를 사용하는 곳에서 임의로 이름을 결정하고 써야 한다는 단점이 있음
  // react의 useState 가 대표적으로 튜플을 리턴하는 예시이다.
  // 일반적인 경우에는 interface나 type alias로 대체해서 쓰는 것이 좋다.
}
