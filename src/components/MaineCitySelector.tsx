import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const MAINE_CITIES: City[] = [
  { rank: 1, name: "Portland" },
  { rank: 2, name: "Lewiston" },
  { rank: 3, name: "Bangor" },
  { rank: 4, name: "South Portland" },
  { rank: 5, name: "Auburn" },
  { rank: 6, name: "Scarborough" },
  { rank: 7, name: "Brunswick" },
  { rank: 8, name: "Biddeford" },
  { rank: 9, name: "Sanford" },
  { rank: 10, name: "Saco" },
  { rank: 11, name: "Westbrook" },
  { rank: 12, name: "Windham" },
  { rank: 13, name: "Augusta" },
  { rank: 14, name: "Gorham" },
  { rank: 15, name: "Waterville" },
  { rank: 16, name: "York" },
  { rank: 17, name: "Falmouth" },
  { rank: 18, name: "Orono" },
  { rank: 19, name: "Wells" },
  { rank: 20, name: "Kennebunk" },
  { rank: 21, name: "Kittery" },
  { rank: 22, name: "Standish" },
  { rank: 23, name: "Topsham" },
  { rank: 24, name: "Lisbon" },
  { rank: 25, name: "Brewer" },
  { rank: 26, name: "Cape Elizabeth" },
  { rank: 27, name: "Old Orchard Beach" },
  { rank: 28, name: "Yarmouth" },
  { rank: 29, name: "Cumberland" },
  { rank: 30, name: "Bath" },
  { rank: 31, name: "Freeport" },
  { rank: 32, name: "Ellsworth" },
  { rank: 33, name: "Skowhegan" },
  { rank: 34, name: "Presque Isle" },
  { rank: 35, name: "Buxton" },
  { rank: 36, name: "Farmington" },
  { rank: 37, name: "Gray" },
  { rank: 38, name: "Berwick" },
  { rank: 39, name: "Waterboro" },
  { rank: 40, name: "Hampden" },
  { rank: 41, name: "Winslow" },
  { rank: 42, name: "South Berwick" },
  { rank: 43, name: "Eliot" },
  { rank: 44, name: "Caribou" },
  { rank: 45, name: "Old Town" },
  { rank: 46, name: "Belfast" },
  { rank: 47, name: "Rockland" },
  { rank: 48, name: "Hermon" },
  { rank: 49, name: "Lebanon" },
  { rank: 50, name: "Fairfield" },
  { rank: 51, name: "Oakland" },
  { rank: 52, name: "Winthrop" },
  { rank: 53, name: "Gardiner" },
  { rank: 54, name: "Houlton" },
  { rank: 55, name: "Rumford" },
  { rank: 56, name: "Turner" },
  { rank: 57, name: "Poland" },
  { rank: 58, name: "New Gloucester" },
  { rank: 59, name: "Bridgton" },
  { rank: 60, name: "Paris" },
  { rank: 61, name: "Waldoboro" },
  { rank: 62, name: "Norway" },
  { rank: 63, name: "Bar Harbor" },
  { rank: 64, name: "North Berwick" },
  { rank: 65, name: "Camden" },
  { rank: 66, name: "Sabattus" },
  { rank: 67, name: "Bucksport" },
  { rank: 68, name: "Harpswell" },
]

interface MaineCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const MaineCitySelector: React.FC<MaineCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Maine City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = MAINE_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {MAINE_CITIES.map((city) => (
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
        * You can select up to 10 cities from Maine
      </p>
    </div>
  )
}

export default MaineCitySelector

