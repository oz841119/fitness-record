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
        const API_URL = process.env.NEXT_PUBLIC_API_PATH + '/line_message'
        axios.get(API_URL)
            .then(res => {
                console.log('Get data of line message list');
                const mesList: LineMessage[] = res.data.reverse()
                setRows(mesList)
                console.log('Render data of line message list');
            })
            .catch(err => {})
        return 
    }, [])
    
    const TableBodyRows = rows.length > 0 ? 
        rows.map(mes => (
            <TableRow key={mes._id}>
                <TableCell>{mes._id}</TableCell>
                <TableCell>{mes.line_user_id}</TableCell>
                <TableCell>{mes.date}</TableCell>
                <TableCell>{mes.message}</TableCell>
            </TableRow>)
        ) : (
            <TableRow>
                <TableCell align="center" colSpan={4}>
                暫無數據，請檢查登入或是否有紀錄
                </TableCell>
            </TableRow>
        )
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