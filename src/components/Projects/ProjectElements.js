import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;
`;

export const ProjectsBg = styled.div`
    width: 1100px;
    height: 800px;
    background: #fff;
    border-bottom: 3px solid #3c6794;
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
    width: 165px;
    height: 100px;
    border: 3px solid #000;
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-bottom: 15px;
    }
`;

export const WorkTitle = styled.h1`
    font-size: 2.5rem;
    color: #000;
`;

export const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    width: 70%;
    height: 100%;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Worklink = styled.a`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05, 1.05);
        transition: all 0.2s ease-in-out;
    }
`;

export const Hex = styled.h1`
    font-size: 4rem;
    color: #000;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;