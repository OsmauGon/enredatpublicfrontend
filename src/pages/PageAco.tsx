import { useEffect, useState } from 'react'
import type { Case, User } from '../types/elements-pages'
import {allusers} from '../../Recursos simulados/usersDataBase'
import {GridContainer} from '../components/reusables/GridContainer'
import { MockObject } from '../components/reusables/MockObject'
import { FilterBar } from '../components/reusables/FilterBar'



export const PageAco = () => {
  const [acompas, setAcompas] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mockobjet,setMockobjet] = useState<User | Case | null>(null)
  const [filtros, setFiltros] = useState({ nombre: "", disponible: false });  
  
  const registrosFiltrados = acompas.filter((r) => {
    const matchNombre = r.nombre
      .toLowerCase()
      .includes(filtros.nombre.toLowerCase());
    const matchDisponible = filtros.disponible ? r.disponible : true;
    return matchNombre && matchDisponible;
  });






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
      <FilterBar filtros={filtros} onChange={setFiltros}></FilterBar>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {registrosFiltrados.length > 0 && <GridContainer items={registrosFiltrados} setMockobject={setMockobjet}/>}
      {mockobjet && <MockObject item={mockobjet} setMockobject={setMockobjet}></MockObject>}
    </section>
  )
}