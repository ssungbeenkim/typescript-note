// 자 이렇게 CoffeeMachine 클래스가 정의되어져 있어요.
// 그리고 CoffeeMachine를 상속 하는 LatteeMachine 있다고 해볼께요
class CoffeeMachine {
  grindBeans() {}
  preheat() {}
  extract() {}
  makeCoffee() {
    this.grindBeans();
    this.preheat();
    this.extract();
  }
}

// 이렇게 상속만 해놓고, 부모 클래스의 함수를 재정의(오버라이딩) 하지 않으면
// 그냥 부모 클래스에서 구현된 함수 그대로를 사용하게 되요.
class LatteMachine extends CoffeeMachine {}

// 이렇게 호출하면 CoffeeMachine 클래스의 makeCoffee 함수가 구현되어져 있는대로
// makeCoffee 함수가 호출되면
// 함수 내부에서 순차적으로 grindBeans → preheat → extract 함수를 호출하게 되죠.
const machine = new LatteMachine();
machine.makeCoffee();

// 이제, 아래와 같이 LatteMachine에서 makeCoffee 함수를 오버라이딩 해주면
// 자식 클래스에서 부모클래스에 있는 함수를 재정의 하는 순간! 그 함수를 호출하면
// 자식 클래스에서 구현한 함수의 코드가 실행이 되어져요.
// 지금 구현된 대로는, makeCoffee() 함수를 호출하면 아무것도 일어 나지 않아요. (빈코드죠?)
// 더이상 grindBeans → preheat → extract 함수가 호출되지 않아요.
class LatteMachine extends CoffeeMachine {
  makeCoffee() {} // 부모 클래스에 정의되어져 있는 함수를 여기서 다시 재정의 함.
}

// 부모 클래스에서 정의된 함수에서 무언가 수정을 조금 하면서,
// 여전히! 부모 클래스에서 정의된 함수의 행동을 그대로 가져 가고 싶다면
// 항상 super를 이용해서 부모 클래스의 함수를 호출해줘야 해요. 아래처럼요 :)
// 그럼 super.makeCoffee() 함수를 호출하는 순간! 부모, CoffeeMachine 클래스에 정의된
// makeCoffee 함수의 코드 내용들이 수행되어 지죠 (grindBeans → preheat → extract)
class LatteMachine extends CoffeeMachine {
  makeCoffee() {
    super.makeCoffee();
  }
}

// 🚨 이처럼, 오버라이딩은 부모 클래스에서 정의된 함수의 내용을 나에게 맞게 변경 할 수 있는
// 너무나 유용한 방법이지만, 자칫 부모 클래스에서 의도적으로 작성된 코드를 그냥 잘못 덮어 씌워서
// 의도치 않은, 일을 하게 되어버리는 수가 있어요 :)
// 그래서! CoffeeMachine 처럼, 클래스 내부에서 수행되어야 하는 함수의 절차가 중요하거나,
// 자식 클래스에서 달라져야 하는 행동이 명확한 경우에 abstract 클래스를 쓸 수 있어요

// 예를 들면
abstract class GoogleDoc {
  private header() {
    console.log('header');
  }
  protected abstract body(): void;
  private footer() {
    console.log('footer');
  }
  public write() {
    this.header();
    this.body();
    this.footer();
  }
}
// 위 Document 클래스를 보면 무엇이 보이시나요?
// 아, 이 클래스는 꼭 상속을 해서 클래스를 정의 해야 하는거군
// header와 footer는 정해져 있고
// body 함수만 자식 클래스들이 원하는대로 작성하면 되는구나 :)
// 그리고 write이라는 유일한 public 함수는 header  → body  → footer 순으로 호출해주는군 :)

// 그럼 이제 아래와 같은 클래스를 만들 수 있겠죠?
class SimpleDocument extends GoogleDoc {
  protected body(): void {
    console.log('body');
  }
}
const doc = new SimpleDocument();
doc.write(); // header, body, footer 를 출력할거예요.

// 이런 클래스도 만들 수 있겠죠?
class FancyDocument extends GoogleDoc {
  protected body(): void {
    console.log('✨body✨');
  }
}
const fancyDoc = new FancyDocument();
fancyDoc.write(); // header, ✨body✨, footer 를 출력할거예요.

// 이처럼 abstract 클래스를 사용하면, 꼭 super를 호출해야 한다! 이런 걱정 없이,
// abstract 으로 지정된 함수만 재정의해서 사용하면 되죠 :)
