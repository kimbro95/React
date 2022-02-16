import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  // 처음 랜더링시에 실행.
  useEffect(() => {
    console.log(`I run only onec.`);
  }, []);

  // counter에 변화가 생길때 실행.
  useEffect(() => {
    console.log(`I run when 'counter' change.`);
  }, [counter]);

  // keyword 변화가 생길때 실행.
  useEffect(() => {
    console.log(`I run when 'keyword' change.`);
  }, [keyword]);

  // counter or keyword 변화가 생길때 실행.
  useEffect(() => {
    console.log(`I run when 'counter' or 'keyword' change.`);
  }, [counter, keyword]);

  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
