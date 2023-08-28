// import styled from '@emotion/styled';
// import Progress3 from './Progress3';
import { useState } from 'react';

// const Box = styled.div`
//     width: 100%;
//     padding: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #fff;
//     border-radius: 20px;
//     flex-wrap: wrap;
//     margin-bottom: 20px;
// `;

// const Name = styled.p`
//     margin: 0;
//     font-weight: bold;
//     font-size: 17px;
//     border-bottom: 2px solid #333;
//     padding-bottom: 2px;
// `;

// const Info = styled.span`
//     margin-left: 15px;
//     margin-right: 5px;
//     font-weight: bold;
//     color: #D21404;
// `;

// const Menu = styled.div`
//     flex-basis: 50%;
//     margin: 0;
//     margin-top: 20px;
//     font-weight: bold;
//     width: 50%;

//     > p {
//         margin: 0;
//     }
//     > p:last-child {
//         font-weight: normal;
//         font-size: 13px;
//         color: #777;
//     }

//     &:first-child {
//         border-right: dashed 1px #d1d1d1;
//     }
// `;

// const Row1 = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `;

const Cafeteria = ({ idx = 2 }) => {

    // const todayDate = () => {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = ('0' + (today.getMonth() + 1)).slice(-2);
    //     const day = ('0' + today.getDate()).slice(-2);
    //     return `${year}${month}${day}`;
    // }

    // const [data, setData] = useState([]);
    const [menuData, setMenuData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(
    //             // `http://localhost:8080/get_congestion/restaurant${idx}`,
    //             `/assets/json/restaurants1.json`,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 method: 'GET'
    //             }
    //         );
    //         const result = await res.json();
    //         return result;
    //     }
    //     fetchData().then((data) => {
    //         setData(data);
    //     });


    //     fetchData().then((data) => {
    //         setData(data);
    //     });

    // }, []);

    const fetchMenuData = async () => {
        const res = await fetch(
            // `http://localhost:8080/get_menu/restaurant${idx}/${todayDate()}`,
            `/assets/json/myMenu.json`,
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
    fetchMenuData().then((data) => {
        setMenuData(data);
    });

    // const [info, setInfo] = useState('원활');

    // const [color, setColor] = useState('#17a631');

    // useEffect(() => {
    //     if ((data.connected / data.capacity) * 100 >= 66) {
    //         setInfo('혼잡');
    //         setColor('#D21404');
    //     }
    //     else if ((data.connected / data.capacity) * 100 >= 33) {
    //         setInfo('보통');
    //         setColor('#fa8735');
    //     }
    // }, [data]);

    return (
        <div>
            {menuData.map((item) => (
                item.menu.map((element) => {
                    return <p key={element}>{element}</p>
                })
            ))}

            {/* {menuData[0].menu.map(element => (
                <p key={element}>{element}</p>
            ))}
            <p>{menuData[0].price}</p>
            <Menu>
                {menuData[0].menu.map(element => (
                    <p key={element}>{element}</p>
                ))}
                <p>{menuData[0].price}</p>
            </Menu> */}
            {/* <p>{menuData[0].price}</p> */}
            {/* <Box> */}
            {/* <Row1>
                    <Name>{idx}학생회관</Name>
                    <Info style={{ color: 'black' }}>{info}</Info>
                    <Progress3 value={(data.connected / data.capacity) * 100} />
                </Row1> */}

            {/* <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <Menu>
                        {menuData[0].menu.map(element => (
                            <p key={element}>{element}</p>
                        ))}
                        <p>{menuData[0].price}</p>
                    </Menu>
                    {(idx === 2 || idx === 3) ? //2학,3학 일때만
                        <Menu>
                            {menuData[1].menu.map(element => (
                                <p key={element}>{element}</p>
                            ))}
                            <p>{menuData[1].price}</p>
                        </Menu>
                        : null}
                </div> */}
            {/* </Box> */}
        </div>
    );
}

export default Cafeteria;