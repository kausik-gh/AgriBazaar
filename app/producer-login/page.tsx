"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProducerLogin() {

  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    cropType: "",
    landArea: "",
    landProof: ""
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {

    if(
      form.name.trim() === "" ||
      form.phone.trim() === "" ||
      form.location.trim() === "" ||
      form.cropType.trim() === "" ||
      form.landArea.trim() === "" ||
      form.landProof.trim() === ""
    ){
      alert("Please fill all details")
      return
    }

    router.push("/producer/create")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl border border-green-100">

        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Producer Verification
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
            name="location"
            placeholder="Farm Location (Village / District)"
            value={form.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
          />

          <input
            type="text"
            name="cropType"
            placeholder="Primary Crop Type"
            value={form.cropType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
          />

          <input
            type="text"
            name="landArea"
            placeholder="Land Area (in acres)"
            value={form.landArea}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
          />

          <input
            type="text"
            name="landProof"
            placeholder="Land Ownership Document ID"
            value={form.landProof}
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