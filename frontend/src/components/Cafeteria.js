import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyProgress from "./MyProgress";

const CafeteriaContainer = styled.div`
	width: 100%;
	height: 130px;
	margin-top: 15px;
	background-color: white;
	border-radius: 20px;
`;

// 1번째 Row (식당 이름, 상태와 혼잡도 게이지 표시)
const FirstRow = styled.div`
	display: flex;
	align-items: center;
	padding-top: 10px;
	height: 40%;
`;

// 식당 이름 표시
const CafeteriaName = styled.h2`
	font-size: 18px;
	margin-left: 20px;
	width: 80px;

	::after {
		content: "";
		display: block;
		width: 50px;
		border-bottom: 3px solid #000000;
		margin: 3px 0 0 8px;
	}
`;

// 혼잡도 상태 표시
// TODO styled 쓸 필요 없어보임
const Status = styled.span`
	margin-left: 10px;
	font-size: 11px;
`;

// 2번째 Row (메뉴 이름과 가격 정보)
const SecondRow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 50%;
	

	> div:first-of-type {
		border-right: dashed 1px #d1d1d1;
	}
	> div {
		flex-basis: 50%;
	}
`;

// Row 2번째에서의 메뉴 이름과 가격
const Menu = ({ menuName, priceValue }) => {
	return (
		<div>
			<p style={{ marginTop: 5, marginBottom: 5, padding: "0 10px" }}>{menuName}</p>
			<label
				style={{
					color: "#777777",
					marginTop: 5,
					marginBottom: 5,
				}}
			>
				{priceValue}
			</label>
		</div>
	);
};

// 식당 이름 배열
const nameList = [
	"대학생회관", "2학생회관", "3학생회관", "상록회관", "생활과학대", 
];

// props로 cafeteriaName, (menuList1, price1), (menuList2, price2), value를 받아야함
const Cafeteria = ({ idx, value, ...props }) => {
	const [status, setStatus] = useState("원활");
	const [rate, setRate] = useState(value);
	const [menuData, setMenuData] = useState([]);

	useEffect(() => {
		if (rate >= 66) {
			setStatus("혼잡");
		} else if (rate >= 33) {
			setStatus("보통");
		} else {
			setStatus("원활");
		}
		setRate(value);

		const fetchData = async () => {
			// `/restaurant${idx}`
			const res = await fetch(`/assets/json/myMenu.json`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "GET",
			});
			const result = await res.json();
			return result;
		};
		fetchData().then((data) => {
			setMenuData(data);
		});
	}, [value, rate]);

	return (
		<CafeteriaContainer>
			<FirstRow>
				<CafeteriaName>{nameList[idx-1]}</CafeteriaName>

				<Status>{status}</Status>
				<MyProgress value={rate} />
				
				<FontAwesomeIcon
					icon={faChevronRight}
					style={{ color: "#b0b0b0", marginLeft: 5 }}
				/>

			</FirstRow>
			<SecondRow>
				{menuData.map((val, index) => {
					return (
						<Menu
							key={index}
							menuName={val.menu[0]}
							priceValue={val.price}
						/>
					);
				})}
			</SecondRow>
		</CafeteriaContainer>
	);
};

export default Cafeteria;
// import styled from '@emotion/styled';
// import Progress from './Progress';
// import Progress2 from './Progress2';
// import Progress3 from './Progress3';
// import Progress4 from './Progress4';
// import { useState, useEffect } from 'react';

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

// const Cafeteria = ({idx=1}) => {
//     const [info, setInfo] = useState('원활');
    
//     const [value, setValue] = useState(90);
//     const [color, setColor] = useState('#17a631');
    

//     useEffect(() => {
//         if (value >= 66) { 
//             setInfo('혼잡');
//             setColor('#D21404');
//         } 
//         else if (value >= 33) { 
//             setInfo('보통'); 
//             setColor('#fa8735');
//         }
//     }, [value]);
    
//     return (
//         <div>
//             <Box>
//                 <Name>{idx}학생회관</Name>
//                 <Info style={{color: color}}>{ info }</Info>
//                 <Progress value={ value }/>
//                 <div style={{width: '100%', display:'flex', flexDirection: 'row'}}>
//                     <Menu>
//                         <p>라면</p>
//                         <p>4,500</p>
//                     </Menu>
//                     <Menu>
//                         <p>비빔밥</p>
//                         <p>6,000</p>
//                     </Menu>
//                 </div>
//             </Box>
//             <Box>
//                 <Name>{idx}학생회관</Name>
//                 <Info style={{color: color}}>{ info }</Info>
//                 <Progress2 value={ value }/>
//                 <div style={{width: '100%', display:'flex', flexDirection: 'row'}}>
//                     <Menu>
//                         <p>김치볶음밥</p>
//                         <p>4,500</p>
//                     </Menu>
//                     <Menu>
//                         <p>비빔밥</p>
//                         <p>6,000</p>
//                     </Menu>
//                 </div>
//             </Box>
//             <Box>
//                 <Name>{idx}학생회관</Name>
//                 <Info style={{color: 'black'}}>{ info }</Info>
//                 <Progress3 value={ value }/>
//                 <div style={{width: '100%', display:'flex', flexDirection: 'row'}}>
//                     <Menu>
//                         <p>김치볶음밥</p>
//                         <p>4,500</p>
//                     </Menu>
//                     <Menu>
//                         <p>비빔밥</p>
//                         <p>6,000</p>
//                     </Menu>
//                 </div>
//             </Box>
//             <Box>
//                 <Name>{idx}학생회관</Name>
//                 <Info style={{color: 'black'}}>{ info }</Info>
//                 <Progress4 value={ value }/>
//                 <div style={{width: '100%', display:'flex', flexDirection: 'row'}}>
//                     <Menu>
//                         <p>김치볶음밥</p>
//                         <p>4,500</p>
//                     </Menu>
//                     <Menu>
//                         <p>비빔밥</p>
//                         <p>6,000</p>
//                     </Menu>
//                 </div>
//             </Box>
//         </div>
//     );
// }

// export default Cafeteria;
