{
  /* 
외부에서 클래스를 받아왔을 때 사용할 수 있는 함수가 너무 많아서 복잡할 수 있다. 
Abstraction을 통해 정말 필요한 인터페이스만 노출하므로써 사용하기 쉽게 만들 수 있다. 
interface를 활용하면 추상화를 더 극대화해서 사용이 가능하다. 

  */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // interface는 계약서같은 것이다. 사용하면 추상화를 극대화 할 수 있다.
  interface CoffeeMaker {
    // Interface 이름 앞에 I를 붙이는 경우도 있음. but 외부에서 사용하는 이름이므로 간결한게 좋을 것 같다.
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // 위의 두 인터페이스를 구현하는 클래스이고, 인터페이스에 있는 모든 함수를 구현해야만 한다.
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; // private으로 만들어 생성자 함수로 클래스를 생성할 수 없다.
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

  const makerCM: CoffeeMachine = CoffeeMachine.makeMachine(32);
  makerCM.fillCoffeeBeans(1);
  // type이 CoffeeMachine 이 되면 클래스 안의 모든 public 메서드에 접근 가능.
  const makerI: CoffeeMaker = CoffeeMachine.makeMachine(100);
  makerI.makeCoffee(1);
  /* type이 interface CoffeeMaker이므로  interface에서 정의한 메서드만 사용 가능
  maker2.fill... fillCoffeeBeans 사용이 불가능하다. 즉, interface를 사용하여 사용자의 행동 범위를 제한할 수 있다.
  Machine은 Maker 를 implement 하는 class 이고, Maker interface는 makeMachine() 메서드만 가지고 있다.
  추상화, 즉 특정 방향으로 사용하도록 유도가 가능하다. */
  const makerIC: CommercialCoffeeMaker = CoffeeMachine.makeMachine(15);
  makerIC.fillCoffeeBeans(15);
  makerIC.makeCoffee(1);
  makerIC.clean();

  console.log('--------');

  class AmatureUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(1);
      console.log(coffee);
    } // makeCoffee() 함수만 쓸 수 있다.
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(1);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    } // 인터페이스에서 지정한 함수들을 모두 쓸 수 있다.
  }

  const amature = new AmatureUser(makerI);
  amature.makeCoffee();
  const pro = new ProBarista(makerIC);
  pro.makeCoffee();
}

// abstraction 하는 방법은 언어마다 그 레벨과 방법이 다를 수 있다. 보통은 정보 은닉만으로도 충분히 추상화 가능
// TS는 interface를 지원하니 interface 로 만들어보자.

/*
동일한 클래스의 인스턴스일지라도 두가지의 인터페이스를 구현하기 때문에 인터페이스에서 규약된
클래스보다는 조금 더 좁은 범위의 인터페이스에서 규약된 함수들만 접근이 가능했다. 
AmatuerUser나 ProBarista 클래스는 인터페이스가 어떻게 구현되어 있는지 클래스에 얼마나 많은 함수들이 있는지 
신경쓰지 않고 인터페이스에 규약된 함수들만 사용하여 클래스와 의사소통 할 수 있다. 
  */
