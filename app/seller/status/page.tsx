"use client"

import { useAuction, Auction } from "@/app/context/AuctionContext"

export default function Status() {

  const { auctions } = useAuction()

  const getStatus = (auction: Auction) => {

    const today = new Date()
    const deadline = new Date(auction.endDate)

    if (today > deadline) {
      if (auction.userBid === auction.highestBid) return "Won"
      if (auction.userBid) return "Lost"
      return "Ended"
    }

    if (!auction.userBid) return "Not Participated"

    if (auction.userBid === auction.highestBid) return "Leading"

    return "Outbid"
  }

  const participated = auctions.filter(a => a.userBid !== null)

  return (
    <div>

      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        Auction Status
      </h2>

      {participated.length === 0 && (
        <p className="text-gray-700">You have not placed any bids yet.</p>
      )}

      {participated.map((auction) => (
        <div key={auction.id}
          className="bg-white p-6 rounded-2xl shadow mb-6 text-gray-900">

          <h3 className="text-xl font-semibold mb-2">
            {auction.crop}
          </h3>

          <p>Your Bid: ₹{auction.userBid}</p>
          <p>Highest Bid: ₹{auction.highestBid}</p>

          <p className="mt-2 font-bold text-green-700">
            Status: {getStatus(auction)}
          </p>

        </div>
      ))}

    </div>
  )
}