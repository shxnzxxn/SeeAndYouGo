import './App.css';
import React from 'react'
import Header from './components/Header';
import UpdateLog from './components/UpdateLog';
import Cafeteria from './components/Cafeteria';

function App() {
  return (  
    <>
      <Header />
      <UpdateLog updateTime={"11:00"}/>
      <Cafeteria cafeteriaName={"1학생회관"} menu={"고기알밥"} price={"5300"} value={63}/>
      <Cafeteria cafeteriaName={"2학생회관"} menu={"특식"} price={"4500"} value={97}/>
      <Cafeteria cafeteriaName={"3학생회관"} menu={"식사"} price={"6000"} value={30}/>
    </>
  );
}

export default App;
