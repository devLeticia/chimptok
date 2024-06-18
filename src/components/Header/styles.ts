import styled from 'styled-components'

export const HeaderContainer = styled.header`
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  background-color: white;
  width: 100%;
  height: 5rem;
  border-bottom: solid 1px ${(props) => props.theme['gray-300']};
  position: fixed;
  // max-width: 900px;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      border-radius: 6px;
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-500']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        color: ${(props) => props.theme['dark-900']};
        background-color: ${(props) => props.theme['yellow-300']};
      }

      &.active {
        color: ${(props) => props.theme['dark-900']};
        background-color: ${(props) => props.theme['yellow-500']};
      }
    }
  }
`

export const RouteTitle = styled.h3`
  text-transform: uppercase;
  width: 500px;
  text-align: center;
  color: ${(props) => props.theme['dark-900']};
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 0.05rem;
`

export const SignOutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
  color: ${(props) => props.theme['gray-500']};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme['red-500']};
  }
`
