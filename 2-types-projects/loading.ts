{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

  function printLoginState(loadState: ResourceLoadState) {
    if (loadState.state === 'loading') {
      console.log('👀 loading...');
    } else if (loadState.state === 'success') {
      console.log('😃 loaded');
    } else if (loadState.state === 'fail') {
      console.log('😱 no network');
    }
  }
} // 엘리는 switch 로 함
