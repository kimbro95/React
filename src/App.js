import { useState, useEffect } from "react";

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
    // ���ο + ������ �迭 = ���ο�迭
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
      <hr />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
// ����Ʈ�� �⺻������ <li> �� ��� item�� �ν��ϱ� ������ key�� �־ ������ item�� �ǵ��� �������Ѵ�. (List�� index�� �����ϱ� ������ <li> �� key�� index�� ����)

export default App;
