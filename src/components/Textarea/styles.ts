import styled from 'styled-components'

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.85rem;
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  /* Disable textarea resizing */
  resize: none;
  /* Add any additional styling as needed */
  /* Example: */
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme['yellow-500']};
  }
`
