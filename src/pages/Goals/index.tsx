import { NavLink } from 'react-router-dom'
import { GoalsContainer } from './styles'
import { GoalCard } from './GoalCard/index'

export function Goals() {
  return (
    <>
      <GoalsContainer>
        <nav>
          <div>
            <NavLink to="/active" title="Timer" className="active">
              Active Goals
            </NavLink>
            <NavLink to="/past" title="Timer">
              Past Goals
            </NavLink>
          </div>
          <button>Add Goal</button>
        </nav>
        <GoalCard />
      </GoalsContainer>
    </>
  )
}
