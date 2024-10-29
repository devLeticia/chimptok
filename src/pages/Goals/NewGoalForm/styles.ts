import { TrashSimple, CheckCircle } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.div`
  min-width: 500px;
  hr {
    margin-bottom: 2rem;
    border: 1px solid ${(props) => props.theme['gray-200']};
  }
  h2 {
    text-align: left;
    margin-top: 1rem;
    font-size: 0.95rem;
    font-weight: 800;
    color: ${(props) => props.theme['dark-900']};

  }
`
export const SuperHeader = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme['dark-900']};
  font-style: italic;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 900;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const ColWrapper = styled.p`
  width: 100%;
  color: ${(props) => props.theme['dark-900']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Skip = styled.p`
  margin: 1rem 0;
  text-align: center;
  font-weight: 700;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${(props) => props.theme['yellow-600']};
  }
`

export const SuccessMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
  p {
    font-size: 0.85rem;
    font-weight: 500;
    span {
      font-weight: 900;
    }
  }
`
export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 200px;
  //; background-color: red;
  overflow: scroll;
`
export const TaskInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`
export const Index = styled.div`
  text-align: right;
  width: 14px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1rem;
`

export const StyledTrashIconButton = styled(TrashSimple)`
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};

  :hover {
    color: ${(props) => props.theme['red-500']};
  }
`

export const TaskDisclaimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    color: ${(props) => props.theme['dark-900']} !important;
  }
`

export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-500']};
`




// Create a styled wrapper for DatePicker
export const StyledDatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 250px;
  }

  .react-datepicker__input-container input {


    &:focus {
      border-color: ${(props) => props.theme['yellow-500']};
      box-shadow: 0 0 5px${(props) => props.theme['yellow-500']};
      outline: none;
    }
  }

  .react-datepicker__tab-loop {
    background-color: #f9f9f9; /* Background color of the calendar */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .react-datepicker__header {
    text-align: center;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .react-datepicker__current-month {
    text-align: center;
  }

  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: bold;
  }

  .react-datepicker__day {
    width: 36px;
    height: 36px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    border-radius: 50%; /* Makes days round */
    color: #333;

    &:hover {
      background-color:  ${(props) => props.theme['gray-500']};; /* Hover color */
      color: white;
    }
  }

  .react-datepicker__day--selected {
    background-color: ${(props) => props.theme['dark-900']};
    color: white;
    :hover {
      background-color: ${(props) => props.theme['dark-900']};
    }
  }

  .react-datepicker__navigation--previous,
  .react-datepicker__navigation--next {
    top: 10px;
    font-size: 18px;
    border: none;
    background: none;
    color: ${(props) => props.theme['dark-900']} !important;
    padding: 4px;

    .react-datepicker__navigation-icon::before {
      border-color: ${(props) => props.theme['dark-900']} !important;
    }
    
    &:hover {
      color:  ${(props) => props.theme['dark-900']};
    }
  }

  .react-datepicker__navigation-icon::before {
    border-color: white;
  }
`