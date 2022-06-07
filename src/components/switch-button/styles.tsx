import styled, { css } from 'styled-components'
import { LightMode, DarkMode } from '@styled-icons/material'

export const Wrapper = styled.div``

export const CheckboxLabel = styled.label`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.dark};
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px;
    width: 46px;
    height: 22px;
  `}
`

export const Ball = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.toggle};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;

    transform: translateX(0px);
    transition: transform 0.2s linear;
  `}
`
export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;

  &:checked + ${CheckboxLabel} {
    ${Ball} {
      transform: translateX(25px);
    }
  }
`

export const SunIcon = styled(LightMode)`
  color: #ef6c00;
  width: 18px;
  height: 18px;
`
export const MoonIcon = styled(DarkMode)`
  color: #f0f0f3;
  width: 18px;
  height: 18px;
`
