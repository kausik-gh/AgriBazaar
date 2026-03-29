"use client"

import { useState } from "react"
import { useAuction } from "@/app/context/AuctionContext"

export default function CreateAuction() {

  const { auctions, setAuctions } = useAuction()

  const [form, setForm] = useState({
    crop: "",
    quantity: "",
    basePrice: "",
    endDate: "",
    image: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {

    if (!form.crop || !form.quantity || !form.basePrice || !form.endDate) {
      alert("Fill all required fields")
      return
    }

    const newAuction = {
      id: Date.now(),
      crop: form.crop,
      producer: "You",
      location: "Your Farm",
      quantity: Number(form.quantity),
      basePrice: Number(form.basePrice),
      highestBid: Number(form.basePrice),
      endDate: form.endDate,
      userBid: null,
      status: "active" as const,
      image: form.image.trim() !== ""
        ? form.image
        : "https://via.placeholder.com/400"
    }

    setAuctions([...auctions, newAuction])

    alert("Auction Created Successfully")

    setForm({
      crop: "",
      quantity: "",
      basePrice: "",
      endDate: "",
      image: ""
    })
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl border border-gray-200">

        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Create Auction
        </h2>

        <div className="space-y-5 text-gray-800">

          <input
            name="crop"
            placeholder="Crop Name"
            value={form.crop}
            onChange={handleChange}
            className="w-full border border-gray-400 px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-green-600 outline-none"
          />

          <input
            name="quantity"
            type="number"
            placeholder="Quantity (kg)"
            value={form.quantity}
            onChange={handleChange}
            className="w-full border border-gray-400 px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-green-600 outline-none"
          />

          <input
            name="basePrice"
            type="number"
            placeholder="Base Price (₹)"
            value={form.basePrice}
            onChange={handleChange}
            className="w-full border border-gray-400 px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-green-600 outline-none"
          />

          <input
            name="endDate"
            type="date"
            value={form.endDate}
            onChange={handleChange}
            className="w-full border border-gray-400 px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-green-600 outline-none"
          />

          <input
            name="image"
            type="text"
            placeholder="Image URL (optional)"
            value={form.image}
            onChange={handleChange}
            className="w-full border border-gray-400 px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-green-600 outline-none"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition font-semibold"
          >
            Create Auction
          </button>

        </div>

      </div>

    </div>
  )
}