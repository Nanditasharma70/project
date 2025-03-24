import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <motion.div
        className="p-8 shadow-lg rounded-lg bg-gray-100"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2 className="text-2xl font-bold text-center text-rose-600">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mt-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mt-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full mt-4 bg-rose-600 text-white">Login</Button>
      </motion.div>
    </div>
  );
}
