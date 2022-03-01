import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;
`;

export const HeroBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: 800px;
    background: #fff;
    border-bottom: 3px solid #3c6794;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BottomRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 80px;
`

export const Workhorses = styled.div`
    display: flex;
`;

export const Guy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;