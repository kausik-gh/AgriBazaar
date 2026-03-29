"use client"

import { createContext, useContext, useState } from "react"

export type Auction = {
  id: number
  crop: string
  producer: string
  location: string
  quantity: number
  basePrice: number
  highestBid: number
  endDate: string
  userBid: number | null
  status: "active" | "ended"
  image: string
}

type AuctionContextType = {
  auctions: Auction[]
  setAuctions: React.Dispatch<React.SetStateAction<Auction[]>>
}

const AuctionContext = createContext<AuctionContextType | undefined>(undefined)

const today = new Date()
today.setDate(today.getDate() + 7)

const defaultAuctions: Auction[] = [

  {
    id:1,
    crop:"Apple",
    producer:"Himalaya Orchards",
    location:"Himachal",
    quantity:400,
    basePrice:80,
    highestBid:90,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:2,
    crop:"Orange",
    producer:"Nagpur Fresh",
    location:"Nagpur",
    quantity:300,
    basePrice:60,
    highestBid:65,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:3,
    crop:"Tomato",
    producer:"Salem Farms",
    location:"Salem",
    quantity:500,
    basePrice:15,
    highestBid:18,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:4,
    crop:"Potato",
    producer:"Agra Agro",
    location:"Agra",
    quantity:700,
    basePrice:12,
    highestBid:14,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:5,
    crop:"Onion",
    producer:"Nashik Agro",
    location:"Nashik",
    quantity:450,
    basePrice:20,
    highestBid:24,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },

  {
    id:6,
    crop:"Mango",
    producer:"Andhra Fruits",
    location:"Vijayawada",
    quantity:600,
    basePrice:100,
    highestBid:110,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:7,
    crop:"Banana",
    producer:"Kerala Farms",
    location:"Kochi",
    quantity:800,
    basePrice:30,
    highestBid:35,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1675731118330-08c71253af17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:8,
    crop:"Grapes",
    producer:"Vineyard Fresh",
    location:"Nashik",
    quantity:450,
    basePrice:70,
    highestBid:75,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1631299106224-aae61c217164?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:9,
    crop:"Pineapple",
    producer:"Assam Agro",
    location:"Guwahati",
    quantity:320,
    basePrice:50,
    highestBid:55,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1562522513-a22a63a0e21e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:10,
    crop:"Guava",
    producer:"UP Fresh",
    location:"Allahabad",
    quantity:270,
    basePrice:55,
    highestBid:60,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1675040829892-d6de2f0fb422?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },

  {
    id:11,
    crop:"Carrot",
    producer:"Punjab Fresh",
    location:"Ludhiana",
    quantity:350,
    basePrice:25,
    highestBid:28,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:12,
    crop:"Cabbage",
    producer:"Nilgiri Farms",
    location:"Ooty",
    quantity:420,
    basePrice:18,
    highestBid:20,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:13,
    crop:"Brinjal",
    producer:"Madurai Agro",
    location:"Madurai",
    quantity:390,
    basePrice:22,
    highestBid:25,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1605197378540-10ebaf6999e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:14,
    crop:"Chilli",
    producer:"Guntur Farms",
    location:"Guntur",
    quantity:280,
    basePrice:90,
    highestBid:95,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1675864033264-cb9db758422d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:15,
    crop:"Peas",
    producer:"Haryana Fresh",
    location:"Karnal",
    quantity:340,
    basePrice:35,
    highestBid:40,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1690023628368-6c2f8ffbbd9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },

  {
    id:16,
    crop:"Corn",
    producer:"Karnataka Agro",
    location:"Mysore",
    quantity:600,
    basePrice:20,
    highestBid:22,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1675727577107-2e1311b5a9b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:17,
    crop:"Wheat",
    producer:"MP Farms",
    location:"Bhopal",
    quantity:900,
    basePrice:18,
    highestBid:19,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:18,
    crop:"Rice",
    producer:"Delta Farms",
    location:"Thanjavur",
    quantity:1000,
    basePrice:25,
    highestBid:27,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1705338026411-00639520a438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:19,
    crop:"Sugarcane",
    producer:"UP Agro",
    location:"Meerut",
    quantity:1200,
    basePrice:10,
    highestBid:12,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1695189283915-8ba20c70d1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:20,
    crop:"Turmeric",
    producer:"Erode Spice",
    location:"Erode",
    quantity:200,
    basePrice:120,
    highestBid:130,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1666818398897-381dd5eb9139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },

  {
    id:21,
    crop:"Ginger",
    producer:"North East Farms",
    location:"Shillong",
    quantity:180,
    basePrice:90,
    highestBid:95,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1603431777782-912e3b76f60d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:22,
    crop:"Garlic",
    producer:"Indore Agro",
    location:"Indore",
    quantity:260,
    basePrice:85,
    highestBid:90,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1675731118551-79b3da05a5d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:23,
    crop:"Cucumber",
    producer:"Chennai Greens",
    location:"Chennai",
    quantity:300,
    basePrice:30,
    highestBid:35,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1675731118289-51dd7342984e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:24,
    crop:"Pumpkin",
    producer:"AP Farms",
    location:"Tirupati",
    quantity:500,
    basePrice:18,
    highestBid:22,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1666823706428-5d93ae18c1c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:25,
    crop:"Spinach",
    producer:"Organic Valley",
    location:"Pune",
    quantity:150,
    basePrice:20,
    highestBid:24,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },

  {
    id:26,
    crop:"Drumstick",
    producer:"Tamil Agro",
    location:"Dindigul",
    quantity:220,
    basePrice:45,
    highestBid:50,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1700673589457-6b9f7a30cb98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:27,
    crop:"Papaya",
    producer:"South Farms",
    location:"Madurai",
    quantity:310,
    basePrice:45,
    highestBid:50,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1702040242599-46809572ffce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:28,
    crop:"Watermelon",
    producer:"Rajasthan Agro",
    location:"Jaipur",
    quantity:700,
    basePrice:15,
    highestBid:18,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1621961048737-a9993789e1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:29,
    crop:"Muskmelon",
    producer:"Desert Farms",
    location:"Jodhpur",
    quantity:600,
    basePrice:25,
    highestBid:28,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1646992122113-bd1f335187ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:30,
    crop:"Millets",
    producer:"Karnataka Organic",
    location:"Hubli",
    quantity:500,
    basePrice:40,
    highestBid:45,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1671130295828-efd9019faee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },

  {
    id:31,
    crop:"Groundnut",
    producer:"AP Nuts",
    location:"Anantapur",
    quantity:450,
    basePrice:55,
    highestBid:60,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1667773157798-55785dd16b0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:32,
    crop:"Mustard",
    producer:"Rajasthan Farms",
    location:"Udaipur",
    quantity:380,
    basePrice:70,
    highestBid:75,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1671130295236-e8afa3ac38c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:33,
    crop:"Soybean",
    producer:"MP Agro",
    location:"Gwalior",
    quantity:520,
    basePrice:65,
    highestBid:70,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1728931340168-3869028e99e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:34,
    crop:"Lemon",
    producer:"Nagpur Citrus",
    location:"Nagpur",
    quantity:330,
    basePrice:50,
    highestBid:55,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:35,
    crop:"Pomegranate",
    producer:"Solapur Farms",
    location:"Solapur",
    quantity:420,
    basePrice:110,
    highestBid:120,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },

  {
    id:36,
    crop:"Fig",
    producer:"DryFruit Agro",
    location:"Anantapur",
    quantity:140,
    basePrice:200,
    highestBid:220,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1725986663002-c2b55adc6ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:37,
    crop:"Cashew",
    producer:"Goa Farms",
    location:"Goa",
    quantity:260,
    basePrice:300,
    highestBid:320,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:38,
    crop:"Coconut",
    producer:"Kerala Agro",
    location:"Kollam",
    quantity:900,
    basePrice:25,
    highestBid:28,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1675040830227-9f18e88fd1f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:39,
    crop:"Black Pepper",
    producer:"Spice Valley",
    location:"Wayanad",
    quantity:150,
    basePrice:450,
    highestBid:470,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1693330066179-8291e437734c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:40,
    crop:"Cardamom",
    producer:"Idukki Farms",
    location:"Idukki",
    quantity:120,
    basePrice:900,
    highestBid:950,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1541533693007-7ea47d894b0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },

  {
    id:41,
    crop:"Tea Leaves",
    producer:"Assam Tea",
    location:"Assam",
    quantity:800,
    basePrice:60,
    highestBid:70,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:42,
    crop:"Coffee Beans",
    producer:"Coorg Coffee",
    location:"Coorg",
    quantity:600,
    basePrice:150,
    highestBid:170,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1606486544554-164d98da4889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    id:43,
    crop:"Cotton",
    producer:"Vidarbha Farms",
    location:"Nagpur",
    quantity:1000,
    basePrice:70,
    highestBid:80,
    endDate:today.toISOString(),
    userBid:null,
    status:"active",
    image:"https://images.unsplash.com/photo-1634337781106-4c6a12b820a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  }

]

export function AuctionProvider({ children }: { children: React.ReactNode }) {
  const [auctions, setAuctions] = useState<Auction[]>(defaultAuctions)

  return (
    <AuctionContext.Provider value={{ auctions, setAuctions }}>
      {children}
    </AuctionContext.Provider>
  )
}

export function useAuction() {
  const context = useContext(AuctionContext)
  if (!context) {
    throw new Error("useAuction must be used inside AuctionProvider")
  }
  return context
}