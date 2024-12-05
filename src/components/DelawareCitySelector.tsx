import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const DELAWARE_CITIES: City[] = [
  { rank: 1, name: "Wilmington" },
  { rank: 2, name: "Dover" },
  { rank: 3, name: "Newark" },
  { rank: 4, name: "Middletown" },
  { rank: 5, name: "Bear" },
  { rank: 6, name: "Glasgow" },
  { rank: 7, name: "Brookside" },
  { rank: 8, name: "Milford" },
  { rank: 9, name: "Hockessin" },
  { rank: 10, name: "Smyrna" },
  { rank: 11, name: "Pike Creek Valley" },
  { rank: 12, name: "Claymont" },
  { rank: 13, name: "Seaford" },
  { rank: 14, name: "North Star" },
  { rank: 15, name: "Wilmington Manor" },
  { rank: 16, name: "Georgetown" },
  { rank: 17, name: "Millsboro" },
  { rank: 18, name: "Pike Creek" },
  { rank: 19, name: "Edgemoor" },
  { rank: 20, name: "Elsmere" },
  { rank: 21, name: "New Castle" }
]

interface DelawareCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const DelawareCitySelector: React.FC<DelawareCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Delaware City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = DELAWARE_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {DELAWARE_CITIES.map((city) => (
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
        * You can select up to 10 cities from Delaware
      </p>
    </div>
  )
}

export default DelawareCitySelector

