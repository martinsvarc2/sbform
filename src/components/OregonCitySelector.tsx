import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const OREGON_CITIES: City[] = [
  { rank: 1, name: "Portland" },
  { rank: 2, name: "Eugene" },
  { rank: 3, name: "Salem" },
  { rank: 4, name: "Gresham" },
  { rank: 5, name: "Hillsboro" },
  { rank: 6, name: "Bend" },
  { rank: 7, name: "Beaverton" },
  { rank: 8, name: "Medford" },
  { rank: 9, name: "Corvallis" },
  { rank: 10, name: "Springfield" },
  { rank: 11, name: "Albany" },
  { rank: 12, name: "Tigard" },
  { rank: 13, name: "Aloha" },
  { rank: 14, name: "Lake Oswego" },
  { rank: 15, name: "Grants Pass" },
  { rank: 16, name: "Keizer" },
  { rank: 17, name: "Redmond" },
  { rank: 18, name: "Oregon City" },
  { rank: 19, name: "McMinnville" },
  { rank: 20, name: "Bethany" },
  { rank: 21, name: "Woodburn" },
  { rank: 22, name: "Happy Valley" },
  { rank: 23, name: "Tualatin" },
  { rank: 24, name: "Forest Grove" },
  { rank: 25, name: "West Linn" },
  { rank: 26, name: "Newberg" },
  { rank: 27, name: "Wilsonville" },
  { rank: 28, name: "Roseburg" },
  { rank: 29, name: "Hayesville" },
  { rank: 30, name: "Klamath Falls" },
  { rank: 31, name: "Milwaukie" },
  { rank: 32, name: "Ashland" },
  { rank: 33, name: "Altamont" },
  { rank: 34, name: "Lebanon" },
  { rank: 35, name: "Cedar Mill" },
  { rank: 36, name: "Sherwood" },
  { rank: 37, name: "Hermiston" },
  { rank: 38, name: "Central Point" },
  { rank: 39, name: "Dallas" },
  { rank: 40, name: "Canby" },
  { rank: 41, name: "Oak Grove" },
  { rank: 42, name: "Pendleton" },
  { rank: 43, name: "Four Corners" },
  { rank: 44, name: "The Dalles" },
  { rank: 45, name: "Cornelius" },
  { rank: 46, name: "Troutdale" },
  { rank: 47, name: "Coos Bay" },
  { rank: 48, name: "St. Helens" },
  { rank: 49, name: "Santa Clara" },
  { rank: 50, name: "Sandy" },
  { rank: 51, name: "Oatfield" },
  { rank: 52, name: "La Grande" },
  { rank: 53, name: "Damascus" },
  { rank: 54, name: "Prineville" },
  { rank: 55, name: "Ontario" },
  { rank: 56, name: "Oak Hills" },
  { rank: 57, name: "Gladstone" },
  { rank: 58, name: "White City" },
  { rank: 59, name: "Monmouth" },
  { rank: 60, name: "Fairview" },
  { rank: 61, name: "Cottage Grove" },
  { rank: 62, name: "Newport" },
  { rank: 63, name: "Independence" },
  { rank: 64, name: "Sweet Home" },
  { rank: 65, name: "Silverton" },
  { rank: 66, name: "Baker City" },
  { rank: 67, name: "River Road" },
  { rank: 68, name: "Lincoln City" },
  { rank: 69, name: "Molalla" },
  { rank: 70, name: "Rockcreek" },
  { rank: 71, name: "North Bend" },
  { rank: 72, name: "Astoria" },
  { rank: 73, name: "Eagle Point" },
  { rank: 74, name: "Florence" },
  { rank: 75, name: "Bull Mountain" },
  { rank: 76, name: "Cedar Hills" },
  { rank: 77, name: "Sutherlin" },
  { rank: 78, name: "West Haven-Sylvan" },
  { rank: 79, name: "Hood River" },
  { rank: 80, name: "Scappoose" },
  { rank: 81, name: "Green" },
  { rank: 82, name: "Stayton" },
  { rank: 83, name: "Umatilla" },
  { rank: 84, name: "Madras" },
  { rank: 85, name: "Jennings Lodge" },
  { rank: 86, name: "Junction City" },
  { rank: 87, name: "Seaside" },
  { rank: 88, name: "Garden Home-Whitford" },
  { rank: 89, name: "Milton-Freewater" },
  { rank: 90, name: "Raleigh Hills" },
  { rank: 91, name: "West Slope" },
  { rank: 92, name: "Brookings" },
  { rank: 93, name: "Sheridan" },
  { rank: 94, name: "Talent" },
  { rank: 95, name: "Warrenton" },
  { rank: 96, name: "Marlene Village" },
  { rank: 97, name: "Philomath" },
  { rank: 98, name: "Estacada" },
  { rank: 99, name: "Winston" },
  { rank: 100, name: "Deschutes River Woods" },
  { rank: 101, name: "Creswell" },
  { rank: 102, name: "Mount Hood Villages" },
  { rank: 103, name: "Crooked River Ranch" },
  { rank: 104, name: "Tillamook" },
  { rank: 105, name: "Veneta" },
]

interface OregonCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const OregonCitySelector: React.FC<OregonCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Oregon City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = OREGON_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {OREGON_CITIES.map((city) => (
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
        * You can select up to 10 cities from Oregon
      </p>
    </div>
  )
}

export default OregonCitySelector
