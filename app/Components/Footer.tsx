import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f1729] text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-[#ff6b00] text-2xl font-bold uppercase" style={{ fontFamily: "MineCraftFont" }}>JellyFish</h3>
            <p className="text-l" style={{ fontFamily: "MineCraftFont2" }}>
              Server di gioco con regole e linee guida per una comunità rispettosa e divertente.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase" style={{ fontFamily: "MineCraftFont" }}>Links Rapidi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#ff6b00] transition-colors text-l" style={{ fontFamily: "MineCraftFont2" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#modalità" className="hover:text-[#ff6b00] transition-colors" style={{ fontFamily: "MineCraftFont2" }}>
                  Modalità
                </Link>
              </li>
              <li>
              <Link href="#regolamento" className="hover:text-[#ff6b00] transition-colors" style={{ fontFamily: "MineCraftFont2" }}>
                  Regole
                </Link>
              </li>
              <li>
                <Link href="#staff" className="hover:text-[#ff6b00] transition-colors" style={{ fontFamily: "MineCraftFont2" }}>
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-gray-400 text-xl" style={{ fontFamily: "MineCraftFont2" }}>
        <p className="inline">&copy; {new Date().getFullYear()} Sviluppatore: </p>
          <a href="https://www.codedoddle.com/" target='_blank' className="inline hover:text-[#ff6b00] transition-colors" style={{ fontFamily: "MineCraftFont2" }}>
            angeldevildev
          </a>
          <p>&copy; {new Date().getFullYear()} JellyFish. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
