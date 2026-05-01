import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeTodo } from "./todoListSlice";

export default function ListTodo() {
  // mengambil seluruh data todolist dari state global milik todolist
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  // membuat event handler
  function handleDeleteTodo(id) {
    dispatch(removeTodo({ id: id }));
  }

  return (
    <div>
      <center>
        <h1>List Todo</h1>

        {/* menambahkan komponent untuk mengarahkan ke halaman add todolist */}
        <Link to={"/todolist/add"}>Add Todo</Link>
        <br />
        <br />

        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* implementasi looping seluruh data todolist */}
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>
                  {/* untuk redirect ke halaman update todo */}
                  <Link to={`/todolist/${todo.id}/edit`}>Update</Link>

                  {/* untuk menghapus todo secara langsung */}
                  <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}
