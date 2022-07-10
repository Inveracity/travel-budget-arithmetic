import { Box, Slider } from "@mui/material";
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
      value: 1000,
      label: '$1.000',
    },
    {
      value: 10000,
      label: '$10.000',
    },
  ];

  return (
    <Box sx={{ width: 500 }}>
      <Slider
        aria-label="Budget"
        defaultValue={budget}
        value={budget}
        onChange={onChangeHandler}
        valueLabelDisplay="auto"
        step={250}
        min={1000}
        max={10000}
        marks={marks}
      />
    </Box>
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
    <Box sx={{ width: 500 }}>
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
  )
}
