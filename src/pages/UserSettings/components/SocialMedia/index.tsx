import { CheckCircle, InstagramLogo } from 'phosphor-react'
import {
  Card,
  CardTitle,
  WhyToFollowContainer,
  SocialMediaContainer,
  LinksContainer,
  SocialMediaItem,
} from './styles'

export function SocialMedia() {
  return (
    <div>
      <Card>
        <CardTitle>Follow Chimp on Social Media</CardTitle>
        <SocialMediaContainer>
          <LinksContainer>
            <SocialMediaItem>
              <CheckCircle size={18} weight="fill" color="#32de84" />
              <InstagramLogo size={24} weight="fill" color="black" />
              <p>Instagram</p>
            </SocialMediaItem>
          </LinksContainer>
          <WhyToFollowContainer>
            <h1>Why should I follow?</h1>
            <p>
              ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </WhyToFollowContainer>
        </SocialMediaContainer>
      </Card>
    </div>
  )
}
