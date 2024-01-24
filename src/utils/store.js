import { create } from "zustand";
import {persist} from "zustand/middleware";

export const useStore = create(persist((set) => ({
  isAuthenticated: false,
  jwt: null,
  userData: null,
  orderDetails: null,
  movieOrderDetails: null,
  setIsAuthenticated: (data) => set({ isAuthenticated: data }),
  setJwt: (data) => set({ jwt: data }),
  setUserData: (data) => set({ userData: data }),
  setOrderDetails: (data) => set({ orderDetails: data }),
  setMovieOrderDetails: (data) => set({ movieOrderDetails: data }),
}),{
  name: "user-storage",
  getStorage: () => sessionStorage,
}));
