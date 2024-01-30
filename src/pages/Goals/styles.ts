import styled from 'styled-components'

export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  width: 100%;

  nav {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    div {
      display: flex;
      a {
        text-decoration: none;
        padding: 0.75rem;
        font-weight: 800;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme['gray-500']};
        border-bottom: 0.25rem solid ${(props) => props.theme.white};

        &:hover {
          color: ${(props) => props.theme['dark-900']};
        }

        &.active {
          color: ${(props) => props.theme['dark-900']};
          border-bottom: 0.25rem solid ${(props) => props.theme['yellow-600']};
        }
      }
    }
  }
`
