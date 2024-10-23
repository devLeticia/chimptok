import { HomeContainer } from './styles'
import { ProgressOfTheDay } from './components/ProgressOfTheDay/index'
import { ConsistencyOfTheWeek } from './components/ConsistencyOfTheWeek/index'
import { Card } from '../../components/Card'

import { CyclesProvider, useCycles } from '../../contexts/CyclesContext'
import { useEffect, useState } from 'react'
import homeService from '../../http/requests/home/home.service'
import { GoalsPanel } from './components/GoalsPanel/index';
import { Countdown } from './components/Countdown'
interface HomeData {
  consistencyOfTheWeek: any; // Adjust types according to your API response
  progressOfTheDay: any;
  userGoals: any[];
  activeCycle: any;
}

export function Timer() {
  const [consistencyOfTheWeek, setConsistencyOfTheWeek] = useState<any>(null);
  const [progressOfTheDay, setProgressOfTheDay] = useState<any>(null);
  const [activeGoals, setActiveGoals] = useState<any[]>([]);
  const [activeCycle, setActiveCycle] = useState<any>(null);
  const [userActiveGoals, setUserActiveGoals] = useState<any>([])
  // const { markCurrentCycleAsFinished, abandonCurrentCycle, getHomeData} = useCycles()

  async function getHomeData() {
    console.log('GetHome do timer')
    const userId = localStorage.getItem('user_id');
    if (userId) {
      try {
        const resp = await homeService.getHomeData(userId);
        if (resp && typeof resp === 'object' && 'data' in resp) {
          const data = resp.data as HomeData;
          console.log('ciclo ativo pra setar', data.activeCycle)
          setConsistencyOfTheWeek(data.consistencyOfTheWeek);
          setProgressOfTheDay(data.progressOfTheDay);
          setUserActiveGoals(data.userGoals);
          setActiveCycle(data.activeCycle);
        }
      } catch (err) {
        console.error('Error fetching home data:', err);
      } finally {
      }
    }
  }
  useEffect(() => {
    getHomeData()
  }, [])
  return (
      <CyclesProvider>
        <HomeContainer>
          <Card>
            {consistencyOfTheWeek && (
              <ConsistencyOfTheWeek consistencyOfTheWeek={consistencyOfTheWeek} />
            )}
            
            {progressOfTheDay && (
              <ProgressOfTheDay progressOfTheDay={progressOfTheDay} />
            )}
          </Card>
          {activeCycle ? <Countdown /> : <GoalsPanel userActiveGoals={userActiveGoals} getHomeData={getHomeData} />}
        </HomeContainer>
      </CyclesProvider>
  )
}
