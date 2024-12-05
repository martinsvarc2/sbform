import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const IOWA_CITIES: City[] = [
  { rank: 1, name: "Des Moines" },
  { rank: 2, name: "Cedar Rapids" },
  { rank: 3, name: "Davenport" },
  { rank: 4, name: "Sioux City" },
  { rank: 5, name: "Ankeny" },
  { rank: 6, name: "Iowa City" },
  { rank: 7, name: "West Des Moines" },
  { rank: 8, name: "Waterloo" },
  { rank: 9, name: "Ames" },
  { rank: 10, name: "Council Bluffs" },
  { rank: 11, name: "Dubuque" },
  { rank: 12, name: "Urbandale" },
  { rank: 13, name: "Marion" },
  { rank: 14, name: "Cedar Falls" },
  { rank: 15, name: "Bettendorf" },
  { rank: 16, name: "Waukee" },
  { rank: 17, name: "Marshalltown" },
  { rank: 18, name: "Mason City" },
  { rank: 19, name: "Ottumwa" },
  { rank: 20, name: "Johnston" },
  { rank: 21, name: "Fort Dodge" },
  { rank: 22, name: "Clinton" },
  { rank: 23, name: "Coralville" },
  { rank: 24, name: "Burlington" },
  { rank: 25, name: "Muscatine" },
  { rank: 26, name: "Altoona" },
  { rank: 27, name: "North Liberty" },
  { rank: 28, name: "Clive" },
  { rank: 29, name: "Grimes" },
  { rank: 30, name: "Indianola" },
  { rank: 31, name: "Newton" },
  { rank: 32, name: "Norwalk" },
  { rank: 33, name: "Boone" },
  { rank: 34, name: "Pleasant Hill" },
  { rank: 35, name: "Spencer" },
  { rank: 36, name: "Storm Lake" },
  { rank: 37, name: "Oskaloosa" },
  { rank: 38, name: "Pella" },
  { rank: 39, name: "Le Mars" },
  { rank: 40, name: "Waverly" },
  { rank: 41, name: "Carroll" },
  { rank: 42, name: "Fort Madison" },
  { rank: 43, name: "Bondurant" },
  { rank: 44, name: "Grinnell" },
  { rank: 45, name: "Keokuk" },
  { rank: 46, name: "Fairfield" },
  { rank: 47, name: "Sioux Center" },
  { rank: 48, name: "Mount Pleasant" },
  { rank: 49, name: "Denison" },
  { rank: 50, name: "Perry" },
  { rank: 51, name: "Webster City" },
  { rank: 52, name: "Decorah" },
  { rank: 53, name: "Clear Lake" },
  { rank: 54, name: "Knoxville" },
  { rank: 55, name: "Creston" },
  { rank: 56, name: "Hiawatha" },
  { rank: 57, name: "Washington" },
  { rank: 58, name: "Charles City" },
  { rank: 59, name: "Nevada" },
  { rank: 60, name: "Tiffin" },
  { rank: 61, name: "Eldridge" },
  { rank: 62, name: "Atlantic" },
  { rank: 63, name: "Adel" },
  { rank: 64, name: "Polk City" },
  { rank: 65, name: "Orange City" },
  { rank: 66, name: "Independence" },
  { rank: 67, name: "Maquoketa" },
  { rank: 68, name: "Asbury" },
  { rank: 69, name: "Estherville" },
  { rank: 70, name: "Anamosa" },
  { rank: 71, name: "Oelwein" },
  { rank: 72, name: "Osceola" },
  { rank: 73, name: "DeWitt" },
  { rank: 74, name: "Spirit Lake" },
  { rank: 75, name: "Red Oak" },
  { rank: 76, name: "Sheldon" },
  { rank: 77, name: "Winterset" },
  { rank: 78, name: "Sergeant Bluff" },
  { rank: 79, name: "Centerville" },
  { rank: 80, name: "Algona" },
  { rank: 81, name: "Manchester" },
  { rank: 82, name: "Clarinda" },
  { rank: 83, name: "Glenwood" },
  { rank: 84, name: "Cherokee" },
  { rank: 85, name: "Windsor Heights" },
]

interface IowaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const IowaCitySelector: React.FC<IowaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Iowa City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = IOWA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {IOWA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Iowa
      </p>
    </div>
  )
}

export default IowaCitySelector

