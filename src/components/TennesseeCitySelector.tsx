import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const TENNESSEE_CITIES: City[] = [
  { rank: 1, name: "Nashville" },
  { rank: 2, name: "Memphis" },
  { rank: 3, name: "Knoxville" },
  { rank: 4, name: "Chattanooga" },
  { rank: 5, name: "Clarksville" },
  { rank: 6, name: "Murfreesboro" },
  { rank: 7, name: "Franklin" },
  { rank: 8, name: "Johnson City" },
  { rank: 9, name: "Jackson" },
  { rank: 10, name: "Hendersonville" },
  { rank: 11, name: "Spring Hill" },
  { rank: 12, name: "Smyrna" },
  { rank: 13, name: "Kingsport" },
  { rank: 14, name: "Bartlett" },
  { rank: 15, name: "Gallatin" },
  { rank: 16, name: "Collierville" },
  { rank: 17, name: "Lebanon" },
  { rank: 18, name: "Cleveland" },
  { rank: 19, name: "Columbia" },
  { rank: 20, name: "Brentwood" },
  { rank: 21, name: "Mount Juliet" },
  { rank: 22, name: "Germantown" },
  { rank: 23, name: "La Vergne" },
  { rank: 24, name: "Cookeville" },
  { rank: 25, name: "Oak Ridge" },
  { rank: 26, name: "Morristown" },
  { rank: 27, name: "Maryville" },
  { rank: 28, name: "Bristol" },
  { rank: 29, name: "Farragut" },
  { rank: 30, name: "Shelbyville" },
  { rank: 31, name: "East Ridge" },
  { rank: 32, name: "Tullahoma" },
  { rank: 33, name: "Springfield" },
  { rank: 34, name: "Sevierville" },
  { rank: 35, name: "Goodlettsville" },
  { rank: 36, name: "Dickson" },
  { rank: 37, name: "Seymour" },
  { rank: 38, name: "Powell" },
  { rank: 39, name: "White House" },
  { rank: 40, name: "Dyersburg" },
  { rank: 41, name: "Nolensville" },
  { rank: 42, name: "Greeneville" },
  { rank: 43, name: "Arlington" },
  { rank: 44, name: "Athens" },
  { rank: 45, name: "Elizabethton" },
  { rank: 46, name: "Lakeland" },
  { rank: 47, name: "Alcoa" },
  { rank: 48, name: "McMinnville" },
  { rank: 49, name: "Portland" },
  { rank: 50, name: "Manchester" },
  { rank: 51, name: "Lewisburg" },
  { rank: 52, name: "Soddy-Daisy" },
  { rank: 53, name: "Crossville" },
  { rank: 54, name: "Hartsville/Trousdale County" },
  { rank: 55, name: "Lenoir City" },
  { rank: 56, name: "Red Bank" },
  { rank: 57, name: "Lawrenceburg" },
  { rank: 58, name: "Millington" },
  { rank: 59, name: "Halls" },
  { rank: 60, name: "Collegedale" },
  { rank: 61, name: "Middle Valley" },
  { rank: 62, name: "Martin" },
  { rank: 63, name: "Oakland" },
  { rank: 64, name: "Union City" },
  { rank: 65, name: "Atoka" },
  { rank: 66, name: "Fairview" },
  { rank: 67, name: "Clinton" },
  { rank: 68, name: "Paris" },
  { rank: 69, name: "Winchester" },
  { rank: 70, name: "Fairfield Glade" },
  { rank: 71, name: "Brownsville" },
  { rank: 72, name: "Signal Mountain" },
  { rank: 73, name: "Thompson's Station" },
  { rank: 74, name: "Jefferson City" },
  { rank: 75, name: "Bloomingdale" },
  { rank: 76, name: "Covington" },
  { rank: 77, name: "Harrison" },
  { rank: 78, name: "Milan" },
  { rank: 79, name: "Pulaski" },
  { rank: 80, name: "Lexington" },
  { rank: 81, name: "Humboldt" },
  { rank: 82, name: "Ripley" },
  { rank: 83, name: "Dayton" },
  { rank: 84, name: "Savannah" },
  { rank: 85, name: "Church Hill" },
  { rank: 86, name: "South Cleveland" },
  { rank: 87, name: "La Follette" },
  { rank: 88, name: "Fayetteville" },
  { rank: 89, name: "Newport" },
  { rank: 90, name: "Greenbrier" },
  { rank: 91, name: "Munford" },
  { rank: 92, name: "Loudon" },
  { rank: 93, name: "Lynchburg, Moore County" },
  { rank: 94, name: "Green Hill" },
  { rank: 95, name: "Sweetwater" },
  { rank: 96, name: "Jonesborough" },
  { rank: 97, name: "Henderson" },
  { rank: 98, name: "Pigeon Forge" },
  { rank: 99, name: "Kingston" },
  { rank: 100, name: "Tellico Village" },
  { rank: 101, name: "Millersville" },
  { rank: 102, name: "Harriman" },
  { rank: 103, name: "Erwin" },
  { rank: 104, name: "Dunlap" },
  { rank: 105, name: "Lafayette" },
  { rank: 106, name: "Ashland City" },
  { rank: 107, name: "Rockwood" },
  { rank: 108, name: "Pleasant View" },
  { rank: 109, name: "Medina" },
  { rank: 110, name: "McKenzie" },
  { rank: 111, name: "Mount Carmel" },
  { rank: 112, name: "Christiana" },
  { rank: 113, name: "Smithville" },
  { rank: 114, name: "Madisonville" },
  { rank: 115, name: "Eagleton Village" },
  { rank: 116, name: "Bolivar" },
]

interface TennesseeCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const TennesseeCitySelector: React.FC<TennesseeCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Tennessee City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = TENNESSEE_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {TENNESSEE_CITIES.map((city) => (
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
        * You can select up to 10 cities from Tennessee
      </p>
    </div>
  )
}

export default TennesseeCitySelector
