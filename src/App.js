import Button from "./Button";
import styled from "./App.module.css"

function App() {
  /* create-react-app의 기능 - xxx.module.css 통해 css 를 설정하면 랜덤한 class 명을 갖는다. */
  return (
    <div>
      <h1 className={styled.title}>Hello React !!!</h1>
      <Button text={"Button"} />
    </div>
  );
}

export default App;
