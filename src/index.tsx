import styled from 'styled-components';

export const MobileWarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden; 
  margin: 0;
  padding: 2rem 2rem; 
  gap: 1rem; 
  width: 100%;
  height: 100vh;
  background-image: url('../public/background/leaves_2.svg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;

  p {
    font-size: 1rem;
    margin: 0;
    z-index: 1;
  }

  h1 {
    margin: 0;
    text-transform: uppercase;
    color: ${(props) => props.theme['dark-900']};
    font-style: italic;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 900;
    line-height: 1;
    z-index: 1; 
  }

  img {
    position: absolute;
  height: 90vh;
  width: auto; 
  bottom: -20%;
  left: 50%; 
  transform: translateX(-50%);
  z-index: 0;
  }
`;
