/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\home\index.tsx
 * @Description:
 */
import React from 'react'
import { useQuery } from 'umi'
import { userProfileStore } from '@/model/userProfile'
import { getHomeData } from './service/api'
import { Button } from 'antd'
const HomePage: React.FC<any> = () => {
  const { data, error, isLoading, refetch } = useQuery(
    ['homeData'],
    getHomeData,
  )

  const userProfile = userProfileStore()
  console.log('@@@@@userProfile======', userProfile)

  const changeName = () => {
    console.log('@@@@@userProfile======', userProfile)
    const name = userProfile.name
    userProfile.changeName(name === 'xiaoming' ? 'lorentz' : 'xiaoming')
  }
  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          {error ? (
            <div>error</div>
          ) : (
            <div>
              <h1>this is HomePage</h1>
              <h1>{`home data is ${data}`}</h1>
              <h1>{`current name is ${userProfile.name}`}</h1>
              <Button onClick={changeName}> change name</Button>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default HomePage
