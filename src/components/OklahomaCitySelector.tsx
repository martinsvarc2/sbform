import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const OKLAHOMA_CITIES: City[] = [
  { rank: 1, name: "Oklahoma City" },
  { rank: 2, name: "Tulsa" },
  { rank: 3, name: "Norman" },
  { rank: 4, name: "Broken Arrow" },
  { rank: 5, name: "Edmond" },
  { rank: 6, name: "Lawton" },
  { rank: 7, name: "Moore" },
  { rank: 8, name: "Midwest City" },
  { rank: 9, name: "Enid" },
  { rank: 10, name: "Stillwater" },
  { rank: 11, name: "Owasso" },
  { rank: 12, name: "Bartlesville" },
  { rank: 13, name: "Muskogee" },
  { rank: 14, name: "Shawnee" },
  { rank: 15, name: "Bixby" },
  { rank: 16, name: "Jenks" },
  { rank: 17, name: "Yukon" },
  { rank: 18, name: "Ardmore" },
  { rank: 19, name: "Mustang" },
  { rank: 20, name: "Ponca City" },
  { rank: 21, name: "Duncan" },
  { rank: 22, name: "Sapulpa" },
  { rank: 23, name: "Del City" },
  { rank: 24, name: "Durant" },
  { rank: 25, name: "Claremore" },
  { rank: 26, name: "Bethany" },
  { rank: 27, name: "Sand Springs" },
  { rank: 28, name: "El Reno" },
  { rank: 29, name: "Altus" },
  { rank: 30, name: "McAlester" },
  { rank: 31, name: "Tahlequah" },
  { rank: 32, name: "Chickasha" },
  { rank: 33, name: "Ada" },
  { rank: 34, name: "Newcastle" },
  { rank: 35, name: "Glenpool" },
  { rank: 36, name: "Miami" },
  { rank: 37, name: "Choctaw" },
  { rank: 38, name: "Guymon" },
  { rank: 39, name: "Weatherford" },
  { rank: 40, name: "Woodward" },
  { rank: 41, name: "Guthrie" },
  { rank: 42, name: "Okmulgee" },
  { rank: 43, name: "Elk City" },
  { rank: 44, name: "Coweta" },
  { rank: 45, name: "Warr Acres" },
  { rank: 46, name: "Blanchard" },
  { rank: 47, name: "Collinsville" },
  { rank: 48, name: "Pryor Creek" },
  { rank: 49, name: "The Village" },
  { rank: 50, name: "Piedmont" },
  { rank: 51, name: "Poteau" },
  { rank: 52, name: "Skiatook" },
  { rank: 53, name: "Sallisaw" },
  { rank: 54, name: "Tuttle" },
  { rank: 55, name: "Wagoner" },
  { rank: 56, name: "Cushing" },
  { rank: 57, name: "Clinton" },
  { rank: 58, name: "Noble" },
  { rank: 59, name: "Catoosa" },
  { rank: 60, name: "Grove" },
  { rank: 61, name: "Seminole" },
  { rank: 62, name: "Idabel" },
  { rank: 63, name: "Purcell" },
  { rank: 64, name: "Harrah" },
  { rank: 65, name: "Tecumseh" },
  { rank: 66, name: "Blackwell" },
  { rank: 67, name: "Pauls Valley" },
  { rank: 68, name: "Holdenville" },
  { rank: 69, name: "Verdigris" },
  { rank: 70, name: "Henryetta" },
  { rank: 71, name: "Anadarko" },
  { rank: 72, name: "Vinita" },
  { rank: 73, name: "Lone Grove" },
  { rank: 74, name: "Hugo" },
  { rank: 75, name: "Kingfisher" },
]

interface OklahomaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const OklahomaCitySelector: React.FC<OklahomaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Oklahoma City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = OKLAHOMA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {OKLAHOMA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Oklahoma
      </p>
    </div>
  )
}

export default OklahomaCitySelector
