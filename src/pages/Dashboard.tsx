import { useLocation, useNavigate } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const goals = [
    { id: 1, title: "Build Full-Stack Task Manager", duration: "6 Months", completion: 80 },
    { id: 2, title: "Learn DevOps & Cloud Deployment", duration: "1 Year", completion: 45 },
    { id: 3, title: "Master DSA & Competitive Coding", duration: "8 Months", completion: 60 },
    { id: 4, title: "Start YouTube Channel on Tech", duration: "1 Year", completion: 30 },
    { id: 5, title: "Get Fit — 6AM Workout Habit", duration: "3 Months", completion: 75 },
  ];
  const handleGoalClick = (goalId: number) => {
    console.log(`Navigate to details of goal ID: ${goalId}`);
    navigate(`/goal/${goalId}`);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full max-w-5x rounded-2xl p-8">
        {user && (<h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Welcome to Your Dashboard {user}
        </h2>)}
        <p className="text-center text-gray-700 mb-4">
          Here are your current goals and their progress.
        </p>
        <p className="text-center text-gray-600 mb-6">
          Number of Your Goals :{" "}
          <span className="font-semibold">{goals.length}</span>
        </p>
        <div className="flex flex-row justify-between"> 
          <div className="flex flex-row gap-5">
            <button onClick={() => navigate('/creategoal')} className="text-2xl flex items-center justify-center gap-3 mb-4 cursor-pointer">
              <h3 className="text-amber-50">Check Goals</h3>
              <FaRegSquarePlus className="text-amber-50 text-3xl" />
            </button>
            <button onClick={() => navigate('/createtask')} className="text-2xl flex items-center justify-center gap-3 mb-4 cursor-pointer">
              <h3 className="text-amber-50">Check Task</h3>
              <FaRegSquarePlus className="text-amber-50 text-3xl" />
            </button>
          </div>
          <div className="flex flex-row gap-5">
            <button onClick={() => navigate('/creategoal')} className="text-2xl flex items-center justify-center gap-3 mb-4 cursor-pointer">
              <h3 className="text-amber-50">Create Goals</h3>
              <FaRegSquarePlus className="text-amber-50 text-3xl" />
            </button>
            <button onClick={() => navigate('/createtask')} className="text-2xl flex items-center justify-center gap-3 mb-4 cursor-pointer">
              <h3 className="text-amber-50">Create Task</h3>
              <FaRegSquarePlus className="text-amber-50 text-3xl" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Goal Title</th>
                <th className="py-3 px-4 text-left">Duration</th>
                <th className="py-3 px-4 text-left">Completion Chance</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((goal, index) => (
                <tr
                  key={goal.id}
                  className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                >
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 text-gray-800" onClick={() => handleGoalClick(goal.id)}>{goal.title}</td>
                  <td className="py-3 px-4 text-gray-600">{goal.duration}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-2 rounded-full ${goal.completion > 70
                            ? "bg-green-500"
                            : goal.completion > 40
                              ? "bg-yellow-400"
                              : "bg-red-400"
                            }`}
                          style={{ width: `${goal.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-700">
                        {goal.completion}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
