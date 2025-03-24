import { motion } from "framer-motion";

export default function SuccessStories() {
  return (
    <div className="bg-white min-h-screen p-8 mt-20 text-gray-800">
      <motion.h1
        className="text-4xl font-bold text-center text-rose-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Success Stories
      </motion.h1>
      <div className="max-w-5xl mx-auto mt-6 space-y-6">
        {/* Success Story Card */}
        {[1, 2, 3].map((story) => (
          <motion.div
            key={story}
            className="p-6 bg-gray-100 border rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            <p className="text-gray-700">
              "We found each other through HeartMatch and are now happily married!"
            </p>
            <p className="text-sm text-right text-gray-500">- Couple {story}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
