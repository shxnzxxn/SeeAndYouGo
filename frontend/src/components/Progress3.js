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

const Progress3 = ({ value, ...props }) => {

    let datas = [...Array(10)].map((_, index) => {
        let railColor = '#ccc';  // 기본 색상(회색)
        let val = Math.ceil(value/10);
        if (val >= index+1) {
            railColor = '#17a631'; // 초기색상
            if (index > 6) {
                railColor = '#D21404'; // 세번째 색상(빨간색)
            } else if (index > 3) {
                railColor = '#fa8735'; // 두번째 색상(노란색)
            }
        }

        return <Rail 
            key={index}
            val={val}
            style={{ backgroundColor: railColor }} 
        />;
    });

    return (
        <ProgressContainer {...props}>
            {datas.map((item) => {
                return item;
            })}
        </ProgressContainer>
    );
}

export default Progress3;