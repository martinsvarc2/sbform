import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const UTAH_CITIES: City[] = [
  { rank: 1, name: "Salt Lake City" },
  { rank: 2, name: "West Valley City" },
  { rank: 3, name: "West Jordan" },
  { rank: 4, name: "Provo" },
  { rank: 5, name: "St. George" },
  { rank: 6, name: "Lehi" },
  { rank: 7, name: "Orem" },
  { rank: 8, name: "Sandy" },
  { rank: 9, name: "Ogden" },
  { rank: 10, name: "South Jordan" },
  { rank: 11, name: "Layton" },
  { rank: 12, name: "Millcreek" },
  { rank: 13, name: "Herriman" },
  { rank: 14, name: "Eagle Mountain" },
  { rank: 15, name: "Saratoga Springs" },
  { rank: 16, name: "Logan" },
  { rank: 17, name: "Taylorsville" },
  { rank: 18, name: "Murray" },
  { rank: 19, name: "Draper" },
  { rank: 20, name: "Spanish Fork" },
  { rank: 21, name: "Riverton" },
  { rank: 22, name: "Bountiful" },
  { rank: 23, name: "Cedar City" },
  { rank: 24, name: "Tooele" },
  { rank: 25, name: "American Fork" },
  { rank: 26, name: "Syracuse" },
  { rank: 27, name: "Roy" },
  { rank: 28, name: "Kearns" },
  { rank: 29, name: "Pleasant Grove" },
  { rank: 30, name: "Washington" },
  { rank: 31, name: "Springville" },
  { rank: 32, name: "Midvale" },
  { rank: 33, name: "Clearfield" },
  { rank: 34, name: "Kaysville" },
  { rank: 35, name: "Cottonwood Heights" },
  { rank: 36, name: "Magna" },
  { rank: 37, name: "Holladay" },
  { rank: 38, name: "West Haven" },
  { rank: 39, name: "Farmington" },
  { rank: 40, name: "South Salt Lake" },
  { rank: 41, name: "Hurricane" },
  { rank: 42, name: "Payson" },
  { rank: 43, name: "North Salt Lake" },
  { rank: 44, name: "Clinton" },
  { rank: 45, name: "North Ogden" },
  { rank: 46, name: "Highland" },
  { rank: 47, name: "Brigham City" },
  { rank: 48, name: "Bluffdale" },
  { rank: 49, name: "Heber" },
  { rank: 50, name: "Santaquin" },
  { rank: 51, name: "South Ogden" },
  { rank: 52, name: "Centerville" },
  { rank: 53, name: "Grantsville" },
  { rank: 54, name: "Smithfield" },
  { rank: 55, name: "Vineyard" },
  { rank: 56, name: "Mapleton" },
  { rank: 57, name: "Tremonton" },
  { rank: 58, name: "West Point" },
  { rank: 59, name: "North Logan" },
  { rank: 60, name: "Lindon" },
  { rank: 61, name: "Woods Cross" },
  { rank: 62, name: "Stansbury Park" },
  { rank: 63, name: "Pleasant View" },
  { rank: 64, name: "Hyrum" },
  { rank: 65, name: "Salem" },
  { rank: 66, name: "Vernal" },
  { rank: 67, name: "Ivins" },
  { rank: 68, name: "Alpine" },
  { rank: 69, name: "Cedar Hills" },
  { rank: 70, name: "Providence" },
  { rank: 71, name: "Hooper" },
  { rank: 72, name: "Riverdale" },
  { rank: 73, name: "Washington Terrace" },
  { rank: 74, name: "Summit Park" },
  { rank: 75, name: "Santa Clara" },
  { rank: 76, name: "Plain City" },
  { rank: 77, name: "Enoch" },
  { rank: 78, name: "Nibley" },
  { rank: 79, name: "Richfield" },
  { rank: 80, name: "Price" },
  { rank: 81, name: "Park City" },
  { rank: 82, name: "South Weber" },
  { rank: 83, name: "Farr West" },
  { rank: 84, name: "Roosevelt" },
  { rank: 85, name: "Nephi" },
  { rank: 86, name: "Harrisville" },
  { rank: 87, name: "Ephraim" },
  { rank: 88, name: "Midway" },
  { rank: 89, name: "Perry" },
  { rank: 90, name: "Fruit Heights" },
  { rank: 91, name: "West Bountiful" },
  { rank: 92, name: "Hyde Park" },
  { rank: 93, name: "Snyderville" },
  { rank: 94, name: "White City" },
  { rank: 95, name: "Kanab" },
  { rank: 96, name: "Sunset" },
  { rank: 97, name: "Moab" },
]

interface UtahCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const UtahCitySelector: React.FC<UtahCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Utah City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = UTAH_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {UTAH_CITIES.map((city) => (
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
        * You can select up to 10 cities from Utah
      </p>
    </div>
  )
}

export default UtahCitySelector
