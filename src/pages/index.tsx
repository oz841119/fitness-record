import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import LineMessageTable from '../components/LineMessageTable'
import RecordFrom from '../components/RecordFrom'

export default function Home(props: { messageList: LineMessage[] }) {
  return (
    <>
      <RecordFrom></RecordFrom>
      <LineMessageTable></LineMessageTable>
    </>
  )
}
