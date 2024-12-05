import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const MISSOURI_CITIES: City[] = [
  { rank: 1, name: "Kansas City" },
  { rank: 2, name: "St. Louis" },
  { rank: 3, name: "Springfield" },
  { rank: 4, name: "Columbia" },
  { rank: 5, name: "Independence" },
  { rank: 6, name: "Lee's Summit" },
  { rank: 7, name: "O'Fallon" },
  { rank: 8, name: "St. Charles" },
  { rank: 9, name: "St. Joseph" },
  { rank: 10, name: "Blue Springs" },
  { rank: 11, name: "St. Peters" },
  { rank: 12, name: "Joplin" },
  { rank: 13, name: "Florissant" },
  { rank: 14, name: "Chesterfield" },
  { rank: 15, name: "Wentzville" },
  { rank: 16, name: "Jefferson City" },
  { rank: 17, name: "Cape Girardeau" },
  { rank: 18, name: "Oakville" },
  { rank: 19, name: "Wildwood" },
  { rank: 20, name: "University City" },
  { rank: 21, name: "Liberty" },
  { rank: 22, name: "Ballwin" },
  { rank: 23, name: "Mehlville" },
  { rank: 24, name: "Kirkwood" },
  { rank: 25, name: "Raytown" },
  { rank: 26, name: "Gladstone" },
  { rank: 27, name: "Maryland Heights" },
  { rank: 28, name: "Raymore" },
  { rank: 29, name: "Nixa" },
  { rank: 30, name: "Belton" },
  { rank: 31, name: "Grandview" },
  { rank: 32, name: "Hazelwood" },
  { rank: 33, name: "Ozark" },
  { rank: 34, name: "Webster Groves" },
  { rank: 35, name: "Sedalia" },
  { rank: 36, name: "Arnold" },
  { rank: 37, name: "Old Jamestown" },
  { rank: 38, name: "Rolla" },
  { rank: 39, name: "Republic" },
  { rank: 40, name: "Affton" },
  { rank: 41, name: "Warrensburg" },
  { rank: 42, name: "Lake St. Louis" },
  { rank: 43, name: "Concord" },
  { rank: 44, name: "Farmington" },
  { rank: 45, name: "Creve Coeur" },
  { rank: 46, name: "Manchester" },
  { rank: 47, name: "Ferguson" },
  { rank: 48, name: "Spanish Lake" },
  { rank: 49, name: "Clayton" },
  { rank: 50, name: "Kirksville" },
  { rank: 51, name: "Grain Valley" },
  { rank: 52, name: "Hannibal" },
  { rank: 53, name: "Lemay" },
  { rank: 54, name: "Poplar Bluff" },
  { rank: 55, name: "Sikeston" },
  { rank: 56, name: "Jackson" },
  { rank: 57, name: "Fort Leonard Wood" },
  { rank: 58, name: "Washington" },
  { rank: 59, name: "Lebanon" },
  { rank: 60, name: "Carthage" },
  { rank: 61, name: "Overland" },
  { rank: 62, name: "Troy" },
  { rank: 63, name: "Dardenne Prairie" },
  { rank: 64, name: "Festus" },
  { rank: 65, name: "Marshall" },
  { rank: 66, name: "Neosho" },
  { rank: 67, name: "Eureka" },
  { rank: 68, name: "Webb City" },
  { rank: 69, name: "Moberly" },
  { rank: 70, name: "Union" },
  { rank: 71, name: "Branson" },
  { rank: 72, name: "Jennings" },
  { rank: 73, name: "West Plains" },
  { rank: 74, name: "St. Ann" },
  { rank: 75, name: "Fulton" },
  { rank: 76, name: "Crestwood" },
  { rank: 77, name: "Mexico" },
  { rank: 78, name: "Town and Country" },
  { rank: 79, name: "Bolivar" },
  { rank: 80, name: "Kearney" },
  { rank: 81, name: "Bridgeton" },
  { rank: 82, name: "Smithville" },
  { rank: 83, name: "Excelsior Springs" },
  { rank: 84, name: "Bellefontaine Neighbors" },
  { rank: 85, name: "Maryville" },
  { rank: 86, name: "Monett" },
  { rank: 87, name: "Kennett" },
  { rank: 88, name: "Harrisonville" },
  { rank: 89, name: "Ellisville" },
  { rank: 90, name: "Warrenton" },
  { rank: 91, name: "Clinton" },
  { rank: 92, name: "Parkville" },
  { rank: 93, name: "Chillicothe" },
  { rank: 94, name: "Oak Grove" },
  { rank: 95, name: "Des Peres" },
  { rank: 96, name: "Sunset Hills" },
  { rank: 97, name: "Richmond Heights" },
  { rank: 98, name: "Olivette" },
  { rank: 99, name: "Ladue" },
  { rank: 100, name: "Park Hills" },
  { rank: 101, name: "Pleasant Hill" },
  { rank: 102, name: "Perryville" },
  { rank: 103, name: "Carl Junction" },
  { rank: 104, name: "Murphy" },
  { rank: 105, name: "Nevada" },
  { rank: 106, name: "Brentwood" },
  { rank: 107, name: "Berkeley" },
  { rank: 108, name: "Maplewood" },
  { rank: 109, name: "Marshfield" },
  { rank: 110, name: "Dexter" },
  { rank: 111, name: "Boonville" },
  { rank: 112, name: "Pacific" },
  { rank: 113, name: "Aurora" },
  { rank: 114, name: "Sappington" },
  { rank: 115, name: "Sullivan" },
  { rank: 116, name: "Cameron" },
  { rank: 117, name: "Valley Park" },
  { rank: 118, name: "Willard" },
  { rank: 119, name: "De Soto" },
  { rank: 120, name: "Black Jack" },
  { rank: 121, name: "Bonne Terre" },
  { rank: 122, name: "St. John" },
  { rank: 123, name: "Battlefield" },
  { rank: 124, name: "Peculiar" },
  { rank: 125, name: "Shrewsbury" },
  { rank: 126, name: "Cottleville" },
  { rank: 127, name: "Greenwood" },
  { rank: 128, name: "Barnhart" },
  { rank: 129, name: "Pevely" },
  { rank: 130, name: "Glendale" },
  { rank: 131, name: "Richmond" },
  { rank: 132, name: "North Kansas City" },
  { rank: 133, name: "Odessa" },
  { rank: 134, name: "Trenton" },
  { rank: 135, name: "St. Robert" },
  { rank: 136, name: "Wright City" },
  { rank: 137, name: "Macon" },
  { rank: 138, name: "Imperial" },
  { rank: 139, name: "Glasgow Village" },
  { rank: 140, name: "Rogersville" },
  { rank: 141, name: "Waynesville" },
  { rank: 142, name: "Herculaneum" },
  { rank: 143, name: "Weldon Spring" },
  { rank: 144, name: "Caruthersville" },
  { rank: 145, name: "Savannah" },
  { rank: 146, name: "Ashland" },
  { rank: 147, name: "Ste. Genevieve" },
]

interface MissouriCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const MissouriCitySelector: React.FC<MissouriCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Missouri City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = MISSOURI_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {MISSOURI_CITIES.map((city) => (
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
        * You can select up to 10 cities from Missouri
      </p>
    </div>
  )
}

export default MissouriCitySelector
