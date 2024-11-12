import {
  GoalRankingContainer,
  GoalContainer,
  InfoContainer,
  LabelsContainer,
  SessionTitle,
  ListContainer,
  RankingNumber,
  BlurOverlay,
} from './styles';
import { DomainProgressBar } from './../../../domain-components/ProgressBar/index';
import { formatDistanceToNow } from 'date-fns';
import ranking from '../../../../public/ranking.svg';

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

export function GoalRanking({ goalRanking }: GoalRankingProps) {
  return (
    <GoalRankingContainer>
      <SessionTitle>Goal Ranking</SessionTitle>
      <ListContainer>
        {goalRanking.length === 0 ? (
          <img
            src={ranking}
            alt="Ranking Placeholder"
            className="logo"
            height={180} 
          />
        ) : (
          goalRanking.map((goal, index) => (
            <GoalContainer key={goal.name}>
              <RankingNumber>{index + 1}</RankingNumber>
              <InfoContainer>
                <LabelsContainer>
                  <h1>{goal.name}</h1>
                  <p>ends {formatDistanceToNow(new Date(goal.deadline), { addSuffix: true })}</p>
                </LabelsContainer>
                <DomainProgressBar animated={false} progress={goal.progressPercentage < 100 ? goal.progressPercentage : 100} children={''} />
              </InfoContainer>
            </GoalContainer>
          ))
        )}
      </ListContainer>
    </GoalRankingContainer>
  );
}
