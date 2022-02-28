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
    border: 3px solid #3c6794;
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WorkTitle = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap');
    font-family: 'Nunito', sans-serif;
    font-size: 2.5rem;
    color: #3c6794;
`;

export const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    width: 70%;
    height: 100%;

    
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
`;