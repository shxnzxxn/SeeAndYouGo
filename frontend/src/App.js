import './App.css';
import React from 'react'
import Header from './components/Header';
import UpdateLog from './components/UpdateLog';
import Cafeteria from './components/Cafeteria';

// TODO 주석 달기

function App() {
  //TODO 시간 정보가 포함된 식단 인원 정보 request

  return (
    <div className='App'>
      <Header />
      <UpdateLog updateTime={"11:00"} />
      <Cafeteria idx={1} value={98} />
      <Cafeteria idx={2} value={45} />
      <Cafeteria idx={3} value={9} />
    </div>
  );
}

export default App;