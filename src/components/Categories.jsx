import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector(state => state.categoriesSlice.categories);

  return(
    <div className="text-white">
      <div className="flex justify-center items-center h-40 bg-united font-bold">
        <div>
          <h2 className="text-xl">CATEGORIES</h2>
          <p className="text-end">{categories.length} in total</p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-queen">
        {categories.map((category, index) => (
          <div className={`flex justify-center items-center h-40 font-bold ${ !category.bg ? 'bg-queen' : 'bg-yonder' }`} key={index}>
            <button className="h-full w-full">{category.name}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories;