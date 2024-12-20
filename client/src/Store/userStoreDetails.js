import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

function userStore(set) {
  return {
    user: null,
    setUser: function (userObj) {
      set((_set) => {
        return { user: userObj };
      });
    },
    logout: function () {
      set((_set) => {
        return { user: null };
      });
    },
  };
}

const userDetailsStore = create(
  devtools(persist(userStore, { name: "users" })),
);

export default userDetailsStore;

// import create from "zustand";

// const userDetailsStore = create((set) => ({
//   user: null,
//   setUser: (userData) => set({ user: userData }),
//   logout: () => set({ user: null }),
// }));

// export default userDetailsStore;
