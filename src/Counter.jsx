import { useDispatch, useSelector } from "react-redux";
import { decrement, getCounter, getDoubleCounter, increment } from "./counterSlice";

export default function Counter() {
  // mengambil data state pada store (state global)
  // state : kumpulan semua state si store
  // jadi dengan state.counter : maka kita hanya mengambil state milik counter saja
  const counter = useSelector((state) => state.counter);

  // membuat dispatch untuk mengambil action / function reducer
  const dispatch = useDispatch();

  // membuat event handler, dan memanggil action nya
  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  // menggunakan function selector
  const doubleCounter = useSelector(getDoubleCounter);

  // menggunakan function selector dengan parameter
  // caranya berbeda dari selector tanpa parameter, yaitu dengan mengambil nilai state saat ini
  const tripleCounter = useSelector((state) => getCounter(state, 3));

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <h1>Double Counter : {doubleCounter}</h1>
      <h1>Triple Counter : {tripleCounter}</h1>

      {/* implementasi action untuk mengubah data state */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      {/* implementasi action dengan parameter */}
      {/* jika parameter lebih dari satu, bisa dibungkus ke dalam object */}
      <button onClick={() => dispatch(increment(2))}>Increment + 2</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement - 2</button>
    </div>
  );
}
