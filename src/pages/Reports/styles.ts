import styled, { keyframes } from 'styled-components'

export const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  hr {
    border: 0.5px solid ${(props) => props.theme['gray-150']};
  }
`
export const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  // *:not(hr) {
  //   flex-grow: 1;
  // }
`


export const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

// Styled components for Skeleton elements
import styled from 'styled-components';


export const StatsSkeleton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`

export const SkeletonWrapper = styled.div`
  background-color: #fff; /* Set the background to white */
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 9px;
  padding: 2rem 2rem 2rem 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); /* Add a soft shadow */
  position: relative;
  overflow: hidden;
  isolate: isolate; /* Prevent shimmer overflow on rounded corners */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.1),
      transparent
    );
    transform: translateX(-100%);
    animation: shimmer 1.5s infinite;
  }
`;

export const SpaceY = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;

export const Box = styled.div<{ height: string, width?: string, bgColor?: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width || '100%'};
  background-color: ${(props) => props.bgColor || 'rgba(0, 0, 0, 0.05)'}; /* Default to light gray */
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  /* Add shimmer animation */


  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
