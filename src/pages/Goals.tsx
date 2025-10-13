import { useParams } from "react-router-dom";

export default function Goals() {
  const { id } = useParams();
  console.log("Goal ID from URL:", id);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Goals Overview {id}
        </h2>

        <p className="text-center text-gray-700 mb-4">
          Here you can view and manage your goals.
        </p>
        <p className="text-center text-gray-600 mb-6">
          More features coming soon!
        </p>
      </div>
    </div>
  );
}