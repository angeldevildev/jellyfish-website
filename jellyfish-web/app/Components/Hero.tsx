"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import screenshoot from '../assets/screenshoot.png'

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimatePresence>
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6" style={{ fontFamily: "MineCraftFont2" }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500" style={{ fontFamily: "MineCraftFont" }}>
                  EPICHE AVVENTURE
                </span>
                <br />
                TI ASPETTANO
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 max-w-l" style={{ fontFamily: "MinecraftFont2" }}>
                JellyFishMC è un server MineCraft a più modalità lanciato nel 2024, il server è attualemente in costruzione ma puoi giocare proprio ORA nella Survival! 
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://discord.gg/ZxW9wJKnf7"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
                  style={{ fontFamily: "MineCraftFont2" }}
                >
                  Entra nel Server!
                  <ArrowRight className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative rounded-xl">
                <Image
                  src={screenshoot}
                  alt="Minecraft Image"
                  layout="fill"
                  objectFit="contain"
                  className='rounded-xl'
                />
              </div>
              <div className="absolute inset-0  from-gray-900 to-transparent opacity-50"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}