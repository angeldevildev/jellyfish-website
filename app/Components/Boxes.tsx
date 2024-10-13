"use client"

import { Server, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const features = [
  {
    title: "Sempre Aperto",
    description: "Il nostro server è sempre aperto 24h permettendoti di giocare quanto e quando vuoi!",
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
    description: "La nostra community è ottima ed accettiamo sempre nuovi giocatori che giochino nel nostro server.",
    icon: Globe,
    color: "from-purple-400 to-indigo-600"
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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 group"
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'MineCraftFont', cursive" }}>
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "MineCraftFont2" }}>
                {feature.description}
              </p>
              <div className={`h-1 w-0 bg-gradient-to-r ${feature.color} mt-4 group-hover:w-full transition-all duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}