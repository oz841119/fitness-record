import axios from "axios"
import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface record {
	_id: string
	date: string
	times: number
	weight: number
	writeTime: number
	action: string
}

export default function Record() {
	const [recordList, setRecordList] = useState([])
	useEffect(() => {
		axios.get('https://fr-linebot.onrender.com/get_action_record', {headers: {authorization: window.localStorage.getItem('lineUserId')}})
			.then(res => {
				setRecordList(res.data)
			})
			.catch(err => {
				console.dir(err);
			})
	}, [])

	const recordTable = (
		<TableContainer component={Paper}>
			<Table sx={{maxWidth: 700}} size="small">
				<TableHead>
					<TableRow>
						<TableCell>日期</TableCell>
						<TableCell align="right">動作</TableCell>
						<TableCell align="right">重量</TableCell>
						<TableCell align="right">次數</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						recordList.map((record: record) => (
							<TableRow key={record._id}>
								<TableCell component="th" scope="row">{record.date}</TableCell>
								<TableCell align="right">{record.action}</TableCell>
								<TableCell align="right">{record.weight}</TableCell>
								<TableCell align="right">{record.times}</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	)
	return (
		<div>
			{recordTable}
		</div>
	)
}
