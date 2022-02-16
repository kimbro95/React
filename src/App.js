import { useState, useEffect } from "react";

/*  CleanUP Funtion
    component �� destroy �ɶ�
    return �� ���� Destroyed ���

    props or state ��ȭ�� useEffect�� ������Ʈ �� ��
    �������� -> ���� ����Ʈ Ŭ���� -> ����Ʈ
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
