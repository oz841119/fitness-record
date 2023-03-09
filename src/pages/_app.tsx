import { AppProps } from 'next/app'
import { useEffect, useState, createContext} from 'react'
import LoginDialog from '../components/LoginDialog'
import Layout from '../components/Layout'
import '../styles/global.css'
interface IMyAppState {
  lineUserId: string | null;
  setLineUserId: React.Dispatch<React.SetStateAction<string | null>>;
}
export const MyAppContext = createContext<IMyAppState>({
  lineUserId: null,
  setLineUserId: () => {}
});

function MyApp({ Component }: AppProps) {
  const [lineUserId, setLineUserId] = useState<string | null>(null)
  useEffect(() => {
    setLineUserId(window.localStorage.getItem('lineUserId'))
  }, [])

  // 渲染當前頁面
  return (
    <MyAppContext.Provider value={{lineUserId, setLineUserId}}>
      <Layout>
        {lineUserId ? null : <LoginDialog></LoginDialog>}
        <Component/>
      </Layout>
    </MyAppContext.Provider>
  )
}

export default MyApp