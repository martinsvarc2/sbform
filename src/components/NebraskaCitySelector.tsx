import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const NEBRASKA_CITIES: City[] = [
  { rank: 1, name: "Omaha" },
  { rank: 2, name: "Lincoln" },
  { rank: 3, name: "Bellevue" },
  { rank: 4, name: "Grand Island" },
  { rank: 5, name: "Kearney" },
  { rank: 6, name: "Fremont" },
  { rank: 7, name: "Norfolk" },
  { rank: 8, name: "Hastings" },
  { rank: 9, name: "Columbus" },
  { rank: 10, name: "Papillion" },
  { rank: 11, name: "North Platte" },
  { rank: 12, name: "La Vista" },
  { rank: 13, name: "Scottsbluff" },
  { rank: 14, name: "South Sioux City" },
  { rank: 15, name: "Beatrice" },
  { rank: 16, name: "Lexington" },
  { rank: 17, name: "Chalco" },
  { rank: 18, name: "Gretna" },
  { rank: 19, name: "Gering" },
  { rank: 20, name: "York" },
  { rank: 21, name: "Alliance" },
  { rank: 22, name: "Blair" },
  { rank: 23, name: "Seward" },
  { rank: 24, name: "Nebraska City" },
  { rank: 25, name: "Crete" },
  { rank: 26, name: "McCook" },
  { rank: 27, name: "Plattsmouth" },
  { rank: 28, name: "Schuyler" },
  { rank: 29, name: "Sidney" },
  { rank: 30, name: "Ralston" },
  { rank: 31, name: "Wayne" },
  { rank: 32, name: "Offutt AFB" },
  { rank: 33, name: "Holdrege" },
  { rank: 34, name: "Chadron" },
]

interface NebraskaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const NebraskaCitySelector: React.FC<NebraskaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Nebraska City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = NEBRASKA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {NEBRASKA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Nebraska
      </p>
    </div>
  )
}

export default NebraskaCitySelector
