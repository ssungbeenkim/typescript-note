{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };
  // 프로그래밍을 할 때 내가 예상할 수 있는 상태를 타입으로 정의하는 것이 더 깔끔하고 안정적이고 예상 가능한 프로그래밍을 할 수 있게 해 준다.
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    // 네크워크 에러가 발행하는 것은 코드를 작성할 때 예상할 수 있는 State이다.
    tryConnect(): ResultState {
      return {
        result: 'success',
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to use
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
