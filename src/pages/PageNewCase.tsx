
import { Alert, Box } from '@mui/material';
import { useState } from 'react';
import { CaseForm } from '../components/formularios/FormularioDEcaso';




export const PageNewCase = () => {
  const [requestSuccess,setRequestSuccess] = useState<string | null>(null)
  const [requestError, setRequestError] =  useState<string | null>(null)
  
  return (
    <section>
        <h2>NewCase Page</h2>

        <Box  sx={{maxWidth: 400, mx: "auto"}}>
        {!requestSuccess && <CaseForm setRequestSuccess={setRequestSuccess} setRequestError={setRequestError}/>}
        {requestSuccess && <Alert severity="success">{requestSuccess === "Usuario Encontrado" ? "Bienvenid@ a EnRedat" : "Hemos registrado su solicitud, ya se encuentra en revision"}</Alert>}
        {requestError && <Alert severity="error" >Ha ocurrido un error: {requestError}</Alert>}
        </Box>        
    </section>
  )
}
