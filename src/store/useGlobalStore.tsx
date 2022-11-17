import create from "zustand";

interface GlobalStore {
  splineLoaded: boolean;
  setSplineLoaded: (payload: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>()((set) => ({
  splineLoaded: false,
  setSplineLoaded: (payload: boolean) =>
    set((state) => ({ splineLoaded: payload })),
}));
