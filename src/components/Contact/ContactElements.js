import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    z-index: 1;
`;

export const ContactBg = styled.div`
    width: 1100px;
    height: 800px;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
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

    @media screen and (max-width: 768px) {
        height: 200px;
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

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const SubHeader = styled.p`
    font-size: 1.2rem;
    text-transform: uppercase;
    width: 360px;
    margin: 15px 0;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 420px) {
        width: 260px;
        font-size: 14px;
        margin: 10px 0;
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

    @media screen and (max-width: 768px) {
        border-radius: 0 0 10px 10px;
        padding: 20px;
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
`;

export const Label = styled.label`
    font-size: 1rem;
    margin-top: 20px;
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