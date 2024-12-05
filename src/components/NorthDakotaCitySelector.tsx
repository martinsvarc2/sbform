import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const NORTH_DAKOTA_CITIES: City[] = [
  { rank: 1, name: "Fargo" },
  { rank: 2, name: "Bismarck" },
  { rank: 3, name: "Grand Forks" },
  { rank: 4, name: "Minot" },
  { rank: 5, name: "West Fargo" },
  { rank: 6, name: "Williston" },
  { rank: 7, name: "Dickinson" },
  { rank: 8, name: "Mandan" },
  { rank: 9, name: "Jamestown" },
  { rank: 10, name: "Wahpeton" },
  { rank: 11, name: "Devils Lake" },
  { rank: 12, name: "Valley City" },
  { rank: 13, name: "Horace" },
  { rank: 14, name: "Watford City" },
]

interface NorthDakotaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const NorthDakotaCitySelector: React.FC<NorthDakotaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a North Dakota City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = NORTH_DAKOTA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {NORTH_DAKOTA_CITIES.map((city) => (
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
        * You can select up to 10 cities from North Dakota
      </p>
    </div>
  )
}

export default NorthDakotaCitySelector
