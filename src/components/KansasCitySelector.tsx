import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const KANSAS_CITIES: City[] = [
  { rank: 1, name: "Wichita" },
  { rank: 2, name: "Overland Park" },
  { rank: 3, name: "Kansas City" },
  { rank: 4, name: "Olathe" },
  { rank: 5, name: "Topeka" },
  { rank: 6, name: "Lawrence" },
  { rank: 7, name: "Shawnee" },
  { rank: 8, name: "Lenexa" },
  { rank: 9, name: "Manhattan" },
  { rank: 10, name: "Salina" },
  { rank: 11, name: "Hutchinson" },
  { rank: 12, name: "Leavenworth" },
  { rank: 13, name: "Leawood" },
  { rank: 14, name: "Dodge City" },
  { rank: 15, name: "Garden City" },
  { rank: 16, name: "Derby" },
  { rank: 17, name: "Gardner" },
  { rank: 18, name: "Emporia" },
  { rank: 19, name: "Prairie Village" },
  { rank: 20, name: "Junction City" },
  { rank: 21, name: "Hays" },
  { rank: 22, name: "Pittsburg" },
  { rank: 23, name: "Liberal" },
  { rank: 24, name: "Newton" },
  { rank: 25, name: "Andover" },
  { rank: 26, name: "Great Bend" },
  { rank: 27, name: "McPherson" },
  { rank: 28, name: "El Dorado" },
  { rank: 29, name: "Ottawa" },
  { rank: 30, name: "Arkansas City" },
  { rank: 31, name: "Winfield" },
  { rank: 32, name: "Haysville" },
  { rank: 33, name: "Lansing" },
  { rank: 34, name: "Merriam" },
  { rank: 35, name: "Atchison" },
  { rank: 36, name: "Spring Hill" },
  { rank: 37, name: "Mission" },
  { rank: 38, name: "Bel Aire" },
  { rank: 39, name: "Parsons" },
  { rank: 40, name: "Augusta" },
  { rank: 41, name: "Park City" },
  { rank: 42, name: "Fort Riley" },
  { rank: 43, name: "Coffeyville" },
  { rank: 44, name: "Chanute" },
  { rank: 45, name: "Independence" },
  { rank: 46, name: "Basehor" },
  { rank: 47, name: "Fort Scott" },
  { rank: 48, name: "Bonner Springs" },
  { rank: 49, name: "Wellington" },
  { rank: 50, name: "Valley Center" },
  { rank: 51, name: "Mulvane" },
  { rank: 52, name: "Maize" },
  { rank: 53, name: "De Soto" },
  { rank: 54, name: "Roeland Park" },
  { rank: 55, name: "Pratt" },
  { rank: 56, name: "Eudora" },
  { rank: 57, name: "Abilene" },
  { rank: 58, name: "Tonganoxie" },
  { rank: 59, name: "Goddard" },
  { rank: 60, name: "Paola" },
  { rank: 61, name: "Colby" },
  { rank: 62, name: "Ulysses" },
  { rank: 63, name: "Iola" },
  { rank: 64, name: "Louisburg" },
]

interface KansasCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const KansasCitySelector: React.FC<KansasCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Kansas City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = KANSAS_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {KANSAS_CITIES.map((city) => (
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
        * You can select up to 10 cities from Kansas
      </p>
    </div>
  )
}

export default KansasCitySelector

