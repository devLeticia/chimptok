import reportsService from '../../http/requests/reports/reports.service';
import { ConsistencyChart } from './ConsistencyChart';
import { ConsistencySummary } from './ConsistencySummary';
import { GoalRanking } from './GoalRanking';
import { TaskHistory } from './TaskHistory';
import { ReportsContainer, ListsContainer, SkeletonWrapper, SpaceY, Box, GridWrapper } from './styles';
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
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
        <GridWrapper cols="1fr 1fr 1fr">
          {[...Array(3)].map((_, index) => (
            <SkeletonWrapper key={index}>
              <SpaceY gap="0.25rem">
                <Box height="1rem" bgColor="rgba(0, 0, 0, 0.05)" />
                <Box height="2rem" bgColor="rgba(0, 0, 0, 0.1)" />
              </SpaceY>
            </SkeletonWrapper>
          ))}
        </GridWrapper>
        <SkeletonWrapper>
          <SpaceY gap="12px">
            <Box height="2rem" width="40%" bgColor="rgba(0, 0, 0, 0.05)" /> {/* Slightly darker gray */}
            <GridWrapper cols="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr">
              {[...Array(12)].map((_, index) => (
                <Box key={index} height="4rem" bgColor="rgba(0, 0, 0, 0.1)" />
              ))}
            </GridWrapper>
          </SpaceY>
        </SkeletonWrapper>
        <GridWrapper cols="1fr 1fr">
          {[...Array(2)].map((_, index) => (
            <SkeletonWrapper key={index}>
              <SpaceY gap="20px">
                <Box height="2rem" width="50%" bgColor="rgba(0, 0, 0, 0.05)" />
                <SpaceY gap="12px">
                  <Box key={index + 100} height="4rem" bgColor="rgba(0, 0, 0, 0.1)" /> {/* Added key here */}
                  <Box key={index + 101} height="4rem" bgColor="rgba(0, 0, 0, 0.1)" /> {/* Added key here */}
                  <Box key={index + 102} height="4rem" bgColor="rgba(0, 0, 0, 0.1)" /> {/* Added key here */}
                </SpaceY>
              </SpaceY>
            </SkeletonWrapper>
          ))}
        </GridWrapper>
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
                  <ConsistencyChart lastTwoWeeksConsistency={lastTwoWeekConsistency} totalCycles={userStatistics.totalCycles} />
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
