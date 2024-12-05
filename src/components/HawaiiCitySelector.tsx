import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const HAWAII_CITIES: City[] = [
  { rank: 1, name: "Honolulu" },
  { rank: 2, name: "East Honolulu" },
  { rank: 3, name: "Hilo" },
  { rank: 4, name: "Pearl City" },
  { rank: 5, name: "Kailua" },
  { rank: 6, name: "Waipahu" },
  { rank: 7, name: "Kaneohe" },
  { rank: 8, name: "Ewa Gentry" },
  { rank: 9, name: "Mililani Town" },
  { rank: 10, name: "Kahului" },
  { rank: 11, name: "Kapolei" },
  { rank: 12, name: "Kailua" },
  { rank: 13, name: "Kihei" },
  { rank: 14, name: "Mililani Mauka" },
  { rank: 15, name: "Makakilo" },
  { rank: 16, name: "Schofield Barracks" },
  { rank: 17, name: "Ocean Pointe" },
  { rank: 18, name: "Wahiawa" },
  { rank: 19, name: "Wailuku" },
  { rank: 20, name: "Ewa Beach" },
  { rank: 21, name: "Halawa" },
  { rank: 22, name: "Waimalu" },
  { rank: 23, name: "Waianae" },
  { rank: 24, name: "Royal Kunia" },
  { rank: 25, name: "Kaiminani" },
  { rank: 26, name: "Kaneohe Base" },
  { rank: 27, name: "Hawaiian Paradise Park" },
  { rank: 28, name: "Lahaina" },
  { rank: 29, name: "Maili" },
  { rank: 30, name: "Nanakuli" },
  { rank: 31, name: "Waihee-Waiehu" },
  { rank: 32, name: "Waipio" },
  { rank: 33, name: "Kapaa" },
  { rank: 34, name: "Waimea" },
  { rank: 35, name: "Makaha" },
  { rank: 36, name: "Hickam Housing" },
  { rank: 37, name: "Aiea" },
  { rank: 38, name: "Haiku-Pauwela" },
  { rank: 39, name: "Ahuimanu" },
  { rank: 40, name: "Lihue" },
  { rank: 41, name: "Pukalani" },
  { rank: 42, name: "Makawao" },
  { rank: 43, name: "Waikoloa Village" },
  { rank: 44, name: "Kahaluu-Keauhou" },
  { rank: 45, name: "Waikele" },
  { rank: 46, name: "Wailua Homesteads" },
  { rank: 47, name: "Napili-Honokowai" },
  { rank: 48, name: "West Loch Estate" },
  { rank: 49, name: "Ewa Villages" },
  { rank: 50, name: "Wailea" },
  { rank: 51, name: "Kula" },
  { rank: 52, name: "Iroquois Point" },
  { rank: 53, name: "East Kapolei" },
  { rank: 54, name: "Waimanalo" },
  { rank: 55, name: "Waipio Acres" },
  { rank: 56, name: "Laie" },
  { rank: 57, name: "Pupukea" },
  { rank: 58, name: "Kahaluu" }
]

interface HawaiiCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const HawaiiCitySelector: React.FC<HawaiiCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="hawaii-city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Hawaii City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = HAWAII_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="hawaii-city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {HAWAII_CITIES.map((city) => (
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
        * You can select up to 10 cities from Hawaii
      </p>
    </div>
  )
}

export default HawaiiCitySelector

