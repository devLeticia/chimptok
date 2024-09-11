import {
  GoalContainer,
  CardContainer,
  LabelRow,
  CardTitle,
  TaskDetails,
  TasksContainer,
  TaskIndex,
  TaskDescriptionWrapper,
  TaskDescription,
  StatusBadge,
  ActionsContainer,
} from './styles'

import { CheckCircle, Pencil, Trash } from '@phosphor-icons/react'
import { DomainProgressBar } from './../../../domain-components/ProgressBar/index'
import { Button } from '../../../components/Button'
import { ConfirmDialog } from '../../../components/Dialog'
import { useState } from 'react'
import goalsService from '../../../http/requests/goals/goals.service'

type Task = {
  id?: string | null
  taskName: string
  isCompleted?: boolean | null
}

type Goal = {
  id: string
  goalName: string
  tasks: Task[]
  createdAt: Date
  deadline: Date
  hoursPerWeek: number
  totalHoursSpent: number
  progressPercentage: number
  status: number
}
interface GoalCardProps {
  goal: Goal
  getUserGoals: () => void
}

export function GoalCard({ goal, getUserGoals }: GoalCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function isPastGoal(status: number) {
    return status === 2 || status === 3
  }

  function handleOpenGoalEdition(goal: Goal) {
    console.log(goal)
  }

  function handleDeleteGoal(goal: Goal) {
    console.log(goal)
  }

  function handleOpenDialog(goal: Goal) {
    console.log(goal)
    setIsDialogOpen(true)
  }

  function handleCloseDialog() {
    setIsDialogOpen(false)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  function handleConfirmDeletion(goalId: string) {
    goalsService
      .deleteGoal(goalId)
      .then((resp) => {
        console.log('salvou com sucesso')
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        handleCloseDialog()
        getUserGoals()
      })
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
              title={new Date(goal.deadline).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            >
              up to {new Date(goal.deadline).toLocaleDateString('en-US')}
            </p>
          </LabelRow>
        )}
        <hr />
        <CardTitle>{goal.goalName}</CardTitle>
        <DomainProgressBar progress={goal.progressPercentage} />
        <TaskDetails>
          <summary>{goal.tasks.length} tasks</summary>
          <TasksContainer>
            {goal.tasks.map((task, index) => {
              return (
                <TaskDescriptionWrapper key={index}>
                  <TaskIndex>{index + 1}.</TaskIndex>
                  <TaskDescription>{task.taskName}</TaskDescription>
                </TaskDescriptionWrapper>
              )
            })}
          </TasksContainer>
          <ActionsContainer>
            <Button onClick={() => handleOpenDialog(goal)}>
              <Trash weight="bold" size={18} />
              Delete
            </Button>
            <Button onClick={() => handleOpenGoalEdition(goal)}>
              <Pencil weight="bold" size={18} />
              Edit Goal
            </Button>
          </ActionsContainer>
        </TaskDetails>
        <ConfirmDialog
          cancelText="Cancel"
          confirmationText="Delete"
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          onConfirm={() => handleConfirmDeletion(goal.id)}
          title={'Are you sure?'}
          text={`All goals and tasks, as well as its history will be deleted.`}
        ></ConfirmDialog>
      </CardContainer>
    </GoalContainer>
  )
}
