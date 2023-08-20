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
    background: #33AA44;
    background-size: 20px 20px;
    background-image: linear-gradient(
        45deg, rgba(255, 255, 255, 0.15) 25%,
        transparent 25%, transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%, transparent 100%
    );

    animation: move 1000ms linear infinite;
    transition: width 100ms linear;

    @keyframes move {
        from {
            background-position: 0 0;
        } to {
            background-position: 40px 0;
        }
    }
`;

const Progress = ({ value, ...props }) => {
    let background = '#33AA44';
    if (value > 33 && value < 66) {
        background = '#FA8128';
    } else if (value > 66) {
        background = '#D21404';
    }
    
    return (
        <ProgressContainer {...props}>
            <Rail />
            <Track style={{ width: `${value}%`, backgroundColor: `${background}` }} />
        </ProgressContainer>
    );
}

export default Progress;