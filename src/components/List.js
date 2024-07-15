import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CabeceraTabla from './CabeceraTabla.js';
import CuerpoTabla from './CuerpoTabla.js';
export default function List({list}){    
    return (
      <TableContainer component={Paper}>
        <Table className="Tabla">
          {/* Cabecera de la tabla */}
          <CabeceraTabla />
          {/* Cuerpo de la tabla */}
          <CuerpoTabla list={list}/>          
        </Table>
      </TableContainer>
    );
}