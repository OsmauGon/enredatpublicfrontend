// CarnetUsuario.tsx
import React, { useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface CarnetUsuarioProps {
  nombre: string;
  titulo?: "Acompañante terapéutico" | "Licenciadx" | "Tecnicx" | "Tecnicx Superior";
  especialidad?: string[];
  telefono: string;
  contacto: string;
  fotoUsuario?: string; // URL o base64
  //fotoTitulo?: string;  // URL o base64
}

const CarnetUsuario: React.FC<CarnetUsuarioProps> = ({
  nombre,
  titulo,
  especialidad,
  telefono,
  contacto,
  fotoUsuario,
}) => {
  const [view,setView] = useState<boolean>(false)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        border: "4px double white",
        borderRadius: "8px",
        padding: 1,
        width: 400,
        backgroundColor: "#2F9597",
      }}
    >
      {/* Columna izquierda */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "45% "}}>
        <Avatar
          src={fotoUsuario}
          alt="Foto usuario"
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
        {/* <Avatar
          src={fotoTitulo}
          alt="Foto título"
          sx={{ width: 80, height: 80 }}
        /> */}
      </Box>

      {/* Columna derecha */}
      <Box sx={{ marginLeft: 2, width: "60%" }}>
        <Typography variant="h5">{nombre}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{titulo}</Typography>
        <Typography variant="body1">Aréa: {especialidad?.join("-")}</Typography>
        {view ? <>
                  <Typography variant="body1">Tel: {telefono}</Typography>
                  <Typography variant="body1">Contacto: {contacto}</Typography>
                </>
              : <button className="btn btn-warning" onClick={()=>{setView(!view)}}>Ver contacto</button>
        }
        </Box>
    </Box>
  );
};

export default CarnetUsuario;
