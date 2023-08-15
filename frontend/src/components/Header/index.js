import styled from "@emotion/styled";

const Heading = styled.h1`
	margin: 0;
	font-size: 24px;
`;

const Header = ({ val }) => {
	return <Heading>{val}</Heading>;
};

export default Header;
