import styled from 'styled-components'

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledInput = styled.input`
  /* Keep existing styles */
  border: 1rem solid red;

  /* Add or modify styles for the checkbox */
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid ${(props) => props.theme['gray-500']};
  border-radius: 3px;
  outline: none;
  position: relative;
  overflow: hidden; /* Hide the overflow for the ::before pseudo-element */

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: ${(props) => props.theme['yellow-500']};
  }

  /* Define styles for the checked state */
  &:checked {
    background-color: ${(props) => props.theme['yellow-500']};
    border-color: ${(props) => props.theme['yellow-600']};

    &::before {
      height: 100%;
    }
  }
`

export const StyledLabel = styled.label`
  font-size: 0.85rem;
  color: ${(props) => props.theme['gray-700']};
  font-weight: 500;
  line-height: 1.5;
  margin-left: 0.5rem;
`
