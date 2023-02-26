import { Inter } from 'next/font/google'
import LineMessage from '@/components/LineMessage/LineMessage'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LineMessage/>
  )
}
