import styled from '@emotion/styled';

const Box = styled.div`
    width: 100%;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    height: 25px;
    margin-right: 10px;
`;

const Title = styled.h2`
    margin: 0;
`;

const Logo = () => {
    return (
        <Box>
            <Img src="/assets/images/Eyes.png" />
            <Title>SeeAndYouGO</Title>
        </Box>
    );
}

export default Logo;