import styled from 'styled-components';

export const GoalRankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  gap: 0.5rem;
  padding: 2rem;
  border: solid 1px ${(props) => props.theme['gray-300']};
  border-radius: 9px;
  position: relative; /* Set position to relative to contain the overlay */

  hr {
    border-top: 1px solid ${(props) => props.theme['gray-150']};
    width: 100%;
  }
`;

export const SessionTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  margin-bottom: 1rem;
  z-index: 10;
`;

export const GoalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-items: center;
`;

export const RankingNumber = styled.div`
  text-align: right;
  font-size: 2rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-style: italic;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 900;
`;

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;

  p {
    line-height: 180%;
    text-align: right;
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-500']};
    font-weight: 700;
  }

  h1 {
    font-size: 0.85rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: 800;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProgressBar = styled.div`
  height: 0.5rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 9px;

  div {
    height: 100%;
    border-radius: 9px;
    width: 70%; /* Consider making this dynamic based on props */
    background-color: ${(props) => props.theme['blue-500']};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-grow: 1;
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
  z-index: 1;
`;