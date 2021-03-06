import { Box, Slider, Typography } from "@mui/material";
import { SyntheticEvent, useContext } from "react";
import { AppContext, AppContextType } from "../Context";

export const BudgetSlider = () => {
  const { budget, setBudget } = useContext(AppContext) as AppContextType

  function onChangeHandler(e: Event | SyntheticEvent<Element, Event>, value: number | number[]) {
    e.preventDefault();
    if (!Array.isArray(value)) {
      setBudget(value)
    }
  }

  const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: 25000,
      label: '$25,000',
    },
  ];

  return (
    <>
      <Typography textAlign={"center"}>Trip Budget</Typography>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Budget"
          defaultValue={budget}
          value={budget}
          onChange={onChangeHandler}
          valueLabelDisplay="auto"
          step={250}
          min={0}
          max={25000}
          marks={marks}
        />
      </Box>
    </>
  )
}

export const DaySlider = () => {
  const { days, setDays } = useContext(AppContext) as AppContextType

  function onChangeHandler(e: Event | SyntheticEvent<Element, Event>, value: number | number[]) {
    e.preventDefault();
    if (!Array.isArray(value)) {
      setDays(value)
    }
  }

  return (
    <Box minHeight={"100px"}>
      <Typography textAlign={"center"}>Days</Typography>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Budget"
          defaultValue={days}
          value={days}
          onChange={onChangeHandler}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={30}
          marks
        />
      </Box>
    </Box>
  )
}
