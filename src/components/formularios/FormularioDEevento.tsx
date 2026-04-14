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
type EventFormData = {
    idDueño: number;
    fechaInicio: string;
    fechaCierre: string;
    detalles: string;
    mainImage: File | null;
}




export const EventForm = ({setRequestSuccess, setRequestError} :RequestSettings)=> {
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
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<EventFormData>({
    mode: "onChange"
  });

  const fechaInicio = watch("fechaInicio");
  //const fechaCierre = watch("fechaCierre");
  const onSubmit = async (data: EventFormData) => {
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


    // Función para validar que la fecha no sea pasada
  const validateNoPastDate = (value: string) => {
    if (!value) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalizar a medianoche
    return new Date(value) >= today || "La fecha debe ser futura";
  };

  // Función para validar que cierre sea posterior a inicio
  const validateFechaCierre = (value: string) => {
    if (!value || !fechaInicio) return true;
    return (
      new Date(value) >= new Date(fechaInicio) ||
      "La fecha de cierre debe ser posterior a la de inicio"
    );
  };

return (
    <>
    <Box component="form" className="form2 event-form" onSubmit={(e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e); // 🔑 ejecutás la función devuelta
     }}
    sx={{maxWidth: 400, mx: "auto"}} >
      <Typography variant='h5' >Publicar Evento</Typography>
      {/* <Stack spacing={2}>
        <div className="input-sub">
            <label htmlFor="">Fecha de inicio: </label>
            <input type="date"  id="" {...register("fechaInicio")} disabled={isSubmitting || isSubmitSuccessful} />
        </div>
        
        <div className="input-sub">
            <label htmlFor="">Fecha de cierre: </label>
            <input type="date"  id="" {...register("fechaCierre")} disabled={isSubmitting || isSubmitSuccessful} />
        </div>

        <div className="input-sub">
            <input type="file" {...register('mainImage')} disabled={isSubmitting || isSubmitSuccessful} />
        </div>
        <TextField
            label="Descripción"
            multiline
            rows={4}
            fullWidth
            {...register("detalles", { required: true })}
          />
        <Button className="submit-button" type='submit' variant="contained" color='primary' >Subir</Button>
      </Stack> */}
      <Stack spacing={2}>
        <TextField
          label="Fecha de inicio"
          type="date"
          InputLabelProps={{ shrink: true }}
          {...register("fechaInicio", {
            required: "La fecha de inicio es obligatoria",
            validate: validateNoPastDate,
          })}
          disabled={isSubmitting || isSubmitSuccessful}
          error={!!errors.fechaInicio}
          helperText={errors.fechaInicio?.message}
        />

        <TextField
          label="Fecha de cierre"
          type="date"
          InputLabelProps={{ shrink: true }}
          {...register("fechaCierre", {
            required: "La fecha de cierre es obligatoria",
            validate: validateFechaCierre,
          })}
          disabled={isSubmitting || isSubmitSuccessful}
          error={!!errors.fechaCierre}
          helperText={errors.fechaCierre?.message}
        />

        <Button
          variant="outlined"
          component="label"
          disabled={isSubmitting || isSubmitSuccessful}
        >
          Subir imagen principal
          <input
            type="file"
            hidden
            {...register("mainImage", { required: false })}
          />
        </Button>

        <TextField
          label="Descripción"
          multiline
          rows={3}
          fullWidth
          disabled={isSubmitting || isSubmitSuccessful}
          {...register("detalles", { required: "Una descripción es obligatoria" })}
        />

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
  );
























}