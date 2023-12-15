import { ConsistencyContainer, LabelRow, WeekContainer } from './styles'
import { ConsistencyDay } from '../ConsistencyDay'

const weekConsistency = [
  {
    hours: 2,
    day: 'MONDAY',
  },
  {
    hours: 2,
    day: 'TUESDAY',
  },
  {
    hours: 2,
    day: 'WEDNESDAY',
  },
  {
    hours: 2,
    day: 'THURSDAY',
  },
  {
    hours: 2,
    day: 'FRIDAY',
  },
  {
    hours: 2,
    day: 'SATURDAY',
  },
  {
    hours: 2,
    day: 'SUNDAY',
  },
]

export function ConsistencyOfTheWeek() {
  return (
    <ConsistencyContainer>
      <LabelRow>
        <p>Week 2</p>
      </LabelRow>
      <LabelRow>
        <p>16th November</p>
        <p>2023</p>
      </LabelRow>

      <WeekContainer>
        {weekConsistency.map((day, index) => {
          return (
            <div key={index}>
              <ConsistencyDay hours={day.hours} day={day.day} />
            </div>
          )
        })}
      </WeekContainer>
    </ConsistencyContainer>
  )
}
