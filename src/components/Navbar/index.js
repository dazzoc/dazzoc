import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/dazzo-logo.svg';
import duckhead from '../../images/duck-head.svg';
import duckarm from '../../images/duck-arm.svg';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavResumeLink, NavIllo, Illo } from './NavbarElements';


const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <img src={logo} alt="Logo" className="logo"/>
                </NavLogo>
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
                    <NavItem>
                        <NavResumeLink>
                            <a href='https://docs.google.com/document/d/1kyq79oMyecJyijj-btn_68sI1ESiYjq0vkRrNaGUKig/edit' target='_blank' rel="noreferrer" className="resume-link">Resume</a>
                        </NavResumeLink>
                    </NavItem>
                </NavMenu>
                <NavIllo>
                    <Illo>
                        <div className="illo-container">
                            <img src={duckhead} alt="Logo" className="duckhead"/>
                            <img src={duckarm} alt="Logo" className="duckarm"/>
                        </div>
                    </Illo>
                </NavIllo>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;