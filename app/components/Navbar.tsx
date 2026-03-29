"use client"

import { useRouter } from "next/navigation"

export default function Navbar() {

  const router = useRouter()

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm sticky top-0 z-50">

      <h1 
        onClick={() => router.push("/")}
        className="text-2xl font-bold text-green-800 cursor-pointer"
      >
        🌾 AgriBid
      </h1>

    </nav>
  )
}