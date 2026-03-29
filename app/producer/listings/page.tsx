"use client"

import { useAuction } from "@/app/context/AuctionContext"

export default function Listings() {

  const { auctions, setAuctions } = useAuction()

  const myAuctions = auctions.filter(a => a.producer === "You" && a.status === "active")

  const endAuction = (id: number) => {
    const updated = auctions.map(a =>
      a.id === id ? { ...a, status: "ended" as const } : a
    )
    setAuctions(updated)
  }

  return (
    <div>

      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        My Active Auctions
      </h2>

      {myAuctions.length === 0 && (
        <p className="text-gray-700">No active auctions.</p>
      )}

      {myAuctions.map(a => (
        <div key={a.id}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6 text-gray-800">

          <h3 className="text-xl font-semibold text-gray-900">
            {a.crop}
          </h3>

          <p className="mt-2">
            Highest Bid: <span className="font-bold text-green-700">₹{a.highestBid}</span>
          </p>

          <button
            onClick={() => endAuction(a.id)}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            End Auction Now
          </button>

        </div>
      ))}

    </div>
  )
}