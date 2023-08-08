import create from "zustand";

interface State {
  show: boolean;
  toggle: () => void;
  cartData: any[];
  setCartData: (data: any[]) => void;
  addItem: (item: any) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
}

export const useCartStore = create<State>(set => ({
  cartData: [],
  show: false,
  toggle: () => set(state => ({ show: !state.show })),
  setCartData: (data: any[]) => set({ cartData: data }),
  addItem: (item: any) =>
    set(state => {
      localStorage.setItem(
        "cartData",
        JSON.stringify([{ quantity: 1, item }, ...state.cartData])
      );
      return {
        cartData: [{ quantity: 1, item }, ...state.cartData],
      };
    }),
  removeItem: (itemId: string) =>
    set(state => {
      const cartData = state.cartData.filter(i => i.item._id !== itemId);
      localStorage.setItem("cartData", JSON.stringify(cartData));
      return { cartData };
    }),
  updateQuantity: (itemId: string, quantity: number) =>
    set(state => {
      const cartData = state.cartData.map(i => {
        if (i.item._id === itemId) {
          return { ...i, quantity };
        }
        return i;
      });
      localStorage.setItem("cartData", JSON.stringify(cartData));
      return { cartData };
    }),
}));
