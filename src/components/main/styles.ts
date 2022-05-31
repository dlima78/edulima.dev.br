import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark};
    color: ${theme.colors.primary};
    height: 100vh;
    text-align: center;
    align-items: center;
  `}
`

export const Logo = styled.img``

export const Title = styled.h1``
