import styled, { keyframes } from 'styled-components';

export const Spin = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;
`;

export const AboutBg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    max-width: 1100px;
    height: 800px;
    background: #fff;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        padding: 20px 0;
    }
`;

export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Top2 = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Box2 = styled.div`
    max-width: 1100px;
    height: 100px;
    background: #ff2300;
    padding: 20px;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
        width: 100%;
    }
`;

export const marquee = keyframes`
    0% { transform: translate(0, 0) }
    100% { transform: translate(-100%, 0) }
`;

export const Span2 = styled.span`
    display: flex;
    align-items: center;
    font-size: 3.5rem;
    padding-left: 100%;
    white-space: nowrap;
    min-height: 100%;
    height: 100%;
    line-height: 100px;
    animation-name: ${marquee};
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-name: ${marquee};
    -webkit-animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: ${marquee};
    -moz-animation-duration: 10s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: ${marquee};
    -ms-animation-duration: 10s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
`;

export const StarIconAbout = styled.img`
    width: 50px;
    margin: 0 15px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(171deg) brightness(106%) contrast(95%);
    animation-name: ${Spin};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-name: ${Spin};
    -webkit-animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: ${Spin};
    -moz-animation-duration: 3s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: ${Spin};
    -ms-animation-duration: 3s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
`;

export const AboutTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 500;
    color: #fff;
`;

export const Row1 = styled.div`
    display: flex;
    width: 700px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        /* justify-content: center; */
        width: 520px;
    }

    @media screen and (max-width: 540px) {
        flex-direction: column;
        align-items: flex-start;
        width: 400px;
    }

    @media screen and (max-width: 420px) {
        width: 300px;
    }
`;

export const Column1 = styled.div`

`;

export const Column2 = styled.div`

`;


export const Row2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Name = styled.h5`
    font-size: 2rem;
    font-weight: 500;

    @media screen and (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

export const Title = styled.p`
    font-size: 1rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: .9rem;
    }
`;

export const FunkStar = styled.img`
    width: 100px;
    margin: 20px 0;
    filter: invert(79%) sepia(95%) saturate(3017%) hue-rotate(280deg) brightness(100%) contrast(105%);
    animation-name: ${Spin};
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-name: ${Spin};
    -webkit-animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: ${Spin};
    -moz-animation-duration: 6s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: ${Spin};
    -ms-animation-duration: 6s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    
    @media screen and (max-width: 768px) {
        width: 50px;
        margin: 10px 0;
    }

    @media screen and (max-width: 540px) {
        width: 20px;
    }
`;

export const Info = styled.h5`
    font-size: 1.2rem;
    font-weight: 500;
    
    @media screen and (max-width: 768px) {
        font-size: .9rem;
    }
`;

export const Bio = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const BioTitle = styled.h5`
    font-size: 1.5rem;
    font-weight: 500;
    margin-right: 5px;

    @media screen and (max-width: 540px) {
        font-size: 1.1rem;
    }
`;

export const ArrowDown1 = styled.img`
    width: 30px;

    @media screen and (max-width: 540px) {
        width: 20px;
    }
`;

export const Descrip = styled.p`
    font-size: 1.1rem;
    text-transform: uppercase;
    width: 700px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        width: 520px;
    }

    @media screen and (max-width: 540px) {
        font-size: .9rem;
        width: 400px;
    }

    @media screen and (max-width: 420px) {
        font-size: .8rem;
        width: 300px;
    }

`;