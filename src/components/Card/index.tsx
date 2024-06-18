import { CardWrapper } from './styles'

interface CardProps {
  children: React.ReactNode
}
export function Card({ children }: CardProps) {
  return <CardWrapper> {children}</CardWrapper>
}
