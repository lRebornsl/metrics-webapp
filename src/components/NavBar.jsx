import settings_icon from "../assets/settings_icon.png";
import menu_icon from "../assets/menu_icon.png";
import back_icon from "../assets/back_icon.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const home = location.pathname === "/";

  return(
    <div className="px-4 py-2 text-center bg-yonder flex justify-between">
      {home ? (<button><img src={menu_icon} alt="Icon Image"></img></button>) : (<Link to="/"><img src={back_icon} alt="Icon" /></Link>)}
      <h1 className="text-white font-bold text-xl">MMO GAMES</h1>
      <img className="h-full" src={settings_icon} alt="Icon Image"></img>
    </div>
  )
}

export default NavBar;