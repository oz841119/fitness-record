import { Inter } from 'next/font/google'
import axios from "axios"
import LineMessage from '@/components/LineMessage/LineMessage'
import { GetServerSideProps } from 'next';
const inter = Inter({ subsets: ['latin'] })

interface Message {
  _id: string
  date: string
  line_user_id: string
  message: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const messageResponse = await axios.get('https://fr-linebot.onrender.com/get_message')
  const data = messageResponse.data
  return {
    props: {messageList: data}, // will be passed to the page component as props
  }
}


export default function Home(props: { messageList: Message[] }) {
  return (
    <>
      <LineMessage messageList={props.messageList}/>
    </>
  )
}
