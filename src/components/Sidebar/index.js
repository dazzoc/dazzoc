import { SidebarContainer, Icon, Close, SidebarWrapper, SidebarMenu, SidebarLink, ResumeLink } from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <Close fontSize="large"/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" activeClass='active' spy={true} smooth={true} offset={-100} duration={500} onClick={toggle}>
                    ABOUT
                </SidebarLink>
                <SidebarLink to="work" activeClass='active' spy={true} smooth={true} offset={-100} duration={500} onClick={toggle}>
                    WORK
                </SidebarLink>
                <SidebarLink to="contact" activeClass='active' spy={true} smooth={true} offset={-100} duration={500} onClick={toggle}>
                    CONTACT
                </SidebarLink>
                <SidebarLink>
                        <ResumeLink to='/resume'>RESUME</ResumeLink>
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar