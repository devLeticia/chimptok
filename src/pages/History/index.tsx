import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>
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
              <td>Concluded </td>
            </tr>
            <tr>
              <td>Task 1 </td>
              <td>20 min </td>
              <td>Two months ago </td>
              <td>Concluded </td>
            </tr>
            <tr>
              <td>Task 1 </td>
              <td>20 min </td>
              <td>Two months ago </td>
              <td>Concluded </td>
            </tr>
            <tr>
              <td>Task 1 </td>
              <td>20 min </td>
              <td>Two months ago </td>
              <td>Concluded </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
