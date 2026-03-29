"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SellerLogin() {

  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    phone: "",
    shopName: "",
    gstNumber: ""
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {

    if(
      form.name.trim() === "" ||
      form.phone.trim() === "" ||
      form.shopName.trim() === "" ||
      form.gstNumber.trim() === ""
    ){
      alert("Please fill all details")
      return
    }

    router.push("/seller/browse")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-green-100">

        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Seller Verification
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
          />

          <input
            type="text"
            name="shopName"
            placeholder="Shop / Business Name"
            value={form.shopName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
          />

          <input
            type="text"
            name="gstNumber"
            placeholder="GST Number"
            value={form.gstNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition duration-300 shadow-md"
          >
            Verify & Continue
          </button>

        </div>

      </div>

    </div>
  )
}