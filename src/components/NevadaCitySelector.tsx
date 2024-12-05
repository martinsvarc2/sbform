import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const NEVADA_CITIES: City[] = [
  { rank: 1, name: "Las Vegas" },
  { rank: 2, name: "Henderson" },
  { rank: 3, name: "North Las Vegas" },
  { rank: 4, name: "Reno" },
  { rank: 5, name: "Enterprise" },
  { rank: 6, name: "Spring Valley" },
  { rank: 7, name: "Sunrise Manor" },
  { rank: 8, name: "Paradise" },
  { rank: 9, name: "Sparks" },
  { rank: 10, name: "Carson City" },
  { rank: 11, name: "Pahrump" },
  { rank: 12, name: "Whitney" },
  { rank: 13, name: "Winchester" },
  { rank: 14, name: "Summerlin South" },
  { rank: 15, name: "Fernley" },
  { rank: 16, name: "Mesquite" },
  { rank: 17, name: "Sun Valley" },
  { rank: 18, name: "Elko" },
  { rank: 19, name: "Spanish Springs" },
  { rank: 20, name: "Dayton" },
  { rank: 21, name: "Spring Creek" },
  { rank: 22, name: "Boulder City" },
  { rank: 23, name: "Gardnerville Ranchos" },
  { rank: 24, name: "Cold Springs" },
  { rank: 25, name: "Fallon" },
  { rank: 26, name: "Incline Village" },
  { rank: 27, name: "Laughlin" },
  { rank: 28, name: "Winnemucca" },
  { rank: 29, name: "Moapa Valley" },
  { rank: 30, name: "Johnson Lane" },
  { rank: 31, name: "Gardnerville" },
  { rank: 32, name: "Indian Hills" },
  { rank: 33, name: "Lemmon Valley" },
  { rank: 34, name: "Silver Springs" },
]

interface NevadaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const NevadaCitySelector: React.FC<NevadaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Nevada City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = NEVADA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {NEVADA_CITIES.map((city) => (
              <SelectItem 
                key={city.rank} 
                value={city.name}
                className="text-white hover:bg-[#E4B649]/20"
                disabled={selectedCities.includes(city.name)}
              >
                {city.name}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
      <p className="text-xs text-[#E4B649]/70">
        * You can select up to 10 cities from Nevada
      </p>
    </div>
  )
}

export default NevadaCitySelector
