import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
    height: 100px;
    background-color: #ff2300;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999; 

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    z-index: 9;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;

    @media screen and (max-width: 307px) {
        border-right: none;
        margin-left: 10px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`;

export const NavItem = styled.li`
    height: 30px;
`;

export const NavLinks = styled(LinkR)`
    font-weight: 500;
    font-size: 1.3rem;
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1, 1.1);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 400px) {
        display: none;
    }
`;

export const NavIllo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 4px;
`;

export const Illo = styled.div`
    color: #3c6794;
    display: flex;
    cursor: pointer;
`;

