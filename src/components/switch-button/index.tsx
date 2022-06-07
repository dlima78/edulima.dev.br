import * as S from './styles'

export type SwitchButtonProps = {
  color?: string
}

const SwitchButton = ({ color }: SwitchButtonProps) => (
  <S.Wrapper>
    <S.CheckboxInput id="chk" />
    <S.CheckboxLabel htmlFor="chk">
      <S.SunIcon />
      <S.MoonIcon />
      <S.Ball color={color} />
    </S.CheckboxLabel>
  </S.Wrapper>
)

export default SwitchButton
