import { useEffect, useState } from 'react'
import goalsService from '../../../http/requests/goals/goals.service'
import { GoalCard } from '../GoalCard'
import { Container, HeaderCTA, TextCTA } from './styles'
import { loading } from '../../../components/Loading'

export function PastGoals() {
  const [pastGoals, setPastGoals] = useState([])

  async function getUserGoals() {
    const userId = localStorage.getItem('user_id')
    if (userId !== null) {
      try {
        const resp = await goalsService.getGoalsHistory(userId)
        if (resp.data.length > 0) {
          const userPastGoals = resp.data
          setPastGoals(userPastGoals)
        } else {
          setPastGoals([])
        }
      } catch (err) {
        console.error(err)
      } finally {
        loading.close()
      }
    }
  }
  useEffect(() => {
    getUserGoals() // Call getUserGoals directly inside useEffect
  }, [])
  return (
    <>
      {pastGoals.length === 0 ? (
        <Container>
          <HeaderCTA>{`No goals completed yet!`}</HeaderCTA>
          <TextCTA>
            {`But hey, that just means you're still in the race.!`}
            <br />
            {`Keep pushing forward, and before you know it, victory will be yours!`}
          </TextCTA>
          <TextCTA></TextCTA>
        </Container>
      ) : (
        <Container>
          {pastGoals.map((goal, index) => {
            return (
              <GoalCard
                key={index}
                goal={goal}
                getUserGoals={getUserGoals}
              ></GoalCard>
            )
          })}
        </Container>
      )}
    </>
  )
}
