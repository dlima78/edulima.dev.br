import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  margin: auto 1rem;
  width: 100%;
`
export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialLinksLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.text};
    transition: color 0.2s;
    &:hover {
      color: ${theme.colors.highlight};
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    fill: ${theme.colors.socialLinks};
    width: 2rem;
    transition: color 0.2s;

    &:hover {
      fill: ${theme.colors.highlight};
    }
  `}
`
