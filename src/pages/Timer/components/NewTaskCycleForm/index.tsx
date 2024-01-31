import { Button } from '../../../../components/Button'
import Select from '../../../../components/Select'
import { Container, NewCycleCTA, MinutesOptionsContainer } from './styles'
import { Radio } from './../../../../components/RadioButton/index'
import { useState } from 'react'
import { useCycles } from '../../../../contexts/CyclesContext'

type Task = {
  id: string
  description: string
}

type Goal = {
  id: string
  createdAt: Date // Adjust the type based on your actual data type
  deadline: Date // Adjust the type based on your actual data type
  hoursPerWeek: number
  status: number
  totalHoursSpent: number
  progressPercentage: number
  goalName: string
  tasks: Array<Task>
}

const activeGoals = [
  {
    id: 'gbrbgerb',
    createdAt: new Date('2024-04-05T17:15:00'),
    deadline: new Date('2024-12-31T23:59:59'),
    hoursPerWeek: 2,
    status: 1,
    totalHoursSpent: 12,
    progressPercentage: 90,
    goalName: 'Complete IxDF Courses',
    tasks: [
      {
        id: 'gbgergerbgerb',
        description: 'Take a course on UX design fundamentals',
      },
      {
        id: 'gbrrwebgerb',
        description: 'Learn about user research and usability testing',
      },
      {
        id: 'gbrbgnherb',
        description: 'Study interaction design principles',
      },
      {
        id: 'gbrqewrgerb',
        description: 'Explore visual design and user interface (UI) principles',
      },
      {
        id: 'gbrghfgbgerb',
        description: 'Complete a course on prototyping and wireframing',
      },
      {
        id: 'gbrbtergerb',
        description: 'Learn about design thinking and problem-solving',
      },
      {
        id: 'gbrbgergregerb',
        description: 'Study responsive web design principles',
      },
    ],
  },
  {
    id: 'newGoalId',
    createdAt: new Date(),
    deadline: new Date('2024-12-31T23:59:59'),
    hoursPerWeek: 3,
    status: 0, // Assuming 0 represents a new goal with no progress
    totalHoursSpent: 0,
    progressPercentage: 0,
    goalName: 'Learn React and Redux', // Your new goal name
    tasks: [
      {
        id: 'newTaskId1',
        description: 'Complete a React tutorial',
      },
      {
        id: 'newTaskId2',
        description: 'Build a simple React application',
      },
      {
        id: 'newTaskId3',
        description: 'Learn Redux basics',
      },
    ],
  },
]
export function NewTaskCycleForm() {
  const { startNewCycle } = useCycles()

  const minutesAmountOptions = [
    {
      id: 1,
      amountInMinutes: 1,
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
    {
      id: 0,
      amountInMinutes: 120, // try to add a unlimited here
    },
  ]

  const [selectedGoal, setSelectedGoal] = useState<Goal>(activeGoals[0])

  const [selectedTask, setSelectedTask] = useState<Task>(
    activeGoals[0].tasks[0],
  )

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
    const requestBody = {
      // userId,
      goalName: selectedGoal.goalName,
      taskName: selectedTask.description,
      startDate: new Date(),
      goalId: selectedGoal.id,
      taskId: selectedTask.id,
      minutesAmount: selectedMinutesAmount,
    }
    console.log(requestBody)
    startNewCycle(requestBody)
  }

  return (
    <Container>
      <NewCycleCTA>Time to Put Your Butt to Work!</NewCycleCTA>
      <Select
        placeholder="Choose a goal"
        options={activeGoals}
        getLabel={(goal) => goal.goalName}
        onSelect={handleGoalSelect}
        initialValue={selectedGoal}
      />
      {selectedGoal && (
        <Select
          key={JSON.stringify(selectedGoal)}
          placeholder="Choose a Task"
          options={selectedGoal.tasks}
          getLabel={(task) => task.description}
          onSelect={handleTaskSelect}
          initialValue={selectedTask}
        />
      )}

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
      <p>*Work for as long as you need, set to Done when you finish</p>
      <Button
        color="blue"
        fullWidth
        disabled={!isValid()}
        onClick={handleSumbmitNewTaskCycle}
      >
        {'Start'}
      </Button>
    </Container>
  )
}
