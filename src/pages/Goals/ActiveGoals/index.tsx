import { useEffect, useState } from 'react'
import { loading } from '../../../components/Loading'
import goalsService from '../../../http/requests/goals/goals.service'
import { GoalCard } from '../GoalCard'
import { Container, GoalWrapper, GoalIndex, HeaderCTA, TextCTA } from './styles'
import { useCycles } from '../../../contexts/CyclesContext'

type Task = {
  id?: string | null
  taskName: string
  isCompleted?: boolean | null
}
interface Goal {
  id: string
  goalName: string
  tasks: Task[]
  createdAt: Date
  deadline: Date
  hoursPerWeek: number
  totalHoursSpent: number
  progressPercentage: number
  overallProgress: {
    overallExpectedHours: number;
    overallAccomplishedHours: number;
  }
  status: number,
  isCompleted: boolean
}

interface GoalsHistoryResponse {
  data: Goal[];
}
export function ActiveGoals() {
  const {
    userGoals,
    getHomeData
  } = useCycles()

  const activeGoals = userGoals?.filter((goal) => goal.isCompleted === false)
  useEffect(() => {
    console.log(userGoals); // Call getUserGoals directly inside useEffect
    if (userGoals === undefined || userGoals.length === 0) getHomeData()
  }, []);

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
          {activeGoals.map((goal, index) => (
            <GoalWrapper key={goal.id}>
              <GoalIndex>{index + 1}</GoalIndex>
              <GoalCard goal={goal} getUserGoals={getHomeData}></GoalCard>
            </GoalWrapper>
          ))}
        </Container>
      )}
    </>
  );
}