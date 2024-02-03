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

import { CheckCircle, Pencil, Trash } from 'phosphor-react'
import { DomainProgressBar } from './../../../domain-components/ProgressBar/index'
import { Button } from '../../../components/Button'
import { ConfirmDialog } from '../../../components/Dialog'
import { useState } from 'react'
import { Loading } from '../../../components/Loading'
import { Toast } from '../../../components/Toast'

type Goal = {
  goalName: string
  tasks: Array<string>
  createdAt: Date
  deadline: Date
  hoursPerWeek: number
  totalHoursSpent: number
  progressPercentage: number
  status: number
}
interface GoalCardProps {
  goal: Goal
}

export function GoalCard({ goal }: GoalCardProps) {
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

  function handleConfirmDeletion(goal: Goal) {
    // Handle deletion logic here
    setIsLoading(true)
    // Close the dialog after deletion
    handleCloseDialog()
  }
  return (
    <GoalContainer>
      <Toast message="Operation successful!" type="success" />
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
        <DomainProgressBar progress={goal.progressPercentage} />
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
          onConfirm={() => handleConfirmDeletion(goal)}
          title={'Are you sure?'}
          text={`All goals and tasks, as well as its history will be deleted.`}
        ></ConfirmDialog>
        <Loading isLoading={isLoading} />
      </CardContainer>
    </GoalContainer>
  )
}
