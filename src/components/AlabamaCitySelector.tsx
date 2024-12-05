import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const ALABAMA_CITIES: City[] = [
  { rank: 1, name: "Huntsville" },
  { rank: 2, name: "Birmingham" },
  { rank: 3, name: "Montgomery" },
  { rank: 4, name: "Mobile" },
  { rank: 5, name: "Tuscaloosa" },
  { rank: 6, name: "Hoover" },
  { rank: 7, name: "Auburn" },
  { rank: 8, name: "Dothan" },
  { rank: 9, name: "Madison" },
  { rank: 10, name: "Decatur" },
  { rank: 11, name: "Florence" },
  { rank: 12, name: "Prattville" },
  { rank: 13, name: "Phenix City" },
  { rank: 14, name: "Vestavia Hills" },
  { rank: 15, name: "Opelika" },
  { rank: 16, name: "Alabaster" },
  { rank: 17, name: "Gadsden" },
  { rank: 18, name: "Athens" },
  { rank: 19, name: "Daphne" },
  { rank: 20, name: "Northport" },
  { rank: 21, name: "Enterprise" },
  { rank: 22, name: "Homewood" },
  { rank: 23, name: "Trussville" },
  { rank: 24, name: "Foley" },
  { rank: 25, name: "Fairhope" },
  { rank: 26, name: "Pelham" },
  { rank: 27, name: "Bessemer" },
  { rank: 28, name: "Albertville" },
  { rank: 29, name: "Helena" },
  { rank: 30, name: "Oxford" },
  { rank: 31, name: "Mountain Brook" },
  { rank: 32, name: "Anniston" },
  { rank: 33, name: "Cullman" },
  { rank: 34, name: "Calera" },
  { rank: 35, name: "Prichard" },
  { rank: 36, name: "Tillmans Corner" },
  { rank: 37, name: "Troy" },
  { rank: 38, name: "Millbrook" },
  { rank: 39, name: "Muscle Shoals" },
  { rank: 40, name: "Gulf Shores" },
  { rank: 41, name: "Chelsea" },
  { rank: 42, name: "McCalla" },
  { rank: 43, name: "Saraland" },
  { rank: 44, name: "Selma" },
  { rank: 45, name: "Gardendale" },
  { rank: 46, name: "Hartselle" },
  { rank: 47, name: "Hueytown" },
  { rank: 48, name: "Scottsboro" },
  { rank: 49, name: "Center Point" },
  { rank: 50, name: "Fort Payne" },
  { rank: 51, name: "Jacksonville" },
  { rank: 52, name: "Talladega" },
  { rank: 53, name: "Jasper" },
  { rank: 54, name: "Alexander City" },
  { rank: 55, name: "Ozark" },
  { rank: 56, name: "Pell City" },
  { rank: 57, name: "Moody" },
  { rank: 58, name: "Irondale" },
  { rank: 59, name: "Leeds" },
  { rank: 60, name: "Eufaula" },
  { rank: 61, name: "Sylacauga" },
  { rank: 62, name: "Pike Road" },
  { rank: 63, name: "Spanish Fort" },
  { rank: 64, name: "Russellville" },
  { rank: 65, name: "Saks" },
  { rank: 66, name: "Boaz" },
  { rank: 67, name: "Rainbow City" },
  { rank: 68, name: "Valley" },
  { rank: 69, name: "Clay" },
  { rank: 70, name: "Meridianville" },
  { rank: 71, name: "Southside" },
  { rank: 72, name: "Fultondale" },
  { rank: 73, name: "Fairfield" },
  { rank: 74, name: "Meadowbrook" },
  { rank: 75, name: "Pleasant Grove" },
  { rank: 76, name: "Sheffield" },
  { rank: 77, name: "Clanton" },
  { rank: 78, name: "Tuscumbia" },
  { rank: 79, name: "Guntersville" },
  { rank: 80, name: "Forestdale" },
  { rank: 81, name: "Arab" },
  { rank: 82, name: "Andalusia" },
  { rank: 83, name: "Orange Beach" },
  { rank: 84, name: "Tuskegee" },
  { rank: 85, name: "Bay Minette" },
  { rank: 86, name: "Atmore" },
  { rank: 87, name: "Brook Highland" },
  { rank: 88, name: "Montevallo" },
  { rank: 89, name: "Lincoln" },
  { rank: 90, name: "Pinson" },
  { rank: 91, name: "Robertsdale" },
  { rank: 92, name: "Wetumpka" },
  { rank: 93, name: "Oneonta" },
  { rank: 94, name: "Hamilton" },
  { rank: 95, name: "Greenville" },
  { rank: 96, name: "Satsuma" },
  { rank: 97, name: "Opp" },
  { rank: 98, name: "Demopolis" },
  { rank: 99, name: "Lanett" },
  { rank: 100, name: "Margaret" },
  { rank: 101, name: "Harvest" },
  { rank: 102, name: "Chickasaw" },
  { rank: 103, name: "Semmes" },
  { rank: 104, name: "Moores Mill" },
  { rank: 105, name: "Highland Lakes" },
  { rank: 106, name: "Rainsville" },
  { rank: 107, name: "Attalla" },
  { rank: 108, name: "Tarrant" },
  { rank: 109, name: "Grayson Valley" },
  { rank: 110, name: "Monroeville" },
  { rank: 111, name: "Fort Rucker" },
  { rank: 112, name: "Smiths Station" },
  { rank: 113, name: "Odenville" },
  { rank: 114, name: "Headland" },
  { rank: 115, name: "Glencoe" },
  { rank: 116, name: "Roanoke" },
  { rank: 117, name: "Springville" },
  { rank: 118, name: "Redland" },
  { rank: 119, name: "Brewton" },
  { rank: 120, name: "Holtville" }
]

interface AlabamaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const AlabamaCitySelector: React.FC<AlabamaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Alabama City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = ALABAMA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {ALABAMA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Alabama
      </p>
    </div>
  )
}

export default AlabamaCitySelector
