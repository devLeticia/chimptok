import { ChartSectionContainer, SessionTitle } from './styles'
import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList } from 'recharts'

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{
    payload: { hoursSpent: number; expectedHoursSpent: number }
  }>
  label?: string
}

interface ConsistencyChartProps {
  lastTwoWeeksConsistency: Array<LastTwoWeeksConsistency>,
  totalCycles: number
}

type LastTwoWeeksConsistency = {
  date: number,
  totalHoursWorkedInTheDay: number,
  totalCyclesInTheDay: number 
}

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
  });
}

export function ConsistencyChart({ lastTwoWeeksConsistency, totalCycles }: ConsistencyChartProps) {

  function generateFakeConsistencyData(lastTwoWeeksConsistency: LastTwoWeeksConsistency[]) {
    return lastTwoWeeksConsistency.map((day) => {
      const fakeTotalHours = Math.floor(Math.random() * 8) + 1;  // Random hours between 1 and 8
      const fakeTotalCycles = Math.floor(Math.random() * 4) + 1; // Random cycles between 1 and 4
  
      return {
        ...day,
        totalHoursWorkedInTheDay: fakeTotalHours,
        totalCyclesInTheDay: fakeTotalCycles,
      };
    });
  }

  function consistencyData() {
    const fakeConsistencyData = generateFakeConsistencyData(lastTwoWeeksConsistency);
    return totalCycles > 0 ? lastTwoWeeksConsistency : fakeConsistencyData;
  } 
  
  function formattedTime(num: number) {
    if (num === 0) return '';
    
    let hours = Math.floor(num);
    let minutes = Math.round((num - hours) * 60);
    
    if (hours === 0) {
      return `${minutes}min`;
    }
  
    return `${hours}h${minutes}min`;
  }

  const isFakeData = totalCycles === 0;

  return (
    <ChartSectionContainer>
      <SessionTitle>
        <h1>
        Last 14 Days
        </h1>
       { isFakeData && <span>
        Create a cycle to see progress
        </span>}
        
        </SessionTitle>
      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={consistencyData()} >
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tickLine={false}
            axisLine={{ stroke: '#ebe7e7', strokeWidth: 1 }}
            tick={{
              fill: '#a9aaaa', 
              fontSize: 10,
              fontWeight: 700
            }}
          />
          
          <Bar
            name="Hours in the day"
            dataKey="totalHoursWorkedInTheDay"
            fill={isFakeData ? "#eeeeee" : "#a9a8fc"} // Use red if data is fake, purple if real
            barSize={60}
            radius={[6, 6, 6, 6]}
          >
            {!isFakeData && (
              <LabelList
                dataKey="totalHoursWorkedInTheDay"
                position="top"
                fill="#a9aaaa"
                fontSize={10}
                fontWeight={600}
                formatter={formattedTime}
              />
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartSectionContainer>
  )
}
