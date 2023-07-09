/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\home\index.tsx
 * @Description:
 */
import React from 'react'
import { useQuery, useQueryClient } from 'umi'
import { Button, Space } from 'antd'
import { userProfileStore } from '@/model/userProfile'
import { getHomeData } from './service/api'

const HomePage: React.FC<any> = () => {
  const { data, error, isLoading, refetch } = useQuery(
    ['homeData'],
    getHomeData,
    {
      retry: false,
      enabled: true,
      onError: (err) => {
        console.log('@@@@@err======', err)
      },
    },
  )

  const userProfile = userProfileStore()
  console.log('@@@@@userProfile======', userProfile)

  const changeName = () => {
    console.log('@@@@@userProfile======', userProfile)
    const name = userProfile.name
    userProfile.changeName(name === 'xiaoming' ? 'lorentz' : 'xiaoming')
  }
  const isLogin = userProfile.isLogin
  const changeLoginStatus = () => {
    if (isLogin) {
      userProfile.logout()
    } else {
      userProfile.login()
    }
  }

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h1>this is HomePage</h1>
          <h1>{`home data is ${data}`}</h1>
          <h1>{`current name is ${userProfile.name}`}</h1>
          <h1>{`登录状态  ${isLogin ? '已登陆' : '未登录'}`}</h1>
          <Space>
            <Button onClick={changeName} type='primary'>
              change name
            </Button>
            <Button onClick={changeLoginStatus} type='primary'>
              change loginstatus
            </Button>
            <Button> request </Button>
          </Space>
        </div>
      )}
    </>
  )
}

export default HomePage
