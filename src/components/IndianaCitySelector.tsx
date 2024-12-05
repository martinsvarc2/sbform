import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const INDIANA_CITIES: City[] = [
  { rank: 1, name: "Indianapolis" },
  { rank: 2, name: "Fort Wayne" },
  { rank: 3, name: "Evansville" },
  { rank: 4, name: "Fishers" },
  { rank: 5, name: "South Bend" },
  { rank: 6, name: "Carmel" },
  { rank: 7, name: "Bloomington" },
  { rank: 8, name: "Hammond" },
  { rank: 9, name: "Noblesville" },
  { rank: 10, name: "Lafayette" },
  { rank: 11, name: "Gary" },
  { rank: 12, name: "Greenwood" },
  { rank: 13, name: "Muncie" },
  { rank: 14, name: "Westfield" },
  { rank: 15, name: "Kokomo" },
  { rank: 16, name: "Terre Haute" },
  { rank: 17, name: "Anderson" },
  { rank: 18, name: "Elkhart" },
  { rank: 19, name: "Columbus" },
  { rank: 20, name: "Jeffersonville" },
  { rank: 21, name: "Mishawaka" },
  { rank: 22, name: "Lawrence" },
  { rank: 23, name: "West Lafayette" },
  { rank: 24, name: "Portage" },
  { rank: 25, name: "Plainfield" },
  { rank: 26, name: "New Albany" },
  { rank: 27, name: "Merrillville" },
  { rank: 28, name: "Richmond" },
  { rank: 29, name: "Crown Point" },
  { rank: 30, name: "Valparaiso" },
  { rank: 31, name: "Goshen" },
  { rank: 32, name: "Brownsburg" },
  { rank: 33, name: "Zionsville" },
  { rank: 34, name: "Michigan City" },
  { rank: 35, name: "Granger" },
  { rank: 36, name: "Schererville" },
  { rank: 37, name: "Hobart" },
  { rank: 38, name: "Marion" },
  { rank: 39, name: "Greenfield" },
  { rank: 40, name: "Franklin" },
  { rank: 41, name: "East Chicago" },
  { rank: 42, name: "Avon" },
  { rank: 43, name: "St. John" },
  { rank: 44, name: "Munster" },
  { rank: 45, name: "Highland" },
  { rank: 46, name: "La Porte" },
  { rank: 47, name: "Clarksville" },
  { rank: 48, name: "Seymour" },
  { rank: 49, name: "Shelbyville" },
  { rank: 50, name: "Logansport" },
  { rank: 51, name: "Lebanon" },
  { rank: 52, name: "New Castle" },
  { rank: 53, name: "Huntington" },
  { rank: 54, name: "Jasper" },
  { rank: 55, name: "Cedar Lake" },
  { rank: 56, name: "Crawfordsville" },
  { rank: 57, name: "Vincennes" },
  { rank: 58, name: "Frankfort" },
  { rank: 59, name: "Dyer" },
  { rank: 60, name: "Warsaw" },
  { rank: 61, name: "Griffith" },
  { rank: 62, name: "New Haven" },
  { rank: 63, name: "Chesterton" },
  { rank: 64, name: "Beech Grove" },
  { rank: 65, name: "Speedway" },
  { rank: 66, name: "Auburn" },
  { rank: 67, name: "Whitestown" },
  { rank: 68, name: "Bedford" },
  { rank: 69, name: "Connersville" },
  { rank: 70, name: "Lake Station" },
  { rank: 71, name: "Washington" },
  { rank: 72, name: "Greensburg" },
  { rank: 73, name: "Madison" },
  { rank: 74, name: "McCordsville" },
  { rank: 75, name: "Martinsville" },
  { rank: 76, name: "Danville" },
  { rank: 77, name: "Yorktown" },
  { rank: 78, name: "Bargersville" },
  { rank: 79, name: "Lowell" },
  { rank: 80, name: "Huntertown" },
  { rank: 81, name: "Plymouth" },
  { rank: 82, name: "Peru" },
  { rank: 83, name: "Bluffton" },
  { rank: 84, name: "Sellersburg" },
  { rank: 85, name: "Kendallville" },
  { rank: 86, name: "Wabash" },
  { rank: 87, name: "Columbia City" },
  { rank: 88, name: "Decatur" },
  { rank: 89, name: "Mooresville" },
  { rank: 90, name: "Greencastle" },
  { rank: 91, name: "Angola" },
  { rank: 92, name: "Charlestown" },
  { rank: 93, name: "Princeton" },
  { rank: 94, name: "Elwood" },
  { rank: 95, name: "Winfield" },
  { rank: 96, name: "Brazil" },
  { rank: 97, name: "Lakes Four Seasons" },
  { rank: 98, name: "South Haven" },
  { rank: 99, name: "Tell City" },
  { rank: 100, name: "Batesville" },
  { rank: 101, name: "Scottsburg" },
  { rank: 102, name: "Dunlap" },
  { rank: 103, name: "Nappanee" },
  { rank: 104, name: "Ellettsville" },
  { rank: 105, name: "Garrett" },
  { rank: 106, name: "Boonville" },
  { rank: 107, name: "Cumberland" },
  { rank: 108, name: "Notre Dame" },
  { rank: 109, name: "North Vernon" },
  { rank: 110, name: "Huntingburg" },
  { rank: 111, name: "Salem" },
  { rank: 112, name: "Mount Vernon" },
  { rank: 113, name: "Rochester" },
  { rank: 114, name: "Rushville" },
  { rank: 115, name: "Portland" },
  { rank: 116, name: "Gas City" },
  { rank: 117, name: "Hartford City" },
  { rank: 118, name: "Pendleton" },
  { rank: 119, name: "Bright" },
  { rank: 120, name: "New Whiteland" },
  { rank: 121, name: "Highland" },
  { rank: 122, name: "Cicero" },
  { rank: 123, name: "Rensselaer" },
  { rank: 124, name: "Whiteland" },
  { rank: 125, name: "Hidden Valley" },
  { rank: 126, name: "Monticello" },
  { rank: 127, name: "Floyds Knobs" },
  { rank: 128, name: "Westville" },
  { rank: 129, name: "Tipton" },
  { rank: 130, name: "Lawrenceburg" },
  { rank: 131, name: "Linton" },
  { rank: 132, name: "North Manchester" },
  { rank: 133, name: "Porter" },
  { rank: 134, name: "Alexandria" },
  { rank: 135, name: "Winona Lake" }
]

interface IndianaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const IndianaCitySelector: React.FC<IndianaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="indiana-city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Indiana City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = INDIANA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="indiana-city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {INDIANA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Indiana
      </p>
    </div>
  )
}

export default IndianaCitySelector

