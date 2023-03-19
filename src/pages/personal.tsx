import { Button, TextField } from "@mui/material";
import { useContext, useEffect } from "react";
import styles from '../styles/personal.module.css'
import { MyAppContext } from "@/pages/_app"

export default function personal() {
    const {userAlias} = useContext(MyAppContext)
    return (
        <div>
            <div className={styles.alias_wrap}>
                <TextField key={userAlias} size="small" focused color="secondary" id="aliasInp" label="名稱" defaultValue={userAlias}/>
                <Button size="small" variant="outlined">送出</Button>

            </div>
        </div>
    )
}