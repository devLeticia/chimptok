import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  gap: 0.75rem;
  flex-direction: row;
  padding: 2rem;
  border: solid 2px ${(props) => props.theme['gray-300']};
  border-radius: 9px;
`
export const Container = styled.div`
  display: flex;
`

export const InfosContainer = styled.div`
  display: flex;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
  }
  gap: 1rem;
  width: 100%;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`

export const Name = styled.h1`
  line-height: 80%;
  font-size: 1.5rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 900;
  text-transform: uppercase;
`
export const Email = styled.span`
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
`

export const MembershipDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  text-align: right;
  width: 100%;
  flex: 1; 
`
export const SignUpDate = styled.div`
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
`
export const MembershipCount = styled.div`
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
  span {
    font-family: 'Barlow Semi Condensed', sans-serif;
    letter-spacing: 0.1rem;
    font-size: 1.25rem;
    font-weight: 900;
    color: ${(props) => props.theme['dark-900']};
  }
`