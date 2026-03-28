import '../../styles/grid-container.css'
import type { User } from "../../types/elements-pages"


interface GridContainerProps {
  items: User[];
  setMockobject: (val: User | null)=>void
}

export const GridContainer: React.FC<GridContainerProps> = ({ items, setMockobject }) => {
  return (
    <div className="grid-container">
      {items.map(item => (
        <div key={item.id} className="grid-item">
          <img className={`grid-item-img ${item.disponible ? "" : "nodisponible"}`} src={item.imagenPerfil} alt="" />
          <h5 className='grid-item-title'>{item.nombre}</h5>
          <p>{item.disponible ? "disponible" : "ocupado"}</p>
          <button className='grid-item-button' disabled={!item.disponible} onClick={()=>{setMockobject(item)}}>{item.disponible ? "Conectar" : "Ocupado"}</button>
        </div>
      ))}
    </div>
  )
}