import { HomeContainer } from './styles'
import { ProgressOfTheDay } from './components/ProgressOfTheDay/index'
import { ConsistencyOfTheWeek } from './components/ConsistencyOfTheWeek/index'
import { Card } from '../../components/Card'

import { CyclesProvider } from '../../contexts/CyclesContext'
import { TaskAndTimer } from './components/TaskAndTimer'

export function Timer() {
  return (
    <Card>
      <HomeContainer>
        <ConsistencyOfTheWeek />
        <ProgressOfTheDay goalOfTheDay={2} hoursDedicated={1} />

        <hr />

        <CyclesProvider>
          <TaskAndTimer />
        </CyclesProvider>
      </HomeContainer>
    </Card>
  )
}
