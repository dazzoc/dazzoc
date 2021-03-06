import logo from '../../images/dazzo-logo.svg';
import Star from '../../images/Star-01.svg';

import { Nav, NavbarContainer, NavLogo, NavIllo, Illo } from './PageNavElements';

const PageNav = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <img src={logo} alt="Logo" className="pageNav-Logo"/>
                </NavLogo>
                <NavIllo>
                    <Illo>
                        <div className="illo-container">
                            <img src={Star} alt="Star" className="pageNav-star"/>
                        </div>
                    </Illo>
                </NavIllo>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default PageNav;