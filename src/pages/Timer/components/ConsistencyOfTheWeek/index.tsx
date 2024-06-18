import {
  ConsistencyContainer,
  SummaryContainer,
  DayBoxContainer,
  DayBox,
  DayLabel,
} from './styles'

type DayConsistency = {
  day: number
  name: string
  date: string
  intensity: number
  totalHoursInTasks: number
  expectedHours: number
}

type ConsistencyOfTheWeek = {
  year: number
  weekOfTheYear: number
  dayOfTheYear: number
  todayDate: string
  weekConsistency: DayConsistency[]
}

interface ConsistencyOfTheWeekProps {
  consistencyOfTheWeek: ConsistencyOfTheWeek
}

export function ConsistencyOfTheWeek({
  consistencyOfTheWeek,
}: ConsistencyOfTheWeekProps) {
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th'
    switch (day % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  function formattedDate(date: string) {
    const ddate = new Date(date)
    const day = ddate.getDate()
    const ordinalSuffix = getOrdinalSuffix(day)

    const formattedDay = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
    }).format(ddate)

    const formattedDateWithoutDay = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(ddate)

    return `${formattedDay}${ordinalSuffix} ${formattedDateWithoutDay}`
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
