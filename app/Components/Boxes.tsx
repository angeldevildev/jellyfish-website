"use client"

import { Server, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const features = [
  {
    title: "Quasi sempre aperto",
    description: "Il nostro server è quasi sempre aperto, avvolte rimane aperto fino alle +23:00 per permetterti di giocare quanto tempo vuoi",
    icon: Server,
    color: "from-emerald-400 to-teal-600"
  },
  {
    title: "Più Game Modes",
    description: "Il server è attualmente in costruzione ma ha già previsto di aggiungere più modalità, attualmente l'unica modalità disponibile è la survival, ma ne verranno aggiunte di nuove!",
    icon: Users,
    color: "from-sky-400 to-blue-600"
  },
  {
    title: "Ottima Community",
    description: "La nostra community è ottima ed accettiamo sempre nuovi giocatori che giochino nel nostro server. Attualmente siamo anche in ricerca di staffers che sappiano moderare!",
    icon: Globe,
    color: "from-purple-400 to-indigo-600"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

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
}

export default function FeatureBoxes() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 group"
            >
              <motion.div
                className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-br ${feature.color}`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'MineCraftFont', cursive" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: "MineCraftFont2" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {feature.description}
              </motion.p>
              <motion.div
                className={`h-1 bg-gradient-to-r ${feature.color} mt-4`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}