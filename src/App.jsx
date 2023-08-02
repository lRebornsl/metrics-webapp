import { Route, Routes } from "react-router-dom"
import Categories from "./components/Categories"
import NavBar from "./components/NavBar"

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Categories />} />
    </Routes>
  </>
)

export default App
