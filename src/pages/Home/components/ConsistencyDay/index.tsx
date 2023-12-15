import { ConsistencyBox, DayLabel, ConsistencyDayContainer } from './styles'

export interface ConsistencyDayProps {
  hours: number
  day: string
}

export function ConsistencyDay(consistencyDayProps: ConsistencyDayProps) {
  return (
    <ConsistencyDayContainer>
      <ConsistencyBox />
      <DayLabel>{consistencyDayProps.day}</DayLabel>
    </ConsistencyDayContainer>
  )
}
