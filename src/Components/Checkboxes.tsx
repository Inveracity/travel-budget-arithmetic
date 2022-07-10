import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import { useContext } from "react"
import { AppContext, AppContextType } from "../Context"

const Checkboxes = () => {
  const { kcb, setKcb } = useContext(AppContext) as AppContextType
  const { scb, setScb } = useContext(AppContext) as AppContextType


  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Pick a package</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="base"
          control={<Checkbox checked disabled />}
          label="Base"
          labelPlacement="top"
        />
        <FormControlLabel
          value="know"
          control={<Checkbox checked={kcb} disabled={scb} onClick={() => { setKcb(!kcb) }} />}
          label="Knowledge"
          labelPlacement="top"
        />
        <FormControlLabel
          value="supp"
          control={<Checkbox checked={scb} onClick={() => { setScb(!scb); setKcb(!scb) }} />}
          label="Support"
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
};

export default Checkboxes;
