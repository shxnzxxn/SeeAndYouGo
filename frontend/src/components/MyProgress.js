import styled from "@emotion/styled";

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
		border: "1px solid #dddddd",
		borderTopLeftRadius: index === 0 ? "5px" : "none",
		borderBottomLeftRadius: index === 0 ? "5px" : "none",
		borderTopRightRadius: index === 9 ? "5px" : "none",
		borderBottomRightRadius: index === 9 ? "5px" : "none",
	};

	return <div style={divStyle}></div>;
};

// 투명도 100% 정도 적용한 색상들
const colors = [
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

const MyProgress = ({ value }) => {
	return (
		<ColorContainer>
			{colors.map((color, index) => (
				<ColoredDiv
					key={index}
					disabledColor={Math.round(value / 10) < index + 1}
					color={color}
					index={index}
				/>
			))}
		</ColorContainer>
	);
};

export default MyProgress;
