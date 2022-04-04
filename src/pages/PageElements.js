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
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const SlideWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SliderButtons = styled.div`
    position: absolute;
    top: 30%;
    /* right: 50px; */
    display: flex;
    justify-content: space-between;
    width: 80%;
    z-index: 10;
`;

export const PrevArrow = styled(ArrowBackIosIcon)`
    color: #000;
`;

export const NextArrow = styled(ArrowForwardIosIcon)`
    color: #000;
`;

export const SlideLogo = styled.div`
    width: 200px;
`;

export const SlideDes = styled.p`
    max-width: 800px;
`;
