import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const MONTANA_CITIES: City[] = [
  { rank: 1, name: "Billings" },
  { rank: 2, name: "Missoula" },
  { rank: 3, name: "Great Falls" },
  { rank: 4, name: "Bozeman" },
  { rank: 5, name: "Butte-Silver Bow" },
  { rank: 6, name: "Helena" },
  { rank: 7, name: "Kalispell" },
  { rank: 8, name: "Belgrade" },
  { rank: 9, name: "Anaconda-Deer Lodge County" },
  { rank: 10, name: "Whitefish" },
  { rank: 11, name: "Helena Valley Southeast" },
  { rank: 12, name: "Havre" },
  { rank: 13, name: "Livingston" },
  { rank: 14, name: "Evergreen" },
  { rank: 15, name: "Miles City" },
  { rank: 16, name: "Helena Valley West Central" },
  { rank: 17, name: "Lockwood" },
  { rank: 18, name: "Laurel" },
  { rank: 19, name: "Lewistown" },
  { rank: 20, name: "Four Corners" },
  { rank: 21, name: "Sidney" },
  { rank: 22, name: "Columbia Falls" },
  { rank: 23, name: "Polson" },
  { rank: 24, name: "Hamilton" },
  { rank: 25, name: "Helena Valley Northwest" },
  { rank: 26, name: "Orchard Homes" },
  { rank: 27, name: "Bigfork" },
]

interface MontanaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const MontanaCitySelector: React.FC<MontanaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Montana City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = MONTANA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {MONTANA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Montana
      </p>
    </div>
  )
}

export default MontanaCitySelector
