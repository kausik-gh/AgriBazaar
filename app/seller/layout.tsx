"use client"

import { useRouter } from "next/navigation"
import { AuctionProvider } from "@/app/seller/AuctionContext"

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter()

  return (
    <AuctionProvider>

      <div className="min-h-screen bg-gray-50">

        {/* Top Menu */}
        <div className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">

          <h1 className="text-2xl font-bold text-green-800">
            Seller Portal
          </h1>

          <div className="flex gap-10 font-semibold text-gray-800 text-lg">
            <button
              onClick={() => router.push("/seller/browse")}
              className="hover:text-green-700 transition"
            >
              Browse Auctions
            </button>

            <button
              onClick={() => router.push("/seller/status")}
              className="hover:text-green-700 transition"
            >
              Auction Status
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

    </AuctionProvider>
  )
}