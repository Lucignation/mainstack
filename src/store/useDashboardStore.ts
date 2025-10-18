// src/store/useDashboardStore.ts
import { create } from "zustand";

interface DashboardState {
  userCount: number;
  setUserCount: (count: number) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  userCount: 0,
  setUserCount: (count) => set({ userCount: count }),
}));
