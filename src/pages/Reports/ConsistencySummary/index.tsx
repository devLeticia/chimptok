import { Card } from '../../../components/Card';
import { ConsitencySummaryContainer, NumberSpan } from './styles';

interface ConsistencySummaryProps {
  userStats: UserStats;
}

type UserStats = {
  totalHoursInTasks: number;
  totalCycles: number;
  bestStreak: number;
};

export function ConsistencySummary({ userStats }: ConsistencySummaryProps) {
  if (!userStats) {
    return <p>No data available</p>;
  }

  function formattedTime(num: number) {
    if (num === 0) return { value: '0', unit: 'h' };

    let hours = Math.floor(num);
    let minutes = Math.round((num - hours) * 60);

    if (hours === 0) {
      return { value: `${minutes}`, unit: 'min' };
    }
    if (minutes === 0) {
      return { value: `${hours}`, unit: 'h' };
    }
    return { value: `${hours}h ${minutes}`, unit: 'min' };
  }

  function getHoursOfWork(totalHours: number) {
    const { value, unit } = formattedTime(totalHours);
    return totalHours > 0 ? (
      <>
        <NumberSpan>{value}</NumberSpan> {unit} of work
      </>
    ) : (
      '0'
    );
  }

  function getTotalTasks(totalCycles: number) {
    return totalCycles > 0 ? (
      <>
        <NumberSpan>{totalCycles}</NumberSpan> tasks completed
      </>
    ) : (
      '0'
    );
  }

  function bestStreak(bestStreak: number) {
    if (bestStreak === 0) {
      return '0 streaks';
    } else if (bestStreak === 1) {
      return (
        <>
          <NumberSpan>1</NumberSpan> consecutive day
        </>
      );
    } else {
      return (
        <>
          <NumberSpan>{bestStreak}</NumberSpan> consecutive days
        </>
      );
    }
  }
  
  return (
    <ConsitencySummaryContainer>
      <Card>
        <p>Total Hours</p>
        <h1>{getHoursOfWork(userStats.totalHoursInTasks)}</h1>
      </Card>
      <Card>
        <p>Total Tasks</p>
        <h1>{getTotalTasks(userStats.totalCycles)}</h1>
      </Card>
      <Card>
        <p>Best Streak</p>
        <h1>{bestStreak(userStats.bestStreak)}</h1>
      </Card>
    </ConsitencySummaryContainer>
  );
}
