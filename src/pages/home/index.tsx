/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 10:15:41
 * @FilePath: \umiProject\src\pages\home\index.tsx
 * @Description:
 */

import { useQuery } from 'umi'
import { getHomeData } from './service/api'

export default function HomePage() {
  const { data, error, isLoading, refetch } = useQuery(
    ['homeData'],
    getHomeData,
  )

  console.log('@@@@@error======', error)
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
            </div>
          )}
        </>
      )}
    </>
  )
}
