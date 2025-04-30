import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovie } from "../features/cart/cartSlice";

function MoviePlaylist() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.cart.cartItems.movies);

  const handleMovieAdd = (movie) => {
    dispatch(addMovie({ movie }));
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie({ movie }));
  };

  const renderedMovies = movies.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
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
        <h3 className="subtitle font-bold text-2xl ">Film Listesi</h3>

        <button
          onClick={() => handleMovieAdd(createRandomMovie())}
          className="p-2 m-2 bg-blue-500 rounded-md text-white text-sm cursor-pointer"
        >
          + Listeye Film Ekle
        </button>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
