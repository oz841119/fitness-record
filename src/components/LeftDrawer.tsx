import { Button, Drawer } from "@mui/material"
import React from "react"
import Link from 'next/link'


interface LeftDrawerProps {
    isOpen: boolean
    toggleDrawer(): void
}

export default function LeftDrawer(props: LeftDrawerProps) {
    return (
        <Drawer
            anchor={'left'}
            open={props.isOpen}
            onClose={props.toggleDrawer}
        >
            <Button>
                <Link href="/echarts">Echarts</Link>
            </Button>
            <Button>
                <Link href="/record">Record</Link>
            </Button>
            <Button>
                <Link href="/tags-manager">動作管理</Link>
            </Button>
        </Drawer>

    )
    
}