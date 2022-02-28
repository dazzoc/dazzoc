import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../../images/dazzo-logo.svg';
import duckhead from '../../images/duck-head.svg';
import { FooterContainer, FooterBg, FooterContent, FooterSocalLinks, Copyright, Copy } from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
        <img src={duckhead} alt="Logo" className="footer-duckhead"/>
        <FooterBg>
            <FooterContent>
                <img src={logo} alt="Logo" className="footer-logo"/>
                <FooterSocalLinks>
                    <a href='https://www.linkedin.com/in/chris-dazzo/' target='_blank' rel="noreferrer" className='Contact-links'><LinkedInIcon/></a>
                    <a href='https://github.com/dazzoc' target='_blank' rel="noreferrer" className='Contact-links'><GitHubIcon/></a>
                    <a href='https://www.instagram.com/dazzo.c/' target='_blank' rel="noreferrer" className='Contact-links'><InstagramIcon/></a>
                </FooterSocalLinks>
                <Copyright>
                    <Copy>Chris Dazzo © 2022 | Wash Your Hands</Copy>
                </Copyright>
            </FooterContent>
        </FooterBg>
    </FooterContainer>
  )
}

export default Footer;