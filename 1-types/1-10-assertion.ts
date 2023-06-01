{
  /**
   * Type Assertions
   * 쓰지 않는 것이 좋지만 JS와 함께 연동되어 쓰기 때문에 불가피하게 써야 하는 경우도 있다.
   */
  function jsStrFunc(): any {
    return 'string'; // 숫자를 할당하게 되면 에러가 발생하지 않지만 문제가 발생할 수 있음
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  // result가 string type인 것을 알고 있으므로 casting을 해 주어 string api들을 사용할 수 있다.
  console.log((<string>result).length); // 위와 동일

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // 작성할 시에는 에러 발생하지 않는다. 컴파일시 에러 발생, 어플리케이션 종료

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  // numbers! 이렇게 해도 된다. 배열이 들어있는 것을 정말로 확신할 수 있는 경우에만 쓴다.
  numbers!.push(2); // 😱

  const button = document.querySelector('class')!; // 100%일 때는 이렇게 쓸 수 있음.
}
