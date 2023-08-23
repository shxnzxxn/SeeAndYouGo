import React from 'react';
import styled from '@emotion/styled';
import Progress3 from './Progress3';
import { useEffect, useState } from 'react';

const BoxDiv = styled.div`
    width: 330px;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px 0;
    margin-bottom: 20px;

    &:first-child {
        margin-top: 20px;
    }
`;
const Capacity = styled.p`
    font-size: 17px;
    margin: 5px;
    position: relative;
    width: 100%;
    float: left;
`;

const Box = ({ idx }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => { 
            const res = await fetch(
                `http://localhost:8080/get_congestion/restaurant2`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET'
                }
            );
            const result = await res.json();
            return result;
        }
        fetchData().then((data) => {
            setData(data);
            console.log(data)
        });
    }, []);

    return (
        <BoxDiv>
            <h2 style={{margin: 5}}> 식당{idx} </h2>
            <Progress3 value={ (data.connected/data.capacity)*100 }/>
            <Capacity> {data.connected}명/{data.capacity}명 </Capacity>
        </BoxDiv>
    );
}

export default Box;