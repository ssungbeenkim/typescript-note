{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time!!`);
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  /* 
  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();

  const ellieAfterPay = payBad(ellie);
  const bobAfterPay = payBad(bob);
  
  ellieAfterPay. 

  -> interface에서 정의한 pay()밖에 사용할 수 없다. 
  세부 클래스의 정보를 잃어버리고  Employee가 된다. 
  */

  function pay<T extends Employee>(employee: T): T {
    // T타입이면 되지만 Employee를 구현한 것만 가능하다.
    // implement 가 아니고 extend인 것은 문법임
    //<Eployee를 확장한 것만 가능>
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();

  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);
  // ellieAfterPay. // workFullTime() 사용이 가능하다.

  const obj = {
    name: 'ellie',
    age: 20,
  };

  const obj2 = {
    animal: '🐕',
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  } /* key of 는 어떠한 오브젝트의 키 중 하나를 뜻함 */

  console.log(getValue(obj, 'name')); // ellie // 객체에 없는 키를 입력하면 에러가 발생한다.
  console.log(getValue(obj, 'age')); // 20
  console.log(getValue(obj2, 'animal')); // 🐕
  // 조건문을 사용하여 더 세밀하게 타입을 제한할 수 있다.
}
///* TypeScript constrain */
//https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/
