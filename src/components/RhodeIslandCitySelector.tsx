import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const RHODE_ISLAND_CITIES: City[] = [
  { rank: 1, name: "Providence" },
  { rank: 2, name: "Warwick" },
  { rank: 3, name: "Cranston" },
  { rank: 4, name: "Pawtucket" },
  { rank: 5, name: "East Providence" },
  { rank: 6, name: "Woonsocket" },
  { rank: 7, name: "Cumberland" },
  { rank: 8, name: "Coventry" },
  { rank: 9, name: "North Providence" },
  { rank: 10, name: "South Kingstown" },
  { rank: 11, name: "West Warwick" },
  { rank: 12, name: "Johnston" },
  { rank: 13, name: "North Kingstown" },
  { rank: 14, name: "Newport" },
  { rank: 15, name: "Westerly" },
  { rank: 16, name: "Lincoln" },
  { rank: 17, name: "Central Falls" },
  { rank: 18, name: "Smithfield" },
  { rank: 19, name: "Bristol" },
  { rank: 20, name: "Portsmouth" },
  { rank: 21, name: "Barrington" },
  { rank: 22, name: "Burrillville" },
  { rank: 23, name: "Middletown" },
  { rank: 24, name: "Tiverton" },
  { rank: 25, name: "East Greenwich" },
  { rank: 26, name: "Narragansett" },
  { rank: 27, name: "North Smithfield" },
  { rank: 28, name: "Warren" },
  { rank: 29, name: "Scituate" },
  { rank: 30, name: "Glocester" },
  { rank: 31, name: "Hopkinton" },
  { rank: 32, name: "Richmond" },
  { rank: 33, name: "Charlestown" },
  { rank: 34, name: "West Greenwich" },
  { rank: 35, name: "Exeter" },
  { rank: 36, name: "Jamestown" },
]

interface RhodeIslandCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const RhodeIslandCitySelector: React.FC<RhodeIslandCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Rhode Island City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = RHODE_ISLAND_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {RHODE_ISLAND_CITIES.map((city) => (
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
        * You can select up to 10 cities from Rhode Island
      </p>
    </div>
  )
}

export default RhodeIslandCitySelector
