"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Import local images
import kennySkin from '../assets/kenny.png'
import avatarKenny from '../assets/avatarKenny.png'
import santiagoSkin from '../assets/santiagoSkin.png'
import santiagoAvatar from '../assets/santiagoAvatar.png'
import angelAvatar from '../assets/avatarAngel.png'
import angelSkin from '../assets/skinAngel.png'
import kaindisSkin from '../assets/kaindisSkin.png'
import kaindisAvatar from '../assets/kaindisAvatar.png'

const teamMembers = [
  {
    name: "Santiago Piovan",
    title: "Founder",
    description: "Ciao sono il founder di questo server. Abbiamo voluto creare questo server minecraft per riuscire a creare una piccola community dove la gente potesse divertirsi. Riuscire a creare questo server è stato possibile grazie al mio team.",
    skin: santiagoSkin,
    avatar: santiagoAvatar
  },
  {
    name: "Kaindis",
    title: "Owner",
    description: "Ciao , Sono Kaindis , l'owner di questo splendido server! Sono bravo in molte cose così come  build oppure la gestione del server. Spero vi troviate bene nel server è che vi piaccia , buona giocata!",
    skin: kaindisSkin,
    avatar: kaindisAvatar
  },
  {
    name: "Angel & Devil",
    title: "Sr.Admin & Developer",
    description: "Angel & Devil il Sr.Admin e Developer del server, io mi occupo di un po' di tutto in realtà, mi sono occupato e mi sto occupando del sito web che in questo momento state vedendo, mi occupo di diverse costruzioni del server MineCraft e in fine del server Discord, la nuova versione del server Discord rimodernizzata infatti è completamente creata da me, inoltre nel server Discord ho provveduto a sviluppare l'intero bot Discord.",
    avatar: angelAvatar,
    skin: angelSkin,
  },
  {
    name: "Kenny_Viola",
    title: "MegaBuilder",
    description: "Io kenny_viola o come mi conoscono meglio marcoshd sono il megabuilder e costruttore della lobby, aver ottenuto il ruolo dallo staff e stato bellissimo. Staff gentilissimo. Vi aspettiamo nel server boysss",
    skin: kennySkin,
    avatar: avatarKenny
  }
]

export default function MeetTheTeam() {
  const [currentMember, setCurrentMember] = useState(0)

  return (
    <motion.div 
      className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8" 
      id='staff'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-orange-500 text-lg mb-2" 
          style={{ fontFamily: "MineCraftFont" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          CHI SIAMO
        </motion.h2>
        <motion.h3 
          className="text-white text-4xl font-bold mb-8" 
          style={{ fontFamily: "MineCraftFont" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          SCOPRI IL TEAM
        </motion.h3>
        
        <motion.div 
          className="bg-gray-800 rounded-lg p-6 md:p-8 relative overflow-hidden"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMember}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              <div className="w-full md:w-2/3">
                <motion.h4 
                  className="text-white text-2xl font-bold mb-2" 
                  style={{ fontFamily: "MineCraftFont" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {teamMembers[currentMember].name}
                </motion.h4>
                <motion.div 
                  className="bg-orange-500 text-white text-sm font-bold py-1 px-2 rounded-full inline-block mb-4" 
                  style={{ fontFamily: "MineCraftFont" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {teamMembers[currentMember].title}
                </motion.div>
                <motion.p 
                  className="text-gray-300" 
                  style={{ fontFamily: "MineCraftFont2" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {teamMembers[currentMember].description}
                </motion.p>
              </div>
              <motion.div 
                className="w-full md:w-1/3 flex justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Image
                  src={teamMembers[currentMember].skin}
                  alt={`${teamMembers[currentMember].name}'s Minecraft skin`}
                  width={200}
                  height={400}
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            className="flex justify-center mt-8 space-x-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {teamMembers.map((member, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentMember(index)}
                className={`w-10 h-10 rounded-full overflow-hidden border-2 ${
                  index === currentMember ? 'border-orange-500' : 'border-transparent'
                } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-all duration-200`}
                aria-label={`View ${member.name}'s profile`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={member.avatar}
                  alt={`${member.name}'s avatar`}
                  width={40}
                  height={40}
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}