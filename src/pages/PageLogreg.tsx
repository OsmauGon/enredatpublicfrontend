
import { Box } from '@mui/material'
import { UserForm } from '../components/formularios/UserForm'
import { userspost } from '../endpoints/users-endpoints'



export const PageLogreg = () => {
  return (
    <section>
        <h2>PageLogreg</h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "4px double #2F9597",
            borderRadius: "8px",
            padding: 1,
            margin: "auto",
            width: 400,
            backgroundColor: "transparent",
      }}
    ><UserForm objetoo={{endpoint: userspost, metodo: "POST"}}/> </Box>
    </section>
  )
}