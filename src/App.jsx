import { Route, Routes } from "react-router-dom"
import Categories from "./components/Categories"
import NavBar from "./components/NavBar"
import Games from "./components/Games"

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/games" element={<Games />} />
    </Routes>
  </>
)

export default App
