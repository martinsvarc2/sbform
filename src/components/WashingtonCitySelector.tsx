import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const WASHINGTON_CITIES: City[] = [
  { rank: 1, name: "Seattle" },
  { rank: 2, name: "Spokane" },
  { rank: 3, name: "Tacoma" },
  { rank: 4, name: "Vancouver" },
  { rank: 5, name: "Bellevue" },
  { rank: 6, name: "Kent" },
  { rank: 7, name: "Everett" },
  { rank: 8, name: "Spokane Valley" },
  { rank: 9, name: "Renton" },
  { rank: 10, name: "Yakima" },
  { rank: 11, name: "Federal Way" },
  { rank: 12, name: "Bellingham" },
  { rank: 13, name: "Kirkland" },
  { rank: 14, name: "Kennewick" },
  { rank: 15, name: "Auburn" },
  { rank: 16, name: "Redmond" },
  { rank: 17, name: "Pasco" },
  { rank: 18, name: "Marysville" },
  { rank: 19, name: "South Hill" },
  { rank: 20, name: "Richland" },
  { rank: 21, name: "Sammamish" },
  { rank: 22, name: "Shoreline" },
  { rank: 23, name: "Lakewood" },
  { rank: 24, name: "Lacey" },
  { rank: 25, name: "Olympia" },
  { rank: 26, name: "Bothell" },
  { rank: 27, name: "Burien" },
  { rank: 28, name: "Bremerton" },
  { rank: 29, name: "Lynnwood" },
  { rank: 30, name: "Edmonds" },
  { rank: 31, name: "Puyallup" },
  { rank: 32, name: "Lake Stevens" },
  { rank: 33, name: "Parkland" },
  { rank: 34, name: "Issaquah" },
  { rank: 35, name: "Longview" },
  { rank: 36, name: "Graham" },
  { rank: 37, name: "Wenatchee" },
  { rank: 38, name: "Mount Vernon" },
  { rank: 39, name: "Spanaway" },
  { rank: 40, name: "University Place" },
  { rank: 41, name: "Walla Walla" },
  { rank: 42, name: "Pullman" },
  { rank: 43, name: "SeaTac" },
  { rank: 44, name: "Des Moines" },
  { rank: 45, name: "Orchards" },
  { rank: 46, name: "Maple Valley" },
  { rank: 47, name: "Tumwater" },
  { rank: 48, name: "Camas" },
  { rank: 49, name: "Mill Creek East" },
  { rank: 50, name: "Moses Lake" },
  { rank: 51, name: "Frederickson" },
  { rank: 52, name: "North Lynnwood" },
  { rank: 53, name: "Martha Lake" },
  { rank: 54, name: "Mercer Island" },
  { rank: 55, name: "Bainbridge Island" },
  { rank: 56, name: "Union Hill-Novelty Hill" },
  { rank: 57, name: "Oak Harbor" },
  { rank: 58, name: "Eastmont" },
  { rank: 59, name: "Cottage Lake" },
  { rank: 60, name: "Hazel Dell" },
  { rank: 61, name: "Kenmore" },
  { rank: 62, name: "Bonney Lake" },
  { rank: 63, name: "Battle Ground" },
  { rank: 64, name: "Silver Firs" },
  { rank: 65, name: "Silverdale" },
  { rank: 66, name: "Arlington" },
  { rank: 67, name: "Mountlake Terrace" },
  { rank: 68, name: "Five Corners" },
  { rank: 69, name: "Covington" },
  { rank: 70, name: "Bothell West" },
  { rank: 71, name: "Tukwila" },
  { rank: 72, name: "Mukilteo" },
  { rank: 73, name: "Mill Creek" },
  { rank: 74, name: "Camano" },
  { rank: 75, name: "Salmon Creek" },
  { rank: 76, name: "Port Angeles" },
  { rank: 77, name: "Monroe" },
  { rank: 78, name: "West Richland" },
  { rank: 79, name: "Centralia" },
  { rank: 80, name: "Port Orchard" },
  { rank: 81, name: "Fairwood" },
  { rank: 82, name: "Ellensburg" },
  { rank: 83, name: "Bryn Mawr-Skyway" },
  { rank: 84, name: "Anacortes" },
  { rank: 85, name: "Aberdeen" },
  { rank: 86, name: "Washougal" },
  { rank: 87, name: "Lynden" },
  { rank: 88, name: "Ridgefield" },
  { rank: 89, name: "Ferndale" },
  { rank: 90, name: "Sunnyside" },
  { rank: 91, name: "Lake Stickney" },
  { rank: 92, name: "White Center" },
  { rank: 93, name: "Lakeland North" },
  { rank: 94, name: "Bothell East" },
  { rank: 95, name: "Elk Plain" },
  { rank: 96, name: "East Wenatchee" },
  { rank: 97, name: "Artondale" },
  { rank: 98, name: "Fort Lewis" },
  { rank: 99, name: "Woodinville" },
  { rank: 100, name: "Edgewood" },
  { rank: 101, name: "Liberty Lake" },
  { rank: 102, name: "Snoqualmie" },
  { rank: 103, name: "Sedro-Woolley" },
  { rank: 104, name: "Lake Forest Park" },
  { rank: 105, name: "Gig Harbor" },
  { rank: 106, name: "Lakeland South" },
  { rank: 107, name: "Enumclaw" },
  { rank: 108, name: "Newcastle" },
  { rank: 109, name: "Kelso" },
  { rank: 110, name: "Prairie Ridge" },
  { rank: 111, name: "Cheney" },
  { rank: 112, name: "Lake Tapps" },
  { rank: 113, name: "East Renton Highlands" },
  { rank: 114, name: "Poulsbo" },
  { rank: 115, name: "Minnehaha" },
  { rank: 116, name: "Birch Bay" },
  { rank: 117, name: "Maltby" },
  { rank: 118, name: "Grandview" },
  { rank: 119, name: "Felida" },
  { rank: 120, name: "Airway Heights" },
  { rank: 121, name: "Vashon" },
  { rank: 122, name: "Shelton" },
  { rank: 123, name: "Sumner" },
  { rank: 124, name: "Alderwood Manor" },
  { rank: 125, name: "Mount Vista" },
  { rank: 126, name: "Yelm" },
  { rank: 127, name: "Burlington" },
  { rank: 128, name: "Fairwood" },
  { rank: 129, name: "Port Townsend" },
  { rank: 130, name: "Fife" },
  { rank: 131, name: "Lake Morton-Berrydale" },
  { rank: 132, name: "Snohomish" },
  { rank: 133, name: "Terrace Heights" },
  { rank: 134, name: "Picnic Point" },
  { rank: 135, name: "College Place" },
  { rank: 136, name: "DuPont" },
  { rank: 137, name: "Stanwood" },
  { rank: 138, name: "Midland" },
  { rank: 139, name: "Summit View" },
  { rank: 140, name: "Othello" },
  { rank: 141, name: "Summit" },
  { rank: 142, name: "Orting" },
  { rank: 143, name: "Hoquiam" },
  { rank: 144, name: "Ephrata" },
  { rank: 145, name: "Selah" },
  { rank: 146, name: "Milton" },
  { rank: 147, name: "Duvall" },
  { rank: 148, name: "Toppenish" },
  { rank: 149, name: "Quincy" },
  { rank: 150, name: "North Bend" },
  { rank: 151, name: "Barberton" },
  { rank: 152, name: "Sequim" },
  { rank: 153, name: "Waller" },
  { rank: 154, name: "Ocean Shores" },
  { rank: 155, name: "Chehalis" },
  { rank: 156, name: "Clover Creek" },
  { rank: 157, name: "Wollochet" },
  { rank: 158, name: "Parkwood" },
  { rank: 159, name: "Hobart" },
  { rank: 160, name: "Sultan" },
  { rank: 161, name: "Woods Creek" },
  { rank: 162, name: "Clarkston" },
  { rank: 163, name: "Sudden Valley" },
  { rank: 164, name: "Black Diamond" },
  { rank: 165, name: "Mead" },
  { rank: 166, name: "Rochester" },
  { rank: 167, name: "Clarkston Heights-Vineland" },
  { rank: 168, name: "Fircrest" },
  { rank: 169, name: "Pacific" },
  { rank: 170, name: "Tehaleh" },
  { rank: 171, name: "Lake Shore" },
  { rank: 172, name: "North Fort Lewis" },
  { rank: 173, name: "Steilacoom" },
  { rank: 174, name: "Lake Goodwin" },
  { rank: 175, name: "Tanglewilde" },
  { rank: 176, name: "Woodland" },
  { rank: 177, name: "Normandy Park" },
  { rank: 178, name: "Prosser" },
  { rank: 179, name: "Brier" },
  { rank: 180, name: "Union Gap" },
  { rank: 181, name: "Blaine" },
  { rank: 182, name: "Country Homes" },
  { rank: 183, name: "Suncrest" },
  { rank: 184, name: "West Clarkston-Highland" },
  { rank: 185, name: "Manchester" },
  { rank: 186, name: "Bangor Base" },
  { rank: 187, name: "Hockinson" },
  { rank: 188, name: "Finley" },
  { rank: 189, name: "Buckley" },
  { rank: 190, name: "Tracyton" },
  { rank: 191, name: "Otis Orchards-East Farms" },
  { rank: 192, name: "Maplewood" },
  { rank: 193, name: "East Port Orchard" },
  { rank: 194, name: "Chain Lake" },
  { rank: 195, name: "Lexington" },
  { rank: 196, name: "Town Country" },
  { rank: 197, name: "Colville" },
  { rank: 198, name: "Deer Park" },
  { rank: 199, name: "Omak" },
  { rank: 200, name: "Moses Lake North" }
]

interface WashingtonCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const WashingtonCitySelector: React.FC<WashingtonCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Washington City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = WASHINGTON_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {WASHINGTON_CITIES.map((city) => (
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
        * You can select up to 10 cities from Washington
      </p>
    </div>
  )
}

export default WashingtonCitySelector
