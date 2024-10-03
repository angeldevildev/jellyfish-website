"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Pickaxe, ChevronDown, Diamond, Sword, Book, Home } from 'lucide-react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Regole', href: '#regole', icon: Book },
  { name: 'Ranks', href: '/ranks', icon: Diamond },
  { name: 'Staff', href: '#staff', icon: Sword },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    controls.start({
      backgroundColor: scrollY > 50 ? 'rgba(17, 24, 39, 0.9)' : 'rgba(17, 24, 39, 0)',
      transition: { duration: 0.3 },
    })
  }, [scrollY, controls])

  return (
    <motion.nav
      className="fixed w-full z-50 text-white p-4"
      initial={{ backgroundColor: 'rgba(17, 24, 39, 0)' }}
      animate={controls}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Pickaxe className="h-8 w-8 lg:h-10 lg:w-10 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
          </motion.div>
          <span className="text-xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:from-orange-400 group-hover:to-yellow-400 transition-all duration-300" style={{ fontFamily: "MineCraftFont" }}>JellyFish</span>
        </Link> 
        
        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-1" style={{ fontFamily: "MineCraftFont" }}>
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} icon={item.icon}>{item.name}</NavLink>
          ))}
        </div>
        
        {/* Store button */}
        <Link href="https://jellyfish-shop.vercel.app" className="hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-2 px-4 lg:px-6 rounded-full transition duration-300 shadow-lg hover:shadow-orange-500/50 text-sm lg:text-base" style={{ fontFamily: "MineCraftFont" }}
          >
            Store
          </motion.div>
        </Link>
        
        {/* Mobile menu button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            style={{ fontFamily: "MineCraftFont" }}
          >
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href} icon={item.icon} mobile>{item.name}</NavLink>
            ))}
            <Link href="https://jellyfish-shop.vercel.app" className="block" target='_blank'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-3 px-4 transition duration-300 text-center" style={{ fontFamily: "MineCraftFont" }}
              >
                Store
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Accetta componenti SVG con props
  mobile?: boolean;
}

function NavLink({ href, children, icon: Icon, mobile = false }: NavLinkProps) {
  const baseClasses = "text-gray-300 hover:text-white transition duration-300 flex items-center"
  const desktopClasses = mobile ? "" : "px-4 py-2 rounded-md hover:bg-gray-800"
  const mobileClasses = mobile ? "block py-3 px-4 hover:bg-gray-700" : ""
  
  return (
    <Link href={href} className={`${baseClasses} ${desktopClasses} ${mobileClasses} group`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center"
      >
        {/* Assicurati che l'icona passi tutte le props necessarie */}
        <Icon className="mr-2 h-5 w-5 text-orange-500 group-hover:text-orange-400" />
        {children}
        {!mobile && (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 180, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <ChevronDown className="ml-1 h-4 w-4" />
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
}
