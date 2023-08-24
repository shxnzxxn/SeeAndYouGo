import styled from "@emotion/styled";

// 이미지 크기 조절
const Logo = styled.img`
	width: 50px;
	height: 50px;
	float: left;
	margin-left: 20px;
`;

// 타이틀
const Title = styled.h1`
	width: 300px;
	font-size: 30px;
`;

const Header = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<Logo src={"/assets/images/restaurant.png"} alt="Logo" />
			<Title>See & You go</Title>
		</div>
	);
};

export default Header;

// 로고
// ${process.env.PUBLIC_URL}/assets/images/restaurant.png 추후에 이렇게 사용될 수도 ?
// const Logo = () => {
// 	return (
// 		<Image
// 			src={'/assets/images/restaurant.png'}
// 			alt="Logo"
// 		/>
// 	);
// };
