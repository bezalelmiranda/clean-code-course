// Causa vs Efeito
import { useEffect, useState } from "react"

interface User {
  name: string;
  gitHubAddress: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        gitHubAddress: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfile() {
  const [isUserNameLoading, setIsUserNameLoading] = useState(false)
  const [userGitHubData, setUserGitHubData] = useState<User>()

  useEffect(() => {
    function loadUser() {
      setIsUserNameLoading(true)

      const fetchUserResponseData = fetchUser()

      setUserGitHubData(fetchUserResponseData.data.user)
      
      setIsUserNameLoading(false)
    }

    loadUser()
  })

  if (isUserNameLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userGitHubData?.github}.png`} alt="" />
      <a href={userGitHubData?.gitHubAddress}>{userGitHubData?.name}</a>
    </div>
  )
}


