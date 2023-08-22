import styled from '@emotion/styled';
import Progress from './Progress';
import { useState, useEffect } from 'react';

const Box = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

const Name = styled.h3`
    margin: 0;
    border-bottom: 2px solid #333;
`;

const Info = styled.span`
    margin-left: 25px;
    margin-right: 10px;
    font-weight: bold;
    color: rgb(250, 129, 40);
`;

const Menu = styled.div`
    flex-basis: 50%;
    margin: 0;
    margin-top: 20px;
    font-weight: bold;
    width: 50%;

    > p {
        margin: 0;
    }
    > p:last-child {
        font-weight: normal;
        font-size: 13px;
        color: #777;
    }

    &:first-child {
        border-right: dashed 1px #d1d1d1;
    }
`;

const Cafeteria = ({idx=0}) => {

    return (
        <Box>
            <Name>{idx}학생회관</Name>
            <Info>혼잡</Info>
            <Progress value={ (500/1000)*100 }/>
            <div style={{width: '100%', display:'flex', flexDirection: 'row'}}>
                <Menu>
                    <p>김치볶음밥</p>
                    <p>4,500</p>
                </Menu>
                <Menu>
                    <p>비빔밥</p>
                    <p>6,000</p>
                </Menu>
            </div>
        </Box>
    );
}

export default Cafeteria;