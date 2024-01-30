import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'

import { HomeContainer, TimerContainer } from './styles'
// import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { CyclesContext } from '../../contexts/CyclesContext'
import { ProgressOfTheDay } from './components/ProgressOfTheDay/index'
import { ConsistencyOfTheWeek } from './components/ConsistencyOfTheWeek/index'
import { Card } from '../../components/Card'
// import { Button } from '../../components/Button'
import { NewTaskCycleForm } from './components/NewTaskCycleForm/index'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Write the task'),
  minutesAmount: zod
    .number()
    .min(5, 'Time must be at least 5 minutes long.')
    .max(60, 'Time must be at maxium 60 minutes long.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Timer() {
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
    <Card>
      <HomeContainer>
        <ConsistencyOfTheWeek />
        <ProgressOfTheDay goalOfTheDay={2} hoursDedicated={1} />

        <hr />

        <Countdown />
        <NewTaskCycleForm />
      </HomeContainer>
    </Card>
  )
}
