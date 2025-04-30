import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { clearAll } from "./features/cart/cartSlice";

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(clearAll());
  };

  return (
    <div className="flex justify-center">
      <div className=" md:w-2/3 w-full m-5 shadow-2xl rounded-md p-6">
        <button
          onClick={() => handleResetClick()}
          className="p-2 m-2 bg-green-400 rounded-md text-white text-sm cursor-pointer"
        >
          Listeleri Sil
        </button>
        <hr />
        <MoviePlaylist />
        <hr />
        <SongPlaylist />
      </div>
    </div>
  );
}
