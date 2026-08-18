const TailwindProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* top */}
        <div className="p-4 capitalize bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="flex justify-between items-center ">
            <div>
              <h1 className="text-gray-800 font-extrabold">
                {" "}
                welcome back, student!
              </h1>
              <p className="text-gray-500">
                here's what's happing with your courses today{" "}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <p className="px-2 text-xl"> 🔔</p>
              <p className=" items-center w-12 h-12 rounded-full  object-cover border-4 bg-rose-400 text-white mt-2">
                {" "} mc
              </p>
            </div>
          </div>
        </div>
        {/* card1  */}
        <div className="grid grid-cols-1 md: grid-cols-4 gap-4 ">
          <div className="p-4 mt-4 capitalize bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ">
            <div className=" flex items-center gap-3">
              <span> 📊</span>
              <div>
                <h3 className="text-gray-500"> average grade</h3>
                <span className=" font-extrabold"> 88%</span>
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="p-4 mt-4 capitalize bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ">
            <div className=" flex items-center gap-3">
              <span> 📚</span>
              <div>
                <h3 className="text-gray-500"> caourses</h3>
                <span className=" font-extrabold"> 3</span>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="p-4 mt-4 capitalize bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ">
            <div className=" flex items-center gap-3">
              <span> 🕰️</span>
              <div>
                <h3 className="text-gray-500"> study haours</h3>
                <span className=" font-extrabold"> 45h</span>
              </div>
            </div>
          </div>
          {/* card 4 */}

          <div className="p-4 mt-4 capitalize bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ">
            <div className=" flex items-center gap-3">
              <span> ✍️</span>
              <div>
                <h3 className="text-gray-500"> Assignments</h3>
                <span className=" font-extrabold"> 12</span>
              </div>
            </div>
          </div>
        </div>

        {/* courses section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* left side */}
          <div className="col-span-2 p-4 mt-4 capitalize bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div>
              <h2 className=" text-2xl text-gray-800 font-bold  ">
                course progress
              </h2>
            </div>
            <div className="bg-gray-100 rounded-xl mt-4">
              <div className=" p-4">
                <div className="flex justify-between mt-2">
                  <span className="font-medium text-gray-600">
                    {" "}
                    react fundamentels{" "}
                  </span>
                  <span className="text-gray-400"> 75%</span>
                </div>
                <div className="w-full rounded-full h-3 dark:bg-gray-500 mt-2">
                  <div className="bg-gray-300 h-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  75%"></div>
                </div>

                <div className="flex justify-between mt-2">
                  <span className="font-medium text-gray-400">
                    {" "}
                    next: component & props
                  </span>
                  <span className="text-gray-400"> sarah willson</span>
                </div>
              </div>
            </div>

            {/* secntion 2 */}
            <div className="bg-gray-100 rounded-xl mt-4">
              <div className=" p-4">
                <div className="flex justify-between mt-2">
                  <span className="font-medium text-gray-600">
                    {" "}
                    javaScript advanced{" "}
                  </span>
                  <span className="text-gray-400"> 45%</span>
                </div>
                <div className="w-full rounded-full h-3 dark:bg-gray-500 mt-2">
                  <div className="bg-gray-300 h-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  75%"></div>
                </div>

                <div className="flex justify-between mt-2">
                  <span className="font-medium text-gray-400">
                    {" "}
                    next: async/awit
                  </span>
                  <span className="text-gray-400"> mike johnson</span>
                </div>
              </div>
            </div>
            {/* section 3 */}
            <div className="bg-gray-100 rounded-xl mt-4">
              <div className=" p-4">
                <div className="flex justify-between mt-2">
                  <span className="font-medium text-gray-600">
                    {" "}
                    Ux/Ui desing{" "}
                  </span>
                  <span className="text-gray-400"> 90%</span>
                </div>
                <div className="w-full rounded-full h-3 dark:bg-gray-500 mt-2">
                  <div className="bg-gray-300 h-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  75%"></div>
                </div>

                <div className="flex justify-between mt-2">
                  <span className="font-medium text-gray-400">
                    {" "}
                    next: color theory
                  </span>
                  <span className="text-gray-400"> emily chen</span>
                </div>
              </div>
            </div>
          </div>

          {/* rigt side */}

          <div className="md:col-span-1 mt-4 space-y-4">
            {/* Upcoming Assignments */}
            <div className="p-5 capitalize bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-bold text-gray-800 mb-4">
                {" "}
                Upcoming Assignments
              </h2>
              {/* cars */}
              <div>
                <div className="flex justify-between ">
                  <h3 className="font-semibold text-gray-700">
                    Build a Todo App
                  </h3>
                  <span className="bg-red-100 text-red-600 text-xs  rounded-full p-1">
                    {" "}
                    padding
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-400"> React Fundamentals</span>
                  <span className="text-gray-400"> Due 2024-03-20</span>
                </div>
              </div>

              {/* Assignment 2 */}
              <div className="mb-5">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-700">
                    API Integration
                  </h3>

                  <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                    completed
                  </span>
                </div>

                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-400">JavaScript Advanced</span>
                  <span className="text-gray-400">Due 2024-03-18</span>
                </div>
              </div>

              {/* Assignment 3 */}
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-700">Design System</h3>

                  <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    in-progress
                  </span>
                </div>

                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-400">UI/UX Design</span>
                  <span className="text-gray-400">Due 2024-03-25</span>
                </div>
              </div>
            </div>
            {/* Announcements */}
            <div className="p-5 capitalize bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-gray-800 font-bold text-xl mb-4">
                {" "}
                Announcements
              </h2>
              <div className="border-l-4 border-blue-500 pl-4 mb-5">
                <h3 className="text-gray-700  font-semibold">
                  {" "}
                  New Course Available
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Check out our new TypeScript course!
                </p>

                <span className="text-xs text-gray-400">2 hours ago</span>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-700">
                  Maintenance Notice
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Platform updates scheduled for tonight
                </p>

                <span className="text-xs text-gray-400">5 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindProject;
