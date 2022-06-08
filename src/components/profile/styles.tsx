import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.text};
  `}
`
export const Avatar = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: ${theme.spacings.xlarge};
    height: ${theme.spacings.xlarge};
    position: relative;
    margin-right: 1rem;
  `}
`

export const AvatarPhoto = styled.img`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`

export const AvatarName = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
