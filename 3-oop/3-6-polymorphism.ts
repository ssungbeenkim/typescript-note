{
  /* 
부모 클래스를 상속해서 자신에게 맞게 클래스를 다시 구현하므로써 다형성이라는 것을 만들어 볼 수 있다. 
다형성 polimorphism이란 부모 클래스나 하나의 인터페이스를 상속한 자식 클래스가 인스턴스와 부모클래스에 있는 함수들을 다른 방식으로 
다양하게 구성하므로써 다양성을 만들 수 있는 것을 말한다.
 */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean; //
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

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
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
  // 내부적으로 구현된 다양한 클래스들이 한가지 인터페이스로 구현되거나 동일한 부모 클래스를 상속했을 때
  // 자식클래스의 내부 구현사항을 신경쓰지 않고 약속된 한가지의 api를 호출하므로써 사용하는 사람도 간편하게
  // 다양한 기능들을 활용할 수 있게 도와준다.
}
