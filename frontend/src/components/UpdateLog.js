import styled from "@emotion/styled";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateLogContainer = styled.div`
	text-align: center;
	font-size: 12px;
	background-color: white;
	border-radius: 10px;
	margin: 5px 30px;
	padding: 2px;
`;

const UpdateLog = ({ updateTime }) => {
	return (
		<UpdateLogContainer>
			<FontAwesomeIcon icon={faClock} />
			<label style={{ marginLeft: 5 }}>
				{updateTime} 기준으로 반영된 정보입니다.
			</label>
		</UpdateLogContainer>
	);
};

export default UpdateLog;
