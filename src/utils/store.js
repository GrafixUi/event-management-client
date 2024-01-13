import {create } from 'zustand'

export const useStore = create((set) => ({
isAuthenticated: false,
jwt: null,
userData : null,
ticketPrice: 0,
userNumber: 0,
setIsAuthenticated: (data) => set({ isAuthenticated:data }),
setJwt: (data) => set({ jwt:data }),
setUserData : (data) => set({ userData:data }),
setTicketPriceInc: (data) => set((state) => ({ ticketPrice: state.ticketPrice + data })),
setTicketPriceDec: (data) => set((state) => ({ ticketPrice: state.ticketPrice - data })),
setUserNumberInc: (data) => set((state) => ({ userNumber: state.userNumber + data })),
setUserNumberDec: (data) => set((state) => ({ userNumber : state.userNumber - data })),
}))

