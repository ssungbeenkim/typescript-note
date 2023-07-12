{
  /**
   * Enum
   * 상수 값들을 하나로 모아서 정의할 수 있게 도와줌.
   * JS에서는 지원하지 않아서 TS에서 자체적으로 지원
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'; // enum 보다는 union type을 활용하자.
  enum Days {
    Monday, //0 // Monday = 1로 지정하면 1부터 시작할 수 있다.
    Tuesday, //1 // 문자열로도 할당할 수 있지만 전부 지정해주어야 한다.
    Wednesday, //2
    Thursday, //3
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday); // 1
  let day: Days = Days.Saturday; //
  // day = Days.Tuesday;
  // day = 10; // TypeScript 에서는 enum을 잘 쓰지 않는 것이 좋다.
  // 다른 어떤 숫자도 할당할 수 있고 에러가 발생하지 않고 타입 보장 불가능
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
  // union type으로 충분히 대체되어 타입 보장하여 사용이 가능하다.
  // 모바일 클라이언트와 의사소통 하는 등 꼭 필요한 경우가 아니라면 사용하지 않는 것이 좋다.
}
