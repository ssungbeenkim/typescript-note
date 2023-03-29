{
  /*
   * map Type은 기존의 타입들을 이용하면서 좀더 다른 타입으로 이용할 수 있게 해 준다.
   * 기존의 타입에서 다른 타입으로 성질을 변경할 수 있다.*/
  type Video = {
    title: string;
    author: string;
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // [1, 2].map(item => item * item); // [1, 4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in을 쓰는 것과 동일하게 동작한다.
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    // 재사용성 good
    name: 'dog',
  };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie',
  };

  // video.author = XXXX

  /* 활용예제 */
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>; // 전달되는 오브젝트를 돌면서 타입을 Proxy 타입으로 한단계 감싸준다.
  };
}
