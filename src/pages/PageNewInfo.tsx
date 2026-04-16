import { Alert, Box } from '@mui/material';
import { useState } from 'react';
//import { InfoForm } from '../components/formularios/FormularioDEinfo';
import { InfoForm } from '../components/formularios/FormularioDEinfo3';




export const PageNewInfo = () => {
  const [requestSuccess,setRequestSuccess] = useState<string | null>(null)
  const [requestError, setRequestError] =  useState<string | null>(null)
  
  return (
    <section>
        <h2>NewInfot Page</h2>

        <Box  sx={{maxWidth: 400, mx: "auto"}}>
        {!requestSuccess && <InfoForm setRequestSuccess={setRequestSuccess} setRequestError={setRequestError}/>}
        {requestSuccess && <Alert severity="success">{requestSuccess === "Usuario Encontrado" ? "Bienvenid@ a EnRedat" : "Hemos registrado su solicitud, ya se encuentra en revision"}</Alert>}
        {requestError && <Alert severity="error" >Ha ocurrido un error: {requestError}</Alert>}
        </Box>        
    </section>
  )
}
