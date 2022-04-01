import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;
`;

export const ProjectsBg = styled.div`
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

    @media screen and (max-width: 480px) {
        /* height: 900px; */
    }

`;

export const ProjectsContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Top = styled.div`
    width: 100%;
`;

export const Box = styled.div`
    max-width: 1100px;
    height: 100px;
    background: #fe4324;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const StarIcon = styled.img`
    width: 50px;
    margin: 0 15px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(171deg) brightness(106%) contrast(95%);
`

export const WorkTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 400;
    color: #fff;
`;

export const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 850px) {
        width: 100%;
    }
`;

export const WorkRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Worklink = styled.a`
    text-decoration: none;
    cursor: pointer;
    margin: 20px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05, 1.05);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 480px) {
        margin: 20px;
    }
`;

export const Hex = styled.h1`
    font-size: 4rem;
    color: #000;

    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
    }
`;