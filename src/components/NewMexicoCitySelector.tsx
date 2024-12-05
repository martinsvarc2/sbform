import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const NEW_MEXICO_CITIES: City[] = [
  { rank: 1, name: "Albuquerque" },
  { rank: 2, name: "Las Cruces" },
  { rank: 3, name: "Rio Rancho" },
  { rank: 4, name: "Santa Fe" },
  { rank: 5, name: "Roswell" },
  { rank: 6, name: "Farmington" },
  { rank: 7, name: "Hobbs" },
  { rank: 8, name: "Clovis" },
  { rank: 9, name: "South Valley" },
  { rank: 10, name: "Alamogordo" },
  { rank: 11, name: "Carlsbad" },
  { rank: 12, name: "Gallup" },
  { rank: 13, name: "Los Lunas" },
  { rank: 14, name: "Sunland Park" },
  { rank: 15, name: "Chaparral" },
  { rank: 16, name: "Deming" },
  { rank: 17, name: "Los Alamos" },
  { rank: 18, name: "Las Vegas" },
  { rank: 19, name: "Artesia" },
  { rank: 20, name: "Portales" },
  { rank: 21, name: "North Valley" },
  { rank: 22, name: "Lovington" },
  { rank: 23, name: "Española" },
  { rank: 24, name: "Silver City" },
  { rank: 25, name: "Bernalillo" },
  { rank: 26, name: "Grants" },
  { rank: 27, name: "Anthony" },
  { rank: 28, name: "Corrales" },
  { rank: 29, name: "Shiprock" },
  { rank: 30, name: "Socorro" },
  { rank: 31, name: "Ruidoso" },
  { rank: 32, name: "Belen" },
  { rank: 33, name: "Bloomfield" },
  { rank: 34, name: "Zuni Pueblo" },
  { rank: 35, name: "Santa Teresa" },
  { rank: 36, name: "Taos" },
  { rank: 37, name: "Edgewood" },
  { rank: 38, name: "Aztec" },
  { rank: 39, name: "Truth Consequences" },
  { rank: 40, name: "Raton" },
  { rank: 41, name: "North Hobbs" },
  { rank: 42, name: "Los Ranchos Albuquerque" },
  { rank: 43, name: "Crouch Mesa" },
  { rank: 44, name: "White Rock" },
  { rank: 45, name: "Eldorado Santa Fe" },
  { rank: 46, name: "Tucumcari" },
  { rank: 47, name: "El Cerro Mission" },
]

interface NewMexicoCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const NewMexicoCitySelector: React.FC<NewMexicoCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a New Mexico City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = NEW_MEXICO_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {NEW_MEXICO_CITIES.map((city) => (
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
        * You can select up to 10 cities from New Mexico
      </p>
    </div>
  )
}

export default NewMexicoCitySelector
