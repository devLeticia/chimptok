import { useEffect, useState } from 'react'
import { AccountInfo } from './components/AccountInfo'
import { CancelAccount } from './components/CancelAccount'
import { SocialMedia } from './components/SocialMedia/index'
import { Support } from './components/Support'

import { MainContainer, DeleteAccountButton } from './styles'
import usersServices from '../../http/requests/users/users.services'
interface UserInfo {
  id: string;
  username: string;
  email: string;
  // Other properties as needed
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
      return; // Exit early if userId is not available
    }
  
    try {
      const resp = await usersServices.infoAccount(userId);
      
      // Type assertion
      const responseData = resp as ApiResponse;
  
      if (responseData.data.length > 0) {
        const userInfo = responseData.data[0]; // Assuming first user info object
        console.log(userInfo); // Example usage
        // Handle setting state or further processing
      } else {
        console.log('No user info available');
        // Handle case where no user info is returned
      }
    } catch (err) {
      console.error(err);
      // Handle error as needed
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
        <CancelAccount onHandleBack={() => handleCancelAccountClick(false)} />
      )}
    </MainContainer>
  )
}
