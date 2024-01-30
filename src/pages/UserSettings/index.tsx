import { useState } from 'react'
import { AccountInfo } from './components/AccountInfo'
import { CancelAccount } from './components/CancelAccount'
import { ProfileInfo } from './components/profileInfo'
import { SocialMedia } from './components/SocialMedia/index'
import { Support } from './components/Support'

import { MainContainer, DeleteAccountButton } from './styles'

export function UserSettings() {
  const [showCancelAccount, setShowCancelAccount] = useState(false)

  const handleCancelAccountClick = () => {
    setShowCancelAccount(!showCancelAccount)
  }

  return (
    <MainContainer>
      <ProfileInfo />
      {!showCancelAccount && (
        <>
          <AccountInfo />
          <SocialMedia />
          <Support />
          <DeleteAccountButton onClick={handleCancelAccountClick}>
            Cancel Account
          </DeleteAccountButton>
        </>
      )}
      {showCancelAccount && (
        <CancelAccount onCancelClick={handleCancelAccountClick} />
      )}
    </MainContainer>
  )
}
