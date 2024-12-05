import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const NORTH_CAROLINA_CITIES: City[] = [
  { rank: 1, name: "Charlotte" },
  { rank: 2, name: "Raleigh" },
  { rank: 3, name: "Greensboro" },
  { rank: 4, name: "Durham" },
  { rank: 5, name: "Winston-Salem" },
  { rank: 6, name: "Fayetteville" },
  { rank: 7, name: "Cary" },
  { rank: 8, name: "Wilmington" },
  { rank: 9, name: "High Point" },
  { rank: 10, name: "Concord" },
  { rank: 11, name: "Asheville" },
  { rank: 12, name: "Greenville" },
  { rank: 13, name: "Gastonia" },
  { rank: 14, name: "Apex" },
  { rank: 15, name: "Jacksonville" },
  { rank: 16, name: "Huntersville" },
  { rank: 17, name: "Chapel Hill" },
  { rank: 18, name: "Burlington" },
  { rank: 19, name: "Kannapolis" },
  { rank: 20, name: "Wake Forest" },
  { rank: 21, name: "Mooresville" },
  { rank: 22, name: "Rocky Mount" },
  { rank: 23, name: "Holly Springs" },
  { rank: 24, name: "Wilson" },
  { rank: 25, name: "Fuquay-Varina" },
  { rank: 26, name: "Hickory" },
  { rank: 27, name: "Indian Trail" },
  { rank: 28, name: "Monroe" },
  { rank: 29, name: "Garner" },
  { rank: 30, name: "Salisbury" },
  { rank: 31, name: "Cornelius" },
  { rank: 32, name: "Goldsboro" },
  { rank: 33, name: "Leland" },
  { rank: 34, name: "Sanford" },
  { rank: 35, name: "New Bern" },
  { rank: 36, name: "Morrisville" },
  { rank: 37, name: "Matthews" },
  { rank: 38, name: "Clayton" },
  { rank: 39, name: "Statesville" },
  { rank: 40, name: "Kernersville" },
  { rank: 41, name: "Mint Hill" },
  { rank: 42, name: "Asheboro" },
  { rank: 43, name: "Thomasville" },
  { rank: 44, name: "Waxhaw" },
  { rank: 45, name: "Clemmons" },
  { rank: 46, name: "Shelby" },
  { rank: 47, name: "Carrboro" },
  { rank: 48, name: "Mebane" },
  { rank: 49, name: "Knightdale" },
  { rank: 50, name: "Harrisburg" },
  { rank: 51, name: "Boone" },
  { rank: 52, name: "Lexington" },
  { rank: 53, name: "Kinston" },
  { rank: 54, name: "Lumberton" },
  { rank: 55, name: "Elizabeth City" },
  { rank: 56, name: "Graham" },
  { rank: 57, name: "Pinehurst" },
  { rank: 58, name: "Mount Holly" },
  { rank: 59, name: "Lenoir" },
  { rank: 60, name: "Hope Mills" },
  { rank: 61, name: "Morganton" },
  { rank: 62, name: "Stallings" },
  { rank: 63, name: "Albemarle" },
  { rank: 64, name: "Murraysville" },
  { rank: 65, name: "Southern Pines" },
  { rank: 66, name: "Anderson Creek" },
  { rank: 67, name: "Havelock" },
  { rank: 68, name: "Wendell" },
  { rank: 69, name: "Belmont" },
  { rank: 70, name: "Hendersonville" },
  { rank: 71, name: "Eden" },
  { rank: 72, name: "Piney Green" },
  { rank: 73, name: "Laurinburg" },
  { rank: 74, name: "Henderson" },
  { rank: 75, name: "Reidsville" },
  { rank: 76, name: "Roanoke Rapids" },
  { rank: 77, name: "Weddington" },
  { rank: 78, name: "Davidson" },
  { rank: 79, name: "Lewisville" },
  { rank: 80, name: "Newton" },
  { rank: 81, name: "Lake Norman Iredell" },
  { rank: 82, name: "Smithfield" },
  { rank: 83, name: "Myrtle Grove" },
  { rank: 84, name: "Lincolnton" },
  { rank: 85, name: "Archdale" },
  { rank: 86, name: "Spout Springs" },
  { rank: 87, name: "Kings Mountain" },
  { rank: 88, name: "Rolesville" },
  { rank: 89, name: "Elon" },
  { rank: 90, name: "Spring Lake" },
  { rank: 91, name: "Pineville" },
  { rank: 92, name: "Summerfield" },
  { rank: 93, name: "Winterville" },
  { rank: 94, name: "Tarboro" },
  { rank: 95, name: "Waynesville" },
  { rank: 96, name: "Mount Airy" },
  { rank: 97, name: "Lake Norman Catawba" },
  { rank: 98, name: "Zebulon" },
  { rank: 99, name: "Morehead City" },
  { rank: 100, name: "Oak Island" },
  { rank: 101, name: "Hillsborough" },
  { rank: 102, name: "Aberdeen" },
  { rank: 103, name: "St. Stephens" },
  { rank: 104, name: "Gibsonville" },
  { rank: 105, name: "Washington" },
  { rank: 106, name: "Wesley Chapel" },
  { rank: 107, name: "Hampstead" },
  { rank: 108, name: "Oxford" },
  { rank: 109, name: "Ogden" },
  { rank: 110, name: "Rockingham" },
  { rank: 111, name: "Conover" },
  { rank: 112, name: "Kings Grant" },
  { rank: 113, name: "Dunn" },
  { rank: 114, name: "Black Mountain" },
  { rank: 115, name: "Half Moon" },
  { rank: 116, name: "Clinton" },
  { rank: 117, name: "Roxboro" },
  { rank: 118, name: "Fletcher" },
  { rank: 119, name: "Butner" },
  { rank: 120, name: "Siler City" },
  { rank: 121, name: "Woodfin" },
  { rank: 122, name: "Brevard" },
  { rank: 123, name: "Oak Ridge" },
  { rank: 124, name: "Kill Devil Hills" },
  { rank: 125, name: "Etowah" },
  { rank: 126, name: "Angier" },
  { rank: 127, name: "St. James" },
  { rank: 128, name: "King" },
  { rank: 129, name: "Marion" },
  { rank: 130, name: "Mills River" },
  { rank: 131, name: "Forest City" },
  { rank: 132, name: "Porters Neck" },
  { rank: 133, name: "Selma" },
  { rank: 134, name: "Unionville" },
  { rank: 135, name: "Trinity" },
  { rank: 136, name: "Marvin" },
  { rank: 137, name: "Carolina Beach" },
  { rank: 138, name: "Boiling Spring Lakes" },
  { rank: 139, name: "Cullowhee" },
  { rank: 140, name: "Cherryville" },
  { rank: 141, name: "Dallas" },
  { rank: 142, name: "Briar Chapel" },
  { rank: 143, name: "Mocksville" },
  { rank: 144, name: "Locust" },
  { rank: 145, name: "East Flat Rock" },
  { rank: 146, name: "Stokesdale" },
  { rank: 147, name: "Walkertown" },
  { rank: 148, name: "Silver Lake" },
  { rank: 149, name: "Hamlet" },
  { rank: 150, name: "Northchase" },
  { rank: 151, name: "Nashville" },
  { rank: 152, name: "Bessemer City" },
  { rank: 153, name: "Cramerton" },
  { rank: 154, name: "Archer Lodge" },
  { rank: 155, name: "Carolina Shores" },
  { rank: 156, name: "Moyock" },
  { rank: 157, name: "Shallotte" },
  { rank: 158, name: "Holly Ridge" },
  { rank: 159, name: "Swannanoa" },
  { rank: 160, name: "Whispering Pines" },
  { rank: 161, name: "Long View" },
  { rank: 162, name: "Ayden" },
  { rank: 163, name: "Pleasant Garden" },
]

interface NorthCarolinaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const NorthCarolinaCitySelector: React.FC<NorthCarolinaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a North Carolina City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = NORTH_CAROLINA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {NORTH_CAROLINA_CITIES.map((city) => (
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
        * You can select up to 10 cities from North Carolina
      </p>
    </div>
  )
}

export default NorthCarolinaCitySelector
