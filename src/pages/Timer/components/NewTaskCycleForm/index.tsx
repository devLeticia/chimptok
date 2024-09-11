import { Button } from '../../../../components/Button'
import Select from '../../../../components/Select'
import {
  Container,
  CtaContainer,
  MinutesOptionsContainer,
  UnlimitedDisclaimer,
} from './styles'
import { Radio } from './../../../../components/RadioButton/index'
import { useState } from 'react'
import { useCycles } from '../../../../contexts/CyclesContext'

import ChimpLogoFlag from '../../../../../public/chimp_flag_logo.svg'
import cyclesService from '../../../../http/requests/cycles/cycles.service'

type Task = {
  createdAt: string;
  goalId: string;
  id: string;
  isCompleted: boolean;
  taskName: string;
  updatedAt: string;
};

type Goal = {
  id: string;
  createdAt: Date;
  deadline: Date;
  hoursPerWeek: number;
  status: number;
  totalHoursSpent: number;
  progressPercentage: number;
  goalName: string;
  tasks: Task[];
};

export function NewTaskCycleForm() {
  const { startNewCycle, userGoals } = useCycles()

  const minutesAmountOptions = [
    {
      id: 1,
      amountInMinutes: 15,
    },
    {
      id: 2,
      amountInMinutes: 30,
    },
    {
      id: 3,
      amountInMinutes: 40,
    },
    {
      id: 4,
      amountInMinutes: 60,
    },
  ]

  const [selectedGoal, setSelectedGoal] = useState<Goal>()

  const [selectedTask, setSelectedTask] = useState<Task>()

  const [selectedMinutesAmount, setSelectedMinutesAmount] = useState<number>(30)

  function handleGoalSelect(goal: Goal) {
    setSelectedGoal(goal)
    setSelectedTask(goal.tasks[0]) // Reset selected task when a new goal is selected
    console.log('Selected goal:', goal)
  }

  function handleTaskSelect(task: Task) {
    setSelectedTask(task)
    console.log('Selected task:', task)
  }

  function handleMinutesSelect(amountInMinutes: number | undefined) {
    if (amountInMinutes !== undefined) {
      setSelectedMinutesAmount(amountInMinutes)
      console.log('Selected minutes:', amountInMinutes)
    } else {
      // Handle the case when amountInMinutes is undefined
      // For example, you can set a default value or show an error message
      console.error('Error: Selected minutes is undefined')
    }
  }

  function isValid() {
    return (
      selectedGoal !== null &&
      selectedTask !== null &&
      selectedMinutesAmount !== null
    )
  }

  function handleSumbmitNewTaskCycle() {
    const userId = localStorage.getItem('user_id')
    if (selectedTask && userId) {
      const payload = {
        userId,
        startDate: new Date(),
        taskId: selectedTask.id,
        minutesAmount: selectedMinutesAmount,
      }
      // send request to start a new cycle
      cyclesService
        .registerNewCycle(payload)
        .then((resp) => {
          // console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          console.log('finalizou')
        })

      // startNewCycle(requestBody)
    }
  }

  return (
    <Container>
      <CtaContainer>
        <h1>Start A New Task</h1>
      </CtaContainer>

      <h2>Pick a goal and a task</h2>
      <Select
        placeholder="Choose a goal"
        options={userGoals}
        getLabel={(goal) => goal.goalName}
        onSelect={handleGoalSelect}
        initialValue={selectedGoal}
      />
      {selectedGoal && (
        <Select
          key={JSON.stringify(selectedGoal)}
          placeholder="Choose a Task"
          options={selectedGoal.tasks}
          getLabel={(task) => task.taskName}
          onSelect={handleTaskSelect}
          initialValue={selectedTask}
        />
      )}

      <h2>For how long will work on it?</h2>
      <MinutesOptionsContainer>
        {minutesAmountOptions.map((option, index) => (
          <Radio
            key={index}
            id={option.id.toString()}
            label={
              option.amountInMinutes ? option.amountInMinutes.toString() : '*'
            }
            subLabel={'minutes'}
            name="minutesAmount"
            value="amountInMinutes"
            onClick={() => handleMinutesSelect(option.amountInMinutes)}
          />
        ))}
      </MinutesOptionsContainer>
      {/* <UnlimitedDisclaimer>
        *Work for as long as you need, set to Done when you finish
      </UnlimitedDisclaimer> */}
      <Button
        color="blue"
        fullWidth
        disabled={!isValid()}
        onClick={handleSumbmitNewTaskCycle}
      >
        {'START'}
      </Button>
    </Container>
  )
}
