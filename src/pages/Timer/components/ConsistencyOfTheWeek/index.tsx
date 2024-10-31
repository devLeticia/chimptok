import {
  ConsistencyContainer,
  SummaryContainer,
  DayBoxContainer,
  DayBox,
  DayLabel,
  Day,
  StyledCaret
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

  function isFutureDay(dateString: string, todayString?: string): boolean {
    const todayDate = todayString ? new Date(todayString) : new Date();
    const inputDate = new Date(dateString);

    const today = new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    );
  
    const compareDate = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth(),
      inputDate.getDate()
    );
  
    return compareDate > today;
  }

  function isPastDay(dateString: string, todayString?: string): boolean {
    const todayDate = todayString ? new Date(todayString) : new Date();
    const inputDate = new Date(dateString);
  
    const today = new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    );
  
    const compareDate = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth(),
      inputDate.getDate()
    );
  
    return compareDate < today;
  }

  function formatDateWithOrdinal(dateString: string) {
    const date = new Date(dateString);
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();
  
    const getOrdinalSuffix = (n: number) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    };
  
    const ordinalSuffix = getOrdinalSuffix(day);
  
    return (
      <span>
        {month} {day}
        <span style={{ fontSize: "0.6em", verticalAlign: "super" }}>
          {ordinalSuffix}
        </span>
        , {year}
      </span>
    )
  }

  function getDayStatus(date: string): 'past' | 'current' | 'future' {
    const isPast = isPastDay(date)
    const isFuture = isFutureDay(date)

    if (isPast) return 'past'
    if (isFuture) return 'future'
    else return 'current'
  }

  function getDayNumber (date: string) {
    let newdate = new Date(date);
    const day = newdate.getUTCDate();
    return day
  }
  
  return (
    <ConsistencyContainer>
      <SummaryContainer>
        <p>Week {consistencyOfTheWeek.weekOfTheYear}</p>
        <span>|</span>
        <p>{formatDateWithOrdinal(consistencyOfTheWeek.todayDate)}</p>
      </SummaryContainer>
      <DayBoxContainer>
        {consistencyOfTheWeek.weekConsistency.map((day, index) => (
          <div key={index}>
            <DayBox status={getDayStatus(day.date)}>
              <StyledCaret status={getDayStatus(day.date)}  weight="fill" size={18} />
              <Day status={getDayStatus(day.date)}>{getDayNumber(day.date)}</Day>
              <DayLabel status={getDayStatus(day.date)}>
                {day.name}
              </DayLabel>
            </DayBox>
          </div>
        ))}
      </DayBoxContainer>
    </ConsistencyContainer>
  )
}
