import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const WYOMING_CITIES: City[] = [
  { rank: 1, name: "Cheyenne" },
  { rank: 2, name: "Casper" },
  { rank: 3, name: "Gillette" },
  { rank: 4, name: "Laramie" },
  { rank: 5, name: "Rock Springs" },
  { rank: 6, name: "Sheridan" },
  { rank: 7, name: "Evanston" },
  { rank: 8, name: "Green River" },
  { rank: 9, name: "Riverton" },
  { rank: 10, name: "Jackson" },
  { rank: 11, name: "Cody" },
  { rank: 12, name: "Rawlins" },
  { rank: 13, name: "Lander" },
  { rank: 14, name: "Powell" },
  { rank: 15, name: "Douglas" },
  { rank: 16, name: "Torrington" },
  { rank: 17, name: "Ranchettes" },
]

interface WyomingCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const WyomingCitySelector: React.FC<WyomingCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Wyoming City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = WYOMING_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {WYOMING_CITIES.map((city) => (
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
        * You can select up to 10 cities from Wyoming
      </p>
    </div>
  )
}

export default WyomingCitySelector
