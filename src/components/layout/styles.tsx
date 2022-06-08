import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const LayoutMain = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    min-height: 100vh;
    padding: 10rem 20rem;
    width: 100%;

    @media (max-width: 768px) {
      padding: 10rem ${theme.spacings.small};
    }
  `}
`
