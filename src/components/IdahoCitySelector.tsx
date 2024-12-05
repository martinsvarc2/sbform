import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const IDAHO_CITIES: City[] = [
  { rank: 1, name: "Boise City" },
  { rank: 2, name: "Meridian" },
  { rank: 3, name: "Nampa" },
  { rank: 4, name: "Caldwell" },
  { rank: 5, name: "Idaho Falls" },
  { rank: 6, name: "Pocatello" },
  { rank: 7, name: "Coeur d'Alene" },
  { rank: 8, name: "Twin Falls" },
  { rank: 9, name: "Post Falls" },
  { rank: 10, name: "Rexburg" },
  { rank: 11, name: "Lewiston" },
  { rank: 12, name: "Eagle" },
  { rank: 13, name: "Kuna" },
  { rank: 14, name: "Moscow" },
  { rank: 15, name: "Ammon" },
  { rank: 16, name: "Star" },
  { rank: 17, name: "Mountain Home" },
  { rank: 18, name: "Hayden" },
  { rank: 19, name: "Chubbuck" },
  { rank: 20, name: "Jerome" },
  { rank: 21, name: "Blackfoot" },
  { rank: 22, name: "Garden City" },
  { rank: 23, name: "Rathdrum" },
  { rank: 24, name: "Burley" },
  { rank: 25, name: "Middleton" },
  { rank: 26, name: "Sandpoint" },
  { rank: 27, name: "Hailey" },
  { rank: 28, name: "Payette" },
  { rank: 29, name: "Emmett" },
  { rank: 30, name: "Fruitland" },
  { rank: 31, name: "Rupert" },
  { rank: 32, name: "Preston" },
  { rank: 33, name: "Weiser" },
  { rank: 34, name: "Rigby" },
  { rank: 35, name: "Kimberly" },
  { rank: 36, name: "Shelley" }
]

interface IdahoCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const IdahoCitySelector: React.FC<IdahoCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="idaho-city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Idaho City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = IDAHO_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="idaho-city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {IDAHO_CITIES.map((city) => (
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
        * You can select up to 10 cities from Idaho
      </p>
    </div>
  )
}

export default IdahoCitySelector

