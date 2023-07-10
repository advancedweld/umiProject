/*
 * @Author: xiangshangzhi
 * @Date: 2023-07-07 11:13:35
 * @FilePath: \umiProject\src\pages\404\index.tsx
 * @Description:
 */

import { useLocation } from 'umi'
import { userProfileStore } from '@/model/userProfile'
export default function NotFoundPage() {

    const location = useLocation()
    console.log('@@@@@location', location)
    const userProfile = userProfileStore()
    console.log('@@@@@userProfile======', userProfile)
  return (
    <div>
      <h1>Page not Found!</h1>
    </div>
  )
}
