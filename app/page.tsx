"use client"

import Navbar from "./components/Navbar"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-gray-100">

      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center py-40 px-6"
      >
        <h2 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight max-w-4xl">
          Direct Farm Auctions. No Middlemen.
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Verified producers. Transparent bidding. Fair pricing.
        </p>

        <div className="flex gap-6">

          {/* Seller Login */}
          <button 
            onClick={() => router.push("/seller-login")}
            className="bg-green-700 text-white px-8 py-3 rounded-2xl hover:bg-green-800 hover:scale-105 transform transition duration-300 shadow-md hover:shadow-lg"
          >
            Seller Login
          </button>

          {/* Producer Login */}
          <button 
            onClick={() => router.push("/producer-login")}
            className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-2xl hover:bg-green-100 hover:scale-105 transform transition duration-300"
          >
            Producer Login
          </button>

        </div>

      </motion.section>

    </main>
  )
}