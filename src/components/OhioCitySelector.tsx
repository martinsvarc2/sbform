"use client"

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const OHIO_CITIES: City[] = [
  { rank: 1, name: "Columbus" },
  { rank: 2, name: "Cleveland" },
  { rank: 3, name: "Cincinnati" },
  { rank: 4, name: "Toledo" },
  { rank: 5, name: "Akron" },
  { rank: 6, name: "Dayton" },
  { rank: 7, name: "Parma" },
  { rank: 8, name: "Canton" },
  { rank: 9, name: "Lorain" },
  { rank: 10, name: "Hamilton" },
  { rank: 11, name: "Youngstown" },
  { rank: 12, name: "Springfield" },
  { rank: 13, name: "Kettering" },
  { rank: 14, name: "Elyria" },
  { rank: 15, name: "Middletown" },
  { rank: 16, name: "Newark" },
  { rank: 17, name: "Cuyahoga Falls" },
  { rank: 18, name: "Lakewood" },
  { rank: 19, name: "Dublin" },
  { rank: 20, name: "Mansfield" },
  { rank: 21, name: "Euclid" },
  { rank: 22, name: "Beavercreek" },
  { rank: 23, name: "Mentor" },
  { rank: 24, name: "Delaware" },
  { rank: 25, name: "Strongsville" },
  { rank: 26, name: "Fairfield" },
  { rank: 27, name: "Cleveland Heights" },
  { rank: 28, name: "Grove City" },
  { rank: 29, name: "Huber Heights" },
  { rank: 30, name: "Lancaster" },
  { rank: 31, name: "Reynoldsburg" },
  { rank: 32, name: "Findlay" },
  { rank: 33, name: "Warren" },
  { rank: 34, name: "North Ridgeville" },
  { rank: 35, name: "Westerville" },
  { rank: 36, name: "Hilliard" },
  { rank: 37, name: "Mason" },
  { rank: 38, name: "Upper Arlington" },
  { rank: 39, name: "Marion" },
  { rank: 40, name: "Gahanna" },
  { rank: 41, name: "Brunswick" },
  { rank: 42, name: "Fairborn" },
  { rank: 43, name: "Lima" },
  { rank: 44, name: "Westlake" },
  { rank: 45, name: "Stow" },
  { rank: 46, name: "Massillon" },
  { rank: 47, name: "North Olmsted" },
  { rank: 48, name: "Austintown" },
  { rank: 49, name: "North Royalton" },
  { rank: 50, name: "Bowling Green" },
  { rank: 51, name: "Marysville" },
  { rank: 52, name: "Garfield Heights" },
  { rank: 53, name: "Shaker Heights" },
  { rank: 54, name: "Kent" },
  { rank: 55, name: "Green" },
  { rank: 56, name: "Troy" },
  { rank: 57, name: "Wooster" },
  { rank: 58, name: "Centerville" },
  { rank: 59, name: "Avon Lake" },
  { rank: 60, name: "Pickerington" },
  { rank: 61, name: "Medina" },
  { rank: 62, name: "Xenia" },
  { rank: 63, name: "Avon" },
  { rank: 64, name: "Perrysburg" },
  { rank: 65, name: "Athens" },
  { rank: 66, name: "Wadsworth" },
  { rank: 67, name: "Zanesville" },
  { rank: 68, name: "Barberton" },
  { rank: 69, name: "Riverside" },
  { rank: 70, name: "Willoughby" },
  { rank: 71, name: "Sandusky" },
  { rank: 72, name: "Solon" },
  { rank: 73, name: "Hudson" },
  { rank: 74, name: "Trotwood" },
  { rank: 75, name: "Maple Heights" },
  { rank: 76, name: "Oxford" },
  { rank: 77, name: "Lebanon" },
  { rank: 78, name: "Chillicothe" },
  { rank: 79, name: "Alliance" },
  { rank: 80, name: "Rocky River" },
  { rank: 81, name: "South Euclid" },
  { rank: 82, name: "Piqua" },
  { rank: 83, name: "Painesville" },
  { rank: 84, name: "Parma Heights" },
  { rank: 85, name: "Sidney" },
  { rank: 86, name: "Miamisburg" },
  { rank: 87, name: "Forest Park" },
  { rank: 88, name: "Oregon" },
  { rank: 89, name: "Mayfield Heights" },
  { rank: 90, name: "Whitehall" },
  { rank: 91, name: "Springboro" },
  { rank: 92, name: "Broadview Heights" },
  { rank: 93, name: "Twinsburg" },
  { rank: 94, name: "White Oak" },
  { rank: 95, name: "Norwood" },
  { rank: 96, name: "Sylvania" },
  { rank: 97, name: "Ashland" },
  { rank: 98, name: "Pataskala" },
  { rank: 99, name: "Tallmadge" },
  { rank: 100, name: "Niles" },
  { rank: 101, name: "Steubenville" },
  { rank: 102, name: "Streetsboro" },
  { rank: 103, name: "Brook Park" },
  { rank: 104, name: "Aurora" },
  { rank: 105, name: "Berea" },
  { rank: 106, name: "Ashtabula" },
  { rank: 107, name: "North Canton" },
  { rank: 108, name: "Tiffin" },
  { rank: 109, name: "New Philadelphia" },
  { rank: 110, name: "Portsmouth" },
  { rank: 111, name: "Eastlake" },
  { rank: 112, name: "Norwalk" },
  { rank: 113, name: "Defiance" },
  { rank: 114, name: "Fairview Park" },
  { rank: 115, name: "Mount Vernon" },
  { rank: 116, name: "Fremont" },
  { rank: 117, name: "Bay Village" },
  { rank: 118, name: "Monroe" },
  { rank: 119, name: "Middleburg Heights" },
  { rank: 120, name: "Vandalia" },
  { rank: 121, name: "Circleville" },
  { rank: 122, name: "Powell" },
  { rank: 123, name: "Amelia" },
  { rank: 124, name: "Washington Court House" },
  { rank: 125, name: "Worthington" },
  { rank: 126, name: "Willowick" },
  { rank: 127, name: "Bellefontaine" },
  { rank: 128, name: "Trenton" },
  { rank: 129, name: "Brecksville" },
  { rank: 130, name: "Sharonville" },
  { rank: 131, name: "New Franklin" },
  { rank: 132, name: "Beachwood" },
  { rank: 133, name: "Maumee" },
  { rank: 134, name: "Harrison" },
  { rank: 135, name: "Lyndhurst" },
  { rank: 136, name: "Blue Ash" },
  { rank: 137, name: "Bridgetown" },
  { rank: 138, name: "Warrensville Heights" },
  { rank: 139, name: "East Cleveland" },
  { rank: 140, name: "Clayton" },
  { rank: 141, name: "Englewood" },
  { rank: 142, name: "Loveland" },
  { rank: 143, name: "Fostoria" },
  { rank: 144, name: "Marietta" },
  { rank: 145, name: "Amherst" },
  { rank: 146, name: "University Heights" },
  { rank: 147, name: "Dover" },
  { rank: 148, name: "Finneytown" },
  { rank: 149, name: "West Carrollton" },
  { rank: 150, name: "Greenville" },
  { rank: 151, name: "Bedford" },
  { rank: 152, name: "Wickliffe" },
  { rank: 153, name: "Wilmington" },
  { rank: 154, name: "Bexley" },
  { rank: 155, name: "Conneaut" },
  { rank: 156, name: "Shiloh" },
  { rank: 157, name: "Monfort Heights" },
  { rank: 158, name: "Macedonia" },
  { rank: 159, name: "Dent" },
  { rank: 160, name: "Mack" },
  { rank: 161, name: "Salem" },
  { rank: 162, name: "Franklin" },
  { rank: 163, name: "Bucyrus" },
  { rank: 164, name: "Seven Hills" },
  { rank: 165, name: "New Albany" },
  { rank: 166, name: "Norton" },
  { rank: 167, name: "Northbrook" },
  { rank: 168, name: "Ravenna" },
  { rank: 169, name: "Urbana" },
  { rank: 170, name: "Coshocton" },
  { rank: 171, name: "Springdale" },
  { rank: 172, name: "Van Wert" },
  { rank: 173, name: "Brooklyn" },
  { rank: 174, name: "Celina" },
  { rank: 175, name: "Montgomery" },
  { rank: 176, name: "Heath" },
  { rank: 177, name: "Forestville" },
  { rank: 178, name: "Vermilion" },
  { rank: 179, name: "Bedford Heights" },
  { rank: 180, name: "London" },
  { rank: 181, name: "Tipp City" },
  { rank: 182, name: "Richmond Heights" },
  { rank: 183, name: "Reading" },
  { rank: 184, name: "Galion" },
  { rank: 185, name: "Ironton" },
  { rank: 186, name: "Beckett Ridge" },
  { rank: 187, name: "Canal Winchester" },
  { rank: 188, name: "Willoughby Hills" },
  { rank: 189, name: "Cambridge" },
  { rank: 190, name: "Struthers" },
  { rank: 191, name: "Louisville" },
  { rank: 192, name: "Bainbridge" },
  { rank: 193, name: "Wapakoneta" },
  { rank: 194, name: "Lincoln Village" },
  { rank: 195, name: "East Liverpool" },
  { rank: 196, name: "Girard" },
  { rank: 197, name: "North College Hill" },
  { rank: 198, name: "Madeira" },
  { rank: 199, name: "Oakwood" },
  { rank: 200, name: "Shelby" },
  { rank: 201, name: "Blacklick Estates" },
  { rank: 202, name: "Grandview Heights" },
  { rank: 203, name: "Sheffield Lake" },
  { rank: 204, name: "Sunbury" },
  { rank: 205, name: "Perry Heights" },
  { rank: 206, name: "Napoleon" },
  { rank: 207, name: "Groesbeck" },
  { rank: 208, name: "Wyoming" },
  { rank: 209, name: "Bryan" },
  { rank: 210, name: "Olmsted Falls" },
  { rank: 211, name: "Kenwood" },
  { rank: 212, name: "Cheviot" },
  { rank: 213, name: "Highland Heights" },
  { rank: 214, name: "Orrville" },
  { rank: 215, name: "Landen" },
  { rank: 216, name: "St. Marys" },
  { rank: 217, name: "North Madison" },
  { rank: 218, name: "Eaton" },
  { rank: 219, name: "Bellevue" },
  { rank: 220, name: "Chesterland" },
  { rank: 221, name: "Withamsville" },
  { rank: 222, name: "Kenton" },
  { rank: 223, name: "Campbell" },
  { rank: 224, name: "Northridge" },
  { rank: 225, name: "Fairlawn" },
  { rank: 226, name: "Canfield" },
  { rank: 227, name: "Uniontown" },
  { rank: 228, name: "Hubbard" },
  { rank: 229, name: "Obetz" },
  { rank: 230, name: "Independence" },
  { rank: 231, name: "Fort Shawnee" },
  { rank: 232, name: "Dry Run" },
  { rank: 233, name: "Bellbrook" },
  { rank: 234, name: "Oberlin" },
  { rank: 235, name: "Wauseon" },
  { rank: 236, name: "Logan" },
  { rank: 237, name: "Mentor-on-the-Lake" },
  { rank: 238, name: "Cortland" },
  { rank: 239, name: "Delphos" },
  { rank: 240, name: "Union" },
  { rank: 241, name: "South Lebanon" },
  { rank: 242, name: "Kirtland" },
  { rank: 243, name: "Pepper Pike" },
  { rank: 244, name: "Columbiana" },
  { rank: 245, name: "Mount Healthy" },
  { rank: 246, name: "Hillsboro" },
  { rank: 247, name: "Ontario" },
  { rank: 248, name: "Moraine" },
  { rank: 249, name: "Upper Sandusky" },
  { rank: 250, name: "Huron" },
  { rank: 251, name: "Belpre" },
  { rank: 252, name: "Covedale" },
  { rank: 253, name: "Milford" },
  { rank: 254, name: "Granville" },
  { rank: 255, name: "Clyde" },
  { rank: 256, name: "Rossford" },
  { rank: 257, name: "Portage Lakes" },
  { rank: 258, name: "Champion Heights" },
  { rank: 259, name: "Howland Center" },
  { rank: 260, name: "Jackson" },
  { rank: 261, name: "Wheelersburg" },
  { rank: 262, name: "Northgate" },
  { rank: 263, name: "Willard" },
  { rank: 264, name: "Rittman" },
  { rank: 265, name: "Martins Ferry" },
  { rank: 266, name: "Waterville" },
  { rank: 267, name: "The Village Indian Hill" },
  { rank: 268, name: "Montrose-Ghent" },
  { rank: 269, name: "Turpin Hills" },
  { rank: 270, name: "Port Clinton" },
  { rank: 271, name: "Brookville" },
  { rank: 272, name: "Geneva" },
  { rank: 273, name: "Carlisle" },
  { rank: 274, name: "Germantown" },
  { rank: 275, name: "Reedurban" },
  { rank: 276, name: "Groveport" },
  { rank: 277, name: "Grafton" },
  { rank: 278, name: "New Carlisle" },
  { rank: 279, name: "Wellston" },
  { rank: 280, name: "New Burlington" },
  { rank: 281, name: "Johnstown" },
  { rank: 282, name: "Canal Fulton" },
  { rank: 283, name: "Deer Park" },
  { rank: 284, name: "Pleasant Run" },
  { rank: 285, name: "Reminderville" },
  { rank: 286, name: "Ada" },
  { rank: 287, name: "Apple Valley" },
  { rank: 288, name: "Chardon" },
  { rank: 289, name: "Northwood" },
  { rank: 290, name: "Toronto" },
  { rank: 291, name: "Uhrichsville" },
  { rank: 292, name: "Whitehouse" },
  { rank: 293, name: "Delhi Hills" }
]

interface OhioCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const OhioCitySelector: React.FC<OhioCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Ohio City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = OHIO_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {OHIO_CITIES.map((city) => (
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
        * You can select up to 10 cities from Ohio
      </p>
    </div>
  )
}

export default OhioCitySelector
