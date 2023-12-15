import { HandPalm } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
// import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { CyclesContext } from '../../contexts/CyclesContext'
import { ProgressOfTheDay } from './components/ProgressOfTheDay/index'
import { ConsistencyOfTheWeek } from './components/ConsistencyOfTheWeek/index'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Write the task'),
  minutesAmount: zod
    .number()
    .min(5, 'Time must be at least 5 minutes long.')
    .max(60, 'Time must be at maxium 60 minutes long.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    // reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>{/* <NewCycleForm /> */}</FormProvider>
        <ConsistencyOfTheWeek />
        <ProgressOfTheDay />

        <hr />
        <p>Click the button to choose a task to work on</p>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interrupt
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            Start a New Task
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
