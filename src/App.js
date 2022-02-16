import Button from "./Button";
import styled from "./App.module.css"

function App() {
  /* create-react-app�� ��� - xxx.module.css ���� css �� �����ϸ� ������ class ���� ���´�. */
  return (
    <div>
      <h1 className={styled.title}>Hello React !!!</h1>
      <Button text={"Button"} />
    </div>
  );
}

export default App;
