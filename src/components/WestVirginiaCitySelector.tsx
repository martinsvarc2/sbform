import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const WEST_VIRGINIA_CITIES: City[] = [
  { rank: 1, name: "Charleston" },
  { rank: 2, name: "Huntington" },
  { rank: 3, name: "Morgantown" },
  { rank: 4, name: "Parkersburg" },
  { rank: 5, name: "Wheeling" },
  { rank: 6, name: "Martinsburg" },
  { rank: 7, name: "Weirton" },
  { rank: 8, name: "Fairmont" },
  { rank: 9, name: "Beckley" },
  { rank: 10, name: "Clarksburg" },
  { rank: 11, name: "South Charleston" },
  { rank: 12, name: "Vienna" },
  { rank: 13, name: "St. Albans" },
  { rank: 14, name: "Bridgeport" },
  { rank: 15, name: "Bluefield" },
  { rank: 16, name: "Charles Town" },
  { rank: 17, name: "Oak Hill" },
  { rank: 18, name: "Moundsville" },
  { rank: 19, name: "Dunbar" },
  { rank: 20, name: "Hurricane" },
  { rank: 21, name: "Elkins" },
  { rank: 22, name: "Nitro" },
  { rank: 23, name: "Ranson" },
  { rank: 24, name: "Princeton" },
  { rank: 25, name: "New Martinsville" },
  { rank: 26, name: "Buckhannon" },
]

interface WestVirginiaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const WestVirginiaCitySelector: React.FC<WestVirginiaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a West Virginia City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = WEST_VIRGINIA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {WEST_VIRGINIA_CITIES.map((city) => (
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
        * You can select up to 10 cities from West Virginia
      </p>
    </div>
  )
}

export default WestVirginiaCitySelector
