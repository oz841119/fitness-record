import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Backdrop } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { useState, ReactNode, useEffect, ChangeEvent, SetStateAction } from 'react';
import axios from 'axios';

const RecordForm:React.FC = () => {
	const [actionForm, setActionForm] = useState<ActionForm[]>([{date: '', action: '', weight: '', times: ''}])
	const copyForm = () => {
		setActionForm([...actionForm ,JSON.parse(JSON.stringify(actionForm[actionForm.length - 1]))])
	}
	const changeValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: any, key: string) => {
		const newActionForm = [...actionForm];	
		newActionForm[index][key] = event.target.value;
		setActionForm(newActionForm);
	}
	const submit = () => {
		if(isNaN(Number(actionForm[0].weight))) return
		if(isNaN(Number(actionForm[0].times))) return
		setIsDialog(true)
	}
	const BoxNode = actionForm.map((e, index) => (
		<Box key={index} component="form" sx={{'& > :not(style)': { m: 1 }}}>
			<span>{index + 1}.</span>
			<Input required placeholder="日期(YYYY-MM-DD)" size="small" value={actionForm[index].date} onChange={(event) => changeValue(event, index, 'date')}/>
			<Input required placeholder="動作" size="small" value={actionForm[index].action} onChange={(event) => changeValue(event, index, 'action')}/>
			<Input required placeholder="重量(KG)" size="small" value={actionForm[index].weight} onChange={(event) => changeValue(event, index, 'weight')}/>
			<Input required placeholder="次數(單組)" size="small" value={actionForm[index].times} onChange={(event) => changeValue(event, index, 'times')}/>
			<Button size="small" variant="outlined" onClick={copyForm}>複製一份</Button>
		</Box>
	))
	const [isDialog, setIsDialog] = useState<boolean>(false)
	const [userLineIdInpValue, setUserLineIdInpValue] = useState('')
	const changeUserLineIdInpValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setUserLineIdInpValue(event.target.value)
	}
	const handleClose = () => {
		setIsDialog(false)
	}
    const [isLoading, setIsLoading] = useState(false)
    const postRecord = () => {
        const apiUrl = 'https://fr-linebot.onrender.com/add_action_record'
        const config = {
            headers: {
                authorization: userLineIdInpValue
            }
        }
        const params:ActionForm = {
            date: actionForm[0].date,
            weight: actionForm[0].weight,
            action: actionForm[0].action,
            times: actionForm[0].times
        }
        setIsLoading(true)
        axios.post(apiUrl, params, config).then((res) => {
            handleClose()
            // window.localStorage.set('userLineId', userLineIdInpValue)
            console.log(res.data);
            setIsLoading(false)
        })
    }
	const DialogNode = (
		<Dialog open={isDialog}>
			<DialogTitle>輸入Line User ID</DialogTitle>
			<DialogContent>
				<Input value={userLineIdInpValue} onChange={changeUserLineIdInpValue}/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>取消</Button>
				<Button onClick={postRecord}>提交</Button>
			</DialogActions>
		</Dialog>
	) 
	return (
		<div>
			{BoxNode}
			<Button variant="contained" onClick={submit}>送出</Button>
			{DialogNode}
            <Backdrop open={isLoading} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <CircularProgress color="inherit" />
            </Backdrop>
		</div>
	)
}

export default RecordForm