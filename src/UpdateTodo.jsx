import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getTodo, updateTodo } from "./todoListSlice";

export default function UpdateTodo() {
  // useParams digunakan untuk mengambil parameter dari pengguna
  // params diperlukan pada parameter saat mengambil data state todo dari selector
  const params = useParams();

  // mengambil data state menggunakan selector dari slice
  // mengambil data state berdasarkan id dari parameter yang dikonversi dalam bentuk number
  const todo = useSelector((state) => getTodo(state, Number(params.id)));

  // menyiapkan data yang dibutuhkan untuk melakukan update todo
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // membuat event handler
  function handleUpdateTodo() {
    // memanggil dispatch action untuk update todo
    dispatch(updateTodo({ id: todo.id, name: name }));

    // setelah proses update selesai, langsung redirect ke halaman berikut ini
    navigate("/todolist");
  }

  return (
    <div>
      <h1>Update Todo</h1>

      {/* implementasi input form untuk mengubah data name ketika isi form berubah */}
      <input type="text" value={name} placeholder="Enter todo name" onChange={(e) => setName(e.target.value)} />

      <button onClick={() => handleUpdateTodo()}>Update</button>
    </div>
  );
}
