import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: ".5rem",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      {/* Redes sociales */}
      <Box sx={{ marginTop: ".5rem" }}>
        {/* <IconButton href="https://facebook.com" target="_blank">
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </IconButton>
        <IconButton href="mailto:contacto@ejemplo.com">
          <EmailIcon />
        </IconButton>
        <IconButton href="https://wa.me/549223XXXXXXX" // reemplaza con tu número real
          target="_blank"
        >
          <WhatsAppIcon />
        </IconButton>
          */}
      </Box>

      {/* Derechos reservados */}
      <Typography variant="caption" display="block" sx={{ marginTop: "1rem" }}>
        © {new Date().getFullYear()} Acompañamiento Terapéutico Mar del Plata. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

