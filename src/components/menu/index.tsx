import { useState } from 'react'

import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Close
} from '@styled-icons/material-outlined'
import { Home } from '@styled-icons/boxicons-solid/Home'
import Profile from '@/components/profile'
import MediaMatch from '@/components/media-match'
import SwitchButton from '@/components/switch-button'
import SocialLinks from '@/components/social-links'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.MenuHeadWrapper>
        <Profile />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Sobre</S.MenuLink>
        </S.MenuNav>
        <S.MenuSocialWrapper>
          <SocialLinks />
        </S.MenuSocialWrapper>
        <SwitchButton />
      </S.MenuHeadWrapper>

      <MediaMatch lessThan="medium">
        <S.MenuBarGroupMobile>
          <S.MenuBarMobile>
            <S.IconWrapper>
              <Home aria-label="home" />
            </S.IconWrapper>
            <S.IconWrapper onClick={() => setIsOpen(true)}>
              <MenuIcon aria-label="Open Menu" />
            </S.IconWrapper>
            <S.IconWrapper>
              <SearchIcon aria-label="search" />
            </S.IconWrapper>
          </S.MenuBarMobile>
        </S.MenuBarGroupMobile>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <Close aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Sobre</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu
