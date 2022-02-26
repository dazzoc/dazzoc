import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { Link as LinkS } from 'react-scroll'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Close = styled(CloseIcon)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 85%);
    background: trasparent;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 180px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 140px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: dodgerblue;
        transition: 0ms.2s ease-in-out;
    }
`;
