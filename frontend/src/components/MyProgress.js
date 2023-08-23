import styled from "@emotion/styled";

const ProgressContainer = styled.div`
	margin-left: 5px;
	position: relative;
	width: 45%;
	height: 30px;
`;

const Rail = styled.div`
	position: absolute;
	top: 10px;
	left: 0;
	width: 100%;
	height: 10px;
	border-radius: 10px;
	background-color: #aaa;
`;

const Track = styled.div`
	position: absolute;
	top: 10px;
	left: 0;
	width: 0;
	height: 10px;
	border-radius: 10px;
	background-color: #44b;
	background-size: 20px 20px;
	background-image: linear-gradient(
		45deg,
		rgba(255, 255, 255, 0.15) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 255, 255, 0.15) 50%,
		rgba(255, 255, 255, 0.15) 75%,
		transparent 75%,
		transparent 100%
	);
	animation: move 1000ms linear infinite;

	@keyframes move {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 40px 0;
		}
	}
`;

const MyProgress = ({ value, ...props }) => {
	return (
		<ProgressContainer {...props}>
			<Rail />
			<Track style={{ width: `${value}%` }} />
		</ProgressContainer>
	);
};

export default MyProgress;
