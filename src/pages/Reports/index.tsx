import reportsService from '../../http/requests/reports/reports.service';
import { ConsistencyChart } from './ConsistencyChart';
import { ConsistencySummary } from './ConsistencySummary';
import { GoalRanking } from './GoalRanking';
import { TaskHistory } from './TaskHistory';
import { ReportsContainer, ListsContainer, SkeletonWrapper, SpaceY, Box, StatsSkeleton } from './styles';
import { useState, useEffect } from 'react';

interface ReportData {
  userStats: UserStats,
  lastTwoWeeksConsistency: Array<LastTwoWeeksConsistency>,
  goalRanking: Array<GoalRanking>,
  cyclesHistory: CyclesHistory,
}

type UserStats = {
  totalHoursInTasks: number,
  totalCycles: number,
  bestStreak: number,
}

type LastTwoWeeksConsistency = {
  date: number,
  totalHoursWorkedInTheDay: number,
  totalCyclesInTheDay: number 
}

type GoalRanking = {
  name: string,
  totalExpectedHours: number,
  totalHoursWorked: number,
  progressPercentage: number,
  deadline: Date
}

type CyclesHistory = {
  totalHoursInTasks: number,
  totalCycles: number,
  bestStreak: number,
}

export function Reports() {
  const [userStatistics, setUserStatistics] = useState<UserStats | null>(null);
  const [lastTwoWeekConsistency, setLastTwoWeekConsistency] = useState<LastTwoWeeksConsistency[] | null>(null);
  const [goalRanking, setGoalRanking] = useState<GoalRanking[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Set correct type for `isLoading`

  async function getUserReport() {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      try {
        const resp = await reportsService.getUserReport(userId);
        if (resp && typeof resp === 'object' && 'data' in resp) {
          const data = resp.data as ReportData;
          setUserStatistics(data.userStats);
          setLastTwoWeekConsistency(data.lastTwoWeeksConsistency);
          setGoalRanking(data.goalRanking);
        }
        setIsLoading(false); // Stop loading when data is fetched
      } catch (err) {
        console.error('Error fetching user report:', err);
        setIsLoading(false); // Stop loading even if there is an error
      }
    }
  }

  useEffect(() => {
    getUserReport();
  }, []);

  const Skeleton = () => {
    return (
      <>
      <StatsSkeleton>
        <SkeletonWrapper>
          <SpaceY gap="0.25rem">
            <Box height="1rem" bgColor="rgba(0, 0, 0, 0.05)" /> 
            <Box height="2rem" bgColor="rgba(0, 0, 0, 0.05)" />
          </SpaceY>
      </SkeletonWrapper>
      <SkeletonWrapper>
          <SpaceY gap="0.25rem">
            <Box height="1rem" bgColor="rgba(0, 0, 0, 0.05)" /> 
            <Box height="2rem" bgColor="rgba(0, 0, 0, 0.05)" />
          </SpaceY>
      </SkeletonWrapper>
      <SkeletonWrapper>
          <SpaceY gap="0.25rem">
            <Box height="1rem" bgColor="rgba(0, 0, 0, 0.05)" /> 
            <Box height="2rem" bgColor="rgba(0, 0, 0, 0.05)" />
          </SpaceY>
      </SkeletonWrapper>
      </StatsSkeleton>
      <SkeletonWrapper>
        <SpaceY gap="20px">
          {/* Main large skeleton box */}
          <Box height="4rem" bgColor="rgba(0, 0, 0, 0.05)" /> {/* Light gray for main box */}
          <SpaceY gap="12px">
            {/* Smaller skeleton bars */}
            <Box height="12px" width="60%" bgColor="rgba(0, 0, 0, 0.05)" /> {/* Light gray */}
            <Box height="12px" width="80%" bgColor="rgba(0, 0, 0, 0.1)" /> {/* Slightly darker gray */}
            <Box height="12px" width="40%" bgColor="rgba(0, 0, 0, 0.1)" /> {/* Slightly darker gray */}
          </SpaceY>
        </SpaceY>
      </SkeletonWrapper>
      <SkeletonWrapper>
        <SpaceY gap="20px">
          {/* Main large skeleton box */}
          <Box height="4rem" bgColor="rgba(0, 0, 0, 0.05)" /> {/* Light gray for main box */}
          <SpaceY gap="12px">
            {/* Smaller skeleton bars */}
            <Box height="12px" width="60%" bgColor="rgba(0, 0, 0, 0.05)" /> {/* Light gray */}
            <Box height="12px" width="80%" bgColor="rgba(0, 0, 0, 0.1)" /> {/* Slightly darker gray */}
            <Box height="12px" width="40%" bgColor="rgba(0, 0, 0, 0.1)" /> {/* Slightly darker gray */}
          </SpaceY>
        </SpaceY>
      </SkeletonWrapper>
      </>
    );
  };

  return (
    <>
      <ReportsContainer>
        {isLoading ? ( 
          <Skeleton /> 
        ) : (
          <>
            {userStatistics && (
              <>
                <ConsistencySummary userStats={userStatistics} />
                {lastTwoWeekConsistency && (
                  <ConsistencyChart lastTwoWeeksConsistency={lastTwoWeekConsistency} />
                )}
              </>
            )}
            <ListsContainer>
              {goalRanking && (
                <GoalRanking goalRanking={goalRanking} />
              )}
              <TaskHistory />
            </ListsContainer>
          </>
        )}
      </ReportsContainer>
    </>
  );
}
