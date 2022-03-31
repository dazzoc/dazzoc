import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 250px;
    background: #fff;
    bottom: 0;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterBg = styled.div`
    height: 250px;
    background: #000;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f9f9f9;
`;

export const FooterSocalLinks = styled.div`
    color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Copy = styled.p`
    font-size: 0.9rem;
`