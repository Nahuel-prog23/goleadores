import Table from '@mui/material/Table';
export default function List({list}){
    const resultado1=list.filter(valor=>valor.goles>=0).
    map(valor=>
      <div>{valor.name}
      : Goles {valor.goles}
      </div>
    )
    return(
        <>
        {resultado1}
        </>
    );
}