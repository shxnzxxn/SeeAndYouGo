import styled from '@emotion/styled';
import React from "react";
import './App.css';
import React from 'react'
import Header from './components/Header';
import UpdateLog from './components/UpdateLog';
import Cafeteria from './components/Cafeteria';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-regular-svg-icons";

// import Box from './components/Box';
// import Cafeteria from './components/Cafeteria';
// import Logo from './components/Logo';

// const UpdateLog = styled.div`
//   margin: 10px 0;
//   font-size: 13px;
//   color: #777;
// `;

function App() {
  return (  
    <>
      <Header />
      <UpdateLog updateTime={"11:00"}/>
      <Cafeteria cafeteriaName={"1학생회관"} menu={"고기알밥"} price={"5300"} value={63}/>
      <Cafeteria cafeteriaName={"2학생회관"} menu={"특식"} price={"4500"} value={97}/>
      <Cafeteria cafeteriaName={"3학생회관"} menu={"식사"} price={"6000"} value={30}/>
    </>
//     <div className="App">
      {/* <Box idx={2} /> */}
      {/* {array.map((item) => {
          return item;
      })} */}
//       <Logo />
//       <UpdateLog ><FontAwesomeIcon icon={faClock} />&nbsp; 11:00 기준으로 반영된 정보입니다.</UpdateLog>
//       <Cafeteria />
//     </div>
  );
}

export default App;
