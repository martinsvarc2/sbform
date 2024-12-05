import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const VIRGINIA_CITIES: City[] = [
  { rank: 1, name: "Virginia Beach" },
  { rank: 2, name: "Chesapeake" },
  { rank: 3, name: "Arlington" },
  { rank: 4, name: "Richmond" },
  { rank: 5, name: "Norfolk" },
  { rank: 6, name: "Newport News" },
  { rank: 7, name: "Alexandria" },
  { rank: 8, name: "Hampton" },
  { rank: 9, name: "Suffolk" },
  { rank: 10, name: "Portsmouth" },
  { rank: 11, name: "Roanoke" },
  { rank: 12, name: "Lynchburg" },
  { rank: 13, name: "Dale City" },
  { rank: 14, name: "Centreville" },
  { rank: 15, name: "Reston" },
  { rank: 16, name: "Harrisonburg" },
  { rank: 17, name: "McLean" },
  { rank: 18, name: "Leesburg" },
  { rank: 19, name: "Woodbridge" },
  { rank: 20, name: "Tuckahoe" },
  { rank: 21, name: "Ashburn" },
  { rank: 22, name: "Blacksburg" },
  { rank: 23, name: "Lake Ridge" },
  { rank: 24, name: "Burke" },
  { rank: 25, name: "Charlottesville" },
  { rank: 26, name: "Linton Hall" },
  { rank: 27, name: "Manassas" },
  { rank: 28, name: "Annandale" },
  { rank: 29, name: "Danville" },
  { rank: 30, name: "Mechanicsville" },
  { rank: 31, name: "Oakton" },
  { rank: 32, name: "West Falls Church" },
  { rank: 33, name: "Fair Oaks" },
  { rank: 34, name: "South Riding" },
  { rank: 35, name: "Petersburg" },
  { rank: 36, name: "Tysons" },
  { rank: 37, name: "Sterling" },
  { rank: 38, name: "Springfield" },
  { rank: 39, name: "Fredericksburg" },
  { rank: 40, name: "Short Pump" },
  { rank: 41, name: "Winchester" },
  { rank: 42, name: "Woodlawn" },
  { rank: 43, name: "Cave Spring" },
  { rank: 44, name: "Staunton" },
  { rank: 45, name: "Leesylvania" },
  { rank: 46, name: "Salem" },
  { rank: 47, name: "Fairfax" },
  { rank: 48, name: "Herndon" },
  { rank: 49, name: "Bailey's Crossroads" },
  { rank: 50, name: "Brambleton" },
  { rank: 51, name: "Cherry Hill" },
  { rank: 52, name: "West Springfield" },
  { rank: 53, name: "Waynesboro" },
  { rank: 54, name: "Chester" },
  { rank: 55, name: "Chantilly" },
  { rank: 56, name: "McNair" },
  { rank: 57, name: "Hopewell" },
  { rank: 58, name: "Lorton" },
  { rank: 59, name: "Montclair" },
  { rank: 60, name: "Midlothian" },
  { rank: 61, name: "Christiansburg" },
  { rank: 62, name: "Rose Hill" },
  { rank: 63, name: "Culpeper" },
  { rank: 64, name: "Buckhall" },
  { rank: 65, name: "Merrifield" },
  { rank: 66, name: "Meadowbrook" },
  { rank: 67, name: "Sudley" },
  { rank: 68, name: "Lincolnia" },
  { rank: 69, name: "Franklin Farm" },
  { rank: 70, name: "Laurel" },
  { rank: 71, name: "Kingstowne" },
  { rank: 72, name: "Hybla Valley" },
  { rank: 73, name: "Colonial Heights" },
  { rank: 74, name: "Burke Centre" },
  { rank: 75, name: "Gainesville" },
  { rank: 76, name: "Idylwood" },
  { rank: 77, name: "Franconia" },
  { rank: 78, name: "Bon Air" },
  { rank: 79, name: "Stone Ridge" },
  { rank: 80, name: "Radford" },
  { rank: 81, name: "Bull Run" },
  { rank: 82, name: "East Highland Park" },
  { rank: 83, name: "Hollins" },
  { rank: 84, name: "Bristol" },
  { rank: 85, name: "Glen Allen" },
  { rank: 86, name: "Vienna" },
  { rank: 87, name: "Manassas Park" },
  { rank: 88, name: "Fort Hunt" },
  { rank: 89, name: "Williamsburg" },
  { rank: 90, name: "Wolf Trap" },
  { rank: 91, name: "Front Royal" },
  { rank: 92, name: "Broadlands" },
  { rank: 93, name: "Great Falls" },
  { rank: 94, name: "Highland Springs" },
  { rank: 95, name: "Falls Church" },
  { rank: 96, name: "Groveton" },
  { rank: 97, name: "Brandermill" },
  { rank: 98, name: "Huntington" },
  { rank: 99, name: "Martinsville" },
  { rank: 100, name: "Newington" },
  { rank: 101, name: "Mount Vernon" },
  { rank: 102, name: "Kings Park West" },
  { rank: 103, name: "Timberlake" },
  { rank: 104, name: "Lansdowne" },
  { rank: 105, name: "Sugarland Run" },
  { rank: 106, name: "Poquoson" },
  { rank: 107, name: "Newington Forest" },
  { rank: 108, name: "Cascades" },
  { rank: 109, name: "Wyndham" },
  { rank: 110, name: "New Baltimore" },
  { rank: 111, name: "Fairfax Station" },
  { rank: 112, name: "Dranesville" },
  { rank: 113, name: "Difficult Run" },
  { rank: 114, name: "Lakeside" },
  { rank: 115, name: "Manchester" },
  { rank: 116, name: "Forest" },
  { rank: 117, name: "Stuarts Draft" },
  { rank: 118, name: "Wakefield" },
  { rank: 119, name: "Loudoun Valley Estates" },
  { rank: 120, name: "Lowes Island" },
  { rank: 121, name: "Triangle" },
  { rank: 122, name: "Gloucester Point" },
  { rank: 123, name: "Yorkshire" },
  { rank: 124, name: "Lake Monticello" },
  { rank: 125, name: "Lake Barcroft" },
  { rank: 126, name: "Madison Heights" },
  { rank: 127, name: "Belmont" },
  { rank: 128, name: "Independent Hill" },
  { rank: 129, name: "Warrenton" },
  { rank: 130, name: "Woodburn" },
  { rank: 131, name: "George Mason" },
  { rank: 132, name: "University Virginia" },
  { rank: 133, name: "Fishersville" },
  { rank: 134, name: "Countryside" },
  { rank: 135, name: "Crozet" },
  { rank: 136, name: "Smithfield" },
  { rank: 137, name: "Seven Corners" },
  { rank: 138, name: "Fair Lakes" },
  { rank: 139, name: "Purcellville" },
  { rank: 140, name: "Hollymead" },
  { rank: 141, name: "Innsbrook" },
  { rank: 142, name: "Pulaski" },
  { rank: 143, name: "Bull Run" },
  { rank: 144, name: "Dunn Loring" },
  { rank: 145, name: "Lake Woods" },
  { rank: 146, name: "Montrose" },
  { rank: 147, name: "Franklin" },
  { rank: 148, name: "Dumbarton" },
  { rank: 149, name: "Abingdon" },
  { rank: 150, name: "Fort Lee" },
  { rank: 151, name: "Wytheville" },
  { rank: 152, name: "Hutchison" },
  { rank: 153, name: "Vinton" },
  { rank: 154, name: "Bellwood" },
  { rank: 155, name: "Rockwood" },
  { rank: 156, name: "Fort Belvoir" },
  { rank: 157, name: "Greenbriar" },
  { rank: 158, name: "Ashland" },
  { rank: 159, name: "Carrollton" },
  { rank: 160, name: "South Boston" },
  { rank: 161, name: "Collinsville" },
  { rank: 162, name: "Long Branch" },
  { rank: 163, name: "Woodlake" },
  { rank: 164, name: "Mantua" },
  { rank: 165, name: "Lexington" },
  { rank: 166, name: "Farmville" },
  { rank: 167, name: "Braddock" },
  { rank: 168, name: "Laurel Hill" },
  { rank: 169, name: "Strasburg" },
  { rank: 170, name: "Floris" },
  { rank: 171, name: "Sandston" },
  { rank: 172, name: "South Run" },
  { rank: 173, name: "Spotsylvania Courthouse" },
  { rank: 174, name: "Aquia Harbour" },
  { rank: 175, name: "North Springfield" },
  { rank: 176, name: "Bridgewater" },
  { rank: 177, name: "Bedford" },
  { rank: 178, name: "Galax" },
  { rank: 179, name: "Potomac Mills" },
  { rank: 180, name: "Pimmit Hills" },
  { rank: 181, name: "Buena Vista" },
  { rank: 182, name: "Massanetta Springs" },
  { rank: 183, name: "Moorefield" },
  { rank: 184, name: "Belle Haven" },
  { rank: 185, name: "Dulles Town Center" },
  { rank: 186, name: "Bensley" },
  { rank: 187, name: "Dumfries" },
  { rank: 188, name: "Woodstock" },
  { rank: 189, name: "Marion" },
  { rank: 190, name: "Quantico Base" },
  { rank: 191, name: "Covington" },
  { rank: 192, name: "Ettrick" },
  { rank: 193, name: "Emporia" },
  { rank: 194, name: "Orange" },
  { rank: 195, name: "Crosspointe" },
  { rank: 196, name: "Stafford Courthouse" },
  { rank: 197, name: "Big Stone Gap" },
  { rank: 198, name: "Richlands" },
  { rank: 199, name: "Union Mill" },
]

interface VirginiaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const VirginiaCitySelector: React.FC<VirginiaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Virginia City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = VIRGINIA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {VIRGINIA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Virginia
      </p>
    </div>
  )
}

export default VirginiaCitySelector
