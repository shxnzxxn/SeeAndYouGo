import styled from '@emotion/styled';
import React from "react";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import Box from './components/Box';
import Cafeteria from './components/Cafeteria';
import Logo from './components/Logo';

const UpdateLog = styled.div`
  margin: 10px 0;
  font-size: 13px;
  color: #777;
`;

function App() {
  const array = [];

  // for(let i = 0; i < 5; i++) {
  //     array.push(<Box idx={i + 1} />);
  // }

  return (  
    <div className="App">
      {/* <Box idx={2} /> */}
      {/* {array.map((item) => {
          return item;
      })} */}
      <Logo />
      <UpdateLog ><FontAwesomeIcon icon={faClock} />&nbsp; 11:00 기준으로 반영된 정보입니다.</UpdateLog>
      <Cafeteria />
    </div>
  );
}

export default App;
