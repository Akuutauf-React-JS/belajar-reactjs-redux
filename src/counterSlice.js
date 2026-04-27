import { createSlice } from "@reduxjs/toolkit";

// membuat state menggunakan slice
export const counterSlice = createSlice({
  // mengisikan parameter slice (nama, initial value, dan reducer)
  name: "counter",
  initialState: 0,
  reducers: {
    // membuat action (function di reducer dengan slice)

    // dengan menambahkan parameter state, untuk mengubah data state nya
    // dan action untuk memperoleh detail parameter yang dikirim oleh pengguna
    // action memiliki attribute : action.type = "counter/increment" (nama slice/nama action)
    increment: (state, action) => {
      // lakukan pengecekan untuk payload (parameter yang diberikan oleh user)
      if (action.payload) {
        return state + action.payload; // akan menjumlahkan sesuai dengan parameter yang diberikan
      } else {
        return state + 1; // increment biasa (+1)
      }
    },
    decrement: (state, action) => {
      if (action.payload) {
        return state - action.payload; // akan mengurangi sesuai dengan parameter yang diberikan
      } else {
        return state - 1; // increment biasa (-1)
      }
    },
  },
  // implementasi selector untuk mendapatkan data state yang lebih detail
  selectors: {
    // membuat selector untuk mendapatkan data state counter, namun dikalikan dua
    getDoubleCounter(state) {
      // kita bisa return data state saja (tanpa double), untuk mendapatkan data state jika itu yang diinginkan
      return state * 2;
    },

    // membuat selector dengan parameter
    getCounter(state, value) {
      // akan mengkalikan nilai state counter sekarang, dengan value yang dikirikmkan oleh user
      return state * value;
    },
  },
});

// mengeskport action (function reduer), dengam metode Destructuring
export const { increment, decrement } = counterSlice.actions;

// mengeksport selector
export const { getDoubleCounter, getCounter } = counterSlice.selectors;
