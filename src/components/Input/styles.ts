import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme['gray-100']};
  padding: 1rem;
  padding-left: 3rem;
  font-size: 0.85rem;
  width: 100%;
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  box-sizing: border-box;
  transition: border 0.3s ease; /* Add transition for border property */
  font-weight: 600;
  /* border: ${(props) =>
    props.hasError
      ? `2px solid ${props.theme['gray-300']}`
      : `2px solid ${props.theme['red-300']}`}; */

  &:focus,
  &:focus-within {
    outline: none;
    border: 2px solid ${(props) => props.theme['yellow-500']};
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: ${(props) => props.theme['gray-500']};
  transition: color 0.3s ease; /* Add transition for color property */

  ${InputWrapper}:focus-within & {
    color: ${(props) => props.theme['dark-900']};
  }
`

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme['red-500']};
  background-color: ${(props) => props.theme['gray-100']};
  font-size: 0.75rem;
  text-align: right;
  position: absolute;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  bottom: 20%;
  right: 1rem;
  font-weight: 600;
  transition: color 0.3s ease; /* Add transition for color property */
`
