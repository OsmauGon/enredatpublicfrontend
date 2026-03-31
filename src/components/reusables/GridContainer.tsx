import '../../styles/grid-container.css'
import type { Case, Event, User } from "../../types/elements-pages"


type GridContainerProps = {
  items: User[] | Case[] | Event[];
  setMockobject: (val: User | Case | Event | null)=>void
}

export const GridContainer: React.FC<GridContainerProps> = ({ items, setMockobject }) => {
  const nameAdapter = (name: string, titl: string)=>{
    return `${titl[0]}${titl[1]}${titl[2]}. ${name}`
  }
  return (
    <div className="grid-container">
      {items.map(item => (
        <div key={item.id} className="grid-item">
          {"profileImage" in item && (<img className={`grid-item-img ${item.disponible ? "" : "nodisponible"}`} src={item.profileImage} alt="" />)}
          {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}
          {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}
          <div className="grid-item-content">
            {"nombre" in item && "titulo" in item && (<h5 className='grid-item-title'>{nameAdapter(item.nombre,item.titulo ? item.titulo : "")}</h5>)}
            {"tipoPaciente" in item && "edad" in item && (<h4 className='grid-item-title'>{item.tipoPaciente} de {item.edad} años</h4>)}
            
            
            {/*<p>{item.disponible ? "disponible" : "ocupado"}</p>*/}
            {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}
            {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}
            {"covertura" in item && ( <>
              <p>Dx: {item.dx}</p>
              <p>Covertura: {item.covertura.split("-")[0]}</p>
              </>)}
            {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}
            {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}
            {"description" in item && ( <>
              <h5>{item.titulo}</h5>
              <img className={`mini-image ${item.disponible ? "" : 'nodisponible'}`} src={item.mainImage} alt="Evento" />
              </>)}
          </div>

          <button className='grid-item-button' disabled={!item.disponible} onClick={()=>{setMockobject(item)}}>{item.disponible ? "Conectar" : "Ocupado"}</button>
        </div>
      ))}
    </div>
  )
}