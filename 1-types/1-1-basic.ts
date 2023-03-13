{
  /**
   * JavaScript
   * let, const
   * var => xxxxxx
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩 이렇게 쓰지 않는다.
  let age: number | undefined; // union 타입에 대해 뒤에서 배울것
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // 무언가가 있거나 없을 때 undefinded를 많이 쓴다.
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;
  /* 
boolean은 아무것도 결정되어 있지 않은 상태. 
null은 비어져 있음을 명확하게 명시하는 것. 
*/
  // unknown 💩
  let notSure: unknown = 0; // 어떤 종류의 데이터가 담길지 모름. 가능하면 쓰지 않는것이 좋다.
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0; // 이것도 불가피하지 않다면 쓰지 않는것이 좋다.
  anything = 'hello';

  // void
  function print(): void {
    // 아무것도 리턴하지 않는다. 생략 가능
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩 보통 변수에는 쓰지 않는다.

  // never
  function throwError(message: string): never {
    // 함수에서 절대 리턴하지 않는 경우를 명시
    // message -> server (log)
    /* throw new Error(message); */
    /* while (true) {} */
  }
  let neverEnding: never; // 💩 // 이렇게 쓰지는 않는다.

  // objet
  let obj: object; // 💩 원시타입을 제외한 모든 오브젝트 타입을 담을 수 있다.
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });

  // 광범위한, 추상적인 타입은 사용하지 않는 것이 좋다.
}
