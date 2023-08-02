import settings_icon from "../assets/settings_icon.png";
import menu_icon from "../assets/menu_icon.png";

const NavBar = () => (
  <div className="px-4 py-2 text-center bg-yonder flex justify-between">
    <button><img src={menu_icon} alt="Icon Image"></img></button>
    <h1 className="text-white">MMO GAMES</h1>
    <img src={settings_icon} alt="Icon Image"></img>
  </div>
)

export default NavBar;