import { FormContainer, MinutesAmount, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from './../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I will work in</label>
      <TaskInput
        disabled={!!activeCycle}
        id="task"
        list="task-suggestions"
        placeholder="Give a name to your project"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto ergergergerger1"></option>
        <option value="Projeto 1"></option>
        <option value="Projeto 1"></option>
        <option value="Banana"></option>
      </datalist>

      <label htmlFor="minutesAmount">during</label>
      <MinutesAmount
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
