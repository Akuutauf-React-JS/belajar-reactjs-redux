import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo } from "./todoListSlice";

export default function AddTodo() {
  // menyiapkan data yang berkaitan untuk menambahkan data todo baru ke state array milik state global (todolist)
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // membuat event handler
  function handleAddTodo() {
    // memanggil action pada slice dengan menggunakan dispatch
    dispatch(addTodo({ name: name }));

    // setelah proses penambahan data todo selesai, langsung di redirect ke halaman (route) berikut
    navigate("/todolist");
  }

  return (
    <div>
      <h1>Add Todo</h1>

      {/* atur agar nama berubah ketika input melakukan perubahan */}
      <input type="text" placeholder="Enter todo name" onChange={(e) => setName(e.target.value)} />

      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}
