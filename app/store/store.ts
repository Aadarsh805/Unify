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
  userId: string;
  email: string;
  username: string;
  password: string;
  userProfile: User;
  interestedProduct: any;
  myProducts: any;
  notificationCount: number;
  baseUrl: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  setUserProfile: ({ username, email }: User) => void;
  setInterestedProduct: (product: any) => void;
  setNotificationCount: (count: number) => void;
  setMyProducts: (products: any) => void;
  setUserId: (id: string) => void;
  notifications: any;
  setNotifications: (value: any) => void;
};

const useStore = create<StoreValues>((set, get) => ({
  userId: "",
  email: "",
  password: "",
  username: "",
  myProducts: [],
  interestedProduct: [],
  notificationCount: 1,
  baseUrl:
    "https://nxlkzsdcwscprmiqcqiu.supabase.co/storage/v1/object/public/product-images",
  userProfile: { id: "", username: "", email: "" },
  notifications: [],

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
  setInterestedProduct: (products: any) => {
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

  setMyProducts: (products: any) => {
    set({
      myProducts: products,
    });
  },

  setUserId: (id: string) => {
    set({
      userId: id,
    });
  },
  setNotifications: (value: any) => {
    set({
      notifications: value,
    });
  },
}));

export default useStore;
