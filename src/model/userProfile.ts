import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type UserProfileState = {
  name: string
  isLogin: boolean
  loginCount: number
  login: () => void
  logout: () => void
  changeName: (name: string) => void
}

const userProfileStore = create<UserProfileState>()(
  devtools(
    persist(
      (set) => ({
        name: 'xiangshangzhi',
        isLogin: false,
        loginCount: 0,
        login: () =>
          set((state) => ({ isLogin: true, loginCount: state.loginCount + 1 })),
        logout: () => set(() => ({ isLogin: false })),
        changeName: (by) => set(() => ({ name: by })),
      }),
      {
        name: 'bear-storage',
      },
    ),
  ),
)

export { userProfileStore }
