import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: "user-storage",
      getStorage: () => sessionStorage,
    }
  )
);

export const likedData = create(
  persist(
    (set) => ({
      likedEvents: [],
      setLikedEvents: (data) => set({ likedEvents: data }),
      updateLikedEvents: (data) =>
        set((state) => ({ likedEvents: [...state.likedEvents, data] })),
      removeLikedEvents: (data) =>
        set((state) => ({
          likedEvents: state.likedEvents.filter((item) => item.id !== data.id),
        })),
      likedMovies: [],
      setLikedMovies: (data) => set({ likedMovies: data }),
      updateLikedMovies: (data) =>
        set((state) => ({ likedMovies: [...state.likedMovies, data] })),
      removeLikedMovies: (data) =>
        set((state) => ({
          likedMovies: state.likedMovies.filter((item) => item.id !== data.id),
        })),
    }),
    {
      name: "liked-storage",
      getStorage: () => sessionStorage,
    }
  )
);
