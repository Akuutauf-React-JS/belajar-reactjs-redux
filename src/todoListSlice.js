import { createSlice } from "@reduxjs/toolkit";

// menyiapkan data id untuk todo
let id = 1;

// membuat state menggunakan slice
export const todoListSlice = createSlice({
  // mendefinisikan nama slice, nilai awal, dan reducer
  name: "todoList",
  initialState: [], // akan menggunakan array kosong
  reducers: {
    // membuat action (function di reducer dengan slice), untuk memanipulasi data state todo
    // dengan menggunakan state di parameter action, maka data yang diterima berupa draft

    // membuat action untuk manipulasi state: menambahkan data todo baru
    addTodo: (state, action) => {
      // hanya membutuhkan parameter name
      const { name } = action.payload;
      state.push({ name, id: id++ });
    },

    // membuat action untuk manipulasi state: menghapus data todo berdasarkan id
    removeTodo: (state, action) => {
      // membutuhkan parameter id
      const { id } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);

      // melakukan pengecekan index yang kita cari ada,-
      // jika ada dan index sesuai, maka hapus element dengan index tersebut
      if (index !== -1) {
        // hapus data dengan index yang ditemukan, sebanyak 1 data
        state.splice(index, 1);
      }
    },

    // membuat action untuk manipulasi state: mengupdate data todo berdasarkan id
    updateTodo: (state, action) => {
      // membutuhkan parameter id dan name
      const { id, name } = action.payload;
      const todo = state.find((todo) => todo.id === id);

      // mengecek apakah data todo ditemukan
      if (todo) {
        // kalau data todo ditemukan berdasarkan id yang sesuai, maka update field nama
        todo.name = name;
      }
    },
  },

  // membuat selector untuk mendapatkan data state todo
  selectors: {
    getTodo(state, id) {
      // mengembalikan data todo, berdasarkan id
      return state.find((todo) => todo.id === id);
    },
  },
});

// mengeskport action (function reduer), dengam metode Destructuring
export const { addTodo, removeTodo, updateTodo } = todoListSlice.actions;

// mengeksport selector
export const { getTodo } = todoListSlice.selectors;
