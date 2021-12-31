import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  const [state, setState] = useState({ isFlipped: false });

  function handleClick(e) {
    e.preventDefault();
    setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <ReactCardFlip isFlipped={state.isFlipped} flipDirection="vertical">
        <div>
          <img className="w-full" src={image} />
          <div className="px-6 pt-4 pb-2">
            <div className="font-bold text-xl mb-2">{title}</div>
            <div>Calories</div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {calories}
            </span>
          </div>
          <button
            onClick={handleClick}
            className="bg-yellow-50 shadow-md h-10 rounded-lg text-sm px-4 mb-4"
          >
            View Ingredients
          </button>
        </div>

        <div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            {ingredients.map((ingredient, index) => (
              <p key={index} className="text-gray-700 text-base">
                {ingredient.text}
              </p>
            ))}
          </div>
          <button
            onClick={handleClick}
            className="bg-yellow-50 shadow-md h-10 rounded-lg text-sm px-4 mb-4"
          >
            Back
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Recipe;
