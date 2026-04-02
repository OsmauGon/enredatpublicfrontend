import {useEffect, useState} from 'react'
import type {Case, Event, User, Info} from '../types/elements-pages'
import {allinfo} from '../../Recursos simulados/infoDataBase'
import {GridContainer} from '../components/reusables/GridContainer'
import { MockObject } from '../components/reusables/MockObject'
import { FilterBar } from '../components/reusables/FilterBar'


export const PageInfo = () => {
  const [infos, setInfo] = useState<Info[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mockobjet,setMockobjet] = useState<User |Case | null | Event | Info>(null)
  const [filtros, setFiltros] = useState({ nombre: "", disponible: false });  
  
  const registrosFiltrados = infos.filter((r) => {
      const matchNombre = r.titulo
        .toLowerCase()
        .includes(filtros.nombre.toLowerCase());
      const matchDisponible = filtros.disponible ? r.estado : true;
      return matchNombre && matchDisponible;
  });
  useEffect(() => {
        const fetchProfesionales = async () => {
          try {
            setLoading(true)
            // Simulación de llamada al backend
            const response = await fetch('/api/users') // tu endpoint real
            const data: Info[] = await response.json()
            if (!response.ok) throw new Error('Error en la respuesta del servidor')
    
            setInfo(data)
          } catch (err) {
            console.log(err)
            setError('Error al cargar datos desde backend, usando fallback local')
            // Fallback: filtrar los datos simulados
            const profesionales = allinfo.filter((caso: Info) => caso.estado === "habilitado")
            setInfo(profesionales)
          } finally {
            setLoading(false)
          }
        }
    
        fetchProfesionales()
  }, [])
  
  return (
    <section>
        <h2>PageInfo</h2>
        <FilterBar palabraClave='titulo' filtros={filtros} onChange={setFiltros}></FilterBar>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {registrosFiltrados.length > 0 && <GridContainer items={registrosFiltrados} setMockobject={setMockobjet}/>}
      {mockobjet && <MockObject item={mockobjet} setMockobject={setMockobjet}></MockObject>}
    
    </section>
  )
}