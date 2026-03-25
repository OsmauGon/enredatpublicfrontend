import { useEffect, useState } from 'react'
import UnderConstruction from '../components/reusables/UnderConstruction'
import type { User } from '../types/elements-pages'
import {allusers} from '../../Recursos simulados/usersDataBase'
import {GridContainer} from '../components/reusables/GridContainer'



export const PageAco = () => {
  const [acompas, setAcompas] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        setLoading(true)
        // Simulación de llamada al backend
        const response = await fetch('/api/users') // tu endpoint real
        const data: User[] = await response.json()
        if (!response.ok) throw new Error('Error en la respuesta del servidor')

        setAcompas(data)
      } catch (err) {
        console.log(err)
        setError('Error al cargar datos desde backend, usando fallback local')
        // Fallback: filtrar los datos simulados
        const profesionales = allusers.filter(user => user.rol === "profesional")
        setAcompas(profesionales)
      } finally {
        setLoading(false)
      }
    }

    fetchProfesionales()
  }, [])

  return (
    <section>
      <h2>PageAco</h2>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {acompas.length > 0 && <GridContainer items={acompas} />}
    </section>
  )
}