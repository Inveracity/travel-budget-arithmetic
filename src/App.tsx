import { Box, Checkbox, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import Checkboxes from './Components/Checkboxes';
import { BudgetSlider, DaySlider } from './Components/Sliders';
import { AppContext, AppContextType } from './Context';


function calcBudget(budget: number, days: number, kcb: boolean, scb: boolean) {
  let result = budget + 200
  if (kcb) {
    result = result + 350
  }
  if (scb) {
    result = (40 * days) + result
  }
  return result
}

function App() {
  const { budget, days, kcb, scb } = useContext(AppContext) as AppContextType

  return (
    <Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography>
          Booking
        </Typography>
        <Grid item xs={3}>
          <BudgetSlider />
        </Grid>
        <Typography>
          Days
        </Typography>
        <Grid item xs={3}>
          <DaySlider />
        </Grid>

        <Checkboxes />


        <Grid item xs={3}>
          <Typography>
            {`$${calcBudget(budget, days, kcb, scb)}`}
          </Typography>
          <Typography>
            {`Days ${days}`}
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
}

export default App;
