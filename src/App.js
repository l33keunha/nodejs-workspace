import logo from './logo.svg';
import './App.css';


let a = 15; // 변수
const b = 45; // 상수

// JSX 문법에서는 if문의 사용불가능하고, 대신 삼항연산자가 사용 가능

function App() {
  return (
    <div>나도 드디어 노드js!!!!{a===20?"20":"20아냐"}{b}</div>
  );
}

export default App;
