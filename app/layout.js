import { Poppins } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import LogoBar from "@/components/logobar/LogoBar"

const poppins = Poppins({ subsets: ["latin"],
 weight: ["400",'500', "600", '700'] })

export const metadata = {
  title: "Bez Prowizji - Nieruchomości dla Biznesu",
  description: "Bez Prowizji - Nieruchomości dla Biznesu",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" />
      </head>

      <body className="bg-gray-200">
        <div className={`${poppins.className} max-w-screen-3xl mx-auto`}>
          <LogoBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  )
}
