import { HistoryContainer, HistoryList, Status } from './styles'
import { useContext } from 'react'
import { CyclesContext } from './../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>My history</h1>
      <pre>{JSON.stringify(cycles, null, 2)}</pre>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1 </td>
              <td>20 min </td>
              <td>Two months ago </td>
              <td>
                <Status statusColor="green">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1 </td>
              <td>20 min </td>
              <td>Two months ago </td>
              <td>
                <Status statusColor="red">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1 </td>
              <td>20 min </td>
              <td>Two months ago </td>
              <td>
                <Status statusColor="yellow">Concluded</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1 </td>
              <td>20 min </td>
              <td>Two months ago </td>
              <td>
                <Status statusColor="green">Concluded</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
