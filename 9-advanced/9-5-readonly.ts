{
  type ToDo = {
    title: string;
    description: string;
  };
  // 공통적으로 쓰이는 타입들은 만들어져 있다. (Utility Type)
  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja';// -> 보여주기만 하는 함수가 값을 업데이트 하는것을 방지
  }
}
