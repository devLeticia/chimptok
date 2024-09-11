import { useEffect, useState } from 'react'
import { loading } from '../../../components/Loading'
import goalsService from '../../../http/requests/goals/goals.service'
import { GoalCard } from '../GoalCard'
import { Container, GoalWrapper, GoalIndex, HeaderCTA, TextCTA } from './styles'

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
  status: number
}

interface GoalsHistoryResponse {
  data: Goal[];
}
export function ActiveGoals() {
  const [activeGoals, setActiveGoals] = useState<Goal[]>([]);

  async function getUserGoals() {
    const userId = localStorage.getItem('user_id');
    if (userId !== null) {
      try {
        const resp = await goalsService.getGoalsHistory(userId);
        const responseData = resp as GoalsHistoryResponse; // Type assertion

        if (responseData.data.length > 0) {
          const userGoals = responseData.data;
          setActiveGoals(userGoals);
        } else {
          setActiveGoals([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        loading.close();
      }
    }
  }

  useEffect(() => {
    getUserGoals(); // Call getUserGoals directly inside useEffect
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
              <GoalCard goal={goal} getUserGoals={getUserGoals}></GoalCard>
            </GoalWrapper>
          ))}
        </Container>
      )}
    </>
  );
}