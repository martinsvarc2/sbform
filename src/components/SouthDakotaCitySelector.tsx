import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const SOUTH_DAKOTA_CITIES: City[] = [
  { rank: 1, name: "Sioux Falls" },
  { rank: 2, name: "Rapid City" },
  { rank: 3, name: "Aberdeen" },
  { rank: 4, name: "Brookings" },
  { rank: 5, name: "Watertown" },
  { rank: 6, name: "Yankton" },
  { rank: 7, name: "Mitchell" },
  { rank: 8, name: "Huron" },
  { rank: 9, name: "Box Elder" },
  { rank: 10, name: "Pierre" },
  { rank: 11, name: "Spearfish" },
  { rank: 12, name: "Vermillion" },
  { rank: 13, name: "Brandon" },
  { rank: 14, name: "Harrisburg" },
  { rank: 15, name: "Tea" },
  { rank: 16, name: "Rapid Valley" },
  { rank: 17, name: "Sturgis" },
  { rank: 18, name: "Madison" },
  { rank: 19, name: "Belle Fourche" },
]

interface SouthDakotaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const SouthDakotaCitySelector: React.FC<SouthDakotaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a South Dakota City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = SOUTH_DAKOTA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {SOUTH_DAKOTA_CITIES.map((city) => (
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
        * You can select up to 10 cities from South Dakota
      </p>
    </div>
  )
}

export default SouthDakotaCitySelector
