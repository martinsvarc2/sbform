"use client"

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const MAINE_CITIES: City[] = [
  { rank: 1, name: "Portland" },
  { rank: 2, name: "Lewiston" },
  { rank: 3, name: "Bangor" },
  { rank: 4, name: "South Portland" },
  { rank: 5, name: "Auburn" },
  { rank: 6, name: "Scarborough" },
  { rank: 7, name: "Brunswick" },
  { rank: 8, name: "Biddeford" },
  { rank: 9, name: "Sanford" },
  { rank: 10, name: "Saco" },
  { rank: 11, name: "Westbrook" },
  { rank: 12, name: "Windham" },
  { rank: 13, name: "Augusta" },
  { rank: 14, name: "Gorham" },
  { rank: 15, name: "Waterville" },
  { rank: 16, name: "York" },
  { rank: 17, name: "Falmouth" },
  { rank: 18, name: "Orono" },
  { rank: 19, name: "Wells" },
  { rank: 20, name: "Kennebunk" },
  // ... rest of the cities
]

interface MaineCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const MaineCitySelector: React.FC<MaineCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Maine City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = MAINE_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {MAINE_CITIES.map((city) => (
              <SelectItem 
                key={city.rank} 
                value={city.name}
