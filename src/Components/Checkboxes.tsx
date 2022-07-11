import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import { useContext } from "react"
import { AppContext, AppContextType } from "../Context"

const Checkboxes = () => {
  const { kcb, setKcb } = useContext(AppContext) as AppContextType
  const { scb, setScb } = useContext(AppContext) as AppContextType

  function handleSCB(supportBoxChecked: boolean) {
    /*
    If clicking the support box while both knowledge
    and support are on, keep the knowledge box on and
    turn off the support box
    */
    if (kcb && supportBoxChecked) {
      setKcb(kcb)
      setScb(false)
      return
    }

    /*
    If clicking the support box while both knowledge
    and support are off, turn them both on
    */
    if (!kcb && !supportBoxChecked) {
      setKcb(true)
      setScb(true)
      return
    }

    /*
    If clicking the support box while only the knowledge
    box is on. Turn on the support box and keep knowledge box
    turned on.
    */
    if (kcb && !supportBoxChecked) {
      setKcb(kcb)
      setScb(true)
      return
    }
  }

  return (
    <Box minHeight={"100px"}>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="base"
            control={<Checkbox checked disabled />}
            label="Booking"
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
            control={<Checkbox checked={scb} onClick={() => { handleSCB(scb) }} />}
            label="Support"
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Checkboxes;
