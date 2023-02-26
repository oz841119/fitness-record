import axios from "axios"
import React, { useEffect, useState } from "react"


const LineMessageList:React.FC = () => {
    const [mesList, setMesList] = useState([])
    const mesListNode = mesList.map(({date, message}, index) => (
        <div key={index}>{message}</div>
    ))
    useEffect(() => {
        axios.get('https://fr-linebot.onrender.com/get_message').then(res => {
            console.log(res.data);
            setMesList(res.data)
        })
    })
    return (
        <>
            <div>
                {mesListNode}
            </div>
        </>
    )
}


export default LineMessageList
