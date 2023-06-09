{
  type ToDo = {
    title: string;
    description: string;
  };

  const todo: Todo = {
    title: 'slkdj',
    descriptioin: 'slkdjf',
  };
  // 공통적으로 쓰이는 Readonly와 같은 타입들은 이미 만들어져 있다. (Utility Type)
  function display(todo: Readonly<ToDo>) {
    todo.title = 'jaja'; // -> 보여주기만 하는 함수가 값을 업데이트 하는것을 방지
  }
  // 수정 가능한 타입의 오브젝트를 함수에 전달하는 것은 위헙하다.

  display(todo);
  console.log(todo.title);
}
