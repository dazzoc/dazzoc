import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    height: 100px;
    background-color: #fff;
    /* margin-top: -100px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10; 

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    border-bottom: 3.5px solid #3c6794;
    border-left: 3.5px solid #3c6794;
    border-right: 3.5px solid #3c6794;
`;

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
    border-right: 3.5px solid #3c6794;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        color: #3c6794;
        top: 0;
        right: 0;
        transform: translate(-100%, 85%);
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 30px;
`;

export const NavLinks = styled(LinkS)`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap');
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    color: #3c6794;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &.active {
        border-bottom: 3px solid #3c6794;
    }

    &:hover {
        transform: scale(1.1, 1.1);
        transition: all 0.2s ease-in-out;
    }
`;

export const NavIllo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 4px;
    border-left: 3.5px solid #3c6794;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Illo = styled.div`
    color: #3c6794;
    display: flex;
    cursor: pointer;
`