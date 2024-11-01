import { useEffect, useState } from 'react'
import { AccountInfo } from './components/AccountInfo'
import { CancelAccount } from './components/CancelAccount'
import { SocialMedia } from './components/SocialMedia/index'
import { Support } from './components/Support'

import { MainContainer, DeleteAccountButton } from './styles'
import usersServices from '../../http/requests/users/users.service'
interface UserInfo {
  id: string;
  username: string;
  email: string;
}


interface ApiResponse {
  data: UserInfo[];
}
export function UserSettings() {
  const [showCancelAccount, setShowCancelAccount] = useState(false)
  const [userInfo, setUserInfo] = useState()

  const handleCancelAccountClick = () => {
    setShowCancelAccount(!showCancelAccount)
  }

  async function getAccountInfo() {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      return; 
    }
  
    try {
      const resp = await usersServices.infoAccount(userId);
      
      const responseData = resp as ApiResponse;
  
      if (responseData.data.length > 0) {
        const userInfo = responseData.data[0]; 
        console.log(userInfo); 
      } else {
        console.log('No user info available');
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAccountInfo()
  }, [])

  return (
    <MainContainer>
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
        <CancelAccount onHandleBack={() => handleCancelAccountClick} />
      )}
    </MainContainer>
  )
}
