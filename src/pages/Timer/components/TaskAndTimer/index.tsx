import { useCycles } from '../../../../contexts/CyclesContext'
import { Countdown } from '../Countdown'
import { NewTaskCycleForm } from '../NewTaskCycleForm'

export function TaskAndTimer() {
  const { activeCycle } = useCycles()
  return <>{activeCycle ? <Countdown /> : <NewTaskCycleForm />}</>
}
