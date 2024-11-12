import {  CheckCircle } from '@phosphor-icons/react'
import styled from 'styled-components'

export const GoalPanelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns with equal width */
  gap: 1rem;
`;
export const GoalToPickCard = styled.div`
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.5rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease-in-out; /* Smooth transition */
  background-color: white;

&:hover {
  transform: scale(1.05); /* Grow the card slightly on hover */
  cursor: pointer;
}
  
`
export const GoalTitle = styled.h1`
      font-size: 1rem;
      color: ${(props) => props.theme['dark-900']};
      font-weight: 800;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-500']};
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`

export const ProgressInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 700;
    & > div:last-child {
      color: ${(props) => props.theme['gray-500']}
      };
`

export const ProgressContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.25rem;
   color: ${(props) => props.theme['dark-900']};
   font-weight: 600;
`
export const SectionHeader = styled.h1`
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.theme['dark-900']};
    font-style: italic;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 900;
    font-size: 1.15rem;
    margin-bottom: 2rem;
`
export const TasksContainer = styled.div`
   display: flex;
   flex-direction: row;

`
export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-700']};
`

export const EmptyGoalCard = styled.div`
    background-color: ${(props) => props.theme['gray-200']};
    border-radius: 8px;
    display: flex;
    padding: 2rem;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15rem;
    gap: 0.5rem;
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme['gray-100']};
    }
    h3 {
      color: ${(props) => props.theme['gray-700']};;
    }
    div {
      z-index: 10;
    }
`
export const GoalIndex = styled.h1`
  position: absolute;
  z-index: 1;
  font-size: 12rem;
  color: ${(props) => props.theme['gray-300']};
  font-weight: 900;
  font-style: italic;
  font-family: 'Barlow Semi Condensed', sans-serif;
`

export const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`