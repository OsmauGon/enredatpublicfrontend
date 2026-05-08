// src/components/FiltroBar.tsx
import '../../styles/filterbar.css'
import React, { useState } from "react";
import { Checkbox, FormControlLabel, Box} from "@mui/material";

interface FiltroBarProps {
  palabraClave: string;
  filtros: { nombre: string; disponible?: boolean; esSupervisor?: boolean; };
  onChange: (filtros: { nombre: string; disponible?: boolean, esSupervisor?: boolean }) => void;
}
/*
export const FilterBar: React.FC<FiltroBarProps> = ({palabraClave, filtros, onChange }) => {
  return (
    <Box className={'filterBar'} display="flex" gap={1} mb={2}>
      <input type="text" placeholder={`Buscar por ${palabraClave}`} value={filtros.nombre} onChange={(e) => onChange({ ...filtros, nombre: e.target.value })} />
      div.morefilters
      {
        "disponible" in filtros ? <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={filtros.disponible}
                                        onChange={(e) =>
                                          onChange({ ...filtros, disponible: e.target.checked })
                                        }
                                      />
                                    }
                                    label="Disponible"
                                  />
                                  :""
      }
      {"esSupervisor" in filtros ?
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={filtros.esSupervisor}
                                        onChange={(e) =>
                                          onChange({ ...filtros, esSupervisor: e.target.checked })
                                        }
                                      />
                                    }
                                    label="Supervisores"
                                  /> 
                                : ""}
      
    </Box>
  );
}; 
*/

export const FilterBar: React.FC<FiltroBarProps> = ({ palabraClave, filtros, onChange }) => {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  return (
    <Box className="filterBar" display="flex" flexDirection={mostrarFiltros ? "column" : "row"} gap={1} mb={2} pl={2}>
      {/* Input principal */}
      <input
        type="text"
        placeholder={`Filtrar por ${palabraClave}`}
        value={filtros.nombre}
        onChange={(e) => onChange({ ...filtros, nombre: e.target.value })}
      />

      {/* Botón para expandir */}
      {/* <Button
        variant="outlined"
        size="small"
        onClick={() => setMostrarFiltros(!mostrarFiltros)}
        title={mostrarFiltros ? "Ocultar filtros" : "Más filtros"}
       
      >
        {mostrarFiltros ? "➖" : "➕"}
      </Button> */}

      {/* Contenedor expandible */}
      {mostrarFiltros && (
        <Box display="flex" gap={2} mt={1}>
          {"disponible" in filtros && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filtros.disponible}
                  onChange={(e) =>
                    onChange({ ...filtros, disponible: e.target.checked })
                  }
                />
              }
              label="Disponible"
            />
          )}

          {"esSupervisor" in filtros && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filtros.esSupervisor}
                  onChange={(e) =>
                    onChange({ ...filtros, esSupervisor: e.target.checked })
                  }
                />
              }
              label="Supervisores"
            />
          )}
        </Box>
      )}
      
      <strong
        onClick={() => setMostrarFiltros(!mostrarFiltros)}
        title={mostrarFiltros ? "Ocultar filtros" : "Más filtros"}
       className='filter-strong'
      >
        {mostrarFiltros ? "➖" : "➕"}
      </strong>
    </Box>
  );
};