import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  max-height: 60vh;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['dark-900']};
  }
`

export const EmptyHistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  img {
    height: 14rem;
  }
  p {
    font-style: italic;
  }

  button {
    border: 0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;
    color: ${(props) => props.theme.white};

    background-color: ${(props) => props.theme['green-500']};
    padding: 1rem 1.75rem;

    :hover {
      background-color: ${(props) => props.theme['green-500']};
      cursor: pointer;
    }
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  table {
    position: relative;
    border-collapse: collapse;
    margin-top: 2rem;
    width: 100%;
    border-collapse: collapse; // one border between table elements
    min-width: 600px;
    position: relative;

    th {
      position: sticky;
      top: 0;
      background-color: ${(props) => props.theme['dark-900']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.white};
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-500']};
      border-top: 4px solid ${(props) => props.theme['gray-500']};
      padding: 1rem;
      font-size: 0.875 rem;
      line-height: 1.6;
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
        font-weight: bold;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: {
    bg: '#f5e0a7',
    text: '#9d7300',
  },
  green: {
    bg: '#bce1b0',
    text: '#1a6103',
  },
  red: {
    bg: '#efa9a9',
    text: '#a90a17',
  },
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.div<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: small;
  gap: 0.5rem;
  border-radius: 3px;
  padding: 0.5rem 0.25rem;
  background-color: ${(props) => STATUS_COLORS[props.statusColor].bg};
  font-weight: bold;
  color: ${(props) => STATUS_COLORS[props.statusColor].text};
`
