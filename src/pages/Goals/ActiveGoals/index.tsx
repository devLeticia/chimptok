import { GoalCard } from '../GoalCard'
import { Container, GoalWrapper, GoalIndex } from './styles'

export function ActiveGoals() {
  const activeGoals = [
    {
      createdAt: new Date('2024-01-20T08:00:00'),
      deadline: new Date('2024-06-30T23:59:59'),
      hoursPerWeek: 2,
      status: 1,
      totalHoursSpent: 20,
      progressPercentage: 67,
      goalName: 'Become Fluent in English',
      tasks: [
        'Learn basic greetings and introductions',
        'Practice speaking with a language exchange partner',
        'Read a short English article every day',
        'Watch English movies with subtitles',
        'Write a journal entry in English',
        'Take an online English course',
        'Join an English-speaking club or meetup',
      ],
    },
    {
      createdAt: new Date('2024-02-15T10:30:00'),
      deadline: new Date('2024-08-31T23:59:59'),
      hoursPerWeek: 3,
      status: 1,
      totalHoursSpent: 0,
      progressPercentage: 0,
      goalName: 'Learn French with Paul',
      tasks: [
        'Start with basic French vocabulary',
        'Listen to French podcasts for beginners',
        'Practice French pronunciation daily',
        "Read French children's books",
        'Take a beginner-level French course',
        'Watch French movies with subtitles',
        'Use language learning apps for French',
      ],
    },
    {
      createdAt: new Date('2024-03-10T14:45:00'),
      deadline: new Date('2024-10-15T23:59:59'),
      hoursPerWeek: 1,
      status: 1,
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
      hoursPerWeek: 2,
      status: 1,
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
      {activeGoals.map((goal, index) => {
        return (
          <GoalWrapper key={index}>
            <GoalIndex>{index + 1}</GoalIndex>
            <GoalCard goal={goal}></GoalCard>
          </GoalWrapper>
        )
      })}
    </Container>
  )
}
