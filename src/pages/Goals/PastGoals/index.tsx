import { useEffect, useState } from 'react';
import goalsService from '../../../http/requests/goals/goals.service';
import { GoalCard } from '../GoalCard';
import { Container, HeaderCTA, TextCTA } from './styles';
import { loading } from '../../../components/Loading';

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
  isCompleted: boolean
}
interface GoalsHistoryResponse {
  data: Goal[];
}

export function PastGoals() {
  const [pastGoals, setPastGoals] = useState<Goal[]>([]);

  async function getUserGoals() {
    const userId = localStorage.getItem('user_id');
    if (userId !== null) {
      try {
        const resp = await goalsService.getGoalsHistory(userId);
        const responseData = resp as GoalsHistoryResponse;
        if (responseData.data.length > 0) {
          const userGoals = responseData.data;
          const userPastGoals = userGoals.filter(goal => goal.isCompleted);
          setPastGoals(userPastGoals);
        } else {
          setPastGoals([]);
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
      {pastGoals.length === 0 ? (
        <Container>
          <HeaderCTA>{`No goals completed yet!`}</HeaderCTA>
          <TextCTA>
            {`But hey, that just means you're still in the race.`}
            <br />
            {`Keep pushing forward, and before you know it, victory will be yours!`}
          </TextCTA>
          <TextCTA></TextCTA>
        </Container>
      ) : (
        <Container>
          {pastGoals.map((goal, index) => (
            <GoalCard key={goal.id} goal={goal} getUserGoals={getUserGoals} />
          ))}
        </Container>
      )}
    </>
  );
}
