{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level.
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

  const staticMaker = CoffeeMaker.makeMachine(32); // static은 class level이므로 class를 통해 접근

  const maker1 = new CoffeeMaker(32);
  console.log(maker1);
  const coffee = maker1.makeCoffee(1);
  console.log(coffee);
}
// javascript에서 Math.abs .. 등 으로 쓰는 함수들은 모두 클래스 레벨 메서드이다.
