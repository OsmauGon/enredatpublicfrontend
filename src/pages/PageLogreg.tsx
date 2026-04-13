

import { Alert, Box } from '@mui/material';
import { useState } from 'react';
import { UserForm } from '../components/formularios/FormularioDEusuario';

type UserForm = {
  email: string;
  pass: string;
}

export const PageLogreg = () => {
  const [requestSuccess,setRequestSuccess] = useState<string | null>(null)
  const [requestError, setRequestError] =  useState<string | null>(null)
  return (
    <section>
        <h2>PageLogreg</h2>
        {!requestSuccess && <UserForm setRequestSuccess={setRequestSuccess} setRequestError={setRequestError}/>}
        <Box  sx={{maxWidth: 400, mx: "auto"}}>

        {requestSuccess && <Alert severity="success">{requestSuccess === "Usuario Encontrado" ? "Bienvenid@ a EnRedat" : "Hemos registrado su solicitud, ya se encuentra en revision"}</Alert>}
        {requestError && <Alert severity="error" >Ha ocurrido un error: {requestError}</Alert>}
        </Box>
    
    </section>

  )
}