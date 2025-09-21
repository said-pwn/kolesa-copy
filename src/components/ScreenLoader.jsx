// ScreenLoader.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScreenLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000); // 2 секунды загрузки
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-blue-500 to-blue-700 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Логотип */}
          <h1 className="text-4xl font-bold text-white mb-6 animate-bounce">
            Moshinabozor.uz
          </h1>

          {/* Круговая анимация */}
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScreenLoader;
