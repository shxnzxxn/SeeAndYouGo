import styled from '@emotion/styled';

const ProgressContainer = styled.div`
    position: relative;
    width: 50%;
    height: 16px;
    margin: 0;
`;

const Rail = styled.div`
    background: #ccc;
    position: absolute;
    top: 6px;
    left: 0;
    width: 100%;
    height: 7px;
    border-radius: 10px;
`;

const Track = styled.div`	
    position: absolute;	
    top: 6px;	
    left: 0;	
    width: 0;	
    height: 7px;	
    border-radius: 10px;
    overflow: hidden;

`;

const Rainbow = styled.div`
    background: rgb(23,166,49);
    background: linear-gradient(90deg, rgba(23,166,49,1) 0%, rgba(235,213,85,1) 46%, rgba(250,66,53,1) 100%);
    width: 130px;
    position: absolute;
    z-index: 1;
    height: 7px;
    
`;

const Progress4 = ({ value, ...props }) => {
    
    return (
        <ProgressContainer {...props}>
            <Rail />
            <Track style={{ width: `${value}%`}}>
                <Rainbow />
            </Track>
        </ProgressContainer>
    );
}

export default Progress4;