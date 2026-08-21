import { Link, useParams } from "react-router-dom";

import { recipes } from "../pages/Recipes";

function RecipeDeteils() {
      const {recipies, id}= useParams()
  const recipe= recipes.find(recipe=> recipe.id=== Number(id))
  console.log(recipe)
  return (
    <div className="min-h-screen bg-gray-100 py-2">

      <div className="max-w-5xl mx-auto px-4">

        <div className="bg-white p-6 rounded-lg shadow-md">

          <Link
            to="/recipes"
            className="text-rose-600 mb-5 inline-block"
          >
            ← Back to Recipes
          </Link>

          <h1 className="text-3xl font-bold mb-6">
            {recipe.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Ingredients */}
            <div>
              <h2 className="text-xl font-bold mb-4">
                Ingredients
              </h2>

              <ul className="list-disc pl-5 space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-xl font-bold mb-4">
                Instructions
              </h2>

              <ol className="list-decimal pl-5 space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default RecipeDeteils;