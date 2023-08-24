import styled from "@emotion/styled";
import React from "react";
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

	::after {
		content: "";
		display: block;
		width: 50px;
		border-bottom: 3px solid #000000;
		margin: 3px 0 0 8px;
	}
`;

// 혼잡도 상태 표시
const StatusString = styled.label`
	margin-left: 10px;
	font-size: 11px;
`;

const NowStatus = ({ value }) => {
	if (value < 33) {
		return <StatusString>원활</StatusString>;
	} else if (value < 66) {
		return <StatusString>보통</StatusString>;
	} else {
		return <StatusString>혼잡</StatusString>;
	}
};

// 2번째 Row (메뉴 이름과 가격 정보)
const SecondRow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 50%;
`;

// Row 2번째에서의 메뉴 이름과 가격
const MenuItem = ({ menuName, priceValue }) => {
	return (
		<div style={{ margin: "auto", justifyContent: "center" }}>
			<p style={{ marginTop: 5, marginBottom: 5 }}>{menuName}</p>
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

// Row 2번째에서의 중간 세로 선
const VerticalLine = styled.div`
	width: 1px;
	height: 80%;
	border-left: 1.5px dotted #b0b0b0;
	content: "";
`;

const Cafeteria = ({ cafeteriaName, menu, price, value, ...props }) => {
	return (
		<CafeteriaContainer>
			<FirstRow>
				<CafeteriaName>{cafeteriaName}</CafeteriaName>
				<NowStatus value={value} />
				<MyProgress value={value} />
				<FontAwesomeIcon
					icon={faChevronRight}
					style={{ color: "#b0b0b0", marginLeft: 10 }}
				/>
			</FirstRow>
			<SecondRow>
				<MenuItem menuName={menu} priceValue={price} />
				<VerticalLine />
				<MenuItem menuName={menu} priceValue={price} />
			</SecondRow>
		</CafeteriaContainer>
	);
};

export default Cafeteria;
