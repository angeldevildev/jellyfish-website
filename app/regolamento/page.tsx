"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Book, Trophy, Users, Sword } from "lucide-react";

// Definizione dei tipi
type Rule = { id: number; text: string };
type Rules = Record<number, Rule[]>;

const categories = [
  { id: 1, name: "Regole Generali", icon: Home },
  { id: 2, name: "Survival", icon: Book },
  { id: 3, name: "PvP", icon: Trophy },
  { id: 4, name: "Arena", icon: Sword },
  { id: 5, name: "Linee guida chat", icon: Users },
  { id: 6, name: "Regolamento Building", icon: Home },
];

// Assegnazione del tipo Rules all'oggetto rules
const rules: Rules = {
  1: [
    { id: 1, text: "Rispetta tutti i giocatori e i membri dello staff in ogni momento." },
    { id: 2, text: "È severamente vietato barare, hackerare o usare mod che conferiscono vantaggi ingiusti." },
    { id: 3, text: "Non è consentito fare spam nella chat o tramite messaggi privati." },
    { id: 4, text: "È proibito pubblicizzare altri server o siti web." },
    { id: 5, text: "Non è permesso impersonare membri dello staff o altri giocatori." },
    { id: 6, text: "É severamente vietato fare doxxing." },
    { id: 7, text: "É vietato importunare lo staff nel server Discord, aprite un ticket se avete bisogno." }
  ],
  2: [
    { id: 1, text: "Non griefare o rubare dalle costruzioni o dalle casse di altri giocatori." },
    { id: 2, text: "Rispetta l'ambiente naturale. Evita di terraformare eccessivamente senza permesso." },
    { id: 3, text: "L'uso di texture pack o mod x-ray è vietato." },
  ],
  3: [
    { id: 1, text: "Il PvP è consentito solo con il consenso reciproco." },
    { id: 2, text: "Uccidere o fare camping allo spawn non è permesso." },
    { id: 3, text: "L'uso di hack client o mod PvP ingiuste è severamente vietato." },
  ],
  4: [
    { id: 1, text: "Combatti solo contro chi è pronto e armato." },
    { id: 2, text: "Evita attacchi nelle zone di respawn e preparazione." },
    { id: 3, text: "Usa solo tattiche di combattimento corrette." },
    { id: 4, text: "Usa solo armi e armature approvate." },
    { id: 5, text: "Non attaccare subito chi è appena respawnato." },
  ],
  5: [
    { id: 1, text: "Niente parolacce, argomenti inappropriati o linguaggio offensivo." },
    { id: 2, text: "Evita l'uso eccessivo del blocco maiuscole." },
    { id: 3, text: "Rispetta le opinioni degli altri ed evita di iniziare o partecipare a discussioni." },
  ],
  6: [
    { id: 1, text: "Mantieni una distanza ragionevole dalle costruzioni di altri giocatori, a meno che non ti venga dato il permesso." },
    { id: 2, text: "Mantieni i congegni di redstone ottimizzati e rispettosi del lag." },
    { id: 3, text: "Evita di costruire strutture che possano causare lag o affaticare il server." },
  ],
};

export default function Regolamento() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
<div className="bg-gray-900 min-h-screen flex flex-col" id="regole">
  <main className="flex-grow pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-[#FF5555] rounded-md mr-4"></div>
        <h1
          className="text-[#FF5555] text-3xl font-bold"
          style={{ fontFamily: "MineCraftFont" }}
        >
          CrystalCove
        </h1>
      </div> 
      <h2
        className="text-[#FF5555] text-lg mb-2"
        style={{ fontFamily: "MineCraftFont" }}
      >
        LEGGI ATTENTAMENTE
      </h2>
      <h3
        className="text-white text-4xl font-bold mb-8 phone-medium:text-2xl"
        style={{ fontFamily: "MineCraftFont" }}
      >
        REGOLAMENTO E LINEE GUIDA
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h4
            className="text-white text-xl font-bold mb-4"
            style={{ fontFamily: "MineCraftFont" }}
          >
            CATEGORIE
          </h4>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full text-left py-3 px-4 rounded-md mb-2 transition-colors duration-200 flex items-center ${
                selectedCategory === category.id
                  ? "bg-[#FF5555] text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              style={{ fontFamily: "MineCraftFont2" }}
            >
              <category.icon className="mr-3 h-5 w-5" />
              {category.id}. {category.name}
            </button>
          ))}
        </div>
        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6">
          <h4
            className="text-white text-xl font-bold mb-4"
            style={{ fontFamily: "MineCraftFont" }}
          >
            {categories
              .find((c) => c.id === selectedCategory)
              ?.name.toUpperCase()}
          </h4>
          <div
            className="bg-[#FF4444] text-white p-4 rounded-md mb-6"
            style={{ fontFamily: "MineCraftFont2" }}
          >
            Lo staff del server si riserva il diritto di modificare queste
            regole in qualsiasi momento. I giocatori sono tenuti a rimanere
            informati su qualsiasi modifica. L&apos;ignoranza delle regole
            non è una scusa per infrangerle.
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {rules[selectedCategory].map((rule) => (
                <div key={rule.id} className="flex items-start mb-4">
                  <span
                    className="bg-[#FF5555] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0"
                    style={{ fontFamily: "MineCraftFont" }}
                  >
                    {rule.id}
                  </span>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: "MineCraftFont2" }}
                  >
                    {rule.text} 
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  </main>
</div>

  );
}
