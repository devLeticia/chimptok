import { Card } from '../../components/Card'
import { Consistency } from './Consistency'
import { ConsistencyChart } from './ConsistencyChart'
import { ConsistencySummary } from './ConsistencySummary'
import { GoalRanking } from './GoalRanking'
import { TaskHistory } from './TaskHistory'
import { ReportsContainer, ListsContainer } from './styles'

export function Reports() {
  return (
    <Card>
      <ReportsContainer>
        <Consistency />
        <ConsistencySummary />
        <ConsistencyChart />
        <ListsContainer>
          <GoalRanking />
          <hr />
          <TaskHistory />
        </ListsContainer>
      </ReportsContainer>
    </Card>
  )
}
