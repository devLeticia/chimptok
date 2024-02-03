import {
  ConsistencyContainer,
  SummaryContainer,
  DayBoxContainer,
  DayBox,
  DayLabel,
} from './styles'

const consistencyOfTheWeek = {
  year: 2023,
  weekOfTheYear: 22,
  dayOfTheYear: 235,
  todayDate: '2024-01-26T00:00:00.000Z',
  weekConsistency: [
    {
      day: 1,
      name: 'Mon',
      date: '2024-01-22T00:00:00.000Z',
      intensity: 0,
      totalHoursInTasks: 2,
      expectedHours: 4,
    },
    {
      day: 2,
      name: 'Tue',
      date: '2024-01-22T00:00:00.000Z',
      totalHoursInTasks: 2,
      intensity: 1,
      expectedHours: 4,
    },
    {
      day: 3,
      name: 'Wed',
      date: '2024-01-23T00:00:00.000Z',
      totalHoursInTasks: 2,
      intensity: 3,
      totalTaskCycles: 2,
      totalGoals: 1,
      expectedHours: 4,
    },
    {
      day: 4,
      name: 'Thu',
      date: '2024-01-24T00:00:00.000Z',
      totalHoursInTasks: 2,
      totalTaskCycles: 2,
      intensity: 2,
      totalGoals: 1,
      expectedHours: 4,
    },
    {
      day: 5,
      name: 'Fri',
      date: '2024-01-26T00:00:00.000Z',
      totalHoursInTasks: 2,
      intensity: 2,
      totalTaskCycles: 2,
      totalGoals: 1,
      expectedHours: 4,
    },
    {
      day: 6,
      name: 'Sat',
      date: '2024-01-27T00:00:00.000Z',
      intensity: 0,
      totalHoursInTasks: 2,
      totalTaskCycles: 2,
      totalGoals: 1,
      expectedHours: 4,
    },
    {
      day: 7,
      name: 'Sun',
      date: '2024-01-28T00:00:00.000Z',
      intensity: 2,
      totalHoursInTasks: 2,
      totalTaskCycles: 2,
      totalGoals: 1,
      expectedHours: 4,
    },
  ],
}

export function ConsistencyOfTheWeek() {
  function formattedDate(date: string) {
    const ddate = new Date(date)
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(ddate)
  }

  function isFutureDay(date: string) {
    return new Date(consistencyOfTheWeek.todayDate) < new Date(date)
  }

  function isPastDay(date: string) {
    return new Date(consistencyOfTheWeek.todayDate) > new Date(date)
  }

  function getDayStatus(date: string): 'past' | 'current' | 'future' {
    const isPast = isPastDay(date)
    const isFuture = isFutureDay(date)

    if (isPast) return 'past'
    if (isFuture) return 'future'
    else return 'current'
  }
  return (
    <ConsistencyContainer>
      <SummaryContainer>
        <p>Week {consistencyOfTheWeek.weekOfTheYear}</p>
        <span>|</span>
        <p>{formattedDate(consistencyOfTheWeek.todayDate)}</p>
      </SummaryContainer>
      <DayBoxContainer>
        {consistencyOfTheWeek.weekConsistency.map((day, index) => (
          <div key={index}>
            <DayBox status={getDayStatus(day.date)} intensity={day.intensity} />
            <DayLabel status={getDayStatus(day.date)} intensity={day.intensity}>
              {day.name}
            </DayLabel>
          </div>
        ))}
      </DayBoxContainer>
    </ConsistencyContainer>
  )
}
