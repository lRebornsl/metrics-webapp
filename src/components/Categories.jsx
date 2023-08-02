import { useSelector } from "react-redux";
import forward_icon from "../assets/forward_icon.png";
import categories_icon from "../assets/categories_icons/categories_icon.png";

const Categories = () => {
  const categories = useSelector(state => state.categoriesSlice.categories);

  return(
    <div className="text-white">
      <div className="flex justify-center items-center h-40 bg-united font-bold">
        <img src={categories_icon} alt="Icon" />
        <div>
          <h2 className="text-xl">CATEGORIES</h2>
          <p className="text-end">{categories.length} in total</p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-queen">
        {categories.map((category, index) => (
          <div className={`p-1 h-50 font-bold ${ !category.bg ? 'bg-queen' : 'bg-yonder' }`} key={index}>
            <div className="flex justify-end items-center">
              <button><img src={forward_icon} alt="Icon" /></button>
            </div>
            <img className="mx-auto py-2" src={category.img} alt="Icon" />
            <h2 className="uppercase text-end">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories;