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

    // ...배열변수  ...을 이용해 배열 선언된 값을 가져올수있다.
    // 새로운값 + 현재의 배열 = 새로운배열
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
// 리액트는 기본적으로 <li> 의 모든 item을 인식하기 때문에 key를 넣어서 고유한 item이 되도록 만들어야한다. (List의 index는 고유하기 때문에 <li> 의 key에 index를 넣음)

export default App;
