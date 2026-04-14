
import { useState } from "react";
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

type FormData = {
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

export const CasoForm = ()=> {
  const [estadoDeSolicutud,setEstadoDeSolicitud] = useState<"espera" | "cargando" | "enviado">("espera")
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting, isValid }
  } = useForm<FormData>({
    mode: "onChange"
  });

  const coberturaSeleccionada = watch("cobertura");

  const onSubmit = (data: FormData) => {
    console.log("Caso cargado:", data);
    setEstadoDeSolicitud("cargando")
    setTimeout(()=>{setEstadoDeSolicitud("enviado")}, 3000)
    
  };

  return (
  <> 
    {(estadoDeSolicutud === "enviado") ? <div className="solicitud-enviada">✅ Solicitud Enviada ✅</div>
    : <Box
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
        disabled={estadoDeSolicutud == "cargando"}
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
          disabled={estadoDeSolicutud == "cargando"}
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
          disabled={estadoDeSolicutud == "cargando"}
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
          disabled={estadoDeSolicutud == "cargando"}
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
          disabled={estadoDeSolicutud == "cargando"}
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
          disabled={estadoDeSolicutud == "cargando"}
        />
        <TextField
        className="input-horario"
          label="Hora fin"
          type="time"
          {...register("horaFin", { required: "Ingrese la hora de fin" })}
          error={!!errors.horaFin}
          helperText={errors.horaFin?.message}
          disabled={estadoDeSolicutud == "cargando"}
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
        disabled={estadoDeSolicutud == "cargando"}
      />

      <TextField
        label="Teléfono"
        type="tel"
        {...register("telefono", { required: "El teléfono es obligatorio" })}
        error={!!errors.telefono}
        helperText={errors.telefono?.message}
        disabled={estadoDeSolicutud == "cargando"}
      />

      {/* Detalles */}
      <TextField
        label="Detalles de la solicitud"
        multiline
        rows={4}
        disabled={estadoDeSolicutud == "cargando"}
        {...register("detalles")}
      />

      {/* Botón */}
      <Button
        id="submit-button"
        type="submit"
        variant="contained"
        disabled={!isValid || isSubmitting}
      >
        {estadoDeSolicutud === "cargando" ? "Cargando..." : "Guardar Caso"}
      </Button>
    </Box>}
    </>
  );
}
