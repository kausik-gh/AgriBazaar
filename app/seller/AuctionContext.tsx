"use client"

import { createContext, useContext, useState } from "react"
import { initialAuctions, Auction } from "@/app/lib/auctionStore"

type AuctionContextType = {
  auctions: Auction[]
  setAuctions: React.Dispatch<React.SetStateAction<Auction[]>>
}

const AuctionContext = createContext<AuctionContextType | undefined>(undefined)

export function AuctionProvider({ children }: { children: React.ReactNode }) {

  const [auctions, setAuctions] = useState<Auction[]>(initialAuctions)

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