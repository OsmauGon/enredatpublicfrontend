import type { User } from "../../types/elements-pages"

interface GridContainerProps {
  items: User[]
}

export const GridContainer: React.FC<GridContainerProps> = ({ items }) => {
  return (
    <div className="grid-container">
      {items.map(item => (
        <div key={item.id} className="grid-item">
          <p>{item.nombre}</p>
          <p>{item.rol}</p>
        </div>
      ))}
    </div>
  )
}