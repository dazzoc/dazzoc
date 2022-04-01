import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;

    @media screen and (max-width: 540px) {
        /* height: 900px; */
    }
`;

export const AboutBg = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 40px;
    width: 1100px;
    height: 800px;
    background: #fff;

    @media screen and (max-width: 768px) {
        padding: 40px 0;
    }
`;

export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 540px) {
        
    }
`;

export const Top2 = styled.div`
    width: 100%;
`;

export const Box2 = styled.div`
    max-width: 1100px;
    height: 100px;
    background: #fe4324;
    padding: 20px;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
        width: 100%;
    }
`;

export const StarIconAbout = styled.img`
    width: 50px;
    margin: 0 15px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(171deg) brightness(106%) contrast(95%);
`

export const AboutTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 400;
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