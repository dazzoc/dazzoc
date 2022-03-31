import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../../images/dazzo-logo.svg';
import Star from '../../images/Star-01.svg';
import { FooterContainer, FooterBg, FooterContent, FooterSocalLinks, Copyright, Copy } from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
        <FooterBg>
            <img src={Star} alt="Star" className='footer-star'/>
            <FooterContent>
                <img src={logo} alt="Logo" className="footer-logo"/>
                <FooterSocalLinks>
                    <a href='https://www.linkedin.com/in/chris-dazzo/' target='_blank' rel="noreferrer" className='footer-links'><LinkedInIcon/></a>
                    <a href='https://github.com/dazzoc' target='_blank' rel="noreferrer" className='footer-links'><GitHubIcon/></a>
                    <a href='https://www.instagram.com/dazzo.c/' target='_blank' rel="noreferrer" className='footer-links'><InstagramIcon/></a>
                </FooterSocalLinks>
                <Copyright>
                    <Copy>Chris Dazzo © 2022 | Wash Your Hands</Copy>
                </Copyright>
            </FooterContent>
            <img src={Star} alt="Star" className='footer-star'/>
        </FooterBg>
    </FooterContainer>
  )
}

export default Footer;