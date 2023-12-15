import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import { CyclesContext } from '../../contexts/CyclesContext'
import {
  HistoryContainer,
  EmptyHistoryContainer,
  HistoryList,
  Status,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, XCircle, WarningCircle } from 'phosphor-react'
import ChimpMeditating from '../../../public/chimp_meditating.svg'

export function History() {
  const { cycles } = useContext(CyclesContext)
  const navigate = useNavigate()

  function handleGoToTimer() {
    navigate('/')
  }

  return (
    <HistoryContainer>
      {cycles.length === 0 ? (
        <EmptyHistoryContainer>
          <h1>No Tasks in History</h1>
          <img src={ChimpMeditating} alt="Coolest Chimp logo smiling to you" />
          <p>
            I will not lose my temper with this person who has not started any
            tasks yet. I will not...
          </p>
          <button onClick={handleGoToTimer}>Start a New Task</button>
        </EmptyHistoryContainer>
      ) : (
        <HistoryList>
          <h1>History</h1>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td className="task">{cycle.task}</td>
                    <td>{cycle.minutesAmount} min</td>
                    <td>
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                        locale: enUS,
                      })}
                    </td>
                    <td>
                      {cycle.finishedDate && (
                        <Status statusColor="green">
                          <CheckCircle size={18} weight="fill" />
                          Concluded
                        </Status>
                      )}

                      {cycle.interruptedDate && (
                        <Status statusColor="red">
                          <XCircle size={18} weight="fill" />
                          Interrupted
                        </Status>
                      )}
                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status statusColor="yellow">
                          <WarningCircle size={18} weight="fill" />
                          Ongoing
                        </Status>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </HistoryList>
      )}
    </HistoryContainer>
  )
}
