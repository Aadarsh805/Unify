import { create } from "zustand";

type User = {
  username: string;
  email: string;
};

type StoreValues = {
  email: string;
  username: string;
  password: string;
  userProfile: User;
  interestedProduct: [];
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
  userProfile: { username: "", email: "" },

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
  setInterestedProduct: (products: []) => {
    set({
      interestedProduct: products,
    });
  },

  setUserProfile: ({ username, email }: User) => {
    set({
      userProfile: { username, email },
    });
  },

  setNotificationCount: (count: number) => {
    set({
      notificationCount: count,
    });
  },
}));

export default useStore;
