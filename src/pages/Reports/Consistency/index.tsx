import { Tooltip } from 'react-tooltip'
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
        <RangeLabel>100 days in sight</RangeLabel>
      </DataWrapper>
      <YearGrid>
        {[...Array(100)].map((_, index) => (
          <div
            key={index}
            data-tip={`Day ${index + 1}`}
            data-for={`dayTooltip${index + 1}`}
          >
            <DaySquare
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Hello world!"
              past={isPastDay(index + 1)}
              current={index + 1 === currentDay}
              intensity={index}
            />
            <Tooltip
              id="my-tooltip"
              render={({ content, activeAnchor }) => (
                <span>
                  The element #{content} is currently active.
                  <br />
                  Relevant attribute:{' '}
                  {activeAnchor?.getAttribute('data-some-relevant-attr') ||
                    'not set'}
                </span>
              )}
            />
          </div>
        ))}
      </YearGrid>
    </YaarConsistency>
  )
}
