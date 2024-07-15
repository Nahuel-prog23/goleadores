import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CabeceraTabla from './CabeceraTabla.js';
import CuerpoTabla from './CuerpoTabla.js';
export default function List({list,cabecera}){    
    return (
      <TableContainer component={Paper}>
        <Table className="Tabla">
          {/* Cabecera de la tabla */}
          <CabeceraTabla cabecera={cabecera}/>
          {/* Cuerpo de la tabla */}
          <CuerpoTabla cabecera={cabecera} list={list}/>          
        </Table>
      </TableContainer>
    );
}