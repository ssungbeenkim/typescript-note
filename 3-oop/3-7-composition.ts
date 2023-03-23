{
  // 상속에는 문제가 있다.(나쁜건 아님) 우유설탕 다 넣은 커피를 만들고 싶으면? 한가지 이상의 클래스를 동시상속하는것은 문법적으로 불가능하다.
  // 그리고 상속된 클래스는 부모클래스의 행동을 수정하면 모든 자식클래스에 영향을 미칠 수 있다.
  // 상속이 나쁜 것은 절대 아니지만 복잡해질 수 있는 경우에는 Composition을 사용하는 것이 좋다.
  // composition을 통해 interface의 강력한 힘을 느낄 수 있다.
  // 상속의 단계를 한단계로만 유지하면서 필요한 코드를 재사용 할 수 있는 방법에 대해 알아보자.

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // Milk Frother
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  class FancyMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Fancy!!!! Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class CheapMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Cheeeeeeap~~ Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class ColdMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Coling... Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  // SugarMixer
  interface SugarSource {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class AutomaticSugarMixer implements SugarSource {
    addSugar(cuppa: CoffeeCup): CoffeeCup {
      console.log(`Adding sugar...`);
      return {
        ...cuppa,
        hasSugar: true,
      };
    }
  }
  class FancySugarMixer implements SugarSource {
    addSugar(cuppa: CoffeeCup): CoffeeCup {
      console.log(`Adding expensive sugar...`);
      return {
        ...cuppa,
        hasSugar: true,
      };
    }
  }

  // Machine
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
    constructor(
      beans: number,
      private milk: MilkFrother // interface를 이용해 디커플링
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number, private sugar: SugarSource) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      private sugar: SugarSource,
      private milk: MilkFrother // interface를 이용해 디커플링
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const milkCoffee = this.milk.makeMilk(coffee);
      return this.sugar.addSugar(milkCoffee);
    }
  }

  //Milks
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  //Sugars
  const fancySugar = new FancySugarMixer();
  const autoSugar = new AutomaticSugarMixer();

  /* Machines */
  //Sweet Coffee
  const sweetCoffeeMachine = new SweetCoffeeMachine(30, autoSugar);
  const fancySweetCoffeeMachine = new SweetCoffeeMachine(20, fancySugar);
  //Latte
  const coldLatteMachine = new CaffeLatteMachine(20, coldMilkMaker);
  const fancyLatteMachine = new CaffeLatteMachine(30, fancyMilkMaker);
  const cheapLatteMachine = new CaffeLatteMachine(30, cheapMilkMaker);
  //Sweet Latte
  const sweetLatteMachine = new SweetLatteMachine(
    32,
    autoSugar,
    cheapMilkMaker
  );
  const fancySweetLatteMachine = new SweetLatteMachine(
    32,
    fancySugar,
    fancyMilkMaker
  );
  const coldSweetLatteMachine = new SweetLatteMachine(
    32,
    autoSugar,
    coldMilkMaker
  );

  const machines: CoffeeMaker[] = [
    coldLatteMachine,
    cheapLatteMachine,
    cheapLatteMachine,
    fancyLatteMachine,
    sweetLatteMachine,
    sweetCoffeeMachine,
    coldSweetLatteMachine,
    fancySweetLatteMachine,
    fancySweetCoffeeMachine,
  ];

  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}
// composition은 코드의 재사용성을 높여준다.
// 그러나 치명적인 단점은, SweetCaffeLatteMachine은 두 클래스와 너무 타이트하게 커플링된다는 것이다.
// 가령, 새로운 거품기와 설탕믹서가 개발된다고 했을 때 쓰려면 클래스가 업데이트되어져야만 한다.
// -> 클래스와 클래스간에 서로 잘 알고지내는 것은 좋지 않다.

// 디커플링의 원칙:
// 클래스간에 상호작용을 하는 경우에는 클래스 자체를 노출하지 않고, interface를 통해서 의사소통해야 한다.
