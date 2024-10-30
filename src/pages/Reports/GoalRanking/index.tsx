import {
  GoalRankingContainer,
  GoalContainer,
  InfoContainer,
  LabelsContainer,
  SessionTitle,
  ListContainer,
  RankingNumber,
  BlurOverlay,
} from './styles'
import { DomainProgressBar } from './../../../domain-components/ProgressBar/index'
import { formatDistanceToNow } from 'date-fns'

// Define the types for props and data
interface GoalRankingProps {
  goalRanking: GoalRanking[];
}

type GoalRanking = {
  name: string;
  totalExpectedHours: number;
  totalHoursWorked: number;
  progressPercentage: number;
  deadline: Date;
};

// Function to generate fake goal ranking data
function generateFakeGoalRankingData(count: number): GoalRanking[] {
  return Array.from({ length: count }, (_, index) => ({
    name: `Goal ${index + 1}`,
    totalExpectedHours: Math.floor(Math.random() * 100) + 1,
    totalHoursWorked: Math.floor(Math.random() * 100),
    progressPercentage: Math.floor(Math.random() * 100),
    deadline: new Date(Date.now() + Math.random() * 10000000000),
  }));
}

export function GoalRanking({ goalRanking }: GoalRankingProps) {
  const dataToDisplay = goalRanking.length > 0 ? goalRanking : generateFakeGoalRankingData(4);

  return (
    <GoalRankingContainer>
      {!goalRanking.length > 0 && (<BlurOverlay />)}
      <SessionTitle>Goal Ranking</SessionTitle>
      <ListContainer>
        {dataToDisplay.map((goal, index) => {
          return (
            <GoalContainer key={goal.name}>
              <RankingNumber>{index + 1}</RankingNumber>
              <InfoContainer>
                <LabelsContainer>
                  <h1>{goal.name}</h1>
                  <p>ends {formatDistanceToNow(new Date(goal.deadline), { addSuffix: true })}</p>
                </LabelsContainer>
                <DomainProgressBar progress={goal.progressPercentage < 100 ? goal.progressPercentage : 100} />
              </InfoContainer>
            </GoalContainer>
          )
        })}
      </ListContainer>
    </GoalRankingContainer>
  );
}
