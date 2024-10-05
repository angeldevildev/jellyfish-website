import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "JellyFishMC",
  description: "JellyFishMC è un server MineCraft italiano a più modalità attualmente in costruzione, ma puoi giocare la survival proprio ORA!! Unisciti al server, ti aspettiamo!",
  openGraph: {
    title: "JellyFishMC",
    description: "JellyFishMC è un server MineCraft italiano a più modalità attualmente in costruzione, ma puoi giocare la survival proprio ORA!! Unisciti al server, ti aspettiamo!",
    url: "https://jellyfish-website.vercel.app",
    siteName: "JellyFishMC",
    images: [
      {
        url: "https://jellyfish-website.vercel.app/api/og",
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
