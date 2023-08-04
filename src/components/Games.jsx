import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getGamesByCategory } from "../redux/Games/gamesSlice";

const Games = () => {
  const location = useLocation();
  const categoryName = location.state;
  const dispatch = useDispatch();
  const games = useSelector(state => state.gamesSlice.games)

  useEffect(() => {
    dispatch(getGamesByCategory(categoryName))
  }, [dispatch, categoryName]);

  return(
    <div>
      {games.map(game => (
        <div className="text-white" key={game.id}>
          <a href={game.game_url}><img className="w-full border-y-2 border-white" src={game.thumbnail} alt="Image" /></a>
          <div className="flex justify-between px-4 py-2 text-xl font-bold bg-queen border-b-2 border-white">
            <h2>{game.title}</h2>
            <h2>{game.release_date}</h2>
          </div>
          <p className="px-4 py-2 text-justify bg-united">{game.short_description}</p>
        </div>
      ))}
    </div>
  )
}

export default Games;