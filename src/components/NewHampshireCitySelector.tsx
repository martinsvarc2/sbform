import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const NEW_HAMPSHIRE_CITIES: City[] = [
  { rank: 1, name: "Manchester" },
  { rank: 2, name: "Nashua" },
  { rank: 3, name: "Concord" },
  { rank: 4, name: "Derry" },
  { rank: 5, name: "Rochester" },
  { rank: 6, name: "Dover" },
  { rank: 7, name: "Salem" },
  { rank: 8, name: "Merrimack" },
  { rank: 9, name: "Londonderry" },
  { rank: 10, name: "Hudson" },
  { rank: 11, name: "Bedford" },
  { rank: 12, name: "Keene" },
  { rank: 13, name: "Portsmouth" },
  { rank: 14, name: "Goffstown" },
  { rank: 15, name: "Laconia" },
  { rank: 16, name: "Milford" },
  { rank: 17, name: "Hampton" },
  { rank: 18, name: "Exeter" },
  { rank: 19, name: "Windham" },
  { rank: 20, name: "Lebanon" },
  { rank: 21, name: "Hooksett" },
  { rank: 22, name: "Durham" },
  { rank: 23, name: "Pelham" },
  { rank: 24, name: "Claremont" },
  { rank: 25, name: "Somersworth" },
  { rank: 26, name: "Hanover" },
  { rank: 27, name: "Amherst" },
  { rank: 28, name: "Raymond" },
  { rank: 29, name: "Conway" },
  { rank: 30, name: "Barrington" },
  { rank: 31, name: "Newmarket" },
  { rank: 32, name: "Berlin" },
  { rank: 33, name: "Weare" },
  { rank: 34, name: "Hampstead" },
  { rank: 35, name: "Franklin" },
  { rank: 36, name: "Hollis" },
  { rank: 37, name: "Litchfield" },
  { rank: 38, name: "Bow" },
  { rank: 39, name: "Seabrook" },
  { rank: 40, name: "Gilford" },
  { rank: 41, name: "Plaistow" },
  { rank: 42, name: "Stratham" },
  { rank: 43, name: "Epping" },
  { rank: 44, name: "Pembroke" },
  { rank: 45, name: "Belmont" },
  { rank: 46, name: "Swanzey" },
  { rank: 47, name: "Atkinson" },
  { rank: 48, name: "Farmington" },
  { rank: 49, name: "Meredith" },
  { rank: 50, name: "Rindge" },
  { rank: 51, name: "Sandown" },
  { rank: 52, name: "Wolfeboro" },
  { rank: 53, name: "Plymouth" },
  { rank: 54, name: "Peterborough" },
  { rank: 55, name: "Newport" },
  { rank: 56, name: "Kingston" },
  { rank: 57, name: "Henniker" },
  { rank: 58, name: "Auburn" },
  { rank: 59, name: "New Boston" },
  { rank: 60, name: "Hopkinton" },
  { rank: 61, name: "Alton" },
  { rank: 62, name: "Hillsborough" },
  { rank: 63, name: "Littleton" },
  { rank: 64, name: "Brookline" },
  { rank: 65, name: "Loudon" },
  { rank: 66, name: "Rye" },
  { rank: 67, name: "Jaffrey" },
  { rank: 68, name: "Wakefield" },
  { rank: 69, name: "Nottingham" },
  { rank: 70, name: "New Ipswich" },
  { rank: 71, name: "Chester" },
  { rank: 72, name: "Moultonborough" },
  { rank: 73, name: "Northfield" },
  { rank: 74, name: "Barnstead" },
  { rank: 75, name: "Epsom" },
]

interface NewHampshireCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const NewHampshireCitySelector: React.FC<NewHampshireCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a New Hampshire City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = NEW_HAMPSHIRE_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {NEW_HAMPSHIRE_CITIES.map((city) => (
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
        * You can select up to 10 cities from New Hampshire
      </p>
    </div>
  )
}

export default NewHampshireCitySelector
