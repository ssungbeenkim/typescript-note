{
  // 상속과 관련된 조금 더 추상화를 활용할 수 잇는 문법
  // 클래스간에 의사소통을 하는 경우에는 계약서(interface)에 의거해서 해야 한다.

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    // abstract class는 instance를 만들 수 없다. 상속하여 사용이 가능.
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    protected abstract extract(shots: number): CoffeeCup;
    // abstract 로 자식 클래스마다 다르게 구현할 수 있게 만든다.
    // 접근 제어자는 abstract 전에 와야한다.
    // 구현사항은 적으면 안됨

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}
// abstract 함수를 상속하면서 abstract 함수를 구현하지 않으면 오류가 발생한다.
// 조금 더 안전하게 공통적인 기능을 수행할 수 있고, 상속받는 클래스마다 달라져야 하는것만
// 직접 구현하게끔 강조할 수 있다.
