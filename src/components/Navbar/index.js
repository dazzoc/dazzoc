import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/dazzo-logo.svg';
import Star from '../../images/Star-01.svg';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavResumeLink, ResumeLink, NavIllo, Illo } from './NavbarElements';


const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="hero" activeClass='active' spy={true} smooth={true} offset={-100} duration={500}>
                    <img src={logo} alt="Logo" className="logo"/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <MenuIcon fontSize="large"/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='work' activeClass='active' spy={true} smooth={true} offset={-100} duration={500} >WORK</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about' activeClass='active' spy={true} smooth={true} offset={-100} duration={500} >ABOUT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact' activeClass='active' spy={true} smooth={true} offset={-100} duration={500} >CONTACT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <ResumeLink to='/resume'>RESUME</ResumeLink>
                    </NavItem>
                </NavMenu>
                <NavIllo>
                    <Illo>
                        <div className="illo-container">
                            <img src={Star} alt="Star" className="star"/>
                        </div>
                    </Illo>
                </NavIllo>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;