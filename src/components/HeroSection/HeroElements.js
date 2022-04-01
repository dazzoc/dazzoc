import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;

    @media screen and (max-width: 480px) {
        height: 600px;
    }
`;

export const HeroBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: 800px;
    background: #fff;

    @media screen and (max-width: 480px) {
        height: 600px;
    }
`;

export const HeroImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
`;

export const Circle = styled.img`
    width: 100%;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;