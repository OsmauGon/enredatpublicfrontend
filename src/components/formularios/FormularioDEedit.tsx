import { useContext, useEffect} from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import '../../styles/formularios.css'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";





type RequestSettings = {
  setRequestSuccess: (val: string)=> void;
  setRequestError: (val: string | null)=> void;
}
type UserFormType = {
  email: string;
  password: string;
  passwordConfirm: string;
  name?: string;
  phone?: string;

  title: string;
  profileImage?: FileList | null;
  //title?: "" | "Acompañante Terapéutico" | "Licenciad@" | "Tecnico Superior";
  titleImage: FileList | null
};



export const EditForm = ({setRequestSuccess, setRequestError} :RequestSettings) =>{
  const navigate = useNavigate()
  const context = useContext(UserContext);
    if (!context) {
    throw new Error("Header debe usarse dentro de un UserProvider");
    }
    const {user,setUser} = context
  const {
    control,
    register,
    handleSubmit,
    clearErrors,
    setError,//usaremos esta funcion para mostrar como error la denegacion del backend
    formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm<UserFormType>({
      defaultValues: {title: ""}
    });
    useEffect(() => {
        clearErrors()
        setRequestError(null)


        if (isSubmitSuccessful) {
            setRequestSuccess("success");
            console.log("Envio al backend correcto");
        }
        if(errors && errors.title?.message) {
        console.log("error de contraseñas")
        setRequestError(errors.title?.message)
        console.log("Envio al backend incorrecto")
        }
    }, [isSubmitting]);
    
    const onSubmit = async (data: UserFormType) => {
    console.log(`se usara el metodo objetoo.metodo para el url objetoo.endpoint`)
    console.log(data);
    // simulamos request
    await new Promise(res => setTimeout(res, 3000));
    
      // Construimos el FormData
      const formData = new FormData();

      // Campos de texto
      formData.append("title", data.title);

      // Archivos (si existen)
      if (data.profileImage?.[0]) {
        formData.append("profileImage", data.profileImage[0]);
      }
      if (data.password != data.passwordConfirm) {
        
        setError("title",{message: "Las contraseñas no coinciden"})
        return
      }
      console.log(formData)
      
      
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
      
      /*navigate('/')*/
      /*
      const usuario = loginProtocol(data)
      if(requestType === "userLogin" && usuario && usuario.length > 0){
        console.log(usuario)
        setUser(usuario[0])
        navigate('/')
      } else if(requestType === "userLogin"){
        setError("title",{message: "Usuario no encontrado"})
      }
        */
      localStorage.removeItem("enredat-user")
      setUser(null)
      navigate('/')
      
    };

    



  return (
    <>
    <Box 
        component="form" 
        className="form2 user-form" 
        onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e); // 🔑 ejecutás la función devuelta
        }}
        sx={{maxWidth: 400, mx: "auto"}} >
            <Typography variant='h5' >Editar Cuenta</Typography>
            <Stack spacing={0}>
        <div className="register-inputs inputs-container">
          <TextField className="logreg-campo" label="Nombre" type= "text"  {...register("name", { required: "Nombre obligatorio" })} disabled={isSubmitting} required></TextField>
          <TextField className="logreg-campo" label="Telefono" type= "text" {...register("phone", { required: "Contacto obligatorio" })} disabled={isSubmitting}  required></TextField>
        </div>
        <div className="login-inputs inputs-container">
            <TextField className="logreg-campo" label="Correo Electronico" type= "text" {...register("email", { required: "Email obligatorio" })} disabled={isSubmitting}  required></TextField>
            <TextField className="logreg-campo" label="Contraseña" type= "password" {...register("password", { required: "Contraseña obligatoria" })} disabled={isSubmitting} required></TextField>
            <TextField className="logreg-campo" label="Confirme su contraseña" type= "password" {...register("passwordConfirm", { required: "Confirmacion obligatoria" })} disabled={isSubmitting} required></TextField> 
        </div>
        <div className="terapeuts-inputs inputs-container">  
            <FormControl fullWidth className='logreg-campo title-input'>
            <InputLabel id="title-label">Título</InputLabel>
            <Controller
              control={control}
              name="title"
              rules={{ required: "Indique su título" }}
              render={({ field }) => (
              <Select {...field} labelId="title-label" label="Título" disabled={isSubmitting}>
                  <MenuItem value=""></MenuItem>
                  <MenuItem value="Acompañante terapéutico">Acompañante terapéutico</MenuItem>
                  <MenuItem value="Tecnico">Tecnico</MenuItem>
                  <MenuItem value="Licenciado">Licenciado</MenuItem>
                  <MenuItem value="Tecnico Superior">Tecnico Superior</MenuItem>
               </Select>
                )}
            />
            </FormControl>
            {user && user.rol === "profesional" && <>
                <div className="file-inputs">
                    <Button variant="contained" className="user-file-input1" component="label" disabled={isSubmitting}>
                    Foto de perfil
                        <input
                        type="file"
                        hidden
                        {...register("profileImage")}
                        accept="image/*"
                        />
                    </Button>
                    <Button variant="contained" className="user-file-input2" component="label" disabled={isSubmitting}>
                    Foto de título
                    <input
                        type="file"
                        hidden
                        {...register("titleImage")}
                        accept="image/*"
                    />
                    </Button>
                </div>
            </>}
            
        </div>
        <Button className="submit-button" type='submit' variant="contained" color='primary' >Cargar</Button>
      </Stack>
      
        </Box>
    </>
  );
}