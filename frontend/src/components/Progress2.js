import styled from '@emotion/styled';

const ProgressContainer = styled.ul`
    position: relative;
    margin: 0;
    list-style-type: none;
    display: flex;
    padding: 0;
    width: 50%;
`;

const Rail = styled.li`
    background: #ccc;
    left: 0;
    width: 100%;
    height: 10px;
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
        console.log(val);
        if (val >= index+1) {
            if (val > 6) {
                railColor = '#D21404'; //빨간색
            } else if (val > 3) {
                railColor = '#fa8735'; // 노란색
            } else {
                railColor = '#17a631'; // 초록색
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