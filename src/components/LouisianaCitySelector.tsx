import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const LOUISIANA_CITIES: City[] = [
  { rank: 1, name: "New Orleans" },
  { rank: 2, name: "Baton Rouge" },
  { rank: 3, name: "Shreveport" },
  { rank: 4, name: "Metairie" },
  { rank: 5, name: "Lafayette" },
  { rank: 6, name: "Lake Charles" },
  { rank: 7, name: "Bossier City" },
  { rank: 8, name: "Kenner" },
  { rank: 9, name: "Monroe" },
  { rank: 10, name: "Alexandria" },
  { rank: 11, name: "Prairieville" },
  { rank: 12, name: "Marrero" },
  { rank: 13, name: "Houma" },
  { rank: 14, name: "Central" },
  { rank: 15, name: "Laplace" },
  { rank: 16, name: "Slidell" },
  { rank: 17, name: "New Iberia" },
  { rank: 18, name: "Terrytown" },
  { rank: 19, name: "Hammond" },
  { rank: 20, name: "Chalmette" },
  { rank: 21, name: "Ruston" },
  { rank: 22, name: "Harvey" },
  { rank: 23, name: "Bayou Cane" },
  { rank: 24, name: "Zachary" },
  { rank: 25, name: "Sulphur" },
  { rank: 26, name: "Youngsville" },
  { rank: 27, name: "Shenandoah" },
  { rank: 28, name: "Estelle" },
  { rank: 29, name: "Natchitoches" },
  { rank: 30, name: "Gretna" },
  { rank: 31, name: "Thibodaux" },
  { rank: 32, name: "Opelousas" },
  { rank: 33, name: "Broussard" },
  { rank: 34, name: "Luling" },
  { rank: 35, name: "Gonzales" },
  { rank: 36, name: "Pineville" },
  { rank: 37, name: "Carencro" },
  { rank: 38, name: "River Ridge" },
  { rank: 39, name: "Mandeville" },
  { rank: 40, name: "West Monroe" },
  { rank: 41, name: "Claiborne" },
  { rank: 42, name: "Destrehan" },
  { rank: 43, name: "Baker" },
  { rank: 44, name: "Gardere" },
  { rank: 45, name: "Covington" },
  { rank: 46, name: "Woodmere" },
  { rank: 47, name: "Moss Bluff" },
  { rank: 48, name: "Bayou Blue" },
  { rank: 49, name: "Raceland" },
  { rank: 50, name: "Crowley" },
  { rank: 51, name: "Minden" },
  { rank: 52, name: "Timberlane" },
  { rank: 53, name: "Waggaman" },
  { rank: 54, name: "Abbeville" },
  { rank: 55, name: "Morgan City" },
  { rank: 56, name: "Belle Chasse" },
  { rank: 57, name: "Bogalusa" },
  { rank: 58, name: "Jefferson" },
  { rank: 59, name: "DeRidder" },
  { rank: 60, name: "Denham Springs" },
  { rank: 61, name: "Jennings" },
  { rank: 62, name: "Village St. George" },
  { rank: 63, name: "Eunice" },
  { rank: 64, name: "Oak Hills Place" },
  { rank: 65, name: "Scott" },
  { rank: 66, name: "Eden Isle" },
  { rank: 67, name: "Bastrop" },
  { rank: 68, name: "Harahan" },
  { rank: 69, name: "Prien" },
  { rank: 70, name: "Old Jefferson" },
  { rank: 71, name: "Merrydale" },
  { rank: 72, name: "Fort Polk South" },
  { rank: 73, name: "Westwego" },
  { rank: 74, name: "Red Chute" },
  { rank: 75, name: "Ponchatoula" },
  { rank: 76, name: "Addis" },
  { rank: 77, name: "Reserve" },
  { rank: 78, name: "Meraux" },
  { rank: 79, name: "Breaux Bridge" },
  { rank: 80, name: "St. Rose" },
  { rank: 81, name: "Donaldsonville" },
  { rank: 82, name: "Rayne" },
  { rank: 83, name: "St. Gabriel" },
  { rank: 84, name: "Bridge City" },
  { rank: 85, name: "Lacombe" },
  { rank: 86, name: "Galliano" },
  { rank: 87, name: "Walker" },
  { rank: 88, name: "Oakdale" },
  { rank: 89, name: "Elmwood" },
  { rank: 90, name: "Inniswold" },
  { rank: 91, name: "Franklin" },
  { rank: 92, name: "Ville Platte" },
  { rank: 93, name: "Gray" },
  { rank: 94, name: "Plaquemine" },
  { rank: 95, name: "Larose" },
  { rank: 96, name: "Chackbay" },
  { rank: 97, name: "Tallulah" },
  { rank: 98, name: "Cut Off" },
  { rank: 99, name: "Patterson" },
  { rank: 100, name: "Brownfields" },
  { rank: 101, name: "Leesville" },
  { rank: 102, name: "Grambling" },
  { rank: 103, name: "Schriever" },
  { rank: 104, name: "St. Martinville" },
  { rank: 105, name: "Carlyss" },
]

interface LouisianaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const LouisianaCitySelector: React.FC<LouisianaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Louisiana City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = LOUISIANA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {LOUISIANA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Louisiana
      </p>
    </div>
  )
}

export default LouisianaCitySelector

