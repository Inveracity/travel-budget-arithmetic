import { useContext } from 'react';
import { Box, colors, Divider, Grid, Stack, Typography } from '@mui/material';
import { AppContext, AppContextType } from './Context';
import { BudgetSlider, DaySlider } from './Components/Sliders';
import Checkboxes from './Components/Checkboxes';
import { useParams } from 'react-router-dom';

let base = 250
let know = 100
let supp = 40

type AppSettings = {
  basefee: string
  knowfee: string
  suppfee: string
};


function calcBudget(budget: number, days: number, kcb: boolean, scb: boolean) {
  // Base is always selected
  let result = budget + base

  // If knowledge package is selected, calculate that
  if (kcb) {
    result = budget + base + know
  }

  // Support package is selected, calculate the day fee
  if (scb) {
    result = (supp * days) + result
  }
  return result
};

function App() {
  const { budget, days, kcb, scb } = useContext(AppContext) as AppContextType
  const { basefee, knowfee, suppfee } = useParams<AppSettings>();
  if (basefee) {
    base = Number(basefee)
  }
  if (knowfee) {
    know = Number(knowfee)
  }
  if (suppfee) {
    supp = Number(suppfee)
  }

  return (
    <Box marginLeft={"10px"} marginRight={"10px"}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        {/* CHECKBOXES */}
        <Grid item xs={3}>
          <Checkboxes />
        </Grid>
        {/* SLIDERS */}
        <Grid item xs={3}>
          <BudgetSlider />
        </Grid>
        <Grid item xs={3} minHeight={"100px"} >
          {scb && <DaySlider />}
        </Grid>

        {/* SUMMARY */}
        <Grid item xs={3} >
          <Box minHeight={"150px"} minWidth={"300px"}>
            <SummaryText money={budget} tag={"Booking"} />
            <SummaryText money={base} tag={"Commission"} />
            {kcb && <Box>
              <SummaryText
                money={know}
                tag={"Knowledge"} />
            </Box>}
            {scb && <Box>
              <SummaryText
                money={supp * days}
                tag={`Support / day for ${days} days`} />
            </Box>}
          </Box>

          {/* SUM OF CALCULATION */}
          <Divider />

          <SummaryText money={calcBudget(budget, days, kcb, scb)} tag={"TOTAL"} />

        </Grid>
      </Grid>
    </Box>
  );
}

const SummaryText: React.FC<{ money: number | string, tag: string, color?: string | undefined }> = ({ money, tag, color }) => {
  if (!color) {
    color = colors.blue[400]
  }
  return (
    <Box>
      <Stack
        spacing={2}
        direction={"row"}>
        <Box
          minWidth={"200px"}
          textAlign={"right"}
          marginRight={"16px"}>
          <Typography
            variant="overline"
            align='right'>
            {tag}
          </Typography>
        </Box>
        <Box minWidth={"200px"}>
          <Typography
            variant="overline"
            color={color}>
            {`${money.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}`}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default App;
