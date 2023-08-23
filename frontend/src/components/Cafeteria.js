import styled from "@emotion/styled";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

// 혼잡도 게이지 표시
const ColorContainer = styled.div`
	display: flex;
	flex-direction: row; // 가로로 나열
	align-items: center; // 세로 중앙 정렬
	margin-left: 10px;
`;

const ColoredDiv = ({ disabledColor, color, index }) => {
	const divStyle = {
		backgroundColor: disabledColor ? "#ffffff" : color,
		width: "12px",
		height: "10px",
		margin: "0.5px",
		border: "1px solid #b0b0b0",
		borderTopLeftRadius: index === 0 ? "5px" : "none",
		borderBottomLeftRadius: index === 0 ? "5px" : "none",
		borderTopRightRadius: index === 9 ? "5px" : "none",
		borderBottomRightRadius: index === 9 ? "5px" : "none",
	};

	return <div style={divStyle}></div>;
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
	// 투명도 80% 정도 적용한 색상들
	// const colors = [
	// 	"#05FF00CC",
	// 	"#61FF00CC",
	// 	"#9EFF00CC",
	// 	"#EBFF00CC",
	// 	"#FFF500CC",
	// 	"#FFD600CC",
	// 	"#FFB800CC",
	// 	"#FF8A00CC",
	// 	"#FF5C00CC",
	// 	"#FF0000CC",
	// ];

	// 투명도 100% 정도 적용한 색상들
	const clearColor = [
		"#05FF00",
		"#61FF00",
		"#9EFF00",
		"#EBFF00",
		"#FFF500",
		"#FFD600",
		"#FFB800",
		"#FF8A00",
		"#FF5C00",
		"#FF0000",
	];

	return (
		<CafeteriaContainer>
			<FirstRow>
				<CafeteriaName>{cafeteriaName}</CafeteriaName>
				<NowStatus value={value} />
				<ColorContainer>
					{clearColor.map((color, index) => (
						<ColoredDiv
							key={index}
							disabledColor={Math.round(value / 10) < index + 1}
							color={color}
							index={index}
						/>
					))}
				</ColorContainer>
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
