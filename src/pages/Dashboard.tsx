import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const user = location.state?.user;

  return <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Welcome to Your Dashboard
        </h2>
        {user && (
          <p className="text-center text-gray-700 mb-4">
            Logged in as: <span className="font-semibold">{user}</span>
          </p>
        )}
        <p className="text-center text-gray-600">
          This is a placeholder for your dashboard content.
        </p>
      </div>
    </div>
  </>;
}
