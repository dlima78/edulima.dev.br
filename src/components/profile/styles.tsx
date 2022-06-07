import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.text};
    font-weight: 500;
  `}
`
export const Avatar = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  position: relative;
  margin-right: 1rem;
`

export const AvatarPhoto = styled.img`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`

export const AvataName = styled.span``
