import styled from 'styled-components'

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const DialogBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: end;
`
export const DialogTitle = styled.h1`
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  font-family: 'Barlow Semi Condensed', sans-serif;
`
export const DialogText = styled.p``
