
import { Box } from '@mui/material'
import type { Case, Event } from '../../types/elements-pages'

type CaseProps = {
    props: Case
}
type EventProps = {
  props: Event
}

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
        <p><b>Contacto: </b>{props.props.contacto.join("-")}</p>
        <p><b>Covertura: </b>{props.props.covertura}</p>
        <p><b>Franja Horaria: </b>{props.props.franjahoraria}</p>
        <p><b>Solicitud: </b>{props.props.solicitud}</p>
    </Box>
    </div>
  )
}
export const EventCarnet = (props: EventProps) => {
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
        <p><b>Inicio: </b>{props.props.startDate}</p>
        <p><b>Cierre: </b>{props.props.endDate}</p>
        <p><b>Disponible: </b>{props.props.description}</p>
        
    </Box>
    </div>
  )
}
