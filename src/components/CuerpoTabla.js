import { TableBody, TableCell, TableRow } from '@mui/material';
export default function CuerpoTabla({cabecera, list}){
  var arraySize:int = cabecera.length;
  
    return (      
          <TableBody>
            {list.map((list) => (
              <TableRow key={list.id}>
                {cabecera.map((cabecera) => (
                  <>
                  <TableCell>{list[cabecera]}</TableCell>                  
                  </>
                ))}      
              </TableRow>
            ))}
          </TableBody>
    );
}