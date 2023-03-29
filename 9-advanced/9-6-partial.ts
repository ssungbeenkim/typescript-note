{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };
  // 많이 사용되는 예
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate }; // ToDo 타입에 있는 것 중에서 부분적으로 허용할 수 있다.
  }
  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };
  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
}
