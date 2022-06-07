import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.backgroundVariant};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuBarGroupMobile = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`

export const MenuBarMobile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    background-color: ${theme.colors.backgroundVariant};
    color: ${theme.colors.dark};
  `}
`
export const MenuNav = styled.div``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.medium};

    &:hover {
      color: ${theme.colors.highlight};
    }

    &:active {
      color: ${theme.colors.highlight};
    }

    @media (min-width: 768px) {
      margin: 0 ${theme.spacings.small};
    }
  `}
`
export const MenuHeadWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    background-color: ${theme.colors.backgroundVariant};
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.backgroundVariant};
    position: absolute;
    height: 100vh;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? '1' : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      width: 2.4rem;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    ${MenuLink} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
      margin-bottom: ${theme.spacings.small};
      position: relative;
      text-align: center;
    }
  `}
`
