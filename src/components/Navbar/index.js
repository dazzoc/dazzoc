import MenuIcon from '@mui/icons-material/Menu';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavIllo, Illo } from './NavbarElements';


const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Dazzo</NavLogo>
                <MobileIcon onClick={toggle}>
                    <MenuIcon fontSize="large"/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='work'>Work</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavIllo>
                    <Illo>Illo</Illo>
                </NavIllo>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;