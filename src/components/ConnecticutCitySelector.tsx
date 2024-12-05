import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const CONNECTICUT_CITIES: City[] = [
  { rank: 1, name: "Bridgeport" },
  { rank: 2, name: "New Haven" },
  { rank: 3, name: "Stamford" },
  { rank: 4, name: "Hartford" },
  { rank: 5, name: "Waterbury" },
  { rank: 6, name: "Norwalk" },
  { rank: 7, name: "Danbury" },
  { rank: 8, name: "New Britain" },
  { rank: 9, name: "West Hartford" },
  { rank: 10, name: "Fairfield" },
  { rank: 11, name: "Greenwich" },
  { rank: 12, name: "Bristol" },
  { rank: 13, name: "Meriden" },
  { rank: 14, name: "Hamden" },
  { rank: 15, name: "Manchester" },
  { rank: 16, name: "West Haven" },
  { rank: 17, name: "Stratford" },
  { rank: 18, name: "East Hartford" },
  { rank: 19, name: "Milford" },
  { rank: 20, name: "Middletown" },
  { rank: 21, name: "Southington" },
  { rank: 22, name: "Wallingford" },
  { rank: 23, name: "Shelton" },
  { rank: 24, name: "Enfield" },
  { rank: 25, name: "Norwich" },
  { rank: 26, name: "Groton" },
  { rank: 27, name: "Trumbull" },
  { rank: 28, name: "Torrington" },
  { rank: 29, name: "Glastonbury" },
  { rank: 30, name: "Newington" },
  { rank: 31, name: "Naugatuck" },
  { rank: 32, name: "Vernon" },
  { rank: 33, name: "Cheshire" },
  { rank: 34, name: "Windsor" },
  { rank: 35, name: "New Milford" },
  { rank: 36, name: "Branford" },
  { rank: 37, name: "New London" },
  { rank: 38, name: "Newtown" },
  { rank: 39, name: "Westport" },
  { rank: 40, name: "East Haven" },
  { rank: 41, name: "Wethersfield" },
  { rank: 42, name: "Farmington" },
  { rank: 43, name: "South Windsor" },
  { rank: 44, name: "Mansfield" },
  { rank: 45, name: "Simsbury" },
  { rank: 46, name: "Ridgefield" },
  { rank: 47, name: "North Haven" },
  { rank: 48, name: "Windham" },
  { rank: 49, name: "Watertown" },
  { rank: 50, name: "Bloomfield" },
  { rank: 51, name: "Darien" },
  { rank: 52, name: "Guilford" },
  { rank: 53, name: "New Canaan" },
  { rank: 54, name: "Rocky Hill" },
  { rank: 55, name: "Berlin" },
  { rank: 56, name: "Bethel" },
  { rank: 57, name: "Southbury" },
  { rank: 58, name: "Waterford" },
  { rank: 59, name: "East Lyme" },
  { rank: 60, name: "Ansonia" },
  { rank: 61, name: "Avon" },
  { rank: 62, name: "Monroe" },
  { rank: 63, name: "Stonington" },
  { rank: 64, name: "Wilton" },
  { rank: 65, name: "Killingly" },
  { rank: 66, name: "Montville" },
  { rank: 67, name: "Plainville" },
  { rank: 68, name: "Madison" },
  { rank: 69, name: "Brookfield" },
  { rank: 70, name: "Seymour" },
  { rank: 71, name: "Ellington" },
  { rank: 72, name: "Wolcott" },
  { rank: 73, name: "Suffield" },
  { rank: 74, name: "Ledyard" },
  { rank: 75, name: "Colchester" },
  { rank: 76, name: "Plainfield" },
  { rank: 77, name: "Tolland" },
  { rank: 78, name: "Orange" },
  { rank: 79, name: "Cromwell" },
  { rank: 80, name: "New Fairfield" },
  { rank: 81, name: "Clinton" },
  { rank: 82, name: "North Branford" },
  { rank: 83, name: "Oxford" },
  { rank: 84, name: "East Hampton" },
  { rank: 85, name: "Windsor Locks" },
  { rank: 86, name: "Derby" },
  { rank: 87, name: "Coventry" },
  { rank: 88, name: "Plymouth" },
  { rank: 89, name: "Griswold" },
  { rank: 90, name: "Stafford" },
  { rank: 91, name: "Somers" },
  { rank: 92, name: "Granby" },
  { rank: 93, name: "East Windsor" },
  { rank: 94, name: "Old Saybrook" },
  { rank: 95, name: "Weston" },
  { rank: 96, name: "Winchester" },
  { rank: 97, name: "Canton" },
  { rank: 98, name: "Woodbury" },
  { rank: 99, name: "Burlington" },
  { rank: 100, name: "Prospect" },
  { rank: 101, name: "Thompson" },
  { rank: 102, name: "Portland" },
  { rank: 103, name: "Putnam" },
  { rank: 104, name: "Hebron" },
  { rank: 105, name: "East Haddam" },
  { rank: 106, name: "Woodbridge" },
  { rank: 107, name: "Haddam" },
  { rank: 108, name: "Brooklyn" },
  { rank: 109, name: "Redding" },
  { rank: 110, name: "Woodstock" },
  { rank: 111, name: "Litchfield" },
  { rank: 112, name: "Middlebury" },
  { rank: 113, name: "Old Lyme" },
  { rank: 114, name: "Easton" },
  { rank: 115, name: "Thomaston" },
  { rank: 116, name: "Durham" },
  { rank: 117, name: "Lebanon" },
  { rank: 118, name: "Westbrook" },
  { rank: 119, name: "Essex" },
  { rank: 120, name: "New Hartford" },
  { rank: 121, name: "Beacon Falls" },
  { rank: 122, name: "Killingworth" },
  { rank: 123, name: "Marlborough" },
  { rank: 124, name: "Harwinton" },
  { rank: 125, name: "Willington" },
  { rank: 126, name: "Columbia" },
  { rank: 127, name: "Bethany" },
  { rank: 128, name: "East Granby" },
  { rank: 129, name: "Canterbury" },
  { rank: 130, name: "North Stonington" }
]

interface ConnecticutCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const ConnecticutCitySelector: React.FC<ConnecticutCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Connecticut City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = CONNECTICUT_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {CONNECTICUT_CITIES.map((city) => (
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
        * You can select up to 10 cities from Connecticut
      </p>
    </div>
  )
}

export default ConnecticutCitySelector

