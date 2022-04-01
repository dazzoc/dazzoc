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
    width: 600px;
`;

export const Circle = styled.img`
    width: 100%;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CircleBox = styled.img`
    height: 150px;
    margin-right: 20px;
`;

export const Name = styled.div` 
    margin-right: 60px;
`;

export const NameText = styled.h1`
    font-size: 3.5rem;
    font-weight: 400;
    transform: scaleY(1.4);
    margin-bottom: 10px;
`;

export const TextWrap = styled.div`
    height: 150px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;

export const Arrow1 = styled.img`
    height: 20px;
    margin-right: 10px;
`;

export const Text = styled.h1`
    font-size: 1.2rem;
`