import create from "zustand";

interface GlobalStore {
  splineLoaded: boolean;
  setSplineLoaded: (payload: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>()((set) => ({
  splineLoaded: true,
  setSplineLoaded: (payload: boolean) =>
    set((state) => ({ splineLoaded: payload })),
}));
