"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[#0f1729] text-white py-8 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h3 
              className="text-[#ff6b00] text-2xl font-bold uppercase" 
              style={{ fontFamily: "MineCraftFont" }}
              whileHover={{ scale: 1.05 }}
            >
              JellyFish
            </motion.h3>
            <motion.p 
              className="text-l" 
              style={{ fontFamily: "MineCraftFont2" }}
              variants={itemVariants}
            >
              Server di gioco con regole e linee guida per una comunità rispettosa e divertente.
            </motion.p>
          </motion.div>
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h4 
              className="text-lg font-semibold uppercase" 
              style={{ fontFamily: "MineCraftFont" }}
              whileHover={{ scale: 1.05 }}
            >
              Links Rapidi
            </motion.h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Modalità', 'Regole', 'Team'].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <Link 
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                    className="hover:text-[#ff6b00] transition-colors text-xl inline-block" 
                    style={{ fontFamily: "MineCraftFont2" }}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 pt-4 border-t border-gray-700 text-sm text-gray-400 text-xl" 
          style={{ fontFamily: "MineCraftFont2" }}
          variants={itemVariants}
        >
          <p className="inline">&copy; {new Date().getFullYear()} Sviluppatore: </p>
          <motion.a 
            href="https://www.codedoddle.com/" 
            target='_blank' 
            className="inline hover:text-[#ff6b00] transition-colors" 
            style={{ fontFamily: "MineCraftFont2" }}
            whileHover={{ scale: 1.05 }}
          >
            angeldevildev
          </motion.a>
          <motion.p variants={itemVariants}>&copy; {new Date().getFullYear()} JellyFish. Tutti i diritti riservati.</motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}