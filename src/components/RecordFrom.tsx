import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, ReactNode, useEffect, ChangeEvent, SetStateAction } from 'react';

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
		console.log(123);
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
	const DialogNode = (
		<Dialog open={isDialog}>
			<DialogTitle>輸入Line User ID</DialogTitle>
			<DialogContent>
				<Input value={userLineIdInpValue} onChange={changeUserLineIdInpValue}/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>取消</Button>
				<Button onClick={handleClose}>提交</Button>
			</DialogActions>
		</Dialog>
	) 
	return (
		<div>
			{BoxNode}
			<Button variant="contained" onClick={submit}>送出</Button>
			{DialogNode}
		</div>
	)
}

export default RecordForm