import { TrashSimple, CheckCircle } from 'phosphor-react'
import styled from 'styled-components'
export const Container = styled.div`
  min-width: 500px;
  hr {
    margin-bottom: 2rem;
    border: 1px solid ${(props) => props.theme['gray-200']};
  }
`
export const SuperHeader = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme['dark-900']};
  font-style: italic;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 900;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const ColWrapper = styled.p`
  width: 100%;
  color: ${(props) => props.theme['dark-900']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Skip = styled.p`
  margin: 1rem 0;
  text-align: center;
  font-weight: 700;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${(props) => props.theme['yellow-600']};
  }
`

export const SuccessMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
  p {
    font-size: 0.85rem;
    font-weight: 500;
    span {
      font-weight: 900;
    }
  }
`
export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 200px;
  //; background-color: red;
  overflow: scroll;
`
export const TaskInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`
export const Index = styled.div`
  text-align: right;
  width: 14px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1rem;
`

export const StyledTrashIconButton = styled(TrashSimple)`
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};

  :hover {
    color: ${(props) => props.theme['red-500']};
  }
`

export const TaskDisclaimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-500']};
`
