import { CaretDown } from '@phosphor-icons/react'
import styled from 'styled-components'

interface ModalConsistencyProps {
  status: 'current' | 'past' | 'future'
  intensity: number
}

export const ConsistencyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
export const LabelRow = styled.div``

export const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 0.75rem;
  justify-content: center;
  gap: 1rem;
  p {
    font-size: 0.85rem;
  }
`
export const DateSummary = styled.div``

export const DayBoxContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 0.5rem;
`

export const DayBox = styled.div<ModalConsistencyProps>`
  text-align: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 4rem;
  box-shadow: 0px 1px 6px rgba(12, 3, 10, 0.2);
  height: 7rem; /* Adjust as needed */
  box-sizing: border-box;
  border: ${(props) =>
    props.status === 'current'
      ? '0.15rem'  // Thicker border for current
      : '0.1rem'} solid  // Thinner border for past and future
    ${(props) =>
      props.status === 'current'
        ? props.theme['dark-900']
        : props.status === 'future'
        ? props.theme['gray-300']
        : props.theme['gray-300']}; /* Border for past days */
    color: ${(props) => {
    switch (props.status) {
      case 'current':
        return props.theme['dark-900'];
      case 'past':
        return props.theme['gray-500'];
      case 'future':
        return props.theme['dark-900'];
    }
  }};
  border-radius: 5px;
  background-color: ${(props) =>
    props.status === 'current'
      ? props.theme.white
      : props.status === 'future'
      ? props.theme['white']
      : props.status === 'past' && props.intensity === 0
      ? props.theme['gray-200']
      : props.status === 'past' && props.intensity === 1
      ? props.theme['yellow-300']
      : props.status === 'past' && props.intensity === 2
      ? props.theme['yellow-400']
      : props.status === 'past' && props.intensity === 3
      ? props.theme['yellow-500']
      : props.status === 'past' && props.intensity >= 4
      ? props.theme['yellow-600']
      : props.theme['gray-300']};
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`
export const Day = styled.h1<ModalConsistencyProps>`
    font-size: 1.5rem;
    text-align: center;

`
export const DayLabel = styled.h1<ModalConsistencyProps>`
  box-sizing: border-box;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.85rem;
  text-align: center;
  color: ${(props) => {
    switch (props.status) {
      case 'current':
        return props.theme['dark-900'];
      case 'past':
        return props.theme['gray-500'];
      case 'future':
        return props.theme['dark-900'];
    }
  }};
   font-weight: ${(props) => {
    switch (props.status) {
      case 'current':
        return '800';
      case 'past':
        return '600';
      case 'future':
        return '600';
    }
  }};
`;
export const ActiveDayMarker = styled.div<ModalConsistencyProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.status === 'current' ? props.theme['blue-500'] : 'none'};
  margin: 0 auto;
`;

export const StyledCaret = styled(CaretDown)<ModalConsistencyProps>`
  display:  ${(props) =>
    props.status === 'current' ? 'block' : 'none'};
  margin-top: -5rem;
  position: absolute;
  color: ${(props) => props.theme['dark-900']};
`
