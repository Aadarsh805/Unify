import { create } from "zustand";

export type User = {
  id: string;
  username: string;
  email: string;
};

interface IInterestedProduct {
  product_id: number;
}

type StoreValues = {
  email: string;
  username: string;
  password: string;
  userProfile: User;
  interestedProduct: IInterestedProduct[];
  notificationCount: number;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  setUserProfile: ({ username, email }: User) => void;
  setInterestedProduct: (product: []) => void;
  setNotificationCount: (count: number) => void;
};

const useStore = create<StoreValues>((set, get) => ({
  email: "",
  password: "",
  username: "",
  interestedProduct: [],
  notificationCount: 1,
  userProfile: { id: "", username: "", email: "" },

  setEmail: (email: string) => {
    set({
      email: email,
    });
  },
  setPassword: (password: string) => {
    set({
      password: password,
    });
  },

  setUsername: (name: string) => {
    set({
      username: name,
    });
  },
  setInterestedProduct: (products: IInterestedProduct[]) => {
    set({
      interestedProduct: products,
    });
  },

  setUserProfile: ({ username, email, id }: User) => {
    set({
      userProfile: { username, email, id },
    });
  },

  setNotificationCount: (count: number) => {
    set({
      notificationCount: count,
    });
  },
}));

export default useStore;
