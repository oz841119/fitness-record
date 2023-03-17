import { MyAppContext } from "@/pages/_app"
import { Button, Drawer } from "@mui/material"
import Link from 'next/link'
import { useContext } from "react"
import styles from '../styles/LeftDrawer.module.css'

interface LeftDrawerProps {
    isOpen: boolean
    toggleDrawer(): void
}

export default function LeftDrawer(props: LeftDrawerProps) {
    const {userAlias} = useContext(MyAppContext)
    return (
        <Drawer
            anchor={'left'}
            open={props.isOpen}
            onClose={props.toggleDrawer}
            PaperProps={{ sx: { width: 250 } }}
        >   
            <div className={styles.title}>Fitness<br/>Record</div>
            <div className={styles.alias}>{userAlias}</div>
            <Button>
                <Link href="/echarts">Echarts</Link>
            </Button>
            <Button>
                <Link href="/record">Record</Link>
            </Button>
            <Button>
                <Link href="/tags-manager">動作管理</Link>
            </Button>
            <Button>
                <Link href="/personal">個人資料</Link>
            </Button>
        </Drawer>
    )
    
}