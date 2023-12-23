import {
  GoalRankingContainer,
  GoalContainer,
  ProgressBar,
  InfoContainer,
  LabelsContainer,
  SessionTitle,
  ListContainer,
  RankingNumber,
} from './styles'

export function GoalRanking() {
  return (
    <GoalRankingContainer>
      <SessionTitle>Goal Ranking</SessionTitle>
      <ListContainer>
        <GoalContainer>
          <RankingNumber>#1</RankingNumber>
          <InfoContainer>
            <LabelsContainer>
              <h1>Learn English</h1>
              <p>12 days left</p>
            </LabelsContainer>
            <ProgressBar>
              <div></div>
            </ProgressBar>
          </InfoContainer>
        </GoalContainer>

        <GoalContainer>
          <RankingNumber>#1</RankingNumber>
          <InfoContainer>
            <LabelsContainer>
              <h1>Learn English</h1>
              <p>12 days left</p>
            </LabelsContainer>
            <ProgressBar>
              <div></div>
            </ProgressBar>
          </InfoContainer>
        </GoalContainer>

        <GoalContainer>
          <RankingNumber>#1</RankingNumber>
          <InfoContainer>
            <LabelsContainer>
              <h1>Learn English</h1>
              <p>12 days left</p>
            </LabelsContainer>
            <ProgressBar>
              <div></div>
            </ProgressBar>
          </InfoContainer>
        </GoalContainer>

        <GoalContainer>
          <RankingNumber>#2</RankingNumber>
          <InfoContainer>
            <LabelsContainer>
              <h1>Learn English</h1>
              <p>12 days left</p>
            </LabelsContainer>
            <ProgressBar>
              <div></div>
            </ProgressBar>
          </InfoContainer>
        </GoalContainer>
        <GoalContainer>
          <RankingNumber>#3</RankingNumber>
          <InfoContainer>
            <LabelsContainer>
              <h1>Learn English</h1>
              <p>12 days left</p>
            </LabelsContainer>
            <ProgressBar>
              <div></div>
            </ProgressBar>
          </InfoContainer>
        </GoalContainer>
      </ListContainer>
    </GoalRankingContainer>
  )
}
