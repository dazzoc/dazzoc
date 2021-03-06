import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Star from '../../images/Star-01.svg';
import { ContactContainer, ContactBg, ContactContent, Top3, Box3, Span3, StarIconContact, ContactTitle, Col1, Col2, Header, SubHeader, SocalMediaLinks, FormWrapper, Form, ContactMe, Label, Input, Comment, Submit } from './ContactElements';

function Contact() {
  return (
    <ContactContainer id='contact'>
        <ContactBg>
            <Top3>
                <Box3>
                    <Span3>
                        <StarIconContact src={Star} alt='Star'/>
                        <ContactTitle>CONTACT</ContactTitle>
                        <StarIconContact src={Star} alt='Star'/>
                        &nbsp;&nbsp;&nbsp;
                    </Span3>
                    <Span3>
                        <StarIconContact src={Star} alt='Star'/>
                        <ContactTitle>CONTACT</ContactTitle>
                        <StarIconContact src={Star} alt='Star'/>
                        &nbsp;&nbsp;&nbsp;
                    </Span3>
                </Box3>
            </Top3>
            <ContactContent>
                <Col1>
                    <Header>HELLO!</Header>
                    <SubHeader>
                        I'm always open to chat about cool stuff like design, Illustration or Development. Drop me a Line or follow me on Socal Media!
                    </SubHeader>
                    <SocalMediaLinks>
                        <a href='https://www.linkedin.com/in/chris-dazzo/' target='_blank' rel="noreferrer" className='Contact-links'><LinkedInIcon/></a>
                        <a href='https://github.com/dazzoc' target='_blank' rel="noreferrer" className='Contact-links'><GitHubIcon/></a>
                        <a href='https://www.instagram.com/dazzo.c/' target='_blank' rel="noreferrer" className='Contact-links'><InstagramIcon/></a>
                    </SocalMediaLinks>
                </Col1>
                <Col2>
                    <FormWrapper>
                        <Form action='https://formspree.io/f/mvolrdkp' method='POST'>
                            <ContactMe>CONTACT-</ContactMe>
                            <Label>NAME:</Label>
                            <Input type="text" name='name' placeholder='Lucy'></Input>
                            <Label>EMAIL:</Label>
                            <Input type="email" name='email' placeholder='lucyiscool@gmail.com'></Input>
                            <Label>COMMENT:</Label>
                            <Comment type="text" name='message' placeholder='"Whats happenin?"'></Comment>
                            <Submit type="submit" value="Submit!" />
                        </Form>
                    </FormWrapper>
                </Col2>
            </ContactContent>
        </ContactBg>
    </ContactContainer>
  )
}

export default Contact;