import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ReactNode, useEffect, useState} from 'react';
import axios from 'axios';


const LineMessageTable:React.FC = () => {
    const [rows, setRows] = useState<LineMessage[]>([])
    useEffect(() => {
        axios.get('https://fr-linebot.onrender.com/get_user_message', {headers: {authorization: 'U0a709fc00747940211447784613e7de3'}})
            .then(res => {
                console.log('Get data of line message list');
                const mesList: LineMessage[] = res.data.reverse()
                setRows(mesList)
                console.log('Render data of line message list');
            })
        return 
    }, [])
    
    const TableBodyRows = rows.map(mes => (
        <TableRow key={mes._id}>
            <TableCell>{mes._id}</TableCell>
            <TableCell>{mes.line_user_id}</TableCell>
            <TableCell>{mes.date}</TableCell>
            <TableCell>{mes.message}</TableCell>
        </TableRow>
    ))
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Datebase ID</TableCell>
                        <TableCell>Line User ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Message</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {TableBodyRows}
                </TableBody>
            </Table>
        </TableContainer>  
    )
}

export default LineMessageTable