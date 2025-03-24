import { motion } from "framer-motion";

export default function Help() {
  return (
    <motion.div
      className="bg-white min-h-screen p-8 mt-20 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold text-center text-rose-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Help & Support
      </motion.h1>

      <div className="max-w-4xl mx-auto mt-6">
        {/* FAQ Section */}
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          FAQs
        </motion.h2>

        {/* FAQ Items */}
        {[
          { question: "How does HeartMatch work?", answer: "We use AI matchmaking to find your perfect partner." },
          { question: "How can I contact support?", answer: "Email us at support@heartmatch.com" },
        ].map((faq, index) => (
          <motion.div
            key={index}
            className="mt-4 p-4 border rounded-lg bg-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <p className="font-semibold">{faq.question}</p>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
