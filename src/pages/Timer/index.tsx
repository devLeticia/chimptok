import { HomeContainer } from './styles'
import { ProgressOfTheDay } from './components/ProgressOfTheDay/index'
import { ConsistencyOfTheWeek } from './components/ConsistencyOfTheWeek/index'
import { Card } from '../../components/Card'

import { CyclesProvider } from '../../contexts/CyclesContext'
import { TaskAndTimer } from './components/TaskAndTimer'
import { useEffect, useState } from 'react'
import homeService from '../../http/requests/home/home.service'

// Home
export function Timer() {
  const [consistencyOfTheWeek, setConsistencyOfTheWeek] = useState(null)
  const [progressOfTheDay, setProgressOfTheDay] = useState(null)
  const [userGoals, setUserGoals] = useState(null)
  const [activeCycle, seActiveCycle] = useState(null)

  async function getHomeData() {
    // loading.open()
    const userId = localStorage.getItem('user_id')
    if (userId !== null) {
      try {
        const resp = await homeService.getHomeData(userId)
        if (resp.data) {
          const {
            consistencyOfTheWeek,
            progressOfTheDay,
            activeGoals,
            activeCycle,
          } = resp.data
          setConsistencyOfTheWeek(consistencyOfTheWeek)
          setProgressOfTheDay(progressOfTheDay)
          setUserGoals(activeGoals)
          seActiveCycle(activeCycle)
        }
        //  console.log(resp)
      } catch (err) {
        console.error(err)
      } finally {
        // loading.close()
      }
    }
  }
  useEffect(() => {
    getHomeData()
  }, [])
  return (
    <>
      <HomeContainer>
        <Card>
          {consistencyOfTheWeek && (
            <ConsistencyOfTheWeek consistencyOfTheWeek={consistencyOfTheWeek} />
          )}
          {progressOfTheDay && (
            <ProgressOfTheDay progressOfTheDay={progressOfTheDay} />
          )}
          <hr />
          <CyclesProvider>
            <TaskAndTimer />
          </CyclesProvider>
        </Card>
      </HomeContainer>
    </>
  )
}
