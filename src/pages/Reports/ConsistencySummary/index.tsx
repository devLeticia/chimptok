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

  function getHoursOfWork (totalHours: number) {
    return totalHours > 0 ? `${formattedTime(totalHours)} of work` : 'Log your first hour!'
  }
  function getTotalTasks (totalCycles: number) {
    return totalCycles > 0 ? `${formattedTime(totalCycles)} tasks completed` : 'Start performing!'
  }
  function bestStrek (bestStrek: number) {
    return bestStrek > 0 ? `${formattedTime(bestStrek)} consecutive days` : 'No streak.Let’s go!'
  }
  
  return (
    <>
      <ConsitencySummaryContainer>
        <Card>
          <p>Total Hours</p>
          <h1>{getHoursOfWork(userStats.totalHoursInTasks)}</h1>
        </Card>
        <Card>
          <p>Total tasks</p>
          <h1>{getTotalTasks(userStats.totalCycles)}</h1>
        </Card>
        <Card>
          <p>Best Streak</p>
          <h1>{bestStrek(userStats.bestStreak)} </h1>
        </Card>
      </ConsitencySummaryContainer>
    </>
  );
}
