import { StepProgress } from './styles'

interface DomainProgressProps {
  progress: number
}

export function DomainProgressBar({ progress }: DomainProgressProps) {
  return <StepProgress progress={progress}></StepProgress>
}
