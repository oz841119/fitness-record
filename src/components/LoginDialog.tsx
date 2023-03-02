import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function LoginDialog() {
    const [open, setOpen] = useState(true);
    const [userId, setUserId] = useState('')
    const handleClose = () => {
        setOpen(false);
    }
    const changeInpVal = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserId(event.target.value)
    }
    const login = () => {
        window.localStorage.setItem('lineUserId', userId)
        handleClose()
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>使用Line User ID進行讀取及紀錄操作?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    向Line機器人輸入"user"單字就可以獲取ID，將ID複製到這後即可登入，並記錄登入狀態。
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Line User ID"
                    fullWidth
                    required
                    variant="standard"
                    value={userId}
                    onChange={changeInpVal}
                />
                <DialogActions>
                    <Button onClick={handleClose}>暫不登入</Button>
                    <Button onClick={login}>登入</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}