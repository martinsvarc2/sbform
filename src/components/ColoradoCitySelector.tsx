import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const COLORADO_CITIES: City[] = [
  { rank: 1, name: "Denver" },
  { rank: 2, name: "Colorado Springs" },
  { rank: 3, name: "Aurora" },
  { rank: 4, name: "Fort Collins" },
  { rank: 5, name: "Lakewood" },
  { rank: 6, name: "Thornton" },
  { rank: 7, name: "Arvada" },
  { rank: 8, name: "Westminster" },
  { rank: 9, name: "Greeley" },
  { rank: 10, name: "Pueblo" },
  { rank: 11, name: "Centennial" },
  { rank: 12, name: "Boulder" },
  { rank: 13, name: "Highlands Ranch" },
  { rank: 14, name: "Longmont" },
  { rank: 15, name: "Castle Rock" },
  { rank: 16, name: "Loveland" },
  { rank: 17, name: "Broomfield" },
  { rank: 18, name: "Grand Junction" },
  { rank: 19, name: "Commerce City" },
  { rank: 20, name: "Parker" },
  { rank: 21, name: "Littleton" },
  { rank: 22, name: "Brighton" },
  { rank: 23, name: "Windsor" },
  { rank: 24, name: "Security-Widefield" },
  { rank: 25, name: "Northglenn" },
  { rank: 26, name: "Erie" },
  { rank: 27, name: "Pueblo West" },
  { rank: 28, name: "Dakota Ridge" },
  { rank: 29, name: "Englewood" },
  { rank: 30, name: "Ken Caryl" },
  { rank: 31, name: "Wheat Ridge" },
  { rank: 32, name: "Lafayette" },
  { rank: 33, name: "Fountain" },
  { rank: 34, name: "Columbine" },
  { rank: 35, name: "Four Square Mile" },
  { rank: 36, name: "Evans" },
  { rank: 37, name: "Montrose" },
  { rank: 38, name: "Johnstown" },
  { rank: 39, name: "Golden" },
  { rank: 40, name: "Louisville" },
  { rank: 41, name: "Durango" },
  { rank: 42, name: "Cimarron Hills" },
  { rank: 43, name: "Sherrelwood" },
  { rank: 44, name: "Clifton" },
  { rank: 45, name: "Firestone" },
  { rank: 46, name: "Fort Carson" },
  { rank: 47, name: "Frederick" },
  { rank: 48, name: "Cañon City" },
  { rank: 49, name: "Welby" },
  { rank: 50, name: "Castle Pines" },
  { rank: 51, name: "Greenwood Village" },
  { rank: 52, name: "Black Forest" },
  { rank: 53, name: "Berthoud" },
  { rank: 54, name: "Lone Tree" },
  { rank: 55, name: "Fruita" },
  { rank: 56, name: "Federal Heights" },
  { rank: 57, name: "Steamboat Springs" },
  { rank: 58, name: "Superior" },
  { rank: 59, name: "Sterling" },
  { rank: 60, name: "Monument" },
  { rank: 61, name: "Wellington" },
  { rank: 62, name: "Severance" },
  { rank: 63, name: "Fort Morgan" },
  { rank: 64, name: "Berkley" },
  { rank: 65, name: "Cherry Creek" },
  { rank: 66, name: "Timnath" },
  { rank: 67, name: "Fairmount" },
  { rank: 68, name: "Edwards" },
  { rank: 69, name: "Rifle" },
  { rank: 70, name: "The Pinery" },
  { rank: 71, name: "Glenwood Springs" },
  { rank: 72, name: "Gunbarrel" },
  { rank: 73, name: "Fort Lupton" },
  { rank: 74, name: "Alamosa" },
  { rank: 75, name: "Stonegate" },
  { rank: 76, name: "Delta" },
  { rank: 77, name: "Milliken" },
  { rank: 78, name: "Derby" },
  { rank: 79, name: "Cortez" },
  { rank: 80, name: "Gypsum" },
  { rank: 81, name: "Craig" },
  { rank: 82, name: "Roxborough Park" },
  { rank: 83, name: "Evergreen" },
  { rank: 84, name: "Redlands" },
  { rank: 85, name: "Woodmoor" },
  { rank: 86, name: "Lochbuie" },
  { rank: 87, name: "Trinidad" },
  { rank: 88, name: "Applewood" },
  { rank: 89, name: "Fruitvale" },
  { rank: 90, name: "Twin Lakes" },
  { rank: 91, name: "Woodland Park" },
  { rank: 92, name: "Lamar" },
  { rank: 93, name: "Eagle" },
  { rank: 94, name: "Orchard Mesa" },
  { rank: 95, name: "Stratmoor" },
  { rank: 96, name: "Mead" },
  { rank: 97, name: "La Junta" },
  { rank: 98, name: "Gunnison" },
  { rank: 99, name: "Carbondale" },
  { rank: 100, name: "Dacono" },
  { rank: 101, name: "Air Force Academy" },
  { rank: 102, name: "Aspen" },
  { rank: 103, name: "Gleneagle" },
  { rank: 104, name: "Cherry Hills Village" },
  { rank: 105, name: "Salida" },
  { rank: 106, name: "Avon" },
  { rank: 107, name: "Sheridan" },
  { rank: 108, name: "Eaton" },
  { rank: 109, name: "Estes Park" },
  { rank: 110, name: "Dove Valley" },
  { rank: 111, name: "Shaw Heights" },
  { rank: 112, name: "West Pleasant View" },
  { rank: 113, name: "Meridian" },
  { rank: 114, name: "Todd Creek" },
  { rank: 115, name: "Battlement Mesa" },
  { rank: 116, name: "Brush" },
  { rank: 117, name: "Castle Pines Village" },
  { rank: 118, name: "Silverthorne" }
]

interface ColoradoCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const ColoradoCitySelector: React.FC<ColoradoCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Colorado City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = COLORADO_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {COLORADO_CITIES.map((city) => (
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
        * You can select up to 10 cities from Colorado
      </p>
    </div>
  )
}

export default ColoradoCitySelector

