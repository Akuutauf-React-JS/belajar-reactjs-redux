import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice.js";
import Counter from "./Counter.jsx";
import { todoListSlice } from "./todoListSlice.js";
import ListTodo from "./ListTodo.jsx";
import AddTodo from "./AddTodo.jsx";
import UpdateTodo from "./UpdateTodo.jsx";

// membuat variabel global untuk menyimpan state (global)
const store = configureStore({
  // membuat reducer
  reducer: {
    // menambahkan reducer dari slice yang sudah kita buat ke state global (store)
    counter: counterSlice.reducer,

    // implementasi todolist, yang ditambahkan ke store (sebagai state global)
    todoList: todoListSlice.reducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* implementasi provider */}
    {/* jika meggunakan redux, wajib pakai parameter store */}
    <Provider store={store}>
      {/* implementasi react router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>

          {/* implementasi counter */}
          {/* nilai yang ditampilkan akan menyesuaikan dengan initial state pada slice */}
          <Route
            path="/counter"
            element={
              // implementasi state global, dengan 2 counter
              // di react, data state yang di simpan setiap component itu tidak akan sama
              // namun dengan state global, hal ini akan sama jika kita memanfaatkan data state global dalam komponen tertentu
              <>
                <Counter />
                <Counter />
              </>
            }
          ></Route>

          {/* implementasi todolist routing */}
          <Route path={"/todolist"} element={<ListTodo />}></Route>
          <Route path={"/todolist/add"} element={<AddTodo />}></Route>
          <Route path={"/todolist/:id/edit"} element={<UpdateTodo />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
