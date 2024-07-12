import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
export default function List({list}){
    const resultado1=list.filter(valor=>valor.goles>=0).
    map(valor=>
      <div>{valor.name}
      : Goles {valor.goles}
      </div>
    )

    /*return(
        <>
        {resultado1}
        </>
    );*/
    return (
      <TableContainer component={Paper}>
        <Table>
          {/* Cabecera de la tabla */}
          <TableHead>
            <TableRow>              
              <TableCell>Nombre</TableCell>
              <TableCell>Goles</TableCell>              
            </TableRow>
          </TableHead>
          {/* Cuerpo de la tabla */}
          <TableBody>
            {list.map((list) => (
              <TableRow key={list.id}>
                <TableCell>{list.name}</TableCell>
                <TableCell>{list.goles}</TableCell>                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}