import {
  GoalRankingContainer,
  GoalContainer,
  ProgressBar,
  InfoContainer,
  LabelsContainer,
  SessionTitle,
  ListContainer,
  RankingNumber,
} from './styles'
import { DomainProgressBar } from './../../../domain-components/ProgressBar/index'
import { differenceInDays, formatDistanceToNow } from 'date-fns'
const goalRanking = [
  {
    id: 121,
    goalName: 'Mobile Project',
    totalHoursGoal: 40,
    hoursCompleted: 20,
    deadlineDate: new Date('2024-12-31T23:59:59'),
  },
  {
    id: 122,
    goalName: 'Learn French',
    totalHoursGoal: 80,
    hoursCompleted: 20,
    deadlineDate: new Date('2024-08-01T23:59:59'),
  },
  {
    id: 123,
    goalName: 'Read Bible',
    totalHoursGoal: 120,
    hoursCompleted: 10,
    deadlineDate: new Date('2024-03-01T23:59:59'),
  },
  {
    id: 124,
    goalName: 'UX Courses in IxDF',
    totalHoursGoal: 80,
    hoursCompleted: 20,
    deadlineDate: new Date('2024-12-31T23:59:59'),
  },
]

function getTimeToComplete(dealineDate: Date) {
  const formattedResult = formatDistanceToNow(dealineDate, { addSuffix: true })

  return formattedResult
}

export function GoalRanking() {
  return (
    <GoalRankingContainer>
      <SessionTitle>Goal Ranking</SessionTitle>
      <ListContainer>
        {goalRanking.map((goal, index) => {
          return (
            <GoalContainer key={goal.id}>
              <RankingNumber>#{index + 1}</RankingNumber>
              <InfoContainer>
                <LabelsContainer>
                  <h1>{goal.goalName}</h1>
                  <p>{getTimeToComplete(goal.deadlineDate)}</p>
                </LabelsContainer>
                <DomainProgressBar
                  progress={(goal.hoursCompleted / goal.totalHoursGoal) * 100}
                />
              </InfoContainer>
            </GoalContainer>
          )
        })}
      </ListContainer>
    </GoalRankingContainer>
  )
}
