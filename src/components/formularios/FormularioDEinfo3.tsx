import { useContext, useEffect } from "react";
import { useForm} from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stack
} from "@mui/material";
import { UserContext } from "../../contexts/UserContext";

type RequestSettings = {
  setRequestSuccess: (val: string)=> void;
  setRequestError: (val: string | null)=> void;
}
type InfoFormData = {
    idDueño: number;
    title: string;
    infodetail: string;
    mainImage: File | null;
    mainFile: File | null;
}




export const InfoForm = ({setRequestSuccess, setRequestError} :RequestSettings)=> {
  const context = useContext(UserContext);
    if (!context) {
    throw new Error("Header debe usarse dentro de un UserProvider");
    }
  const {user} = context
  //const [estadoDeSolicutud,setEstadoDeSolicitud] = useState<"espera" | "cargando" | "enviado">("espera")
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<InfoFormData>({
    mode: "onChange"
  });

  
  const onSubmit = async (data: InfoFormData) => {
    console.log("Caso cargado:", data);
    console.log(`se usara el metodo objetoo.metodo para el url objetoo.endpoint`)
    if(user && user.id)data.idDueño = user.id
    console.log(data);
    // simulamos request
    await new Promise(res => setTimeout(res, 3000));
    
    /*//post request
      try {
        const response = await fetch(objetoo.endpoint, {
          method: objetoo.metodo,
          body: formData, // 🔑 enviamos FormData
          // No seteamos Content-Type manualmente, fetch lo hace al detectar FormData
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const result = await response.json();
        console.log("Registro exitoso:", result);
      } catch (error) {
        console.error("Error en el backend:", error);
        setError("title", { type: "server", message: "Error inesperado en el servidor" });

      }
        */
  };
  useEffect(() => {
    clearErrors()
    setRequestError(null)
    if (isSubmitSuccessful) {
        setRequestSuccess("success");
        console.log("Envio al backend correcto");
    }
    if(Object.keys(errors).length > 0) {
    console.log(errors)
    setRequestError(Object.values(errors).map(e=> e.message).join(', '))

    console.log("Envio al backend incorrecto")
    }
    }, [isSubmitting]);


    return (
        <>
        <Box 
            component="form" 
            className="form2 event-form" 
            onSubmit={(e: React.FormEvent) => {
                    e.preventDefault();
                    handleSubmit(onSubmit)(e); // 🔑 ejecutás la función devuelta
                    }}
            sx={{maxWidth: 400, mx: "auto"}} >
            <Typography variant='h5' >Publicar Evento</Typography>
            <Stack spacing={2}>
                    <TextField
                        label="Teléfono"
                        type="tel"
                        {...register("title", { required: "El teléfono es obligatorio" })}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                        disabled={isSubmitting || isSubmitSuccessful}
                    />
                    <TextField
                      label="Descripción"
                      multiline
                      rows={3}
                      fullWidth
                      disabled={isSubmitting || isSubmitSuccessful}
                      {...register("infodetail", { required: "Desarrolle la informacion por favor" })}
                    />
                    <Button
                      variant="outlined"
                      component="label"
                      disabled={isSubmitting || isSubmitSuccessful}
                    >
                      Subir imagen 
                      <input
                        type="file"
                        hidden
                        {...register("mainImage", { required: false })}
                      />
                    </Button>
            
                    <Button
                      variant="outlined"
                      component="label"
                      disabled={isSubmitting || isSubmitSuccessful}
                    >
                      Subir documento
                      <input
                        type="file"
                        hidden
                        {...register("mainFile", { required: false })}
                      />
                    </Button>
            
                    
            
                    <Button
                      className="submit-button"
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subiendo..." : "Subir"}
                    </Button>
            </Stack>
        </Box>
        </>

)}

