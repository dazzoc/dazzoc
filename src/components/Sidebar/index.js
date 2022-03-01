import { SidebarContainer, Icon, Close, SidebarWrapper, SidebarMenu, SidebarLink, SidebarResumeLink } from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <Close fontSize="large"/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" activeClass='active' spy={true} smooth={true} offset={-100} duration={500} onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="work" activeClass='active' spy={true} smooth={true} offset={-100} duration={500} onClick={toggle}>
                    Work
                </SidebarLink>
                <SidebarLink to="contact" activeClass='active' spy={true} smooth={true} offset={-100} duration={500} onClick={toggle}>
                    Contact
                </SidebarLink>
                <SidebarResumeLink>
                    <a href='https://docs.google.com/document/d/1kyq79oMyecJyijj-btn_68sI1ESiYjq0vkRrNaGUKig/edit' target='_blank' rel="noreferrer" className="resume-sidebar">Resume</a>
                </SidebarResumeLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar