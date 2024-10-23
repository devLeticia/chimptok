import { Card } from '../../../components/Card'
import { ConsitencySummaryContainer } from './styles'

interface ConsistencySummaryProps {
  userStats: UserStats  
}

type UserStats = {
    totalHoursInTasks: number,
    totalCycles: number,
    bestStreak: number
}

export function ConsistencySummary({ userStats }: ConsistencySummaryProps) {
  if (!userStats) {
    return <p>No data available</p>
  }

  // essa função esta sendo repetida durante a aplicação
  // TO DO: centralizar ela 
  function formattedTime (num: number) {
    if (num === 0) return '0h';
    
    let hours = Math.floor(num);
    let minutes = Math.round((num - hours) * 60);
  
    if (hours === 0) {
      return `${minutes}min `;
    }
  
    return `${hours}h ${minutes}min`;
  }

  return (
    <>
      <ConsitencySummaryContainer>
        <Card>
          <p>Total Hours</p>
          <h1>{formattedTime(userStats.totalHoursInTasks)} of work</h1>
        </Card>
        <Card>
          <p>Total tasks</p>
          <h1>{userStats.totalCycles} tasks completed</h1>
        </Card>
        <Card>
          <p>Best Streak</p>
          <h1>{userStats.bestStreak} consecutive days</h1>
        </Card>
      </ConsitencySummaryContainer>
    </>
  );
}
