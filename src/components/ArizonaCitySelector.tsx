import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const ARIZONA_CITIES: City[] = [
  { rank: 1, name: "Phoenix" },
  { rank: 2, name: "Tucson" },
  { rank: 3, name: "Mesa" },
  { rank: 4, name: "Chandler" },
  { rank: 5, name: "Gilbert" },
  { rank: 6, name: "Glendale" },
  { rank: 7, name: "Scottsdale" },
  { rank: 8, name: "Peoria" },
  { rank: 9, name: "Tempe" },
  { rank: 10, name: "Surprise" },
  { rank: 11, name: "Goodyear" },
  { rank: 12, name: "Buckeye" },
  { rank: 13, name: "San Tan Valley" },
  { rank: 14, name: "Yuma" },
  { rank: 15, name: "Avondale" },
  { rank: 16, name: "Queen Creek" },
  { rank: 17, name: "Flagstaff" },
  { rank: 18, name: "Maricopa" },
  { rank: 19, name: "Casas Adobes" },
  { rank: 20, name: "Casa Grande" },
  { rank: 21, name: "Marana" },
  { rank: 22, name: "Lake Havasu City" },
  { rank: 23, name: "Prescott Valley" },
  { rank: 24, name: "Catalina Foothills" },
  { rank: 25, name: "Oro Valley" },
  { rank: 26, name: "Prescott" },
  { rank: 27, name: "Sierra Vista" },
  { rank: 28, name: "Bullhead City" },
  { rank: 29, name: "Apache Junction" },
  { rank: 30, name: "San Luis" },
  { rank: 31, name: "Sun City" },
  { rank: 32, name: "Sahuarita" },
  { rank: 33, name: "Kingman" },
  { rank: 34, name: "El Mirage" },
  { rank: 35, name: "Drexel Heights" },
  { rank: 36, name: "Fortuna Foothills" },
  { rank: 37, name: "Sun City West" },
  { rank: 38, name: "Fountain Hills" },
  { rank: 39, name: "Florence" },
  { rank: 40, name: "Anthem" },
  { rank: 41, name: "Rio Rico" },
  { rank: 42, name: "Green Valley" },
  { rank: 43, name: "Coolidge" },
  { rank: 44, name: "Nogales" },
  { rank: 45, name: "Eloy" },
  { rank: 46, name: "New River" },
  { rank: 47, name: "Flowing Wells" },
  { rank: 48, name: "Payson" },
  { rank: 49, name: "Fort Mohave" },
  { rank: 50, name: "Vail" },
  { rank: 51, name: "Douglas" },
  { rank: 52, name: "Somerton" },
  { rank: 53, name: "Tanque Verde" },
  { rank: 54, name: "Valencia West" },
  { rank: 55, name: "Sierra Vista Southeast" },
  { rank: 56, name: "Sun Lakes" },
  { rank: 57, name: "Chino Valley" },
  { rank: 58, name: "Gold Canyon" },
  { rank: 59, name: "New Kingman-Butler" },
  { rank: 60, name: "Cottonwood" },
  { rank: 61, name: "Tucson Mountains" },
  { rank: 62, name: "Tucson Estates" },
  { rank: 63, name: "Camp Verde" },
  { rank: 64, name: "Paradise Valley" },
  { rank: 65, name: "Saddlebrooke" },
  { rank: 66, name: "Show Low" },
  { rank: 67, name: "Verde Village" },
  { rank: 68, name: "Safford" },
  { rank: 69, name: "Sedona" },
  { rank: 70, name: "Corona Tucson" },
  { rank: 71, name: "Picture Rocks" },
  { rank: 72, name: "Winslow" },
  { rank: 73, name: "Tuba City" },
  { rank: 74, name: "Wickenburg" },
  { rank: 75, name: "Arizona City" },
  { rank: 76, name: "Golden Valley" },
  { rank: 77, name: "Page" },
  { rank: 78, name: "Globe" },
  { rank: 79, name: "Tolleson" },
  { rank: 80, name: "Litchfield Park" },
  { rank: 81, name: "Youngtown" },
  { rank: 82, name: "Snowflake" },
  { rank: 83, name: "Avra Valley" },
  { rank: 84, name: "Catalina" },
  { rank: 85, name: "Williamson" },
  { rank: 86, name: "Village Oak Creek (Big Park)" },
  { rank: 87, name: "Citrus Park" },
  { rank: 88, name: "Rincon Valley" },
  { rank: 89, name: "Thatcher" },
  { rank: 90, name: "Kayenta" },
  { rank: 91, name: "Benson" },
  { rank: 92, name: "Cave Creek" },
  { rank: 93, name: "Guadalupe" },
  { rank: 94, name: "Clarkdale" },
  { rank: 95, name: "Three Points" },
  { rank: 96, name: "Bisbee" },
  { rank: 97, name: "Doney Park" },
]

interface ArizonaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const ArizonaCitySelector: React.FC<ArizonaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select an Arizona City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = ARIZONA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {ARIZONA_CITIES.map((city) => (
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
        * You can select up to 10 cities from Arizona
      </p>
    </div>
  )
}

export default ArizonaCitySelector
