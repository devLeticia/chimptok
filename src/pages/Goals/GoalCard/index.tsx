import {
  GoalContainer,
  GoalIndex,
  CardContainer,
  LabelRow,
  CardTitle,
  ProgressBar,
  TaskCounterContainer,
  TaskListContainer,
  TaskIndex,
  Task,
} from './styles'
import { CaretRight } from 'phosphor-react'

const goals = [
  {
    name: 'Become Fluent in English',
    tasks: [
      'Do something',
      'Do something just like this',
      'Do something fnwoiefnwe foiwejfw oifjwe oijfwe ',
      'Do something foweijfwpoefpwoej',
      'Do something',
    ],
  },
  {
    name: 'Become Fluent in English',
    tasks: [
      'Do something',
      'Do something',
      'Do something',
      'Do something',
      'Do something',
    ],
  },
]

export function GoalCard() {
  return (
    <GoalContainer>
      <GoalIndex>1</GoalIndex>
      <CardContainer>
        <LabelRow>
          <p>2 hours per week</p>
          <p>up to 20/06/2024 </p>
        </LabelRow>
        <hr />
        <CardTitle>Become fluent in English</CardTitle>
        <ProgressBar>
          <div></div>
        </ProgressBar>
        <TaskCounterContainer>
          <CaretRight size={20} weight="fill" />
          <span>{goals[1].tasks.length} tasks</span>
        </TaskCounterContainer>
        {goals[0].tasks.map((task, index) => {
          return (
            <TaskListContainer key="index">
              <TaskIndex>{index + 1}</TaskIndex>
              <Task>{task}</Task>
            </TaskListContainer>
          )
        })}
        {/* <button>Edit goals</button> */}
      </CardContainer>
    </GoalContainer>
  )
}
