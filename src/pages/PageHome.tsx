
import '../styles/homepage.css'
//import {MotionSlogan} from '../components/MotionSlogan'
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';

const eslogans = [
  {id: 1, title: "Conectar", text: "Familias y pacientes con especialistas y talentos dispuestos"},
  {id: 2, title: "Concientizar", text: "Sobre temas delicados, informacion util y claridad sana"},
  {id: 3, title: "Compartir", text: "Talentos, casos, experiencias... Cualquier cosa que nos haga mejores"}
]

export const PageHome = ()=> {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
          
          height: "37vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          backgroundImage: "url('img/helperhands.jpg')", // ruta de tu imagen
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}>
        <Typography variant="h3" gutterBottom sx={{color: "#00cc99"}}>
          Acompañamiento Terapéutico
        </Typography>
        <Typography variant="h4" gutterBottom sx={{color: "#00cc99"}}>
          Mar del Plata
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Calidez, compromiso y escucha activa
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          Conoce más
        </Button>
      </Box>

      {/* Servicios */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Nuestros Servicios
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {eslogans.map((servicio) => (
            <Grid   key={servicio.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{servicio.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{servicio.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
