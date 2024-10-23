import { ChangeEvent, InputHTMLAttributes } from 'react';
import { CheckBoxWrapper, StyledInput, StyledLabel } from './styles';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string
}

export function CheckBox({ label, checked, onChange, name}: CheckBoxProps) {
  return (
    <CheckBoxWrapper>
      <StyledInput
      type="checkbox"
      name={name}
      id={label}
      checked={checked} // Passed correctly from the parent
      onChange={onChange}
    />
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
    </CheckBoxWrapper>
  );
}