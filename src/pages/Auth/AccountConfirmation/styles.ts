import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
`
export const Subtitle = styled.h1`
  font-size: 0.9rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
`
