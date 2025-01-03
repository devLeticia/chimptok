import {
  Container,
  InfosContainer,
  ContactContainer,
  Name,
  Email,
  MembershipDataContainer,
  SignUpDate,
  MembershipCount,
} from './styles';
import ChimpPicture from '../../../../../public/ChimpPicture.png';
import { format } from 'date-fns';

export function ProfileInfo() {
  function getUserDetails(): any {
    const storedUser = localStorage.getItem('chimp_user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  }

  const userDetails = getUserDetails();


  const userName = userDetails?.name || 'Guest';
  const userEmail = userDetails?.email || 'No email available';
  const signUpDate = userDetails?.createdAt ? new Date(userDetails.createdAt).toLocaleDateString() : 'Unknown date';


  const calculateDaysSinceSignUp = (): number => {
    if (userDetails?.createdAt) {
      const signUpDate = new Date(userDetails.createdAt);
      const today = new Date();
      const differenceInTime = today.getTime() - signUpDate.getTime();
      const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
      return differenceInDays;
    }
    return 0;
  };

  const daysChasingGoals = calculateDaysSinceSignUp();
  const formattedDate = format(new Date(signUpDate), 'MMMM d, yyyy');
  return (
    <Container>
      <img src="" alt="" />
      <InfosContainer>
        <img src={ChimpPicture} alt="Coolest Chimp logo smiling to you" />
        <ContactContainer>
          <Name>{userName}</Name> 
          <Email>{userEmail}</Email> 
        </ContactContainer>
        <MembershipDataContainer>
          <SignUpDate>since {formattedDate}</SignUpDate>
          <MembershipCount>
            <span>{daysChasingGoals > 1 ? daysChasingGoals : 'Day One:'}</span> {daysChasingGoals > 0 ? ('days chasing your goals')  : ('goals in motion!')}
          </MembershipCount>
        </MembershipDataContainer>
      </InfosContainer>
    </Container>
  );
}
