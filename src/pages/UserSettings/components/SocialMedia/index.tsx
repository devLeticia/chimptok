import { SealCheck, InstagramLogo } from '@phosphor-icons/react'
import {
  Card,
  CardTitle,
  WhyToFollowContainer,
  SocialMediaContainer,
  LinksContainer,
  SocialMediaItem,
} from './styles'

export function SocialMedia() {
  const socialMediaLinks = {
    instagram: 'https://www.instagram.com/chimptok',
    twitter: 'https://www.twitter.com/chimptok',
  }
  function openSocialMedia() {
    window.open(socialMediaLinks.instagram, '_blank')
  } 
  return (
    <div>
      <Card>
        <CardTitle>Follow Chimp on Social Media</CardTitle>
        <SocialMediaContainer>
          <LinksContainer onClick={openSocialMedia}>
            <SocialMediaItem>
              <SealCheck size={18} weight="fill" color="#36B4F0" />
              <InstagramLogo size={24} weight="fill" color="black" />
              <p>Instagram/Chimptok</p>
            </SocialMediaItem>
          </LinksContainer>
          <WhyToFollowContainer>
            <h1>Why should I follow?</h1>
            <p>
            {`Get tips, motivation, and sneak peeks! Stay ahead on your goal-smashing journey with updates and exclusive content. Let’s make progress together!`}
            </p>
          </WhyToFollowContainer>
        </SocialMediaContainer>
      </Card>
    </div>
  )
}
