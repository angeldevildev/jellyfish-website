import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CrystalCove",
  description: "CrystalCove è un server MineCraft a più modalità lanciato nel 2024, le attuali modalità sono: Survival, KitPVP e Arena. Sta per arrivare una nuova!",
  openGraph: {
    title: "CrystalCove",
    description: "CrystalCove è un server MineCraft a più modalità lanciato nel 2024, le attuali modalità sono: Survival, KitPVP e Arena. Sta per arrivare una nuova!",
    url: "https://crystalcove.vercel.app/",
    siteName: "CrystalCove",
    images: [
      {
        url: "https://crystalcove.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "Ciao! Sei pronto a iniziare l'avventura?"
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
