import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // delay entre letras
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const titles = [
  "Bienvenido a Enredat, Mar del Plata",
  "Nos comprometemos con el acompañamieto",
  "Es esencial la comunicación fluida con el AT."
];

export const MotionSlogan: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 10000); // cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  const currentTitle = titles[index];

  return (
    <motion.div
      key={currentTitle} // importante para reiniciar animación al cambiar título
      variants={sentence}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", flexWrap: "wrap", fontSize: "2rem", fontWeight: "bold", color: "#E58A55" }}
    >
      {currentTitle.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          style={{ whiteSpace: "pre" }} // mantiene espacios
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
