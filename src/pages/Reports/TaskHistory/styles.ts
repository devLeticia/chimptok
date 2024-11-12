import styled from 'styled-components';
import { CheckCircle, PlayCircle, XCircle } from '@phosphor-icons/react';

export const TaskHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 2rem;
  border: solid 1px ${(props) => props.theme['gray-300']};
  border-radius: 9px;
  position: relative; 

  h1 {
    font-size: 1rem;
    color: ${(props) => props.theme['dark-900']};
    font-weight: 800;
  }

  span {
    line-height: 180%;
    font-size: 0.7rem;
    color: ${(props) => props.theme['gray-500']};
    font-weight: 700;
  }
`;

export const TaskListContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  height: 244px;
  overflow: auto;
  gap: 1rem;
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 600%;
    background-color: ${(props) => props.theme['gray-300']};
    top: 100%;
    transform: translateY(-50%);
    z-index: -10;
  }

  &:not(:last-of-type)::after {
    display: block;
  }

  &:last-of-type::after {
    display: none;
  }
`;

export const SessionTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  z-index: 100;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 7px;

  h1 {
    font-size: 0.85rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: 800;
  }
`;

export const TaskDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0.25rem 1rem;
`;

export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-500']};
  background-color: white;
`;

export const StyledPlayCircle = styled(PlayCircle)`
  color: ${(props) => props.theme['orange-500']};
  background-color: white;
`;

export const StyledXCircle = styled(XCircle)`
  color: ${(props) => props.theme['red-500']};
  background-color: white;
`;

export const GoalDescription = styled.p`
  color: ${(props) => props.theme['gray-500']};
  line-height: 180%;
  font-size: 0.7rem;
  font-weight: 700;

  span {
    color: ${(props) => props.theme['gray-700']};
  }
`;

export const BlurOverlay = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  border-radius: 3rem;
  width: 100%;
  height: 100%;
  position: absolute; 
  top: 0; 
  left: 0;
  z-index: 20;
`;

export const MinutesContainer = styled.div`
  letter-spacing: 0.03rem;
  background-color: ${(props) => props.theme['gray-150']};
  padding: 0.15rem;
  border: solid 1px ${(props) => props.theme['gray-300']};
  border-radius: 3px;
  line-height: 180%;
  font-size: 0.6rem;
  color: ${(props) => props.theme['gray-500']};
  font-weight: 700;
`