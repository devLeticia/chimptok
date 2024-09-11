import { ChangeEvent, InputHTMLAttributes } from 'react';
import { CheckBoxWrapper, StyledInput, StyledLabel } from './styles';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // This will handle the event properly
}

export function CheckBox({ label, checked, onChange }: CheckBoxProps) {
  return (
    <CheckBoxWrapper>
      <StyledInput
        type="checkbox"
        id={label}
        checked={checked} // Bind checked value
        onChange={onChange} // Pass the event correctly
      />
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
    </CheckBoxWrapper>
  );
}