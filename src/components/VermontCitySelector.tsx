import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const VERMONT_CITIES: City[] = [
  { rank: 1, name: "Burlington" },
  { rank: 2, name: "South Burlington" },
  { rank: 3, name: "Colchester" },
  { rank: 4, name: "Rutland" },
  { rank: 5, name: "Bennington" },
  { rank: 6, name: "Brattleboro" },
  { rank: 7, name: "Essex" },
  { rank: 8, name: "Essex Junction" },
  { rank: 9, name: "Milton" },
  { rank: 10, name: "Hartford" },
  { rank: 11, name: "Williston" },
  { rank: 12, name: "Middlebury" },
  { rank: 13, name: "Springfield" },
  { rank: 14, name: "Barre" },
  { rank: 15, name: "Winooski" },
  { rank: 16, name: "Shelburne" },
  { rank: 17, name: "Montpelier" },
  { rank: 18, name: "St. Johnsbury" },
  { rank: 19, name: "St. Albans" },
  { rank: 20, name: "Swanton" },
  { rank: 21, name: "Morristown" },
  { rank: 22, name: "Northfield" },
  { rank: 23, name: "Lyndon" },
  { rank: 24, name: "Waterbury" },
  { rank: 25, name: "Fairfax" },
  { rank: 26, name: "Stowe" },
  { rank: 27, name: "Jericho" },
]

interface VermontCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const VermontCitySelector: React.FC<VermontCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Vermont City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = VERMONT_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {VERMONT_CITIES.map((city) => (
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
        * You can select up to 10 cities from Vermont
      </p>
    </div>
  )
}

export default VermontCitySelector
