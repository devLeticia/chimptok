import styled from 'styled-components'

const BaseInput = styled.input`
  background: transparent;
  color: ${(props) => props.theme['green-500']};
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: 2px solid ${(props) => props.theme['gray-500']};
  }
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-600']};
  font-size: 1.25rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  text-align: center;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  text-align: center;
  width: 4rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
