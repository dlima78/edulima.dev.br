import { defaultBreakpoints, DefaultBreakpoints } from '@/styles/breakpoints'
import styled, { css } from 'styled-components'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    @media (max-width: ${defaultBreakpoints[size]}) {
      display: block;
    }
  `,

  greaterThan: (size: breakpoint) => css`
    @media (min-width: ${defaultBreakpoints[size]}) {
      display: block;
    }
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
