import { create } from "zustand";
import { Product } from "@/types/types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface CartStore {
  items: Product[];
  totalPrice: number;
  totalQuantity: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  addItem: (data: Product, quantity: number) => void;
  removeItem: (id: string) => void;
  removeAllItems: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      qty: 1,
      incQty: () => set({ qty: get().qty + 1 }),
      decQty: () =>
        set((state) => {
          const newQty = state.qty - 1 < 1 ? 1 : state.qty - 1;
          return { qty: newQty };
        }),

      addItem: (data: Product) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item._id === data._id);

        set({ totalQuantity: get().totalQuantity + get().qty });
        set({ totalPrice: get().totalPrice + data.price * get().qty });

        if (existingItem) {
          const updatedItem: Product[] = get().items.map((item: Product) => {
            if (item._id === data._id) {
              return { ...item, quantity: item.quantity + get().qty };
            }
            return item;
          });
          set({ items: updatedItem });
        } else {
          data.quantity = get().qty;
          set({ items: [...get().items, { ...data }] });
        }
        toast.success(`${get().qty} ${data.name} added to cart`);
      },
      removeItem: (id: string) => {
        let foundproduct = get().items.find((item) => item._id === id);
        if (foundproduct) {
          set({ totalQuantity: get().totalQuantity - foundproduct.quantity });
        }
        set({
          totalPrice:
            get().totalPrice - foundproduct!.price * foundproduct!.quantity,
        });
        set({ items: [...get().items.filter((item) => item._id !== id)] });
        toast.success("Item removed from cart");
      },
      removeAllItems: () => set({ items: [], totalQuantity: 0, totalPrice: 0 }),
    }),
    {
      name: "Cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
