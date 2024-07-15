import { TableBody, TableCell, TableRow } from '@mui/material';
export default function CuerpoTabla({list}){
    return (      
          <TableBody>
            {list.map((list) => (
              <TableRow key={list.id}>
                <TableCell>{list.name}</TableCell>
                <TableCell className="Column">{list.goles}</TableCell>                
              </TableRow>
            ))}
          </TableBody>
    );
}