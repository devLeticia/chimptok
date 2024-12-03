import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { CyclesProvider } from './contexts/CyclesContext';
import useIsMobile from './hooks/useIsMobile';
import { MobileWarningContainer } from '.';
import ChimptokAppMockup  from '../public/chimptok-app.png' 
import { Button } from './components/Button';

export function App() {
  const isMobile = useIsMobile();
  
  function redirectToInstagram() {
    const instagramLink = 'https://www.instagram.com/chimptok'
    window.open(`${instagramLink}`)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {isMobile ? (
        <MobileWarningContainer >
          <h1>Hang tight!</h1>
          <p>We’re building the mobile jungle. Until then, please use a desktop to explore Chimptok.</p>
          <Button onClick={redirectToInstagram}>Stay updated here</Button>
          <img src={ChimptokAppMockup}  alt="Coolest Chimp logo smiling to you" />
        </MobileWarningContainer>
      ) : (
        <>
               <BrowserRouter>
        <CyclesProvider>
          <Router />
        </CyclesProvider>
      </BrowserRouter>
        </>
      )}

    </ThemeProvider>
  );
}
