import CommingSoon from '../../../../public/coming-soon.svg'
import VerticalLogotype from '../../../../public/logos/vertical-logotype.svg'
import {
  ComingSoonContainer,
  CustomLogo,
  CustomDisclaimer,
  SocialMediaContainer,
} from './styles'
import { InstagramLogo, TwitterLogo } from 'phosphor-react'

const socialMediaLinks = {
  instagram: 'https://www.instagram.com/chimptok',
  twitter: 'https://www.twitter.com/chimptok',
}

export function ComingSoon() {
  return (
    <ComingSoonContainer>
      <CustomLogo src={VerticalLogotype} alt="We're about to Chimp It Up" />
      <CustomDisclaimer src={CommingSoon} alt="We're about to Chimp It Up" />
      <h3>
        Almost There! Follow Us On Social Media To Be The First To Know When We
        Launch
      </h3>
      <SocialMediaContainer>
        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo size={36} weight="fill" color="black" />
        </a>
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterLogo size={36} weight="fill" color="black" />
        </a>
      </SocialMediaContainer>
    </ComingSoonContainer>
  )
}
