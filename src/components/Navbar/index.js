import MenuIcon from '@mui/icons-material/Menu';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';


function Navbar() {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Dazzo</NavLogo>
                <MobileIcon>
                    <MenuIcon />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;