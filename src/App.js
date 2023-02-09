import { useRef, useState } from 'react';
import './App.css';

function App() {

  const counter = useRef(1);

  const [obj, setObj] = useState([
    {
      id : 0,
      title : 'something in here'
    }
  ]);

  const [ipt, setIpt] = useState('');

  return (
    <div className = 'container'>
      <div>
        <input value = {ipt} onChange = {e => setIpt(e.target.value)}/>
        <button onClick = {() => {
          const tmpObj = {
            id : counter.current,
            title : 'ipt'
          }
          setObj(obj.concat(tmpObj));
          counter.current += 1;
        }}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className = 'objContainer'>
        {obj.map(v => <Contents className = 'Contents' key = {v.id} obj = {v}>{v}</Contents>)}
      </div>
    </div>
  );
}

const Contents = ({ obj }) => {
  return (
    <div className = 'contents'>{obj.title}</div>
  );
};

export default App;