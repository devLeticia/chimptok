import { NavLink } from 'react-router-dom'
import { GoalsContainer } from './styles'
import { GoalCard } from './GoalCard/index'
import { Card } from '../../components/Card'

export function Goals() {
  return (
    <>
      <Card>
        <GoalsContainer>
          <nav>
            <NavLink to="/active" title="Timer" className="active">
              Active Goals
            </NavLink>
            <NavLink to="/past" title="Timer">
              Past Goals
            </NavLink>
            <button>Add Goal</button>
          </nav>
          <GoalCard />
        </GoalsContainer>
      </Card>
    </>
  )
}
