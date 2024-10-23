import { Card } from '../../../components/Card'
import { Title, ChartSectionContainer, SessionTitle } from './styles'
import { BarChart, Bar, Tooltip, XAxis, ResponsiveContainer } from 'recharts'

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{
    payload: { hoursSpent: number; expectedHoursSpent: number }
  }>
  label?: string
}

interface ConsistencyChartProps {
  lastTwoWeeksConsistency: Array<LastTwoWeeksConsistency>
}

type LastTwoWeeksConsistency = {
  date: number, // Assuming this is a timestamp (milliseconds)
  totalHoursWorkedInTheDay: number,
  totalCyclesInTheDay: number 
}

// Format date to a short format, e.g., "Oct 14"
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
  });
}

export function ConsistencyChart({lastTwoWeeksConsistency}: ConsistencyChartProps) {
  const data = lastTwoWeeksConsistency;
  
  return (
    <ChartSectionContainer>
      <SessionTitle>Last 14 Days</SessionTitle>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data}>
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
