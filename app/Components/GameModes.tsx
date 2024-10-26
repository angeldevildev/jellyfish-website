"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import survivalImage from '../assets/screenshoo2.png'
import screenshoot from '../assets/screenshoot.png'
import tomba from '../assets/tombafe.png'

const gameModes = [
  {
    title: "Survival",
    description: "Classico MineCraft Survival dove dovrai avere più risorse possibile e creare costruzioni, inoltre con possibilità di Claim e di /shop per ottenere $ nel gioco",
    image: survivalImage
  },
  {
    title: "Kit PVP",
    description: "La modalità Kit PVP è dove potrai scaricare tutta la tua rabbia su un nemico, rilassantissima se devi scaricarti dopo una lunga e difficile giornata!",
    image: screenshoot
  },
  {
    title: "Arena",
    description: "L'arena è usata principalmente per gli eventi del server dove combatteranno due squadre.",
    image: tomba
  }
]

export default function GameModeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gameModes.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
<div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8" id="modalità">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-[#FF5555] text-lg mb-2" style={{ fontFamily: "MineCraftFont" }}>
      COSA OFFRIAMO
    </h2>
    <h3 className="text-white text-4xl font-bold mb-8" style={{ fontFamily: "MineCraftFont" }}>
      SCOPRI LE NOSTRE MODALITÀ
    </h3>
    
    <div className="relative h-[400px] overflow-hidden rounded-lg">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={gameModes[currentIndex].image}
            alt={gameModes[currentIndex].title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 p-8 flex flex-col justify-end">
            <h4 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "MineCraftFont" }}>
              {gameModes[currentIndex].title}
            </h4>
            <p className="text-gray-200" style={{ fontFamily: "MineCraftFont2" }}>
              {gameModes[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    <div className="flex justify-center mt-4">
      {gameModes.map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full mx-1 ${
            index === currentIndex ? 'bg-[#FF5555]' : 'bg-gray-500'
          }`}
          onClick={() => setCurrentIndex(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</div>

  )
}