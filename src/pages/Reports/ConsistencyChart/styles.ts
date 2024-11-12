import styled from 'styled-components';

export const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1rem;
`;

export const ChartSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;
  width: 100%;
  padding: 2rem 2rem 0rem 2rem;
  border: solid 1px ${(props) => props.theme['gray-300']};
  border-radius: 9px;
  position: relative; 
`;

export const SessionTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  z-index: 10;
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
