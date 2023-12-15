import styled from 'styled-components'

export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  width: 100%;

  nav {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;

    div {
      display: flex;
    }

    a {
      text-decoration: none;
      padding: 1rem;
      font-weight: 800;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['gray-500']};

      &:hover {
        color: ${(props) => props.theme['dark-900']};
      }

      &.active {
        color: ${(props) => props.theme['dark-900']};
        border-bottom: 0.25rem solid ${(props) => props.theme['yellow-600']};
      }
    }

    button {
      border: 0;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 800;
      font-family: 'Plus Jakarta Sans', sans-serif;
      cursor: pointer;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['yellow-500']};
      color: ${(props) => props.theme['dark-900']};
      padding: 0.5rem 1.5rem;

      :hover {
        background-color: ${(props) => props.theme['yellow-600']};
        cursor: pointer;
      }
    }
  }
`
