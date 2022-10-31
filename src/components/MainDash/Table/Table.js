import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Table.css';

function createData(
  name, trackingId, date, status
) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Frozen yoghurt', 189005247, "March 22 2022", "Approved"),
  createData('Ice cream sandwich', 189005247, "March 22 2022", "Approved"),
  createData('Eclair', 189005142, "March 19 2022", "Pending"),
  createData('Cupcake', 189004874, "March 17 2022", "Delivered"),
  createData('Gingerbread', 189003485, "March 15 2022", "Delivered"),
];

const makeStyle=(status) => {
  if(status === "Approved"){
    return {
      background: "rgba(145, 254, 159, 0.5",
      color: "green",
    };
  }else if(status === "Pending"){
    return {
      background: "#ffadad8f",
      color: "red"
    }
  }else if(status === "Delivered"){
    return {
      color: "white",
      background: "rgba(35, 35, 207, 0.7)",
    }
  }
}

export default function BasicTable() {
  return (
    <div className="table">
      <h3>Recent Orders</h3>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className="table-status" style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='table-detail'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}