import { useState, useEffect } from "react";

/*  CleanUP Funtion
    component 가 destroy 될때
    return 을 통해 Destroyed 출력

    props or state 변화로 useEffect가 업데이트 될 때
    리렌더링 -> 이전 이펙트 클린업 -> 이펙트
*/
function CleanUP() {
  useEffect(() => {
    console.log("Craeted :)");
    return () => {
      console.log("Destroyed :(");
    }
  }, []);
  return <h2>CleanUP Function</h2>;
}
function App() {
  const [show, setShow] = useState(true);
  const onClick = () => setShow((prev) => !prev);

  return (
    <div>
      <button onClick={onClick} >{show ? `show` : `hide`}</button>
      {show ? <CleanUP /> : null}
    </div>
  );
}

export default App;
