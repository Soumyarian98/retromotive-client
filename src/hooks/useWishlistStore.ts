import create from "zustand";

interface State {
  show: boolean;
  toggle: () => void;
  wishlistData: any[];
  setWishlistData: (data: any[]) => void;
  addItem: (item: any) => void;
  removeItem: (itemId: string) => void;
}

export const useWishlistStore = create<State>(set => ({
  show: false,
  toggle: () => set(state => ({ show: !state.show })),
  wishlistData: [],
  setWishlistData: (data: any[]) => set({ wishlistData: data }),
  addItem: (item: any) =>
    set(state => {
      localStorage.setItem(
        "wishlistData",
        JSON.stringify([{ quantity: 1, item }, ...state.wishlistData])
      );
      return {
        wishlistData: [{ quantity: 1, item }, ...state.wishlistData],
      };
    }),
  removeItem: (itemId: string) =>
    set(state => {
      const wishlistData = state.wishlistData.filter(
        i => i.item._id !== itemId
      );
      localStorage.setItem("wishlistData", JSON.stringify(wishlistData));
      return { wishlistData };
    }),
}));
