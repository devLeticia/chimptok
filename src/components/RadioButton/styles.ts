// RadioStyledComponents.js
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: end;

  input[type='radio'] {
    display: none;
  }

  label {
    background-color: ${(props) => props.theme['gray-100']};
    border: 2px solid ${(props) => props.theme['gray-300']};
    border-radius: 6px;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      margin-top: 0.25rem;
    }
    p {
      color: ${(props) => props.theme['gray-700']};
    }
  }

  label:before {
    content: '';
    width: 16px; /* Adjust as needed */
    height: 16px; /* Adjust as needed */
    background-color: ${(props) => props.theme.white};
    border-radius: 50%; /* Make it round */
    margin-bottom: 5px; /* Add spacing between radio and label */
    margin-left: 120%;
    margin-top: -20%;
    border: 2px solid ${(props) => props.theme['gray-300']};
  }

  input[type='radio']:checked + label {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['dark-900']};
    border: 2px solid ${(props) => props.theme['yellow-600']};
    p {
      color: ${(props) => props.theme['dark-900']};
    }
  }

  input[type='radio']:checked + label:before {
    background-color: ${(props) =>
      props.theme['yellow-600']}; /* Adjust the color of the dot */
    border: 2px solid ${(props) => props.theme['yellow-600']};
  }
`
