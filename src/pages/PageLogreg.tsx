import React from 'react'
//import UnderConstruction from '../components/reusables/UnderConstruction'
import { Box } from '@mui/material'
import { UserForm } from '../components/formularios/UserForm'
import { userspost } from '../endpoints/users-endpoints'

type Props = {}

export const PageLogreg = (props: Props) => {
  return (
    <section>
        <h2>PageLogreg</h2>
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
    ><UserForm objetoo={{endpoint: userspost, metodo: "POST"}}/> </Box>
    </section>
  )
}