import styled from '@emotion/styled';

const ProgressContainer = styled.ul`
    position: relative;
    margin: 0;
    left: 50%;
    float: left;
    transform: translateX(-50%);
    list-style-type: none;
    display: flex;
    padding: 0;
`;

const Rail = styled.li`
    background: #ccc;
    left: 0;
    width: 22px;
    height: 15px;
    margin-right: 2px;

    &:first-child {
        border-radius: 5px 0 0 5px;
    }
    &:last-child {
        margin-right: 0;
        border-radius: 0 5px 5px 0;
    }
`;

const Progress2 = ({ value, ...props }) => {

    let datas = [...Array(10)].map((_, index) => {
        let railColor = '#ccc';  // 기본 색상
        let val = Math.ceil(value/10);
        if (val >= index+1) {
            if (val >= 9) {
                railColor = '#D21404'; //빨간색
            } else if (val >= 7) {
                railColor = '#FA8128';
            } else if (val >= 5) {
                railColor = '#FA8128'; //주황색 
            } else if (val >= 3) {
                railColor = '#33AA44'; // 노란색
            } else {
                railColor = '#0eaffd'; // 초록색
            }
        }

        return <Rail key={index} style={{ backgroundColor: railColor }} />;
    });

    return (
        <ProgressContainer {...props}>
            {datas.map((item) => {
                return item;
            })}
        </ProgressContainer>
    );
}

export default Progress2;