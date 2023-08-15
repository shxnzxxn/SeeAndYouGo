import styled from "@emotion/styled";

const ProgressContainer = styled.div`
	position: relative;
	width: 300px;
	height: 40px;
`;

const Rail = styled.div`
	position: absolute;
	top: 6px;
	left: 0;
	width: 100%;
	height: 15px;
	border-radius: 2px;
	background-color: #aaa;
`;

const Track = styled.div`
	position: absolute;
	top: 6px;
	left: 0;
	width: 0;
	height: 15px;
	border-radius: 2px;
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
	animation: move 1500ms linear infinite;

	@keyframes move {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 40px 0;
		}
	}
`;

const Progress = ({ value, ...props }) => {
	let nowColor = "";
	if (value < 20) {
		nowColor = "#F3FC47";
	} else if (value < 40) {
		nowColor = "#D2FC46";
	} else if (value < 60) {
		nowColor = "#B3FE45";
	} else if (value < 80) {
		nowColor = "#B3FE45";
	} else {
		nowColor = "#3BFE42";
	}
	return (
		<ProgressContainer {...props}>
			<Rail />
			<Track
				style={{ width: `${value}%`, backgroundColor: `${nowColor}` }}
			/>
		</ProgressContainer>
	);
};

export default Progress;
