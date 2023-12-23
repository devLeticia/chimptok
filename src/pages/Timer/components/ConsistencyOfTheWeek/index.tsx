import {
  ConsistencyContainer,
  LabelRow,
  DayBoxContainer,
  DayBox,
  DayLabel,
} from './styles'

const daysOfWeek = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
]

export function ConsistencyOfTheWeek() {
  const today = new Date()
  const currentDay = today.getDate()
  const isPastDay = (day: number) => day < currentDay
  return (
    <ConsistencyContainer>
      <LabelRow>
        <p>Week 2</p>
      </LabelRow>
      <LabelRow>
        <p>16th November</p>
        <p>2023</p>
      </LabelRow>

      <DayBoxContainer>
        {daysOfWeek.map((day, index) => (
          <div key={index}>
            <DayBox
              past={isPastDay(index + 1)}
              current={index + 1 === currentDay}
              intensity={index}
            />
            <DayLabel
              past={isPastDay(index + 1)}
              current={index + 1 === currentDay}
              intensity={index}
            >
              {day}
            </DayLabel>
          </div>
        ))}
      </DayBoxContainer>
    </ConsistencyContainer>
  )
}
