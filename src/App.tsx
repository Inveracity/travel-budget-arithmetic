import { Box, Divider, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import Checkboxes from './Components/Checkboxes';
import { BudgetSlider, DaySlider } from './Components/Sliders';
import { AppContext, AppContextType } from './Context';

const base = 250
const know = base + 100
const supp = 40

function calcBudget(budget: number, days: number, kcb: boolean, scb: boolean) {

  // Base is always selected
  let result = budget + base

  // If knowledge package is selected, calculate that
  if (kcb) {
    result = budget + know
  }

  // Support package is selected, calculate the day fee
  if (scb) {
    result = (supp * days) + result
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
        {
          scb &&
          <>
            <Typography>
              Days
            </Typography>
            <Grid item xs={3}>
              <DaySlider />
            </Grid>
          </>
        }

        <Grid item xs={3}>
          <Checkboxes />
        </Grid>


        <Grid item xs={3} >
          <Typography>
            {`booking $${budget}`}
          </Typography>
          <Typography>
            {`+ commission $${base}`}
          </Typography>
          {
            kcb &&
            <Typography>
              {`+ knowledge pack $${know}`}
            </Typography>
          }
          {
            scb &&
            <Typography>
              {`+ support pack $${supp}/day for ${days}`}
            </Typography>
          }
          <Divider />
          <Typography>
            {`Total: $${calcBudget(budget, days, kcb, scb)} `}
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
}

export default App;
