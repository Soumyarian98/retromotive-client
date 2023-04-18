import create from "zustand";

interface State {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

export const useActiveStep = create<State>(set => ({
  activeStep: 0,
  setActiveStep: (step: number) => set({ activeStep: step }),
}));
