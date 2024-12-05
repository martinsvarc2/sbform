import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const ARKANSAS_CITIES: City[] = [
  { rank: 1, name: "Little Rock" },
  { rank: 2, name: "Fayetteville" },
  { rank: 3, name: "Fort Smith" },
  { rank: 4, name: "Springdale" },
  { rank: 5, name: "Jonesboro" },
  { rank: 6, name: "Rogers" },
  { rank: 7, name: "Conway" },
  { rank: 8, name: "North Little Rock" },
  { rank: 9, name: "Bentonville" },
  { rank: 10, name: "Pine Bluff" },
  { rank: 11, name: "Benton" },
  { rank: 12, name: "Hot Springs" },
  { rank: 13, name: "Sherwood" },
  { rank: 14, name: "Bella Vista" },
  { rank: 15, name: "Paragould" },
  { rank: 16, name: "Russellville" },
  { rank: 17, name: "Texarkana" },
  { rank: 18, name: "Jacksonville" },
  { rank: 19, name: "Cabot" },
  { rank: 20, name: "Centerton" },
  { rank: 21, name: "Van Buren" },
  { rank: 22, name: "Searcy" },
  { rank: 23, name: "West Memphis" },
  { rank: 24, name: "Bryant" },
  { rank: 25, name: "Siloam Springs" },
  { rank: 26, name: "Maumelle" },
  { rank: 27, name: "Hot Springs Village" },
  { rank: 28, name: "El Dorado" },
  { rank: 29, name: "Marion" },
  { rank: 30, name: "Harrison" },
  { rank: 31, name: "Mountain Home" },
  { rank: 32, name: "Blytheville" },
  { rank: 33, name: "Forrest City" },
  { rank: 34, name: "Lowell" },
  { rank: 35, name: "Batesville" },
  { rank: 36, name: "Malvern" },
  { rank: 37, name: "Magnolia" },
  { rank: 38, name: "Farmington" },
  { rank: 39, name: "Arkadelphia" },
  { rank: 40, name: "Camden" },
  { rank: 41, name: "Greenwood" },
  { rank: 42, name: "Clarksville" },
  { rank: 43, name: "Pea Ridge" },
  { rank: 44, name: "Beebe" },
  { rank: 45, name: "Prairie Grove" },
  { rank: 46, name: "Hope" },
  { rank: 47, name: "Helena-West Helena" },
  { rank: 48, name: "Tontitown" },
  { rank: 49, name: "Newport" },
  { rank: 50, name: "Monticello" },
  { rank: 51, name: "Wynne" },
  { rank: 52, name: "Pocahontas" },
  { rank: 53, name: "Stuttgart" },
  { rank: 54, name: "Trumann" },
  { rank: 55, name: "Heber Springs" },
  { rank: 56, name: "Morrilton" },
  { rank: 57, name: "Ward" },
  { rank: 58, name: "Osceola" },
  { rank: 59, name: "Greenbrier" },
  { rank: 60, name: "Cave Springs" },
  { rank: 61, name: "Alma" },
  { rank: 62, name: "East End" },
  { rank: 63, name: "De Queen" },
  { rank: 64, name: "Berryville" },
  { rank: 65, name: "Mena" },
  { rank: 66, name: "Walnut Ridge" },
  { rank: 67, name: "White Hall" },
  { rank: 68, name: "Barling" },
  { rank: 69, name: "Sheridan" },
  { rank: 70, name: "Warren" }
]

interface ArkansasCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const ArkansasCitySelector: React.FC<ArkansasCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Arkansas City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = ARKANSAS_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {ARKANSAS_CITIES.map((city) => (
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
        * You can select up to 10 cities from Arkansas
      </p>
    </div>
  )
}

export default ArkansasCitySelector
