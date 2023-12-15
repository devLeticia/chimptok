import { ConsistencyContainer } from './styles'

export function Consistency() {
  return (
    <ConsistencyContainer>
      <div>
        <h1>Consistency</h1>
        <select name="consistencyFilter" id="1">
          <option value="Current month">Current Month</option>
          <option value="Current year">CurrentYear</option>
        </select>
      </div>
    </ConsistencyContainer>
  )
}
