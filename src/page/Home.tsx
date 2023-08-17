import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Home() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

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
