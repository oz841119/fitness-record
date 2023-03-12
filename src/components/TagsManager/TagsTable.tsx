
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

type Props = {
    tags: string[];
};

function Row(props: {tag: string}) {
    const {tag} = props
    return (
        <TableRow>
            <TableCell></TableCell>
            <TableCell>{tag}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
        </TableRow>
    )
}
  

function TagsTable(props: Props)  {
    const { tags } = props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>訓練動作</TableCell>
                    <TableCell align="right">已紀錄組數</TableCell>
                    <TableCell align="right">平均訓練重量</TableCell>
                    <TableCell align="right">平均訓練容量</TableCell>
                    <TableCell align="right">操作欄</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tags.map((tag) => (<Row key={tag} tag={tag}/>))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TagsTable