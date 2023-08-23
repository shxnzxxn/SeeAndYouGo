import styled from '@emotion/styled';
import Progress from './Progress';
import Progress2 from './Progress2';
import Progress3 from './Progress3';
import Progress4 from './Progress4';
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

const Name = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 17px;
    border-bottom: 2px solid #333;
    padding-bottom: 2px;
`;

const Info = styled.span`
    margin-left: 15px;
    margin-right: 5px;
    font-weight: bold;
    color: #D21404;
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

const Cafeteria = ({idx=1}) => {
    const [info, setInfo] = useState('원활');
    
    const [value, setValue] = useState(100);
    const [color, setColor] = useState('#17a631');
    

    useEffect(() => {
        if (value >= 66) { 
            setInfo('혼잡');
            setColor('#D21404');
        } 
        else if (value >= 33) { 
            setInfo('보통'); 
            setColor('#fa8735');
        }
    }, [value]);
    
    return (
        <div>
            <Box>
                <Name>{idx}학생회관</Name>
                <Info style={{color: color}}>{ info }</Info>
                <Progress value={ value }/>
                <div style={{width: '100%', display:'flex', flexDirection: 'row'}}>
                    <Menu>
                        <p>라면</p>
                        <p>4,500</p>
                    </Menu>
                    <Menu>
                        <p>비빔밥</p>
                        <p>6,000</p>
                    </Menu>
                </div>
            </Box>
            <Box>
                <Name>{idx}학생회관</Name>
                <Info style={{color: color}}>{ info }</Info>
                <Progress2 value={ value }/>
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
            <Box>
                <Name>{idx}학생회관</Name>
                <Info style={{color: 'black'}}>{ info }</Info>
                <Progress3 value={ value }/>
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
            <Box>
                <Name>{idx}학생회관</Name>
                <Info style={{color: 'black'}}>{ info }</Info>
                <Progress4 value={ value }/>
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
        </div>
    );
}

export default Cafeteria;