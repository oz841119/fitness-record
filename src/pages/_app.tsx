import { AppProps } from 'next/app'
import { useEffect, useState, createContext} from 'react'
import LoginDialog from '../components/LoginDialog'
import Layout from '../components/Layout'
import '../styles/global.css'
import axios from 'axios'

axios.interceptors.request.use(config => {
  const lineUserId = window.localStorage.getItem('lineUserId')
  config.headers.Authorization = lineUserId
  return config;
})

interface IMyAppState {
  lineUserId: string | null;
  setLineUserId: React.Dispatch<React.SetStateAction<string | null>>;
  userAlias: string | null,
  setUserAlias: React.Dispatch<React.SetStateAction<string | null>>;
}
export const MyAppContext = createContext<IMyAppState>({
  lineUserId: null,
  setLineUserId: () => {},
  userAlias: null,
  setUserAlias: () => {},
});

function MyApp({ Component }: AppProps) {
  const [lineUserId, setLineUserId] = useState<string | null>(null)
  const [userAlias, setUserAlias] = useState<string | null>(null)
  useEffect(() => {
    const tempLineUserId = window.localStorage.getItem('lineUserId')
    setLineUserId(tempLineUserId)
    if(tempLineUserId) {
      const API_URL = process.env.NEXT_PUBLIC_API_PATH + '/user_alias'
      axios.post(API_URL)
        .then(res => {
          setUserAlias(res.data)
        })
    }
  }, [])  

  // 渲染當前頁面
  return (
    <MyAppContext.Provider value={{lineUserId, setLineUserId, userAlias, setUserAlias}}>
      <Layout>
        {lineUserId ? null : <LoginDialog></LoginDialog>}
        <Component/>
      </Layout>
    </MyAppContext.Provider>
  ) 
}

export default MyApp