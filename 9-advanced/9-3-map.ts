{
  /*
    map Type은 기존의 타입들을 이용하면서 다른 타입으로 성질을 바꿔 이용할 수 있게 해 준다.
   */
  type Video = {
    title: string;
    author: string;
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // video에 key를 추가하면 videoOptional에도 추가해야 하는게 번거롭다.
  // maptype을 활용하면

  // [1, 2].map(item => item * item); // [1, 4] 이것과 비슷하다.
  type Optional<T> = {
    // 재사용성이 높다.
    [P in keyof T]?: T[P]; // for...in을 쓰는 것과 동일하게 동작한다.
  }; // T의 key인 P 는 전부 Optional이고 T[P](valew)를 값으로 가진다.

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    // 재사용성 good. 한번 정의해 두면 재사용성이 높다.
    name: 'dog',
  };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // map Type.
  };

  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie',
  };

  // video.author = XXXX readonly 라서 못바꿈

  /* 활용예제 */
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: 'hi', // title: string | null
    author: null, // author: string | null
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>; // 전달되는 오브젝트를 돌면서 타입을 Proxy 타입으로 한단계 감싸준다.
  };
}
