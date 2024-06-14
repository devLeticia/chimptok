import { Button } from '../../../components/Button'
import {
  SuperHeader,
  Subtitle,
  SectionWrapper,
  LinksContainer,
  SocialMediaItem,
  StyledCheckCircle,
} from './styles'

import { InstagramLogo } from 'phosphor-react'

export function StepThree() {
  return (
    <>
      <SuperHeader>SOCIAL MEDIAS</SuperHeader>
      <Subtitle>Get Help from Chimp on Socials</Subtitle>
      <SectionWrapper>
        <p>
          ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris:
        </p>
      </SectionWrapper>
      <LinksContainer>
        <SocialMediaItem>
          <StyledCheckCircle size={18} weight="fill" />
          <InstagramLogo size={24} weight="fill" color="black" />
          <p>Instagram</p>
        </SocialMediaItem>
      </LinksContainer>
      <SectionWrapper>
        <Button>Start with Chimptok</Button>
        <Button color="dark">Go back</Button>
      </SectionWrapper>
    </>
  )
}
