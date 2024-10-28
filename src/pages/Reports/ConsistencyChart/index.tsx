import { Card } from '../../../components/Card'
import { Title, ChartSectionContainer, SessionTitle, BlurOverlay } from './styles'
import { BarChart, Bar, Tooltip, XAxis, ResponsiveContainer } from 'recharts'

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

export function ConsistencyChart({lastTwoWeeksConsistency, totalCycles}: ConsistencyChartProps) {
  
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
  
  return (
    <ChartSectionContainer>
      <SessionTitle>Last 14 Days</SessionTitle>
      <ResponsiveContainer width="100%" height={120}>
        {!totalCycles && (<BlurOverlay />)}
        <BarChart data={consistencyData()}>
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
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Bar
            name="Dedicated hours"
            dataKey="totalHoursWorkedInTheDay"
            fill="#a9a8fc"
            barSize={60}
            radius={[6, 6, 6, 6]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartSectionContainer>
  )
}
