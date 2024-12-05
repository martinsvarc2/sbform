import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const SOUTH_CAROLINA_CITIES: City[] = [
  { rank: 1, name: "Charleston" },
  { rank: 2, name: "Columbia" },
  { rank: 3, name: "North Charleston" },
  { rank: 4, name: "Mount Pleasant" },
  { rank: 5, name: "Rock Hill" },
  { rank: 6, name: "Greenville" },
  { rank: 7, name: "Summerville" },
  { rank: 8, name: "Goose Creek" },
  { rank: 9, name: "Greer" },
  { rank: 10, name: "Sumter" },
  { rank: 11, name: "Myrtle Beach" },
  { rank: 12, name: "Florence" },
  { rank: 13, name: "Spartanburg" },
  { rank: 14, name: "Hilton Head Island" },
  { rank: 15, name: "Bluffton" },
  { rank: 16, name: "Fort Mill" },
  { rank: 17, name: "Aiken" },
  { rank: 18, name: "Anderson" },
  { rank: 19, name: "Mauldin" },
  { rank: 20, name: "Carolina Forest" },
  { rank: 21, name: "Conway" },
  { rank: 22, name: "Simpsonville" },
  { rank: 23, name: "Easley" },
  { rank: 24, name: "North Augusta" },
  { rank: 25, name: "Lexington" },
  { rank: 26, name: "Socastee" },
  { rank: 27, name: "Taylors" },
  { rank: 28, name: "Greenwood" },
  { rank: 29, name: "Hanahan" },
  { rank: 30, name: "St. Andrews" },
  { rank: 31, name: "Wade Hampton" },
  { rank: 32, name: "North Myrtle Beach" },
  { rank: 33, name: "Five Forks" },
  { rank: 34, name: "West Columbia" },
  { rank: 35, name: "Clemson" },
  { rank: 36, name: "Moncks Corner" },
  { rank: 37, name: "Port Royal" },
  { rank: 38, name: "Dentsville" },
  { rank: 39, name: "Berea" },
  { rank: 40, name: "Red Hill" },
  { rank: 41, name: "Seven Oaks" },
  { rank: 42, name: "Ladson" },
  { rank: 43, name: "Lake Wylie" },
  { rank: 44, name: "Tega Cay" },
  { rank: 45, name: "Gantt" },
  { rank: 46, name: "Beaufort" },
  { rank: 47, name: "Fountain Inn" },
  { rank: 48, name: "Cayce" },
  { rank: 49, name: "Orangeburg" },
  { rank: 50, name: "Hardeeville" },
  { rank: 51, name: "Parker" },
  { rank: 52, name: "Powdersville" },
  { rank: 53, name: "Gaffney" },
  { rank: 54, name: "Irmo" },
  { rank: 55, name: "James Island" },
  { rank: 56, name: "Boiling Springs" },
  { rank: 57, name: "Oak Grove" },
  { rank: 58, name: "Garden City" },
  { rank: 59, name: "Newberry" },
  { rank: 60, name: "Murrells Inlet" },
  { rank: 61, name: "Red Bank" },
  { rank: 62, name: "Litchfield Beach" },
  { rank: 63, name: "Forest Acres" },
  { rank: 64, name: "Little River" },
  { rank: 65, name: "Lugoff" },
  { rank: 66, name: "Woodfield" },
  { rank: 67, name: "York" },
  { rank: 68, name: "Lancaster" },
  { rank: 69, name: "Laurens" },
  { rank: 70, name: "Seneca" },
  { rank: 71, name: "Travelers Rest" },
  { rank: 72, name: "Georgetown" },
  { rank: 73, name: "Sangaree" },
  { rank: 74, name: "Camden" },
  { rank: 75, name: "White Knoll" },
  { rank: 76, name: "Sans Souci" },
  { rank: 77, name: "Forestbrook" },
  { rank: 78, name: "Union" },
  { rank: 79, name: "Clinton" },
  { rank: 80, name: "Burton" },
  { rank: 81, name: "Homeland Park" },
  { rank: 82, name: "Clover" },
  { rank: 83, name: "Hartsville" },
  { rank: 84, name: "Centerville" },
  { rank: 85, name: "Clemson University" },
  { rank: 86, name: "Valley Falls" },
  { rank: 87, name: "Welcome" },
  { rank: 88, name: "Lake Murray Richland" },
  { rank: 89, name: "Lyman" },
  { rank: 90, name: "Blythewood" },
  { rank: 91, name: "Bennettsville" },
  { rank: 92, name: "Dillon" },
  { rank: 93, name: "Marion" },
  { rank: 94, name: "Darlington" },
  { rank: 95, name: "Lake City" },
  { rank: 96, name: "Belvedere" },
  { rank: 97, name: "Piedmont" },
  { rank: 98, name: "Hollywood" },
  { rank: 99, name: "Walterboro" },
  { rank: 100, name: "Laurel Bay" },
  { rank: 101, name: "Central" },
  { rank: 102, name: "Batesburg-Leesville" },
  { rank: 103, name: "Chester" },
  { rank: 104, name: "Baxter Village" },
]

interface SouthCarolinaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const SouthCarolinaCitySelector: React.FC<SouthCarolinaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a South Carolina City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = SOUTH_CAROLINA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {SOUTH_CAROLINA_CITIES.map((city) => (
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
        * You can select up to 10 cities from South Carolina
      </p>
    </div>
  )
}

export default SouthCarolinaCitySelector
