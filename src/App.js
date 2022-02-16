import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }

    // ...�迭����  ...�� �̿��� �迭 ����� ���� �����ü��ִ�.
    setTodoList((prev) => [todo, ...prev]);
    setTodo("");
  }

  return (
    <div>
      <h2>To Do List {todoList.length > 0 ? `(${todoList.length})` : null}</h2>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
