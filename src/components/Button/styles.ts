import styled from 'styled-components'

interface ButtonWrapperProps {
  color: 'yellow' | 'blue' | 'dark'
  buttonType: 'filled' | 'border' | 'flat'
  fullWidth: boolean
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: ${(props) =>
    props.buttonType === 'border'
      ? `solid 2px ${props.theme['yellow-500']}`
      : 'none'};
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 800;
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) =>
    props.buttonType === 'flat'
      ? 'transparent'
      : props.color === 'yellow'
      ? props.theme[`${props.color}-500`] || props.theme['yellow-500']
      : props.color === 'blue'
      ? props.theme[`${props.color}-500`] || props.theme['blue-500']
      : props.color === 'dark'
      ? props.theme['dark-900']
      : props.theme[
          'yellow-500'
        ]}; // You can set a default color or handle other cases as needed
  color: ${(props) =>
    props.color === 'dark' || props.color === 'blue'
      ? 'white'
      : props.theme['dark-900']};
  padding: 1rem 1.75rem;
  white-space: nowrap;

  :hover {
    background-color: ${(props) =>
      props.buttonType === 'flat'
        ? 'transparent'
        : props.color === 'yellow'
        ? props.theme[`${props.color}-400`] || props.theme['yellow-400']
        : props.color === 'blue'
        ? props.theme[`${props.color}-400`] || props.theme['blue-400']
        : props.color === 'dark'
        ? props.theme['dark-800']
        : props.theme['yellow-400']}; // Adjust the tint level as needed
  }

  :disabled {
    opacity: 0.5;
  }
`
