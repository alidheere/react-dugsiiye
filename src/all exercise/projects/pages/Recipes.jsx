
import { Link } from 'react-router-dom';
export const recipes = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner',
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino cheese',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta',
      'Mix eggs and cheese',
      'Combine while hot'
    ],
    
  },

  {
    id: 3,
    title: "Greek Salad",
    description: "Fresh Mediterranean salad with feta cheese",
    category: "lunch",
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino cheese',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta',
      'Mix eggs and cheese',
      'Combine while hot'
    ],
  },
  
  {
    id: 4,
    title: "Breakfast Smoothie Bowl",
    description: "Healthy and colorful breakfast bowl",
    category: "breakfast",
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino cheese',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta',
      'Mix eggs and cheese',
      'Combine while hot'
    ],
  },
];

// Categories
 export const categories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right'
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Midday favorites'
  },
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Evening meals'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats'
  }
];
 export function Recipes() {
// Recipe Data
 

  return (
   <div className="min-h-screen bg-gray-100 py-2 ">

  <div className="max-w-5xl mx-auto px-4">

    <h1 className="text-3xl font-bold mb-7">
      All Recipes
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3  gap-6">

      {recipes.map((recipe, index) => (
        <div
        
          key={index}
          className="bg-white p-6 shadow-md rounded-lg"
        >
            <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
      

          <h2 className="text-xl font-bold mb-3">
            {recipe.title}
          </h2>

          <p className="text-gray-600 mb-4">
            {recipe.description}
          </p>
          
               <span className="inline-block bg-rose-100 text-rose-700 px-2 py-1 rounded">
            {recipe.category}
          </span>
            
             </Link>

        </div>
      ))}

    </div>

  </div>

</div>
  )
}

