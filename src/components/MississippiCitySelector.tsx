import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const MISSISSIPPI_CITIES: City[] = [
  { rank: 1, name: "Jackson" },
  { rank: 2, name: "Gulfport" },
  { rank: 3, name: "Southaven" },
  { rank: 4, name: "Hattiesburg" },
  { rank: 5, name: "Biloxi" },
  { rank: 6, name: "Olive Branch" },
  { rank: 7, name: "Tupelo" },
  { rank: 8, name: "Meridian" },
  { rank: 9, name: "Pearl" },
  { rank: 10, name: "Madison" },
  { rank: 11, name: "Oxford" },
  { rank: 12, name: "Greenville" },
  { rank: 13, name: "Horn Lake" },
  { rank: 14, name: "Clinton" },
  { rank: 15, name: "Brandon" },
  { rank: 16, name: "Starkville" },
  { rank: 17, name: "Ridgeland" },
  { rank: 18, name: "Columbus" },
  { rank: 19, name: "Pascagoula" },
  { rank: 20, name: "Vicksburg" },
  { rank: 21, name: "Ocean Springs" },
  { rank: 22, name: "Gautier" },
  { rank: 23, name: "Hernando" },
  { rank: 24, name: "Long Beach" },
  { rank: 25, name: "Laurel" },
  { rank: 26, name: "Corinth" },
  { rank: 27, name: "Natchez" },
  { rank: 28, name: "Clarksdale" },
  { rank: 29, name: "D'Iberville" },
  { rank: 30, name: "Greenwood" },
  { rank: 31, name: "Byram" },
  { rank: 32, name: "Grenada" },
  { rank: 33, name: "Picayune" },
  { rank: 34, name: "Moss Point" },
  { rank: 35, name: "McComb" },
  { rank: 36, name: "Brookhaven" },
  { rank: 37, name: "Petal" },
  { rank: 38, name: "Bay St. Louis" },
  { rank: 39, name: "Flowood" },
  { rank: 40, name: "Canton" },
  { rank: 41, name: "Cleveland" },
  { rank: 42, name: "West Point" },
  { rank: 43, name: "Yazoo City" },
  { rank: 44, name: "Diamondhead" },
  { rank: 45, name: "Booneville" },
  { rank: 46, name: "Gulf Hills" },
  { rank: 47, name: "Indianola" },
  { rank: 48, name: "Senatobia" },
  { rank: 49, name: "St. Martin" },
  { rank: 50, name: "New Albany" },
  { rank: 51, name: "Richland" },
  { rank: 52, name: "Batesville" },
  { rank: 53, name: "Gulf Park Estates" },
  { rank: 54, name: "Waveland" },
  { rank: 55, name: "Philadelphia" },
  { rank: 56, name: "Kosciusko" },
  { rank: 57, name: "Holly Springs" },
  { rank: 58, name: "Latimer" },
  { rank: 59, name: "Pass Christian" },
  { rank: 60, name: "Amory" },
  { rank: 61, name: "West Hattiesburg" },
  { rank: 62, name: "Pontotoc" },
  { rank: 63, name: "Louisville" },
  { rank: 64, name: "Columbia" },
  { rank: 65, name: "Ripley" },
  { rank: 66, name: "Forest" },
  { rank: 67, name: "Vancleave" }
]

interface MississippiCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const MississippiCitySelector: React.FC<MississippiCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Mississippi City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = MISSISSIPPI_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {MISSISSIPPI_CITIES.map((city) => (
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
        * You can select up to 10 cities from Mississippi
      </p>
    </div>
  )
}

export default MississippiCitySelector
