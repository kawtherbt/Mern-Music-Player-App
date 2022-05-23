import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute
} from './SidebarEles'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='download' onClick={toggle}>Download</SidebarLink>
          <SidebarLink to='support' onClick={toggle}>Support</SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
          <SidebarRoute to='/login'>Log In</SidebarRoute>
          <SidebarRoute to='/signup'>Sign Up</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;