"use client"

import { useAuction } from "@/app/context/AuctionContext"

export default function Results() {

  const { auctions } = useAuction()

  const ended = auctions.filter(a => a.status === "ended" && a.producer === "You")

  return (
    <div>

      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Auction Results
      </h2>

      {ended.length === 0 && (
        <p className="text-gray-700">No completed auctions yet.</p>
      )}

      {ended.map(a => (
        <div key={a.id}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6 text-gray-800">

          <h3 className="text-xl font-semibold text-gray-900">
            {a.crop}
          </h3>

          <p className="mt-2">
            Winning Bid: <span className="font-bold text-green-700">₹{a.highestBid}</span>
          </p>

        </div>
      ))}

    </div>
  )
}