import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ContactContainer, ContactBg, ContactContent, Col1, Col2, Header, SubHeader, SocalMediaLinks, FormWrapper, Form, ContactMe, Label, Input, Comment, Submit } from './ContactElements';

function Contact() {
  return (
    <ContactContainer>
        <ContactBg>
            <ContactContent>
                <Col1>
                    <Header>Hello!</Header>
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
                        <Form>
                            <ContactMe>Contact</ContactMe>
                            <Label>Name:</Label>
                            <Input type="text" placeholder='Jimmy Johns'></Input>
                            <Label>Email:</Label>
                            <Input type="text" placeholder='Jimmy@freesmells.com'></Input>
                            <Label>Comment:</Label>
                            <Comment type="text" placeholder='"Do You Like Day Old Bread?"'></Comment>
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