import { StepProgress } from './styles'

interface DomainProgressProps {
  progress: number,
  animated: boolean,
  children: React.ReactNode
}

export function DomainProgressBar({ progress, animated, children }: DomainProgressProps) {
  return <StepProgress progress={progress} animated={animated}>{children}</StepProgress>
}
