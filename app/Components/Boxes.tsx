"use client"

import { Server, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const features = [
  {
    title: "Quasi sempre aperto",
    description: "Il nostro server è quasi sempre aperto, avvolte rimane aperto fino alle +23:00 per permetterti di giocare quanto tempo vuoi",
    icon: Server
  },
  {
    title: "Più Game Modes",
    description: "Il server è attualmente in costruzione ma ha già previsto di aggiungere più modalità, attualmente l'unica modalità disponibile è la survival, ma ne verranno aggiunte di nuove!",
    icon: Users
  },
  {
    title: "Ottima Community",
    description: "La nostra community è ottima ed accettiamo sempre nuovi giocatori che giochino nel nostro server.",
    icon: Globe
  }
]

export default function FeatureBoxes() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'MineCraftFont', cursive" }}>
                {feature.title}
              </h3>
              <p className="text-gray-300" style={{ fontFamily: "MineCraftFont2" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}