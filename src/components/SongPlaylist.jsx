import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../features/cart/cartSlice";

function SongPlaylist() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.cart.cartItems.songs);

  const handleSongAdd = (song) => {
    dispatch(addSong({ song }));
  };
  const handleSongRemove = (song) => {
    dispatch(removeSong({ song }));
  };

  const renderedSongs = songs.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="py-2 px-4  bg-blue-500 rounded-md text-white cursor-pointer text-sm "
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header flex items-baseline border-b-1 border-gray-200">
        <h3 className="subtitle font-bold text-2xl">Şarkı Listesi</h3>
        <button
          onClick={() => handleSongAdd(createRandomSong())}
          className="p-2 m-2 bg-blue-500 rounded-md text-white text-sm cursor-pointer"
        >
          + Listeye Şarkı Ekle
        </button>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
