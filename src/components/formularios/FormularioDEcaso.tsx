/*
Necesitamos un componente que exporte un formulario para cargar un caso para asistente terapéutico
Los inputs deben ser:
-Edad
-tipoPaciente (niñx,adolecente,adulto,adulto mayor)
-covertura (particular o obra social) Si es particular necesitamos un input para ingresar el valor por hora, y se obra social necesitamos un input para ingresar el nombre de la obra social
-franja horaria (dos inputs que especifiquen de que hora a que hora el asistente terapéutico debe estar con el paciente)
-contacto (email y telefono)
-textarea para que el usuario ingrese detalles de la solicitud
*/
import { useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Box
} from "@mui/material";
import { UserContext } from "../../contexts/UserContext";

type RequestSettings = {
  setRequestSuccess: (val: string)=> void;
  setRequestError: (val: string | null)=> void;
}
type CaseFormData = {
  idDueño: number;
  edad: number;
  tipoPaciente: "Niñx" | "Adolescente" | "Adulto" | "Adulto mayor";
  cobertura: "Particular" | "Obra social";
  valorHora?: number;
  obraSocial?: string;
  horaInicio: string;
  horaFin: string;
  email: string;
  telefono: string;
  detalles: string;
};

export const CaseForm = ({setRequestSuccess, setRequestError} :RequestSettings)=> {
  const context = useContext(UserContext);
    if (!context) {
    throw new Error("Header debe usarse dentro de un UserProvider");
    }
  const {user} = context
  //const [estadoDeSolicutud,setEstadoDeSolicitud] = useState<"espera" | "cargando" | "enviado">("espera")
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid }
  } = useForm<CaseFormData>({
    mode: "onChange"
  });

  const coberturaSeleccionada = watch("cobertura");

  const onSubmit = async (data: CaseFormData) => {
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
          setRequestError(Object.values(errors).join(' | '))
          console.log("Envio al backend incorrecto")
          }
      }, [isSubmitting]);

  return (
  <> 
    <Box
      className="caso-form"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500 }}
    >
      <Typography variant="h5">Cargar Caso Asistente Terapéutico</Typography>

      {/* Edad */}
      <TextField
        label="Edad"
        type="number"
        {...register("edad", { required: "La edad es obligatoria", min: 1 })}
        error={!!errors.edad}
        helperText={errors.edad?.message}
        disabled={isSubmitting || isSubmitSuccessful}
      />
      {/* Tipo de paciente */}
      <FormControl>
        <InputLabel>Tipo de paciente</InputLabel>
        <Controller
          name="tipoPaciente"
          control={control}
          rules={{ required: "Seleccione un tipo de paciente" }}
          render={({ field }) => (
            <Select {...field} label="Tipo de paciente">
              <MenuItem value="Niñx">Niñx</MenuItem>
              <MenuItem value="Adolescente">Adolescente</MenuItem>
              <MenuItem value="Adulto">Adulto</MenuItem>
              <MenuItem value="Adulto mayor">Adulto mayor</MenuItem>
            </Select>
          )}
          disabled={isSubmitting || isSubmitSuccessful}
        />
        {errors.tipoPaciente && (
          <Typography color="error">{errors.tipoPaciente.message}</Typography>
        )}
      </FormControl>
      {/* Cobertura */}
      <FormControl>
        <InputLabel>Cobertura</InputLabel>
        <Controller
          name="cobertura"
          control={control}
          rules={{ required: "Seleccione una cobertura" }}
          render={({ field }) => (
            <Select {...field} label="Cobertura">
              <MenuItem value="Particular">Particular</MenuItem>
              <MenuItem value="Obra social">Obra Social</MenuItem>
            </Select>
          )}
          disabled={isSubmitting || isSubmitSuccessful}
        />
        {errors.cobertura && (
          <Typography color="error">{errors.cobertura.message}</Typography>
        )}
      </FormControl>
      {/* Condicional según cobertura */}
      {coberturaSeleccionada === "Particular" && (
        <TextField
          label="Valor por hora"
          type="number"
          {...register("valorHora", {
            required: "Ingrese el valor por hora si es particular"
          })}
          error={!!errors.valorHora}
          helperText={errors.valorHora?.message}
          disabled={isSubmitting || isSubmitSuccessful}
        />
      )}
      {coberturaSeleccionada === "Obra social" && (
        <TextField
          label="Nombre de la obra social"
          {...register("obraSocial", {
            required: "Ingrese el nombre de la obra social"
          })}
          error={!!errors.obraSocial}
          helperText={errors.obraSocial?.message}
          disabled={isSubmitting || isSubmitSuccessful}
        />
      )}
      {/* Franja horaria */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
        className="input-horario"
          label="Hora inicio"
          type="time"
          {...register("horaInicio", { required: "Ingrese la hora de inicio" })}
          error={!!errors.horaInicio}
          helperText={errors.horaInicio?.message}
          disabled={isSubmitting || isSubmitSuccessful}
        />
        <TextField
        className="input-horario"
          label="Hora fin"
          type="time"
          {...register("horaFin", { required: "Ingrese la hora de fin" })}
          error={!!errors.horaFin}
          helperText={errors.horaFin?.message}
          disabled={isSubmitting || isSubmitSuccessful}
        />
      </Box>
      {/* Contacto */}
      <TextField
        label="Email"
        type="email"
        {...register("email", {
          required: "El email es obligatorio",
          pattern: { value: /\S+@\S+\.\S+/, message: "Formato inválido" }
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        disabled={isSubmitting || isSubmitSuccessful}
      />
      <TextField
        label="Teléfono"
        type="tel"
        {...register("telefono", { required: "El teléfono es obligatorio" })}
        error={!!errors.telefono}
        helperText={errors.telefono?.message}
        disabled={isSubmitting || isSubmitSuccessful}
      />
      {/* Detalles */}
      <TextField
        label="Detalles de la solicitud"
        multiline
        rows={4}
        disabled={isSubmitting || isSubmitSuccessful}
        {...register("detalles")}
      />
      {/* Botón */}
      <Button
        id="submit-button"
        type="submit"
        variant="contained"
        disabled={!isValid || isSubmitSuccessful}
      >
        {isSubmitting ? "Cargando..." : "Guardar Caso"}
      </Button>
    </Box>
    </>
  );
}
