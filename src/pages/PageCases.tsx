import {useEffect, useState} from 'react'
import type {Case, Event, Info, User} from '../types/elements-pages'
import {allcases} from '../../public/Recursos simulados/casesDataBase'
import {GridContainer} from '../components/reusables/GridContainer'
import { MockObject } from '../components/reusables/MockObject'
import { FilterBar } from '../components/reusables/FilterBar'

type filtrosType = {
  nombre: string;
  disponible?: boolean;

}

export const PageCases = () => {
const [cases, setCases] = useState<Case[]>([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)
const [mockobjet,setMockobjet] = useState<User |Case | null | Event | Info>(null)
const [filtros, setFiltros] = useState<filtrosType>({ nombre: "", disponible: false });  

const registrosFiltrados = cases.filter((r) => {
    const matchNombre = r.dx
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
          const data: Case[] = await response.json()
          if (!response.ok) throw new Error('Error en la respuesta del servidor')
  
          setCases(data)
        } catch (err) {
          console.log(err)
          setError('Los siguientes son datos ficticios no reales de casos terapéuticos')
          // Fallback: filtrar los datos simulados
          const profesionales = allcases.filter((caso: Case) => caso.estado === "habilitado")
          setCases(profesionales)
        } finally {
          setLoading(false)
        }
      }
  
      fetchProfesionales()
}, [])

  
  return (
    <section>
        {/* <h2>PageCasos</h2> */}
        <FilterBar palabraClave='diagnostico' filtros={filtros} onChange={setFiltros}></FilterBar>
        {loading && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        {(registrosFiltrados.length > 0 && !mockobjet) ?  <GridContainer items={registrosFiltrados} setMockobject={setMockobjet} opsiones={["+ Info","Tomado"]}/> : ""}
        {mockobjet && <MockObject item={mockobjet} setMockobject={setMockobjet}></MockObject>}
      
    </section>
  )
}