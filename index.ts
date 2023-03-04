import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((res) => {
  const todo: Todo = res.data;
  console.log(todo.ID);
});
