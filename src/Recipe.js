
const Recipe = ({title, calories, image, ingredients}) => {
    return (
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt="Mountain"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          {ingredients.map((ingredient, index) => (
            <p key={index} className="text-gray-700 text-base">
                {ingredient.text}
            </p>
          ))
          }
        </div>
        <div className="px-6 pt-4 pb-2">
            <div>Calories</div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{calories}</span>
        </div>
      </div>
    )
}

export default Recipe;