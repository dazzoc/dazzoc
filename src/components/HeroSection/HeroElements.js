import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;

    @media screen and (max-width: 520px) {
        height: 700px;
    }

    @media screen and (max-width: 420px) {
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

    @media screen and (max-width: 650px) {
        width: 500px;
    }

    @media screen and (max-width: 520px) {
        width: 400px;
    }

    @media screen and (max-width: 420px) {
        width: 300px;
    }

    @media screen and (max-width: 300px) {
        width: 250px;
    }
`;

export const Circle = styled.img`
    width: 100%;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 520px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const CircleBox = styled.img`
    height: 150px;
    margin-right: 20px;

    @media screen and (max-width: 650px) {
        height: 120px;
    }

    @media screen and (max-width: 520px) {
        height: 120px;
    }
`;

export const Name = styled.div` 
`;

export const NameText = styled.h1`
    font-size: 3.5rem;
    font-weight: 400;
    transform: scaleY(1.4);
    margin-bottom: 10px;
    margin-right: 60px;

    @media screen and (max-width: 650px) {
        font-size: 2.8rem;
        margin-right: 40px;
    }

    @media screen and (max-width: 520px) {
        font-size: 2.5rem;
        margin-right: 20px;
    }
`;

export const TextWrap = styled.div`
    height: 150px;

    @media screen and (max-width: 520px) {
        height: 100px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;

    @media screen and (max-width: 520px) {
        margin-right: 140px;
    }

    @media screen and (max-width: 420px) {
        margin-right: 40px;
    }

    @media screen and (max-width: 300px) {
        margin-left: 50px;
    }
`;

export const Arrow1 = styled.img`
    height: 20px;
    margin-right: 10px;
`;

export const Text = styled.h1`
    font-size: 1.2rem;
    font-weight: 500;

    @media screen and (max-width: 650px) {
        font-size: 1rem;
    }
`;