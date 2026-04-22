
import { Avatar, Box, Typography } from '@mui/material'
import type { Case, Event, Info } from '../../types/elements-pages'
import { useState } from 'react';

interface UserProps {
  nombre: string;
  titulo?: "Acompañante terapéutico" | "Licenciadx" | "Tecnicx" | "Tecnicx Superior";
  especialidad?: string[];
  telefono: string;
  contacto: string;
  fotoUsuario?: string; // URL o base64
  //fotoTitulo?: string;  // URL o base64
}
type CaseProps = {
    props: Case
}
type EventProps = {
  props: Event
}
type InfoProps = {
  props: Info
}
const handleDownload = (elurl?: string) => {
  if(!elurl) return
  const url = elurl; // aquí debería venir la URL del PDF
  const link = document.createElement("a");
  link.href = url;
  link.download = "documento.pdf"; // nombre sugerido
  link.click();
};


export const CarnetUsuario: React.FC<UserProps> = ({
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
export const CaseCarnet = (props: CaseProps) => {
  return (
    <div className='carnet case-carnet'>
        
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "4px double white",
        borderRadius: "8px",
        padding: 1,
        width: 400,
        backgroundColor: "#2F9597",
      }}
    >
        <p><b>Id: </b>{props.props.id}</p>
        <p><b>Responsable: </b>{props.props.idDueño}</p>
        <p><b>Estado: </b>{props.props.estado}</p>
        <p><b>Disponible: </b>{props.props.disponible ? 'Disponible' : 'Tomado'}</p>
        <p><b>Diagnostico: </b>{props.props.dx}</p>
        <p><b>Edad: </b>{props.props.tipoPaciente} de {props.props.edad} años</p>
        <p><b>Email de contacto: </b>{props.props.contacto[0]}</p>
        <p><b>Teléfono de contacto: </b>{props.props.contacto[1]}</p>
        <p><b>Covertura: </b>{props.props.covertura}</p>
        <p><b>Franja Horaria: </b>{props.props.franjahoraria}</p>
        <p><b>Solicitud: </b>{props.props.solicitud}</p>
    </Box>
    </div>
  )
}
export const EventCarnet = (props: EventProps) => {
  return (
    <div className='carnet event-carnet'>
        
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "4px double white",
        borderRadius: "8px",
        padding: 1,
        width: 400,
        backgroundColor: "#2F9597",
      }}
    >
        <p><b>Inicio: </b>{props.props.startDate}</p>
        <p><b>Cierre: </b>{props.props.endDate}</p>
        <p><b>Disponible: </b>{props.props.description}</p>
        
    </Box>
    </div>
  )
}
export const InfoCarnet = (props: InfoProps) => {
  return (
  <div className='carnet info-carnet'>
        
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "4px double white",
        borderRadius: "8px",
        padding: 1,
        width: 400,
        backgroundColor: "#2F9597",
      }}
    >
      {/* Título principal */}
      <h2 style={{textAlign: "center"}}>{props.props.titulo}</h2>
      
      {/* Renderizado de subtítulos y textos 
      {props.props.subtitulos.map((subtitulo, index) => (
        <><div key={index} style={{ marginBottom: "12px" }}>
          <h4>
            {subtitulo}
          </h4>
          <p>{props.props.textos[index]}</p>
          {(props.props.images && props.props.images?.length > 0) ? 
            <img src={props.props.images[index]} alt="" />
            : ""
          }
        </div>
        <hr />
        
        </>
      ))}*/}
      <p>{props.props.textos}</p>
      
      {props.props.downloadDocument && <button className="btn btn-success" onClick={()=>handleDownload(props.props.downloadDocument)}>Descargar PDF</button>}
    </Box> 
    
  </div>
  )
}

