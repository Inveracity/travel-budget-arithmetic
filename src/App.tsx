import { useContext } from 'react';
import { Box, colors, Divider, Grid, Stack, Typography } from '@mui/material';
import { AppContext, AppContextType } from './Context';
import { BudgetSlider, DaySlider } from './Components/Sliders';
import Checkboxes from './Components/Checkboxes';

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
    <Box marginLeft={"10px"} marginRight={"10px"} minWidth={"300px"}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}

      >
        <Grid item xs={3}>
          <Box minHeight={"100px"}>
            <Typography>
              Booking
            </Typography>
            <BudgetSlider />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box minHeight={"100px"}>
            {
              scb &&
              <>
                <Typography>
                  Days
                </Typography>
                <DaySlider />
              </>
            }
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box minHeight={"100px"}>
            <Checkboxes />
          </Box>
        </Grid>


        <Grid item xs={3} >
          <Box minHeight={"150px"}>
            <SummaryText money={budget} tag={"Booking"} />
            <SummaryText money={base} tag={"Commission"} />

            {
              kcb &&
              <Box>
                <SummaryText money={know - base} tag={"Knowledge Pack"} />
              </Box>
            }
            {
              scb &&
              <Box>
                <SummaryText money={`${supp} / day for ${days} days`} tag={"Support Pack"} />
              </Box>
            }
          </Box>

          <Divider />
          <Box color={colors.green[400]}>
            <Stack spacing={2} direction={"row"}>
              <Box textAlign={"right"}>
                <Typography variant="overline" align='right'>Total</Typography>
              </Box>
              <Box>
                <Typography variant="overline">{`$${calcBudget(budget, days, kcb, scb)} `}</Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const SummaryText: React.FC<{ money: number | string, tag: string }> = ({ money, tag }) => {
  return (
    <Box>
      <Stack spacing={2} direction={"row"}>
        <Box textAlign={"right"}>
          <Typography variant="overline" align='right'>{tag}</Typography>
        </Box>
        <Box>
          <Typography variant="overline" color={colors.blue[400]}>{`$${money}`}</Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default App;
