'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import screenshoot from '../assets/screenshoot.png'

export default function Component() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <AnimatePresence>
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6" style={{ fontFamily: "MineCraftFont2" }}>
                <motion.span
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
                  style={{ fontFamily: "MineCraftFont" }}
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                >
                  EPICHE AVVENTURE
                </motion.span>
                <br />
                TI ASPETTANO
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 max-w-xl" style={{ fontFamily: "MinecraftFont2" }}>
                JellyFishMC è un server MineCraft a più modalità lanciato nel 2024, il server è attualmente in costruzione ma puoi giocare proprio ORA nella Survival!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://discord.gg/ZxW9wJKnf7"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "MineCraftFont2" }}
                >
                  Entra nel Server!
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative rounded-xl overflow-hidden">
                <Image
                  src={screenshoot}
                  alt="Minecraft Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <motion.div
                className="absolute bottom-4 left-4 bg-opacity-75 rounded-mdpx-3 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="text-white text-sm font-semibold">Nuovo Server 2024!</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}