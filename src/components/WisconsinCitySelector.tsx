import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const WISCONSIN_CITIES: City[] = [
  { rank: 1, name: "Milwaukee" },
  { rank: 2, name: "Madison" },
  { rank: 3, name: "Green Bay" },
  { rank: 4, name: "Kenosha" },
  { rank: 5, name: "Racine" },
  { rank: 6, name: "Appleton" },
  { rank: 7, name: "Eau Claire" },
  { rank: 8, name: "Waukesha" },
  { rank: 9, name: "Janesville" },
  { rank: 10, name: "Oshkosh" },
  { rank: 11, name: "West Allis" },
  { rank: 12, name: "La Crosse" },
  { rank: 13, name: "Sheboygan" },
  { rank: 14, name: "Wauwatosa" },
  { rank: 15, name: "Fond Lac" },
  { rank: 16, name: "Brookfield" },
  { rank: 17, name: "New Berlin" },
  { rank: 18, name: "Menomonee Falls" },
  { rank: 19, name: "Wausau" },
  { rank: 20, name: "Sun Prairie" },
  { rank: 21, name: "Oak Creek" },
  { rank: 22, name: "Greenfield" },
  { rank: 23, name: "Beloit" },
  { rank: 24, name: "Franklin" },
  { rank: 25, name: "Manitowoc" },
  { rank: 26, name: "Fitchburg" },
  { rank: 27, name: "West Bend" },
  { rank: 28, name: "Mount Pleasant" },
  { rank: 29, name: "Neenah" },
  { rank: 30, name: "Superior" },
  { rank: 31, name: "Stevens Point" },
  { rank: 32, name: "Mequon" },
  { rank: 33, name: "Muskego" },
  { rank: 34, name: "Caledonia" },
  { rank: 35, name: "De Pere" },
  { rank: 36, name: "Middleton" },
  { rank: 37, name: "Watertown" },
  { rank: 38, name: "Pleasant Prairie" },
  { rank: 39, name: "Germantown" },
  { rank: 40, name: "Howard" },
  { rank: 41, name: "South Milwaukee" },
  { rank: 42, name: "Onalaska" },
  { rank: 43, name: "Fox Crossing" },
  { rank: 44, name: "Oconomowoc" },
  { rank: 45, name: "Marshfield" },
  { rank: 46, name: "Wisconsin Rapids" },
  { rank: 47, name: "Menasha" },
  { rank: 48, name: "Kaukauna" },
  { rank: 49, name: "Cudahy" },
  { rank: 50, name: "River Falls" },
  { rank: 51, name: "Ashwaubenon" },
  { rank: 52, name: "Bellevue" },
  { rank: 53, name: "Menomonie" },
  { rank: 54, name: "Beaver Dam" },
  { rank: 55, name: "Pewaukee" },
  { rank: 56, name: "Verona" },
  { rank: 57, name: "Weston" },
  { rank: 58, name: "Hartford" },
  { rank: 59, name: "Hudson" },
  { rank: 60, name: "Whitewater" },
  { rank: 61, name: "Waunakee" },
  { rank: 62, name: "Harrison" },
  { rank: 63, name: "Chippewa Falls" },
  { rank: 64, name: "Whitefish Bay" },
  { rank: 65, name: "Greendale" },
  { rank: 66, name: "Plover" },
  { rank: 67, name: "Salem Lakes" },
  { rank: 68, name: "Allouez" },
  { rank: 69, name: "Shorewood" },
  { rank: 70, name: "Greenville" },
  { rank: 71, name: "Suamico" },
  { rank: 72, name: "Stoughton" },
  { rank: 73, name: "Port Washington" },
  { rank: 74, name: "Grafton" },
  { rank: 75, name: "Glendale" },
  { rank: 76, name: "Cedarburg" },
  { rank: 77, name: "Baraboo" },
  { rank: 78, name: "Brown Deer" },
  { rank: 79, name: "Little Chute" },
  { rank: 80, name: "Sussex" },
  { rank: 81, name: "Fort Atkinson" },
  { rank: 82, name: "Richfield" },
  { rank: 83, name: "Holmen" },
  { rank: 84, name: "Oregon" },
  { rank: 85, name: "DeForest" },
  { rank: 86, name: "Hobart" },
  { rank: 87, name: "Two Rivers" },
  { rank: 88, name: "Burlington" },
  { rank: 89, name: "Marinette" },
  { rank: 90, name: "Platteville" },
  { rank: 91, name: "New Richmond" },
  { rank: 92, name: "Waupun" },
  { rank: 93, name: "Monroe" },
  { rank: 94, name: "Hartland" },
  { rank: 95, name: "Reedsburg" },
  { rank: 96, name: "Elkhorn" },
  { rank: 97, name: "Portage" },
  { rank: 98, name: "Sturgeon Bay" },
  { rank: 99, name: "Sparta" },
  { rank: 100, name: "Windsor" },
  { rank: 101, name: "Altoona" },
  { rank: 102, name: "McFarland" },
  { rank: 103, name: "St. Francis" },
  { rank: 104, name: "Tomah" },
  { rank: 105, name: "Cottage Grove" },
  { rank: 106, name: "Shawano" },
  { rank: 107, name: "Merrill" },
  { rank: 108, name: "Rice Lake" },
  { rank: 109, name: "Plymouth" },
  { rank: 110, name: "Lake Geneva" },
  { rank: 111, name: "Kronenwetter" },
  { rank: 112, name: "Mukwonago" },
  { rank: 113, name: "Delavan" },
  { rank: 114, name: "Monona" },
  { rank: 115, name: "Waukesha" },
  { rank: 116, name: "Sheboygan Falls" },
  { rank: 117, name: "Pewaukee" },
  { rank: 118, name: "Rhinelander" },
  { rank: 119, name: "Somers" },
  { rank: 120, name: "Jackson" },
  { rank: 121, name: "Antigo" },
  { rank: 122, name: "Ashland" },
  { rank: 123, name: "Mount Horeb" },
  { rank: 124, name: "Ripon" },
  { rank: 125, name: "Kimberly" },
  { rank: 126, name: "Jefferson" },
  { rank: 127, name: "Hales Corners" },
  { rank: 128, name: "Vernon" },
  { rank: 129, name: "New London" },
  { rank: 130, name: "Lake Hallie" },
  { rank: 131, name: "Delafield" },
  { rank: 132, name: "Lake Mills" },
  { rank: 133, name: "Sturtevant" },
  { rank: 134, name: "Fox Point" },
  { rank: 135, name: "Slinger" },
  { rank: 136, name: "Twin Lakes" },
  { rank: 137, name: "Waupaca" },
  { rank: 138, name: "Elm Grove" },
  { rank: 139, name: "Rib Mountain" },
  { rank: 140, name: "Edgerton" },
  { rank: 141, name: "Evansville" },
  { rank: 142, name: "Waterford" },
  { rank: 143, name: "Milton" },
  { rank: 144, name: "Berlin" },
  { rank: 145, name: "Rothschild" },
  { rank: 146, name: "Summit" },
  { rank: 147, name: "Columbus" },
  { rank: 148, name: "North Fond Lac" },
  { rank: 149, name: "Prairie Chien" },
  { rank: 150, name: "West Salem" },
  { rank: 151, name: "Union Grove" },
  { rank: 152, name: "Bristol" },
  { rank: 153, name: "Mayville" },
  { rank: 154, name: "Dodgeville" },
  { rank: 155, name: "Wind Lake" },
  { rank: 156, name: "Tichigan" },
  { rank: 157, name: "Lake Wisconsin" },
]

interface WisconsinCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const WisconsinCitySelector: React.FC<WisconsinCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Wisconsin City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = WISCONSIN_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {WISCONSIN_CITIES.map((city) => (
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
        * You can select up to 10 cities from Wisconsin
      </p>
    </div>
  )
}

export default WisconsinCitySelector
