import {useState, useEffect} from 'react'
import {allevents} from '../../Recursos simulados/eventsDataBase'
import {GridContainer} from '../components/reusables/GridContainer'
import { MockObject } from '../components/reusables/MockObject'
import { FilterBar } from '../components/reusables/FilterBar'
import type { Case, Event, Info, User } from '../types/elements-pages'


export const PageEvents = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mockobjet,setMockobjet] = useState<User |Case | null | Event | Info>(null)
  const [filtros, setFiltros] = useState({ nombre: "", disponible: false });  
    
  const registrosFiltrados = events.filter((r) => {
      const matchNombre = r.description
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
            const data: Event[] = await response.json()
            if (!response.ok) throw new Error('Error en la respuesta del servidor')
    
            setEvents(data)
          } catch (err) {
            console.log(err)
            setError('Error al cargar datos desde backend, usando fallback local')
            // Fallback: filtrar los datos simulados
            const profesionales = allevents.filter(user => user.estado === "habilitado")
            setEvents(profesionales)
          } finally {
            setLoading(false)
          }
        }
    
        fetchProfesionales()
  }, [])
  
  return (
    <section>
        <FilterBar palabraClave='titulo' filtros={filtros} onChange={setFiltros}></FilterBar>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {(registrosFiltrados.length > 0 && !mockobjet) ?  <GridContainer items={registrosFiltrados} setMockobject={setMockobjet} opsiones={["Ver mas","Expirado"]} /> : ""}
      {mockobjet && <MockObject item={mockobjet} setMockobject={setMockobjet}></MockObject>}
    
    </section>
  )
}