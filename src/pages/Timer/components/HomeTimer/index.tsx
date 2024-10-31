import { HomeContainer } from './styles'
import { ProgressOfTheDay } from '../ProgressOfTheDay/index'
import { ConsistencyOfTheWeek } from '../ConsistencyOfTheWeek/index'
import { useEffect } from 'react'
import { GoalsPanel } from '../GoalsPanel/index'
import { Countdown } from '../Countdown'
import { useCycles } from '../../../../contexts/CyclesContext'
import { Card } from '../../../../components/Card/index'

export function HomeTimer() {
  const {
    consistencyOfTheWeek,
    activeCycle,
    progressOfTheDay,
    activeGoals,
    getHomeData
  } = useCycles()

  useEffect(() => {
    getHomeData()
    console.log(activeGoals)
  }, [])

  return (
    <>
      {activeGoals && (
        <HomeContainer>
          <Card>
            {consistencyOfTheWeek && (
              <ConsistencyOfTheWeek consistencyOfTheWeek={consistencyOfTheWeek} />
            )}
            {progressOfTheDay && (
              <ProgressOfTheDay progressOfTheDay={progressOfTheDay} />
            )}
          </Card>
          {activeCycle ? (
            <Countdown />
          ) : (
            <GoalsPanel activeGoals={activeGoals} />
          )}
        </HomeContainer>
      )}
    </>
  )
}
