import { useEffect, useState } from 'react'
import type { Case, Event, Info, User } from '../types/elements-pages'
import {allusers} from '../../public/Recursos simulados/usersDataBase'
import {GridContainer} from '../components/reusables/GridContainer'
import { MockObject } from '../components/reusables/MockObject'
import { FilterBar } from '../components/reusables/FilterBar'
import { allusersget } from '../endpoints/users-endpoints'

type filtrosType = {
  nombre: string;

}

export const PageSup = () => {
  const [acompas, setAcompas] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mockobjet,setMockobjet] = useState<User |Case | null | Event | Info>(null)
  const [filtros, setFiltros] = useState<filtrosType>({ nombre: "", });  
  
  const registrosFiltrados = acompas.filter((r) => {
    const matchNombre = r.nombre
      .toLowerCase()
      .includes(filtros.nombre.toLowerCase());
    return matchNombre
  });
   useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        setLoading(true)
        // Simulación de llamada al backend
        const response = await fetch(allusersget) // tu endpoint real
        const data: User[] = await response.json()
        if (!response.ok) throw new Error('Error en la respuesta del servidor')

        setAcompas(data)
      } catch (err) {
        console.log(err)
        setError('Los siguientes son datos ficticios no reales de especialistas terapéuticos')
        // Fallback: filtrar los datos simulados
        const profesionales = allusers.filter(user => user.rol === "profesional" && user.esSupervisor === true)
        setAcompas(profesionales)
      } finally {
        setLoading(false)
      }
    }

    fetchProfesionales()
  }, [])

  return (
    <section>
      {/* <h2>PageAco</h2> */}
      <FilterBar palabraClave='nombre' filtros={filtros} onChange={setFiltros}></FilterBar>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {(registrosFiltrados.length > 0 && !mockobjet) ?  <GridContainer items={registrosFiltrados} setMockobject={setMockobjet} opsiones={["Conectar","Ocupado"]}/> : ""}
      {mockobjet && <MockObject item={mockobjet} setMockobject={setMockobjet}></MockObject>}
    </section>
  )
}