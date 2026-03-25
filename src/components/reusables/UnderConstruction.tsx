// src/components/UnderConstruction.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import { useNavigate } from "react-router-dom";

interface UnderConstructionProps {
  message?: string; // Permite personalizar el texto
  redirectPath?: string; // Ruta a la que redirige el botón
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
  message = "Esta sección está en construcción 🚧",
  redirectPath = "/",
}) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      textAlign="center"
      gap={3}
    >
      <ConstructionIcon sx={{ fontSize: 80, color: "warning.main" }} />
      <Typography variant="h5" color="text.primary">
        {message}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(redirectPath)}
      >
        Ir al inicio
      </Button>
    </Box>
  );
};

export default UnderConstruction;