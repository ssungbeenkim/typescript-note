{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public 외부에서 볼 수 있고 상속이나 인스턴스를 통해 내, 외부에서 볼 수 있음
  // private 외부에서 볼 수도 접근할 수도 없다. 자식 클래스 내부에서조 볼 수 없음.
  // protected 외부에서는 볼 수 없지만 상속을 할 때, 자식 클래스 내부에서는 볼 수 있게 함
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    // *1 private 하므로써 makeMachine을 사용하도록 권장. 외부에서 생성자를 사용하지 못하도록 막는다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      // public 함수들은 따로 public이라고 작성 안해주어도 된다.
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // *1 const maker = new CoffeeMaker(); Error Constructor of class 'CoffeeMaker' is private and only accessible within the class declaration.
  const maker1 = CoffeeMaker.makeMachine(7);
  console.log(maker1);
  //CoffeeMaker { coffeeBeans: 7 } private인데 왜 출력이 되는거지?
  maker1.makeCoffee(1);
  console.log(maker1);
  maker1.fillCoffeeBeans(3);
  console.log(maker1); //

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        // 전달된 값의 유효성 검사가 가능하다.
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {}
    // 생성자에 접근 제어자를 설정하면 바로 멤버변수로 설정이 된다.
    // firstName 을 외부에서 변경하려고 하면 read-only property 라고 안된다고 한다.
  }
  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.fullName);
}
