import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const ALASKA_CITIES: City[] = [
  { rank: 1, name: "Anchorage" },
  { rank: 2, name: "Fairbanks" },
  { rank: 3, name: "Juneau" },
  { rank: 4, name: "Knik-Fairview" },
  { rank: 5, name: "Badger" },
  { rank: 6, name: "College" },
  { rank: 7, name: "North Lakes" },
  { rank: 8, name: "Wasilla" },
  { rank: 9, name: "Tanaina" },
  { rank: 10, name: "Meadow Lakes" },
  { rank: 11, name: "Kalifornsky" },
  { rank: 12, name: "Sitka" },
  { rank: 13, name: "Ketchikan" },
  { rank: 14, name: "Kenai" },
  { rank: 15, name: "South Lakes" },
  { rank: 16, name: "Palmer" },
  { rank: 17, name: "Steele Creek" },
  { rank: 18, name: "Sterling" },
  { rank: 19, name: "Gateway" },
  { rank: 20, name: "Bethel" },
  { rank: 21, name: "Homer" },
  { rank: 22, name: "Kodiak" },
  { rank: 23, name: "Chena Ridge" },
  { rank: 24, name: "Fishhook" },
]

interface AlaskaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const AlaskaCitySelector: React.FC<AlaskaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Alaska City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = ALASKA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {ALASKA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Alaska
      </p>
    </div>
  )
}

export default AlaskaCitySelector
