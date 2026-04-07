// src/components/FiltroBar.tsx
import '../../styles/filterbar.css'
import React from "react";
import { Checkbox, FormControlLabel, Box } from "@mui/material";

interface FiltroBarProps {
  palabraClave: string;
  filtros: { nombre: string; disponible: boolean; esSupervisor?: boolean; };
  onChange: (filtros: { nombre: string; disponible: boolean, esSupervisor?: boolean }) => void;
}

export const FilterBar: React.FC<FiltroBarProps> = ({palabraClave, filtros, onChange }) => {
  return (
    <Box className={'filterBar'} display="flex" gap={1} mb={2}>
      {/*  */}
      <input type="text" placeholder={`Buscar por ${palabraClave}`} value={filtros.nombre} onChange={(e) => onChange({ ...filtros, nombre: e.target.value })} />
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