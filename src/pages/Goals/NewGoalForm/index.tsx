import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import {
  Container,
  SuperHeader,
  ColWrapper,
  RowWrapper,
  SuccessMessageContainer,
  TaskInputWrapper,
  Index,
  StyledTrashIconButton,
  TasksContainer,
  TaskDisclaimerWrapper,
  StyledCheckCircle,
} from './styles'
import {
  FlagBanner,
  Calendar,
  Clock,
  CheckSquareOffset,
  Plus,
  CheckCircle,
} from 'phosphor-react'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const NewGoalFormSchema = z.object({
  goalName: z.string().min(6).max(54),
  deadline: z.coerce.date(),
  hoursPerWeek: z.coerce.number().int().min(1).max(40),
  tasks: z.string().min(5).max(40).array().nonempty().min(1),
})

type NewGoalFormData = z.infer<typeof NewGoalFormSchema>

export function NewGoalForm() {
  const [output, setOutput] = useState('')
  const [tasks, setTasks] = useState<string[]>(['']) // Initial task input

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NewGoalFormData>({
    resolver: zodResolver(NewGoalFormSchema),
    mode: 'onChange',
  })

  function saveNewGoal(data: unknown) {
    setOutput(JSON.stringify(data, null, 2))
    console.log(errors)
  }

  function logErrors() {
    console.log(errors)
  }
  function addNewTask() {
    setTasks((prevTasks) => [...prevTasks, '']) // Add an empty task
  }

  function handleTaskKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) {
    if (event.key === 'Enter') {
      event.preventDefault()
      addNewTask()

      // Focus on the newly created input
      const nextInputIndex = index + 1
      const nextInput = document.getElementById(`tasks[${nextInputIndex}]`)
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  function removeTask(index: number) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index))
  }

  function SuccessMessage() {
    return (
      <SuccessMessageContainer>
        <StyledCheckCircle size={54} weight="fill" />
        <p>
          Get ready to crush it in <span>2 months</span> with
          <span> 40 hours</span> of focused work!
        </p>
        <Button fullWidth type="submit">
          Start Working on New Goal
        </Button>
        <Button color="dark" fullWidth>
          <Plus size={16} weight="bold" color="white" />
          Add Another Goal
        </Button>
      </SuccessMessageContainer>
    )
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <Container>
      <SuperHeader>SET YOUR NEW GOAL</SuperHeader>
      {/* Conditionally render the SuccessMessage */}
      {output && <SuccessMessage />}{' '}
      <form onSubmit={handleSubmit(saveNewGoal)}>
        <ColWrapper>
          <Input
            label="What do you wanna achieve?"
            type="text"
            placeholder="Goal to Achieve"
            icon={<FlagBanner weight="duotone" size={24} />}
            {...register('goalName')}
            errorMessage={errors.goalName?.message?.toString() ?? null}
          />
          <RowWrapper>
            <Input
              label="Set a deadline"
              type="date"
              placeholder="Deadline"
              icon={<Calendar weight="duotone" size={24} />}
              {...register('deadline', { min: today })}
              min={today}
              errorMessage={errors.deadline?.message?.toString() ?? null}
            />
            <Input
              label="Weekly hours to dedicate"
              type="number"
              onKeyDown={(evt) =>
                ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
              }
              min={1}
              max={40}
              placeholder="Hours per week"
              icon={<Clock weight="duotone" size={24} />}
              {...register('hoursPerWeek')}
              errorMessage={errors.hoursPerWeek?.message?.toString() ?? null}
            />
          </RowWrapper>
        </ColWrapper>
        <hr />
        <ColWrapper>
          <TaskDisclaimerWrapper>
            <p>Now add tasks to conquer the goal</p>
            <p>{tasks.length}</p>
          </TaskDisclaimerWrapper>
          <TasksContainer>
            {tasks.map((task, index) => (
              <TaskInputWrapper key={index}>
                <Index>{index + 1}</Index>
                <Input
                  type="text"
                  placeholder="Task"
                  {...register(`tasks.${index}`)}
                  onKeyDown={(event) => handleTaskKeyDown(event, index)}
                  icon={<CheckSquareOffset weight="duotone" size={24} />}
                  id={`tasks[${index}]`}
                  errorMessage={errors.tasks?.message?.toString() ?? null}
                />

                <StyledTrashIconButton
                  weight="regular"
                  size={18}
                  onClick={() => removeTask(index)}
                />
              </TaskInputWrapper>
            ))}
          </TasksContainer>
          <Button color="dark" onClick={addNewTask}>
            <Plus size={16} weight="bold" color="white" />
            Add another Task
          </Button>
        </ColWrapper>
        <Button fullWidth type="submit" disabled={!isValid}>
          Save
        </Button>
      </form>
      {/* <Skip>Skip Onboarding</Skip> */}
    </Container>
  )
}
