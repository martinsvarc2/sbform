import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const KENTUCKY_CITIES: City[] = [
  { rank: 1, name: "Louisville" },
  { rank: 2, name: "Lexington" },
  { rank: 3, name: "Bowling Green" },
  { rank: 4, name: "Owensboro" },
  { rank: 5, name: "Covington" },
  { rank: 6, name: "Georgetown" },
  { rank: 7, name: "Richmond" },
  { rank: 8, name: "Elizabethtown" },
  { rank: 9, name: "Florence" },
  { rank: 10, name: "Nicholasville" },
  { rank: 11, name: "Hopkinsville" },
  { rank: 12, name: "Independence" },
  { rank: 13, name: "Jeffersontown" },
  { rank: 14, name: "Frankfort" },
  { rank: 15, name: "Henderson" },
  { rank: 16, name: "Paducah" },
  { rank: 17, name: "Radcliff" },
  { rank: 18, name: "Ashland" },
  { rank: 19, name: "Erlanger" },
  { rank: 20, name: "Madisonville" },
  { rank: 21, name: "Winchester" },
  { rank: 22, name: "Mount Washington" },
  { rank: 23, name: "Burlington" },
  { rank: 24, name: "Murray" },
  { rank: 25, name: "Shelbyville" },
  { rank: 26, name: "Danville" },
  { rank: 27, name: "St. Matthews" },
  { rank: 28, name: "Fort Thomas" },
  { rank: 29, name: "Berea" },
  { rank: 30, name: "Glasgow" },
  { rank: 31, name: "Shively" },
  { rank: 32, name: "Shepherdsville" },
  { rank: 33, name: "Bardstown" },
  { rank: 34, name: "Newport" },
  { rank: 35, name: "Somerset" },
  { rank: 36, name: "Lawrenceburg" },
  { rank: 37, name: "Fort Campbell North" },
  { rank: 38, name: "Campbellsville" },
  { rank: 39, name: "Lyndon" },
  { rank: 40, name: "Alexandria" },
  { rank: 41, name: "Franklin" },
  { rank: 42, name: "La Grange" },
  { rank: 43, name: "Versailles" },
  { rank: 44, name: "Francisville" },
  { rank: 45, name: "Oakbrook" },
  { rank: 46, name: "Paris" },
  { rank: 47, name: "Mayfield" },
  { rank: 48, name: "Middletown" },
  { rank: 49, name: "Harrodsburg" },
  { rank: 50, name: "Elsmere" },
  { rank: 51, name: "Hillview" },
  { rank: 52, name: "Middlesborough" },
  { rank: 53, name: "Maysville" },
  { rank: 54, name: "Fort Mitchell" },
  { rank: 55, name: "Fort Knox" },
  { rank: 56, name: "Edgewood" },
  { rank: 57, name: "Oak Grove" },
  { rank: 58, name: "Corbin" },
  { rank: 59, name: "Union" },
  { rank: 60, name: "Villa Hills" },
  { rank: 61, name: "London" },
  { rank: 62, name: "Mount Sterling" },
  { rank: 63, name: "Russellville" },
  { rank: 64, name: "Pikeville" },
  { rank: 65, name: "Flatwoods" },
  { rank: 66, name: "Vine Grove" },
  { rank: 67, name: "Taylor Mill" },
  { rank: 68, name: "Hebron" },
  { rank: 69, name: "Morehead" },
  { rank: 70, name: "Cynthiana" },
  { rank: 71, name: "Highland Heights" },
  { rank: 72, name: "Lebanon" },
  { rank: 73, name: "Crestwood" },
  { rank: 74, name: "Leitchfield" },
  { rank: 75, name: "Cold Spring" },
  { rank: 76, name: "Princeton" },
  { rank: 77, name: "Wilmore" },
  { rank: 78, name: "Fort Wright" },
  { rank: 79, name: "Dayton" },
  { rank: 80, name: "Central City" },
  { rank: 81, name: "Bellevue" },
  { rank: 82, name: "Monticello" },
  { rank: 83, name: "Walton" },
  { rank: 84, name: "Douglass Hills" },
  { rank: 85, name: "Hendron" },
  { rank: 86, name: "Williamsburg" },
]

interface KentuckyCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const KentuckyCitySelector: React.FC<KentuckyCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Kentucky City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = KENTUCKY_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {KENTUCKY_CITIES.map((city) => (
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
        * You can select up to 10 cities from Kentucky
      </p>
    </div>
  )
}

export default KentuckyCitySelector

