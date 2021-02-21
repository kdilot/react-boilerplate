import React from 'react';
import styled from 'styled-components';

const Error: React.FC = () => {
    return (
        <ErrorContainer>
            <TitleText>404</TitleText>
            <SubText>Not Found</SubText>
        </ErrorContainer>
    );
};

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    color: darkgray;
`;

const StyleS = styled.span`
    display: flex;
    justify-content: center;
    margin: 0;
`;

const TitleText = styled(StyleS)`
    font-size: 8rem;
    font-weight: bold;
`;

const SubText = styled(StyleS)`
    font-size: 2rem;
`;

export default Error;
