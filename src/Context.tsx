import React, { Dispatch, SetStateAction } from "react";

export type AppContextType = {
  budget: number
  setBudget: Dispatch<SetStateAction<number>>
  days: number
  setDays: Dispatch<SetStateAction<number>>
  kcb: boolean
  setKcb: Dispatch<SetStateAction<boolean>>
  scb: boolean
  setScb: Dispatch<SetStateAction<boolean>>
};

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [budget, setBudget] = React.useState<number>(0);
  const [days, setDays] = React.useState<number>(1);
  const [kcb, setKcb] = React.useState(false);
  const [scb, setScb] = React.useState(false);

  return (
    <AppContext.Provider value={{ budget, setBudget, days, setDays, kcb, setKcb, scb, setScb }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
