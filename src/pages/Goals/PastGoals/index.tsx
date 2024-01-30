import { GoalCard } from '../GoalCard'
import { Container } from './styles'

export function PastGoals() {
  const pastGoals = [
    {
      createdAt: new Date('2024-03-10T14:45:00'),
      deadline: new Date('2024-10-15T23:59:59'),
      status: 2,
      hoursPerWeek: 1,
      totalHoursSpent: 12,
      progressPercentage: 20,
      goalName: 'Read the Full Old Testament',
      tasks: [
        'Read Genesis and Exodus',
        'Study the Psalms and Proverbs',
        'Read the historical books (Joshua, Judges, etc.)',
        'Explore the major prophets (Isaiah, Jeremiah, etc.)',
        'Read the minor prophets (Hosea, Joel, etc.)',
        'Study the Gospels (Matthew, Mark, Luke, John)',
        'Read the Acts of the Apostles',
      ],
    },
    {
      createdAt: new Date('2024-04-05T17:15:00'),
      deadline: new Date('2024-12-31T23:59:59'),
      status: 3,
      hoursPerWeek: 2,
      totalHoursSpent: 12,
      progressPercentage: 90,
      goalName: 'Complete IxDF Courses',
      tasks: [
        'Take a course on UX design fundamentals',
        'Learn about user research and usability testing',
        'Study interaction design principles',
        'Explore visual design and user interface (UI) principles',
        'Complete a course on prototyping and wireframing',
        'Learn about design thinking and problem-solving',
        'Study responsive web design principles',
      ],
    },
  ]
  return (
    <Container>
      {pastGoals.map((goal, index) => {
        return <GoalCard key={index} goal={goal}></GoalCard>
      })}
    </Container>
  )
}
