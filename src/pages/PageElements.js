import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ProjectContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`;

export const ProjectBg = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    /* position: relative; */
`;

export const SlideWrapper = styled.div`
    width: 700px;
    height: 450px;
    background-color: #ffa0cd;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SliderButtons = styled.div`
    position: absolute;
    top: 40%;
    display: flex;
    justify-content: space-between;
    width: 780px;
    z-index: 10;
`;

export const PrevArrow = styled(ArrowBackIosIcon)`
    color: #000;
`;

export const NextArrow = styled(ArrowForwardIosIcon)`
    color: #000;
`;

export const InfoContainer = styled.div`
    display: block;
`;

export const SlideLogo = styled.img`
    width: 200px;
    margin-top: 20px;
`;

export const HexLogo = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    margin-top: 20px;
`;

export const SlideDes = styled.p`
    max-width: 700px;
    margin-top: 10px;
`;

export const Deploy = styled.p`
    font-weight: 500;
    width: 80px;
    height: 30px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
`;

export const LinkItem = styled.a`
    text-decoration: none;
    color: #000;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-2px);
        transition: all 0.2s ease-in-out;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
`;
