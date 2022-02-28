import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;
`;

export const AboutBg = styled.div`
    width: 1100px;
    height: 800px;
    background: #fff;
`;

export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Row1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    color: #3c6794;
`;

export const H1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const Row2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #3c6794;
`;

export const Name = styled.h5`
    font-size: 1.5rem;
`;

export const Title = styled.p`
    font-size: 1rem;
`