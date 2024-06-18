import { Title, ChartSectionContainer } from './styles'
import { BarChart, Bar, Tooltip, XAxis, ResponsiveContainer } from 'recharts'

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{
    payload: { hoursSpent: number; expectedHoursSpent: number }
  }>
  label?: string
}

const data = [
  { day: 'Day 1', hoursSpent: 2, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 3, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 0, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 0, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 2, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 1, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 1, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 0, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 0, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 5, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 0, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 2, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 2, expectedHoursSpent: 5 },
  { day: 'Day 1', hoursSpent: 3, expectedHoursSpent: 5 },
]
const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    // Extract data from the payload
    const { hoursSpent, expectedHoursSpent } = payload[0].payload

    // Customize the tooltip content
    return (
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '4px',
          padding: '1rem',
          border: '1px solid #ccc',
        }}
      >
        <p>{`Day: ${label}`}</p>
        <p>{`Hours Spent: ${hoursSpent}`}</p>
        <p>{`Expected Hours: ${expectedHoursSpent}`}</p>
      </div>
    )
  }

  return null
}
export function ConsistencyChart() {
  return (
    <ChartSectionContainer>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={{ stroke: '#ebe7e7', strokeWidth: 1 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            name="Dedicated hours"
            dataKey="hoursSpent"
            fill="#a9a8fc"
            barSize={60}
            radius={[6, 6, 6, 6]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartSectionContainer>
  )
}
