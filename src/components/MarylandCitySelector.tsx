import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const MARYLAND_CITIES: City[] = [
  { rank: 1, name: "Baltimore" },
  { rank: 2, name: "Columbia" },
  { rank: 3, name: "Germantown" },
  { rank: 4, name: "Frederick" },
  { rank: 5, name: "Silver Spring" },
  { rank: 6, name: "Waldorf" },
  { rank: 7, name: "Ellicott City" },
  { rank: 8, name: "Glen Burnie" },
  { rank: 9, name: "Gaithersburg" },
  { rank: 10, name: "Rockville" },
  { rank: 11, name: "Bethesda" },
  { rank: 12, name: "Dundalk" },
  { rank: 13, name: "Bel Air South" },
  { rank: 14, name: "Severn" },
  { rank: 15, name: "Towson" },
  { rank: 16, name: "Bowie" },
  { rank: 17, name: "Aspen Hill" },
  { rank: 18, name: "Wheaton" },
  { rank: 19, name: "North Bethesda" },
  { rank: 20, name: "Potomac" },
  { rank: 21, name: "Odenton" },
  { rank: 22, name: "Hagerstown" },
  { rank: 23, name: "Catonsville" },
  { rank: 24, name: "Woodlawn" },
  { rank: 25, name: "Essex" },
  { rank: 26, name: "Clinton" },
  { rank: 27, name: "Severna Park" },
  { rank: 28, name: "Annapolis" },
  { rank: 29, name: "Randallstown" },
  { rank: 30, name: "Chillum" },
  { rank: 31, name: "Olney" },
  { rank: 32, name: "Owings Mills" },
  { rank: 33, name: "Montgomery Village" },
  { rank: 34, name: "Pikesville" },
  { rank: 35, name: "College Park" },
  { rank: 36, name: "Pasadena" },
  { rank: 37, name: "Salisbury" },
  { rank: 38, name: "Middle River" },
  { rank: 39, name: "Milford Mill" },
  { rank: 40, name: "Bel Air North" },
  { rank: 41, name: "Clarksburg" },
  { rank: 42, name: "Parkville" },
  { rank: 43, name: "Eldersburg" },
  { rank: 44, name: "Crofton" },
  { rank: 45, name: "Perry Hall" },
  { rank: 46, name: "Carney" },
  { rank: 47, name: "Laurel" },
  { rank: 48, name: "South Laurel" },
  { rank: 49, name: "Ilchester" },
  { rank: 50, name: "Reisterstown" },
  { rank: 51, name: "North Laurel" },
  { rank: 52, name: "Lochearn" },
  { rank: 53, name: "Elkridge" },
  { rank: 54, name: "Fairland" },
  { rank: 55, name: "Fort Washington" },
  { rank: 56, name: "Suitland" },
  { rank: 57, name: "Ballenger Creek" },
  { rank: 58, name: "Arnold" },
  { rank: 59, name: "Edgewood" },
  { rank: 60, name: "North Potomac" },
  { rank: 61, name: "Landover" },
  { rank: 62, name: "Greenbelt" },
  { rank: 63, name: "Camp Springs" },
  { rank: 64, name: "Cockeysville" },
  { rank: 65, name: "Langley Park" },
  { rank: 66, name: "Westminster" },
  { rank: 67, name: "Hyattsville" },
  { rank: 68, name: "Beltsville" },
  { rank: 69, name: "Rosedale" },
  { rank: 70, name: "Arbutus" },
  { rank: 71, name: "Seabrook" },
  { rank: 72, name: "Parole" },
  { rank: 73, name: "Lake Shore" },
  { rank: 74, name: "Maryland City" },
  { rank: 75, name: "Cumberland" },
  { rank: 76, name: "Oxon Hill" },
  { rank: 77, name: "Aberdeen" },
  { rank: 78, name: "Redland" },
  { rank: 79, name: "East Riverdale" },
  { rank: 80, name: "Calverton" },
  { rank: 81, name: "Takoma Park" },
  { rank: 82, name: "Glassmanor" },
  { rank: 83, name: "Easton" },
  { rank: 84, name: "Adelphi" },
  { rank: 85, name: "Glenmont" },
  { rank: 86, name: "Damascus" },
  { rank: 87, name: "Flower Hill" },
  { rank: 88, name: "Summerfield" },
  { rank: 89, name: "Ferndale" },
  { rank: 90, name: "Cloverly" },
  { rank: 91, name: "Bensville" },
  { rank: 92, name: "Hillcrest Heights" },
  { rank: 93, name: "Brooklyn Park" },
  { rank: 94, name: "Elkton" },
  { rank: 95, name: "Lake Arbor" },
  { rank: 96, name: "Rossville" },
  { rank: 97, name: "Glenn Dale" },
  { rank: 98, name: "White Oak" },
  { rank: 99, name: "Green Valley" },
  { rank: 100, name: "Havre Grace" },
  { rank: 101, name: "Kemp Mill" },
  { rank: 102, name: "Urbana" },
  { rank: 103, name: "Kettering" },
  { rank: 104, name: "Honeygo" },
  { rank: 105, name: "California" },
  { rank: 106, name: "Lexington Park" },
  { rank: 107, name: "Colesville" },
  { rank: 108, name: "Joppatowne" },
  { rank: 109, name: "New Carrollton" },
  { rank: 110, name: "Cambridge" },
  { rank: 111, name: "Accokeek" },
  { rank: 112, name: "Brock Hall" },
  { rank: 113, name: "Annapolis Neck" },
  { rank: 114, name: "Overlea" },
  { rank: 115, name: "Scaggsville" },
  { rank: 116, name: "Linganore" },
  { rank: 117, name: "Ocean Pines" },
  { rank: 118, name: "Mitchellville" },
  { rank: 119, name: "Rosaryville" },
  { rank: 120, name: "Mays Chapel" },
  { rank: 121, name: "Riviera Beach" },
  { rank: 122, name: "Largo" },
  { rank: 123, name: "Westphalia" },
  { rank: 124, name: "Lanham" },
  { rank: 125, name: "La Plata" },
  { rank: 126, name: "Timonium" },
  { rank: 127, name: "Friendly" },
  { rank: 128, name: "Linthicum" },
  { rank: 129, name: "Brandywine" },
  { rank: 130, name: "Burtonsville" },
  { rank: 131, name: "Travilah" },
  { rank: 132, name: "White Marsh" },
  { rank: 133, name: "Bel Air" },
  { rank: 134, name: "Marlton" },
  { rank: 135, name: "Halfway" },
  { rank: 136, name: "Fort Meade" },
  { rank: 137, name: "Fallston" },
  { rank: 138, name: "Jessup" },
  { rank: 139, name: "Mount Airy" },
  { rank: 140, name: "Forestville" },
  { rank: 141, name: "Chesapeake Ranch Estates" },
  { rank: 142, name: "Garrison" },
  { rank: 143, name: "Chevy Chase" },
  { rank: 144, name: "Walker Mill" },
  { rank: 145, name: "Lansdowne" },
  { rank: 146, name: "Bladensburg" },
  { rank: 147, name: "Coral Hills" },
  { rank: 148, name: "Cape St. Claire" },
  { rank: 149, name: "Marlboro Village" },
  { rank: 150, name: "Leisure World" },
  { rank: 151, name: "Edgemere" },
  { rank: 152, name: "Edgewater" },
  { rank: 153, name: "Bryans Road" },
  { rank: 154, name: "Stevensville" },
  { rank: 155, name: "Wildewood" },
  { rank: 156, name: "Brunswick" },
  { rank: 157, name: "Temple Hills" },
  { rank: 158, name: "South Kensington" },
  { rank: 159, name: "North Kensington" },
  { rank: 160, name: "Baltimore Highlands" },
  { rank: 161, name: "Mayo" },
  { rank: 162, name: "Robinwood" },
  { rank: 163, name: "Fairwood" },
  { rank: 164, name: "Mount Rainier" },
  { rank: 165, name: "Four Corners" },
  { rank: 166, name: "Woodlawn" },
  { rank: 167, name: "Savage" },
  { rank: 168, name: "Taneytown" },
  { rank: 169, name: "Riverdale Park" },
  { rank: 170, name: "Frostburg" },
  { rank: 171, name: "Ocean City" },
  { rank: 172, name: "Forest Glen" },
  { rank: 173, name: "Thurmont" },
  { rank: 174, name: "Walkersville" },
  { rank: 175, name: "Bowleys Quarters" },
  { rank: 176, name: "Darnestown" },
  { rank: 177, name: "Lutherville" },
  { rank: 178, name: "Chesapeake Beach" },
  { rank: 179, name: "Hampstead" },
  { rank: 180, name: "Marlow Heights" },
  { rank: 181, name: "Fountainhead-Orchard Hills" },
  { rank: 182, name: "Glenarden" },
  { rank: 183, name: "Fulton" },
  { rank: 184, name: "Fruitland" },
  { rank: 185, name: "Cheverly" },
  { rank: 186, name: "Abingdon" },
  { rank: 187, name: "Riverside" },
  { rank: 188, name: "District Heights" },
  { rank: 189, name: "Peppermill Village" },
  { rank: 190, name: "Poolesville" },
  { rank: 191, name: "Spring Ridge" },
  { rank: 192, name: "Chestertown" },
  { rank: 193, name: "Ashton-Sandy Spring" },
  { rank: 194, name: "Manchester" },
  { rank: 195, name: "Berlin" },
  { rank: 196, name: "Middletown" },
  { rank: 197, name: "West Ocean City" },
  { rank: 198, name: "Silver Hill" },
  { rank: 199, name: "Springdale" },
  { rank: 200, name: "Burnt Mills" },
  { rank: 201, name: "Layhill" },
  { rank: 202, name: "Leonardtown" },
  { rank: 203, name: "Hampton" },
  { rank: 204, name: "Denton" }
]

interface MarylandCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const MarylandCitySelector: React.FC<MarylandCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Maryland City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = MARYLAND_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {MARYLAND_CITIES.map((city) => (
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
        * You can select up to 10 cities from Maryland
      </p>
    </div>
  )
}

export default MarylandCitySelector
