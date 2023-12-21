import {
  YaarConsistency,
  Title,
  RangeLabel,
  YearGrid,
  DaySquare,
  DataWrapper,
} from './styles'

export function Consistency() {
  const today = new Date()
  const currentDay = today.getDate()
  const isPastDay = (day: number) => day < currentDay

  return (
    <YaarConsistency>
      <DataWrapper>
        <Title>Consistency</Title>
        <RangeLabel>Jan - Fev - Mar</RangeLabel>
      </DataWrapper>
      <YearGrid>
        {[...Array(90)].map((_, index) => (
          <DaySquare
            key={index}
            past={isPastDay(index + 1)}
            current={index + 1 === currentDay}
            intensity={index}
          />
        ))}
      </YearGrid>
    </YaarConsistency>
  )
}
