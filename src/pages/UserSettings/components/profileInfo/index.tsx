import {
  Container,
  InfosContainer,
  ContactContainer,
  Name,
  Email,
  MembershipDataContainer,
  SignUpDate,
  MembershipCount,
} from './styles'
import ChimpUser from '../../../../../public/chimp_profile.png'

export function ProfileInfo() {
  return (
    <Container>
      <img src="" alt="" />
      <InfosContainer>
        <img src={ChimpUser} alt="Coolest Chimp logo smiling to you" />
        <ContactContainer>
          <Name>LETTY</Name>
          <Email>leticiagoncalves.tech@gmail.com</Email>
        </ContactContainer>
        <MembershipDataContainer>
          <SignUpDate>since 24th november 2023</SignUpDate>
          <MembershipCount>
            <span>266</span>Days Chasing Your Goals
          </MembershipCount>
        </MembershipDataContainer>
      </InfosContainer>
    </Container>
  )
}
