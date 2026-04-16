

import { Alert, Box } from '@mui/material';
import { useState } from 'react';
import { EditForm } from '../components/formularios/FormularioDEedit';




export const PageEdit = () => {
  const [requestSuccess,setRequestSuccess] = useState<string | null>(null)
  const [requestError, setRequestError] =  useState<string | null>(null)
  return (
    <section>
        <h2>PageLogreg</h2>
        {!requestSuccess && <EditForm setRequestSuccess={setRequestSuccess} setRequestError={setRequestError}/>}
        <Box  sx={{maxWidth: 400, mx: "auto"}}>

        {requestSuccess && <Alert severity="success">Hemos registrado su solicitud, por favor vuelva de ingresar</Alert>}
        {requestError && <Alert severity="error" >Ha ocurrido un error: {requestError}</Alert>}
        </Box>
    
    </section>

  )
}