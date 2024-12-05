import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const MINNESOTA_CITIES: City[] = [
  { rank: 1, name: "Minneapolis" },
  { rank: 2, name: "St. Paul" },
  { rank: 3, name: "Rochester" },
  { rank: 4, name: "Duluth" },
  { rank: 5, name: "Bloomington" },
  { rank: 6, name: "Woodbury" },
  { rank: 7, name: "Brooklyn Park" },
  { rank: 8, name: "Lakeville" },
  { rank: 9, name: "Plymouth" },
  { rank: 10, name: "Blaine" },
  { rank: 11, name: "Maple Grove" },
  { rank: 12, name: "St. Cloud" },
  { rank: 13, name: "Eagan" },
  { rank: 14, name: "Burnsville" },
  { rank: 15, name: "Coon Rapids" },
  { rank: 16, name: "Eden Prairie" },
  { rank: 17, name: "Apple Valley" },
  { rank: 18, name: "Edina" },
  { rank: 19, name: "Minnetonka" },
  { rank: 20, name: "St. Louis Park" },
  { rank: 21, name: "Shakopee" },
  { rank: 22, name: "Mankato" },
  { rank: 23, name: "Moorhead" },
  { rank: 24, name: "Cottage Grove" },
  { rank: 25, name: "Maplewood" },
  { rank: 26, name: "Richfield" },
  { rank: 27, name: "Inver Grove Heights" },
  { rank: 28, name: "Roseville" },
  { rank: 29, name: "Andover" },
  { rank: 30, name: "Savage" },
  { rank: 31, name: "Brooklyn Center" },
  { rank: 32, name: "Fridley" },
  { rank: 33, name: "Chaska" },
  { rank: 34, name: "Ramsey" },
  { rank: 35, name: "Oakdale" },
  { rank: 36, name: "Rosemount" },
  { rank: 37, name: "Prior Lake" },
  { rank: 38, name: "Elk River" },
  { rank: 39, name: "Owatonna" },
  { rank: 40, name: "Shoreview" },
  { rank: 41, name: "Austin" },
  { rank: 42, name: "Winona" },
  { rank: 43, name: "Chanhassen" },
  { rank: 44, name: "Faribault" },
  { rank: 45, name: "Otsego" },
  { rank: 46, name: "Farmington" },
  { rank: 47, name: "White Bear Lake" },
  { rank: 48, name: "Lino Lakes" },
  { rank: 49, name: "Champlin" },
  { rank: 50, name: "Columbia Heights" },
  { rank: 51, name: "West St. Paul" },
  { rank: 52, name: "Hastings" },
  { rank: 53, name: "St. Michael" },
  { rank: 54, name: "New Brighton" },
  { rank: 55, name: "Crystal" },
  { rank: 56, name: "Willmar" },
  { rank: 57, name: "Northfield" },
  { rank: 58, name: "Golden Valley" },
  { rank: 59, name: "Forest Lake" },
  { rank: 60, name: "South St. Paul" },
  { rank: 61, name: "New Hope" },
  { rank: 62, name: "Sartell" },
  { rank: 63, name: "Stillwater" },
  { rank: 64, name: "Hopkins" },
  { rank: 65, name: "Albert Lea" },
  { rank: 66, name: "Anoka" },
  { rank: 67, name: "Red Wing" },
  { rank: 68, name: "Ham Lake" },
  { rank: 69, name: "Hugo" },
  { rank: 70, name: "Buffalo" },
  { rank: 71, name: "Hibbing" },
  { rank: 72, name: "Bemidji" },
  { rank: 73, name: "Alexandria" },
  { rank: 74, name: "Monticello" },
  { rank: 75, name: "Hutchinson" },
  { rank: 76, name: "Brainerd" },
  { rank: 77, name: "Lake Elmo" },
  { rank: 78, name: "Fergus Falls" },
  { rank: 79, name: "North Mankato" },
  { rank: 80, name: "Waconia" },
  { rank: 81, name: "Marshall" },
  { rank: 82, name: "New Ulm" },
  { rank: 83, name: "Robbinsdale" },
  { rank: 84, name: "Sauk Rapids" },
  { rank: 85, name: "Rogers" },
  { rank: 86, name: "Worthington" },
  { rank: 87, name: "Big Lake" },
  { rank: 88, name: "North St. Paul" },
  { rank: 89, name: "Mounds View" },
  { rank: 90, name: "Cloquet" },
  { rank: 91, name: "Vadnais Heights" },
  { rank: 92, name: "St. Peter" },
  { rank: 93, name: "East Bethel" },
  { rank: 94, name: "North Branch" },
  { rank: 95, name: "Victoria" },
  { rank: 96, name: "Mendota Heights" },
  { rank: 97, name: "Grand Rapids" },
  { rank: 98, name: "Dayton" },
  { rank: 99, name: "Cambridge" },
  { rank: 100, name: "St. Anthony" },
  { rank: 101, name: "Hermantown" },
  { rank: 102, name: "Fairmont" },
  { rank: 103, name: "Little Canada" },
  { rank: 104, name: "Detroit Lakes" },
  { rank: 105, name: "Arden Hills" },
  { rank: 106, name: "Oak Grove" },
  { rank: 107, name: "Baxter" },
  { rank: 108, name: "Waseca" },
  { rank: 109, name: "Little Falls" },
  { rank: 110, name: "Minnetrista" },
  { rank: 111, name: "East Grand Forks" },
  { rank: 112, name: "Thief River Falls" },
  { rank: 113, name: "Mound" },
  { rank: 114, name: "Albertville" },
  { rank: 115, name: "St. Francis" },
  { rank: 116, name: "Waite Park" },
  { rank: 117, name: "New Prague" },
  { rank: 118, name: "Virginia" },
  { rank: 119, name: "Corcoran" },
  { rank: 120, name: "Mahtomedi" },
  { rank: 121, name: "Wyoming" },
  { rank: 122, name: "Orono" },
  { rank: 123, name: "Isanti" },
  { rank: 124, name: "Shorewood" },
  { rank: 125, name: "Belle Plaine" },
  { rank: 126, name: "Delano" },
  { rank: 127, name: "Kasson" },
  { rank: 128, name: "Crookston" },
  { rank: 129, name: "Medina" },
  { rank: 130, name: "Carver" },
  { rank: 131, name: "Spring Lake Park" },
  { rank: 132, name: "Stewartville" },
  { rank: 133, name: "Byron" },
  { rank: 134, name: "Zimmerman" },
  { rank: 135, name: "Jordan" },
  { rank: 136, name: "St. Joseph" },
  { rank: 137, name: "Litchfield" },
  { rank: 138, name: "Newport" },
  { rank: 139, name: "Chisago City" },
  { rank: 140, name: "Glencoe" },
  { rank: 141, name: "Credit River" },
  { rank: 142, name: "International Falls" },
  { rank: 143, name: "Princeton" },
  { rank: 144, name: "Lake City" },
  { rank: 145, name: "St. Paul Park" },
  { rank: 146, name: "La Crescent" },
  { rank: 147, name: "Montevideo" },
  { rank: 148, name: "Morris" },
  { rank: 149, name: "Becker" },
  { rank: 150, name: "North Oaks" },
  { rank: 151, name: "Elko New Market" },
  { rank: 152, name: "Redwood Falls" },
  { rank: 153, name: "Lindstrom" },
  { rank: 154, name: "Lonsdale" },
  { rank: 155, name: "Township" }
]

interface MinnesotaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const MinnesotaCitySelector: React.FC<MinnesotaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Minnesota City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = MINNESOTA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {MINNESOTA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Minnesota
      </p>
    </div>
  )
}

export default MinnesotaCitySelector
