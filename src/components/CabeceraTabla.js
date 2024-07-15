import { TableCell, TableHead, TableRow } from '@mui/material';
export default function CabeceraTabla(){
    return (           
            <TableHead>
              <TableRow>              
                <TableCell>Nombre</TableCell>
                <TableCell className="Column">Goles</TableCell>              
              </TableRow>
            </TableHead>   
      );
}