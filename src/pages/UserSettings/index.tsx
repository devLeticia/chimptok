import { AccountInfo } from './components/AccountInfo'
import { CancelAccount } from './components/CancelAccount'
import { ProfileInfo } from './components/profileInfo'
import { SocialMedia } from './components/SocialMedia/index'
import { Support } from './components/Support'

import { MainContainer, DeleteAccountButton } from './styles'

export function UserSettings() {
  return (
    <MainContainer>
      <ProfileInfo />
      <AccountInfo />
      <SocialMedia />
      <Support />
      <CancelAccount />
      <DeleteAccountButton>Delete Account</DeleteAccountButton>
    </MainContainer>
  )
}
