"use client"

import { useState } from "react"
import { useAuction, Auction } from "@/app/context/AuctionContext"

export default function Browse() {

  const { auctions, setAuctions } = useAuction()

  const [search, setSearch] = useState("")
  const [selectedAuction, setSelectedAuction] = useState<Auction | null>(null)
  const [bidAmount, setBidAmount] = useState("")

  const activeAuctions = auctions.filter(a => a.status === "active")

  const filteredAuctions = activeAuctions.filter(a =>
    a.crop.toLowerCase().includes(search.toLowerCase())
  )

  const placeBid = () => {

    if (!selectedAuction) return

    const amount = Number(bidAmount)

    if (amount <= selectedAuction.highestBid) {
      alert("Bid must be higher than current highest bid")
      return
    }

    const updated = auctions.map(a =>
      a.id === selectedAuction.id
        ? { ...a, highestBid: amount, userBid: amount }
        : a
    )

    setAuctions(updated)
    setSelectedAuction(null)
    setBidAmount("")
    alert("Bid Successful")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h2 className="text-4xl font-bold mb-10 text-gray-900">
        Browse Auctions
      </h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-10 px-5 py-3 border border-gray-400 bg-white text-black rounded-xl focus:ring-2 focus:ring-green-600 outline-none"
      />

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {filteredAuctions.map((auction) => (

          <div
            key={auction.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition border border-gray-200 overflow-hidden"
          >

            {/* IMAGE SECTION */}
            <div className="w-full h-52 bg-gray-200 overflow-hidden">

              {auction.image && auction.image.trim() !== "" ? (
                <img
                  src={auction.image}
                  alt={auction.crop}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600 font-semibold">
                  {auction.crop}
                </div>
              )}

            </div>

            {/* DETAILS */}
            <div className="p-6 text-gray-900">

              <h3 className="text-2xl font-bold mb-3">
                {auction.crop}
              </h3>

              <p><span className="font-semibold">Producer:</span> {auction.producer}</p>
              <p><span className="font-semibold">Location:</span> {auction.location}</p>
              <p><span className="font-semibold">Quantity:</span> {auction.quantity} kg</p>
              <p><span className="font-semibold">Base Price:</span> ₹{auction.basePrice}</p>

              <p className="text-green-700 font-bold text-lg mt-2">
                Highest Bid: ₹{auction.highestBid}
              </p>

              <button
                onClick={() => setSelectedAuction(auction)}
                className="mt-5 w-full bg-green-700 text-white py-2 rounded-xl hover:bg-green-800 transition font-semibold"
              >
                Place Bid
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* BID MODAL */}
      {selectedAuction && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl border border-gray-200">

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Bid for {selectedAuction.crop}
            </h3>

            <p className="mb-3 text-gray-700">
              Current Highest Bid: ₹{selectedAuction.highestBid}
            </p>

            <input
              type="number"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder="Enter your bid amount"
              className="w-full border border-gray-400 px-4 py-2 rounded-lg text-black mb-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <button
              onClick={placeBid}
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition font-semibold"
            >
              Submit Bid
            </button>

            <button
              onClick={() => setSelectedAuction(null)}
              className="w-full mt-3 text-red-600 font-semibold"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

    </div>
  )
}