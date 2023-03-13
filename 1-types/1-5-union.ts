{
  /**
   *  Union Types: OR // 많이 쓰임. 활용도가 높다.
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down'); // ''입력하는 순간 위의 네가지 옵션이 보여짐
  // 여러 케이스 중에 하나를 골라야 하는 경우에 쓸 수 있다.
  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    //function login(id: string, password: string): Promise<LoginState> { 실제로는 이런식으로 쓸것.
    return {
      response: {
        body: 'logged in!',
      }, // 예제가 조금 이해가 안가는데, 성공했다고 친것.
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      // response라는 키가 state object안에 있다면, 이렇게 in 키워드도 많이 사용하지만 좋은 방법은 아니다.
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
