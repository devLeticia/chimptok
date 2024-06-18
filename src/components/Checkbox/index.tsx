import { CheckBoxWrapper, StyledInput, StyledLabel } from './styles'

interface CheckBoxProps {
  label: string
}
export function CheckBox({ label }: CheckBoxProps) {
  return (
    <CheckBoxWrapper>
      <StyledInput
        type="checkbox"
        id="subscribeNews"
        name="subscribe"
        value="newsletter"
      />
      <StyledLabel htmlFor="subscribeNews">{label}</StyledLabel>
    </CheckBoxWrapper>
  )
}
