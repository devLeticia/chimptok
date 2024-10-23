import {
  GoalRankingContainer,
  GoalContainer,
  InfoContainer,
  LabelsContainer,
  SessionTitle,
  ListContainer,
  RankingNumber,
} from './styles'
import { DomainProgressBar } from './../../../domain-components/ProgressBar/index'
import { formatDistanceToNow } from 'date-fns'


interface goalRankingProps {
  goalRanking: GoalRanking[]
}

type GoalRanking = {
  name: string,
  totalExpectedHours: number,
  totalHoursWorked: number,
  progressPercentage: number,
  deadline: Date
}

function getTimeToComplete(deadline: Date) {
  const deadlineDate = new Date(deadline)
  const formattedResult = formatDistanceToNow(deadlineDate, { addSuffix: true })

  return formattedResult
}

export function GoalRanking({goalRanking}: goalRankingProps) {
  return (
    <GoalRankingContainer>
      <SessionTitle>Goal Ranking</SessionTitle>
      <ListContainer>
        {goalRanking.map((goal, index) => {
          return (
            <GoalContainer key={goal.name}>
              <RankingNumber>{index + 1}</RankingNumber>
              <InfoContainer>
                <LabelsContainer>
                  <h1>{goal.name}</h1>
                  <p>{getTimeToComplete(goal.deadline)}</p>
                </LabelsContainer>
                <DomainProgressBar
                  progress={goal.progressPercentage}
                />
              </InfoContainer>
            </GoalContainer>
          )
        })}
      </ListContainer>
    </GoalRankingContainer>
  )
}
