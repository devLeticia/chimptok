import { useEffect, useState } from 'react'
import { AccountInfo } from './components/AccountInfo'
import { CancelAccount } from './components/CancelAccount'
import { ProfileInfo } from './components/profileInfo'
import { SocialMedia } from './components/SocialMedia/index'
import { Support } from './components/Support'

import { MainContainer, DeleteAccountButton } from './styles'
import usersServices from '../../http/requests/users/users.services'

export function UserSettings() {
  const [showCancelAccount, setShowCancelAccount] = useState(false)
  const [userInfo, setUserInfo] = useState()

  const handleCancelAccountClick = () => {
    setShowCancelAccount(!showCancelAccount)
  }

  async function getAccountInfo() {
    const userId = localStorage.getItem('user_id')
    if (userId) {
      usersServices
        .infoAccount(userId)
        .then((resp) => {
          if (resp.data.length > 0) setUserInfo(resp.data)
          // console.log('pegou historico de cycles com sucesso')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    getAccountInfo()
  }, [])

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
