import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";

export default function Home() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center my-5">
        <button
          onClick={() => dispatch(decrement())}
          className="btn bg-red-500 px-5 py-2 rounded text-white mx-2"
        >
          Decrement
        </button>
        <h3 className="font-bold text-2xl">{count}</h3>
        <button
          onClick={() => dispatch(increment())}
          className="btn bg-green-500 px-5 py-2 rounded text-white mx-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="btn bg-green-500 px-5 py-2 rounded text-white mx-2"
        >
          Increment +5
        </button>
      </div>
    </div>
  );
}
