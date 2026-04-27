import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice.js";
import Counter from "./Counter.jsx";

// membuat variabel global untuk menyimpan state (global)
const store = configureStore({
  // membuat reducer
  reducer: {
    // menambahkan reducer dari slice yang sudah kita buat ke state global (store)
    counter: counterSlice.reducer,
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
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
