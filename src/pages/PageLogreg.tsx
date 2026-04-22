

import { Alert, Box } from '@mui/material';
import { useState } from 'react';
//import { UserForm } from '../components/formularios/FormularioDEusuario';
import { LoginForm, RegisterForm } from '../components/formularios/FormularioDEingreso';



export const PageLogreg = () => {
  const [requestSuccess,setRequestSuccess] = useState<string | null>(null)
  const [requestError, setRequestError] =  useState<string | null>(null)
  const [requestType,setRequestType] = useState<"userLogin" | "userRegister" | "atRegister">("userLogin")
    
  return (
    <section>
        <h2>Ingrese</h2>
        {
          //!requestSuccess && <UserForm setRequestSuccess={setRequestSuccess} setRequestError={setRequestError}/>
          !requestSuccess && requestType === 'userLogin' && <LoginForm setRequestSuccess={setRequestSuccess} setRequestError={setRequestError} setRequestType={setRequestType}/>
        }
        {
          !requestSuccess && requestType != 'userLogin' && <RegisterForm setRequestSuccess={setRequestSuccess} setRequestError={setRequestError} setRequestType={setRequestType}/>
        }
        <Box  sx={{maxWidth: 400, mx: "auto"}}>

        {requestSuccess && <Alert severity="success">{requestSuccess === "Usuario Encontrado" ? "Bienvenid@ a EnRedat" : "Hemos registrado su solicitud, ya se encuentra en revision"}</Alert>}
        {requestError && <Alert severity="error" >Ha ocurrido un error: {requestError}</Alert>}
        </Box>
    
    </section>

  )
}