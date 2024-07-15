import { TableCell, TableHead, TableRow } from '@mui/material';
export default function CabeceraTabla({cabecera}){
    return (           
            <TableHead>
              <TableRow>                                            
              {cabecera.map((cabecera) => (                            
                <TableCell>{cabecera}</TableCell>                              
            ))}
              </TableRow>              
            </TableHead>   
      );
}