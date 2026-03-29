"use client"

import { useRouter } from "next/navigation"

export default function ProducerLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Menu */}
      <div className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">

        <h1 className="text-2xl font-bold text-green-800">
          Producer Portal
        </h1>

        <div className="flex gap-10 font-semibold text-gray-900 text-lg">
          <button
            onClick={() => router.push("/producer/create")}
            className="hover:text-green-700 transition"
          >
            Create Auction
          </button>

          <button
            onClick={() => router.push("/producer/listings")}
            className="hover:text-green-700 transition"
          >
            My Listings
          </button>

          <button
            onClick={() => router.push("/producer/results")}
            className="hover:text-green-700 transition"
          >
            Auction Results
          </button>

          <button
            onClick={() => router.push("/")}
            className="hover:text-red-500 transition"
          >
            Logout
          </button>
        </div>

      </div>

      <div className="p-10">
        {children}
      </div>

    </div>
  )
}