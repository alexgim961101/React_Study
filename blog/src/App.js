import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let post = "강남 우동 맛집"
  let [title, setTitle] = useState('남자 코트 추천')

  return (
    <div>
      <div className="black-nav">
        <h4>blog</h4>
      </div>
      <div className="list">
        <h4>{ title }</h4>
        <p>1월 4일 발행</p>
      </div>
    </div>
  );
}

export default App;
