import axios from "axios";
import { useEffect, useState } from "react";
import TagsTable from '../components/TagsManager/TagsTable'

export default function TagsManager() {
    const [tags, setTags] = useState<string[]>([])
    const getTags = (): Promise<string[]> => {
        return new Promise(resolve => {
            const API_URL = process.env.NEXT_PUBLIC_API_PATH + '/action_tags'
            axios.get(API_URL, {headers: {authorization: window.localStorage.getItem('lineUserId')}})
                .then(res => {
                    resolve(res.data)
                })
        })
    }
    useEffect(() => {
        (async () => {
            setTags(await getTags())
        })()
    }, [])
    return (
        <div>
            {tags.length ? <TagsTable tags={tags}/> : <></> }
        </div>
    )
}