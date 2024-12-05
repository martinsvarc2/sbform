import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const GEORGIA_CITIES: City[] = [
  { rank: 1, name: "Atlanta" },
  { rank: 2, name: "Augusta" },
  { rank: 3, name: "Columbus" },
  { rank: 4, name: "Macon-Bibb County" },
  { rank: 5, name: "Savannah" },
  { rank: 6, name: "Athens" },
  { rank: 7, name: "South Fulton" },
  { rank: 8, name: "Sandy Springs" },
  { rank: 9, name: "Roswell" },
  { rank: 10, name: "Warner Robins" },
  { rank: 11, name: "Johns Creek" },
  { rank: 12, name: "Alpharetta" },
  { rank: 13, name: "Albany" },
  { rank: 14, name: "Marietta" },
  { rank: 15, name: "Stonecrest" },
  { rank: 16, name: "Brookhaven" },
  { rank: 17, name: "Smyrna" },
  { rank: 18, name: "Valdosta" },
  { rank: 19, name: "Dunwoody" },
  { rank: 20, name: "Gainesville" },
  { rank: 21, name: "Newnan" },
  { rank: 22, name: "Mableton" },
  { rank: 23, name: "Peachtree Corners" },
  { rank: 24, name: "Milton" },
  { rank: 25, name: "Peachtree City" },
  { rank: 26, name: "Douglasville" },
  { rank: 27, name: "Woodstock" },
  { rank: 28, name: "Evans" },
  { rank: 29, name: "Rome" },
  { rank: 30, name: "East Point" },
  { rank: 31, name: "Canton" },
  { rank: 32, name: "Tucker" },
  { rank: 33, name: "Hinesville" },
  { rank: 34, name: "Stockbridge" },
  { rank: 35, name: "Kennesaw" },
  { rank: 36, name: "Statesboro" },
  { rank: 37, name: "Dalton" },
  { rank: 38, name: "Martinez" },
  { rank: 39, name: "McDonough" },
  { rank: 40, name: "LaGrange" },
  { rank: 41, name: "Duluth" },
  { rank: 42, name: "Chamblee" },
  { rank: 43, name: "Lawrenceville" },
  { rank: 44, name: "Redan" },
  { rank: 45, name: "Pooler" },
  { rank: 46, name: "Carrollton" },
  { rank: 47, name: "Union City" },
  { rank: 48, name: "Sugar Hill" },
  { rank: 49, name: "Cartersville" },
  { rank: 50, name: "Perry" },
  { rank: 51, name: "Griffin" },
  { rank: 52, name: "Decatur" },
  { rank: 53, name: "Suwanee" },
  { rank: 54, name: "Candler-McAfee" },
  { rank: 55, name: "Snellville" },
  { rank: 56, name: "Acworth" },
  { rank: 57, name: "Kingsland" },
  { rank: 58, name: "Holly Springs" },
  { rank: 59, name: "Fayetteville" },
  { rank: 60, name: "Conyers" },
  { rank: 61, name: "Winder" },
  { rank: 62, name: "St. Marys" },
  { rank: 63, name: "Powder Springs" },
  { rank: 64, name: "Calhoun" },
  { rank: 65, name: "Forest Park" },
  { rank: 66, name: "Villa Rica" },
  { rank: 67, name: "Richmond Hill" },
  { rank: 68, name: "Buford" },
  { rank: 69, name: "Thomasville" },
  { rank: 70, name: "Norcross" },
  { rank: 71, name: "Grovetown" },
  { rank: 72, name: "Tifton" },
  { rank: 73, name: "Loganville" },
  { rank: 74, name: "North Decatur" },
  { rank: 75, name: "North Druid Hills" },
  { rank: 76, name: "Fairburn" },
  { rank: 77, name: "Jefferson" },
  { rank: 78, name: "St. Simons" },
  { rank: 79, name: "Lilburn" },
  { rank: 80, name: "Milledgeville" },
  { rank: 81, name: "Monroe" },
  { rank: 82, name: "Braselton" },
  { rank: 83, name: "Lithia Springs" },
  { rank: 84, name: "Dublin" },
  { rank: 85, name: "Port Wentworth" },
  { rank: 86, name: "Americus" },
  { rank: 87, name: "Brunswick" },
  { rank: 88, name: "Dallas" },
  { rank: 89, name: "Wilmington Island" },
  { rank: 90, name: "Covington" },
  { rank: 91, name: "Riverdale" },
  { rank: 92, name: "Moultrie" },
  { rank: 93, name: "Belvedere Park" },
  { rank: 94, name: "Bainbridge" },
  { rank: 95, name: "Clarkston" },
  { rank: 96, name: "College Park" },
  { rank: 97, name: "Waycross" },
  { rank: 98, name: "Mountain Park" },
  { rank: 99, name: "Vinings" },
  { rank: 100, name: "Lovejoy" },
  { rank: 101, name: "Georgetown" },
  { rank: 102, name: "Flowery Branch" },
  { rank: 103, name: "Locust Grove" },
  { rank: 104, name: "Rincon" },
  { rank: 105, name: "Douglas" },
  { rank: 106, name: "Doraville" },
  { rank: 107, name: "Vidalia" },
  { rank: 108, name: "Fort Oglethorpe" },
  { rank: 109, name: "Bemiss" },
  { rank: 110, name: "Scottdale" },
  { rank: 111, name: "Auburn" },
  { rank: 112, name: "Garden City" },
  { rank: 113, name: "Cedartown" },
  { rank: 114, name: "Cumming" },
  { rank: 115, name: "Jesup" },
  { rank: 116, name: "Fort Stewart" },
  { rank: 117, name: "Cairo" },
  { rank: 118, name: "Thomaston" },
  { rank: 119, name: "Fair Oaks" },
  { rank: 120, name: "Cordele" },
  { rank: 121, name: "Skidaway Island" },
  { rank: 122, name: "Hampton" },
  { rank: 123, name: "Toccoa" },
  { rank: 124, name: "Country Club Estates" },
  { rank: 125, name: "Panthersville" },
  { rank: 126, name: "Fitzgerald" },
  { rank: 127, name: "Fort Valley" },
  { rank: 128, name: "Commerce" },
  { rank: 129, name: "Centerville" },
  { rank: 130, name: "Irondale" },
  { rank: 131, name: "Cusseta-Chattahoochee County" },
  { rank: 132, name: "Dock Junction" },
  { rank: 133, name: "Austell" },
  { rank: 134, name: "Tyrone" },
  { rank: 135, name: "Dacula" },
  { rank: 136, name: "Gresham Park" },
  { rank: 137, name: "Bremen" },
  { rank: 138, name: "Swainsboro" },
  { rank: 139, name: "Dahlonega" },
  { rank: 140, name: "Fairfield Plantation" },
  { rank: 141, name: "Druid Hills" },
  { rank: 142, name: "LaFayette" },
  { rank: 143, name: "Oakwood" },
  { rank: 144, name: "Thomson" },
  { rank: 145, name: "Whitemarsh Island" },
  { rank: 146, name: "Temple" },
  { rank: 147, name: "Hapeville" },
  { rank: 148, name: "Eatonton" },
  { rank: 149, name: "Stone Mountain" },
  { rank: 150, name: "Barnesville" },
  { rank: 151, name: "Morrow" },
  { rank: 152, name: "Byron" },
  { rank: 153, name: "Hoschton" },
  { rank: 154, name: "Senoia" },
  { rank: 155, name: "Jonesboro" },
  { rank: 156, name: "Jackson" },
  { rank: 157, name: "Conley" },
  { rank: 158, name: "Adel" },
  { rank: 159, name: "Buckhead" },
  { rank: 160, name: "Cornelia" },
  { rank: 161, name: "Fairview" },
  { rank: 162, name: "Waynesboro" },
  { rank: 163, name: "Eastman" },
  { rank: 164, name: "Hiram" },
  { rank: 165, name: "Sandersville" },
  { rank: 166, name: "Social Circle" },
  { rank: 167, name: "Sylvester" },
  { rank: 168, name: "Rockmart" },
  { rank: 169, name: "Jasper" },
  { rank: 170, name: "Glennville" },
  { rank: 171, name: "Blakely" },
  { rank: 172, name: "Madison" },
  { rank: 173, name: "Adairsville" },
  { rank: 174, name: "Grayson" },
  { rank: 175, name: "Camilla" },
  { rank: 176, name: "Forsyth" }
];

interface GeorgiaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const GeorgiaCitySelector: React.FC<GeorgiaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="georgia-city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Georgia City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = GEORGIA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="georgia-city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {GEORGIA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Georgia
      </p>
    </div>
  )
}

export default GeorgiaCitySelector

