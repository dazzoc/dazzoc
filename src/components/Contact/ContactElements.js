import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;
`;

export const ContactBg = styled.div`
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

export const ContactContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 880px) {
        flex-direction: column;
    }
`;

export const Top3 = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Box3 = styled.div`
    max-width: 1100px;
    height: 100px;
    background: #fe4324;
    padding: 20px;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        margin-bottom: 50px;
        width: 100%;
    }
`;

export const Span3 = styled.span`
    display: flex;
    align-items: center;
    font-size: 3.5rem;
`;

export const StarIconContact = styled.img`
    width: 50px;
    margin: 0 15px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(171deg) brightness(106%) contrast(95%);
`

export const ContactTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 400;
    color: #fff;
`;

export const Col1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    height: 500px;
    padding: 20px 10px 20px 20px;
    background-color: #ffa0cd;
    color: #000;
    border-radius: 10px 0 0 10px;

    @media screen and (max-width: 880px) {
        height: 175px;
        border-radius: 10px 10px 0 0;
    }

    @media screen and (max-width: 420px) {
        width: 300px;
    }

    @media screen and (max-width: 320px) {
        width: 270px;
    }
`;

export const Header = styled.h1`
    font-size: 4rem;

    @media screen and (max-width: 880px) {
        font-size: 2rem;
    }
`;

export const SubHeader = styled.p`
    font-size: 1.2rem;
    text-transform: uppercase;
    width: 360px;
    margin: 15px 0;

    @media screen and (max-width: 880px) {
        font-size: 1rem;
        margin: 5px 0;
    }

    @media screen and (max-width: 420px) {
        width: 260px;
        font-size: 14px;
        margin: 0;
    }

    @media screen and (max-width: 320px) {
        width: 240px;
    }
`;

export const SocalMediaLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Col2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 500px;
    padding: 20px 20px 20px 10px;
    background-color: #ffa0cd;
    color: #f9f9f9;
    border-radius: 0 10px 10px 0;

    @media screen and (max-width: 880px) {
        border-radius: 0 0 10px 10px;
        padding: 20px;
        height: 420px;
    }

    @media screen and (max-width: 420px) {
        width: 300px;
    }

    @media screen and (max-width: 320px) {
        width: 270px;
    }
`;

export const FormWrapper = styled.div`
    width: 370px;
    height: 460px;
    background: #fe4324;
    padding: 20px;
    border-radius: 8px;

    @media screen and (max-width: 880px) {
        height: 380px;
    }

    @media screen and (max-width: 420px) {
        width: 270px;
    }

    @media screen and (max-width: 320px) {
        width: 240px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ContactMe = styled.h1`
    font-size: 2rem;

    @media screen and (max-width: 880px) {
        font-size: 1.5rem;
    }
`;

export const Label = styled.label`
    font-size: 1rem;
    margin-top: 20px;

    @media screen and (max-width: 880px) {
        margin-top: 15px;
    }
`;

export const Input = styled.input`
    height: 35px;
    margin-top: 10px;
    padding: 0 10px 0 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
`;

export const Comment = styled.textarea`
    border: none;
    outline: none;
    border-radius: 5px;
    margin-top: 10px;
    height: 100px;
    padding: 10px;
    font-size: 1rem;
    max-width: 330px;
    max-height: 100px;
    overflow: scroll;

    @media screen and (max-width: 880px) {
        height: 50px;
    }
`;

export const Submit = styled.input`
    width: 100px;
    height: 40px;
    border: none;
    outline: none;
    margin-top: 20px;
    background: #000;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #FFF;
    -webkit-color: #FFF;
    -moz-color: #FFF;
    -o-color: #FFF;

    &:hover {
        transform: translateY(-3px);
        transition: all 0.2s ease-in-out;
    }
`;