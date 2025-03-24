import { motion } from "framer-motion";

export default function FindMatches() {
  return (
    <div className="bg-white min-h-screen p-8 mt-20 text-gray-800">
      <motion.h1
        className="text-4xl font-bold text-center text-rose-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Find Your Perfect Match
      </motion.h1>
      <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Sample Match Profiles */}
        {[1, 2, 3, 4, 5, 6].map((match) => (
          <motion.div
            key={match}
            className="p-4 border rounded-lg shadow-md bg-gray-100 hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={`https://randomuser.me/api/portraits/women/${match + 10}.jpg`}
              alt="Profile"
              className="rounded-full w-24 h-24 mx-auto"
            />
            <h2 className="text-lg font-semibold text-center mt-3">User {match}</h2>
            <p className="text-center text-sm text-gray-500">Age: {20 + match}, City: XYZ</p>
            <button className="block bg-rose-600 text-white px-4 py-2 rounded-full mt-3 mx-auto">
              View Profile
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
