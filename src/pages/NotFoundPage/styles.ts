import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  position: relative;
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.theme['dark-900']};
  margin: 1rem 0rem;
`;

export const CallToActionContainer = styled.div`
  text-align: center;
`;

export const LogoContainer = styled.div`
  left: 5%;
  top: 5%;
  cursor: pointer;
  position: absolute; 
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    color: ${(props) => props.theme['dark-900']};
    font-size: 1.25rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1,
  h2,
  h4 {
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.theme['dark-900']};
    font-style: italic;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 900;
    line-height: 90%;
  }

  h1 {
    color: ${(props) => props.theme['dark-900']};
    font-size: 7rem;
  }

  h2 {
    color: ${(props) => props.theme['gray-500']};
    font-size: 4rem;
  }

  h4 {
    color: ${(props) => props.theme['gray-500']};
    font-size: 2rem;
  }
`;
