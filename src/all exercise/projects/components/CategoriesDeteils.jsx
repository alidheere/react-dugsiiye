
// import { useParams } from "react-router-dom";
// import { categories, recipes } from "./Recipes";

function CategoriesDetails() {
  const { id } = useParams();

  const category = categories.find(
    (category) => category.id === Number(id)
  );

  if (!category) {
    return <h2>Category not found</h2>;
  }

  const categoryRecipes = recipes.filter(
    (recipe) =>
      recipe.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">

        <h1 className="text-3xl font-bold mb-6">
          {category.name} Recipes
        </h1>

        <p className="text-gray-600 mb-6">
          {category.description}
        </p>

        <div className="space-y-4">
          {categoryRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="border rounded-lg p-4"
            >
              <h2 className="text-xl font-bold">
                {recipe.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {recipe.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CategoriesDetails;