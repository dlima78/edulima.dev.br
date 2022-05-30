import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark};
    color: ${theme.colors.primary};
    height: 100vh;
  `}
`
