import { motion } from "framer-motion";

export default function PremiumPlans() {
  return (
    <motion.div
      className="bg-white min-h-screen p-8 mt-20 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold text-center text-rose-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Premium Plans
      </motion.h1>

      <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Plan Cards with Animation */}
        {["Basic", "Standard", "Premium"].map((plan, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 border rounded-lg text-center shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
          >
            <h2 className="text-2xl font-semibold">{plan}</h2>
            <p className="text-gray-500 mt-2">
              Best for{" "}
              {plan === "Basic"
                ? "starters"
                : plan === "Standard"
                ? "serious seekers"
                : "exclusive members"}
              .
            </p>
            <p className="text-rose-600 font-bold mt-3">${(index + 1) * 10}/mo</p>

            <motion.button
              className="mt-4 bg-rose-600 text-white px-4 py-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
