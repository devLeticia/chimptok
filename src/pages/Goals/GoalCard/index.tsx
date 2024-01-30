import {
  GoalContainer,
  CardContainer,
  LabelRow,
  CardTitle,
  ProgressBar,
  TaskDetails,
  TasksContainer,
  TaskIndex,
  TaskDescriptionWrapper,
  TaskDescription,
  StatusBadge,
} from './styles'

import { CheckCircle } from 'phosphor-react'

interface GoalCardProps {
  goal: {
    goalName: string
    tasks: Array<string>
    createdAt: Date
    deadline: Date
    hoursPerWeek: number
    totalHoursSpent: number
    progressPercentage: number
    status: number
  }
}

export function GoalCard({ goal }: GoalCardProps) {
  function isPastGoal(status: number) {
    return status === 2 || status === 3
  }

  return (
    <GoalContainer>
      <CardContainer>
        {isPastGoal(goal.status) && (
          <StatusBadge>
            <CheckCircle weight="fill" size={18} />
            <p>Concluded</p>
          </StatusBadge>
        )}
        {!isPastGoal(goal.status) && (
          <LabelRow>
            {goal.hoursPerWeek} {goal.hoursPerWeek === 1 ? 'hour' : 'hours'} per
            week
            <p
              title={goal.deadline.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            >
              up to {goal.deadline.toLocaleDateString('en-US')}
            </p>
          </LabelRow>
        )}
        <hr />
        <CardTitle>{goal.goalName}</CardTitle>
        <ProgressBar progressPercentage={goal.progressPercentage}>
          <div></div>
        </ProgressBar>
        <TaskDetails>
          <summary>{goal.tasks.length} tasks</summary>
          <TasksContainer>
            {goal.tasks.map((task, index) => {
              return (
                <TaskDescriptionWrapper key={index}>
                  <TaskIndex>{index + 1}.</TaskIndex>
                  <TaskDescription>{task}</TaskDescription>
                </TaskDescriptionWrapper>
              )
            })}
            {/* <button>Edit goal</button> */}
          </TasksContainer>
        </TaskDetails>
      </CardContainer>
    </GoalContainer>
  )
}
