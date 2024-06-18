import { useEffect, useState } from 'react'
import { loading } from '../../../components/Loading'
import goalsService from '../../../http/requests/goals/goals.service'
import { GoalCard } from '../GoalCard'
import { Container, GoalWrapper, GoalIndex, HeaderCTA, TextCTA } from './styles'

export function ActiveGoals() {
  const [activeGoals, setActiveGoals] = useState([])

  async function getUserGoals() {
    const userId = localStorage.getItem('user_id')
    if (userId !== null) {
      try {
        const resp = await goalsService.getGoalsHistory(userId)
        if (resp.data.length > 0) {
          const userGoals = resp.data
          setActiveGoals(userGoals)
        } else {
          setActiveGoals([])
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
      {activeGoals.length === 0 ? (
        <Container>
          <HeaderCTA>{`Psst... Heard about goal-setting?`}</HeaderCTA>
          <TextCTA>
            {`It's like creating a personal quest in the game of life.`}
            <br />
            {`Time to level up and set your next epic goal!`}
          </TextCTA>
          <TextCTA></TextCTA>
        </Container>
      ) : (
        <Container>
          {activeGoals.map((goal, index) => {
            return (
              <GoalWrapper key={index}>
                <GoalIndex>{index + 1}</GoalIndex>
                <GoalCard goal={goal} getUserGoals={getUserGoals}></GoalCard>
              </GoalWrapper>
            )
          })}
        </Container>
      )}
    </>
  )
}
