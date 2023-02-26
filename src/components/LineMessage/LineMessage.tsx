import { ReactNode } from "react"

interface Message {
  _id: string
  date: string
  line_user_id: string
  message: string
}
interface Props {
  messageList: Message[]
}

const LineMessageList:React.FC<Props> = (props) => {
  const MessageListNode:ReactNode = props.messageList.map(e => (<div key={e._id}>{e._id} | {e.date} | {e.line_user_id} | {e.message}</div>
  ))
    return (
        <>
            <div>
                {MessageListNode}
            </div>
        </>
    )
}


export default LineMessageList
