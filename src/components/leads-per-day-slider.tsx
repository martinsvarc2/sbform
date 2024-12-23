"use client"
import React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface LeadsPerDaySliderProps {
  value: number
  onChange: (value: number) => void
  onTotalLeadsChange: (value: number) => void
  totalLeads: number
  textSize?: string
}

const LeadsPerDaySlider: React.FC<LeadsPerDaySliderProps> = ({ 
  value, 
  onChange,
  onTotalLeadsChange,
  totalLeads: parentTotalLeads,
  textSize 
}) => {
  const [leadsPerDay, setLeadsPerDay] = React.useState(value)
  const [showMinimumDialog, setShowMinimumDialog] = React.useState(false)
  const [showGift, setShowGift] = React.useState(false)

  React.useEffect(() => {
    setLeadsPerDay(value)
  }, [value])

  // Gift animation cycle - 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowGift(prev => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleTotalLeadsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/^0+/, '')
    
    if (inputValue === '' || inputValue === '0') {
      onTotalLeadsChange(0)
      return
    }
    
    const numValue = parseInt(inputValue)
    if (!isNaN(numValue)) {
      onTotalLeadsChange(numValue)
    }
  }

  const handleBlur = () => {
    if (parentTotalLeads < 100 && parentTotalLeads !== 0) {
      setShowMinimumDialog(true)
    }
  }

  const setToMinimum = () => {
    onTotalLeadsChange(100)
    setShowMinimumDialog(false)
  }

  const handleLeadsPerDayChange = (newValue: number[]) => {
    setLeadsPerDay(newValue[0])
    onChange(newValue[0])
  }

  const calculateDays = (total: number, perDay: number) => {
    return Math.ceil(total / perDay)
  }

  const getPricePerLead = (totalLeads: number) => {
    if (totalLeads >= 4000) return 3.4
    if (totalLeads >= 3000) return 3.9
    if (totalLeads >= 2000) return 4.3
    if (totalLeads >= 1000) return 4.7
    return 5.0
  }

  const calculateEffectiveness = (pricePerLead: number) => {
    const basePrice = 5.0
    const improvement = ((basePrice - pricePerLead) / basePrice) * 100
    const savedPerLead = basePrice - pricePerLead
    const totalSaved = savedPerLead * parentTotalLeads
    return {
      percentage: improvement.toFixed(1),
      savings: totalSaved.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }
  }

  const calculateTotalPrice = (leads: number) => {
    return leads * getPricePerLead(leads)
  }

  return (
    <div className="space-y-12">
      <div className="space-y-8">
        <h3 className="text-lg sm:text-xl font-manrope font-bold text-[#EECC6E] tracking-tight">
          <span className="text-[#EECC6E]">* </span>How many leads do you want to receive?
        </h3>
        <Input
          type="text"
          inputMode="numeric"
          value={parentTotalLeads === 0 ? '' : parentTotalLeads.toString()}
          onChange={handleTotalLeadsChange}
          onBlur={handleBlur}
          className="h-14 bg-black/50 border-[#EECC6E]/20 text-white text-xl font-manrope text-center"
        />
        <div className="text-[#EECC6E] text-lg sm:text-xl font-semibold text-center font-manrope mt-4">
          {parentTotalLeads} {parentTotalLeads === 1 ? 'lead' : 'leads'} = ${calculateTotalPrice(parentTotalLeads).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          {parentTotalLeads >= 1000 && (
            <span className="ml-2 text-green-400 text-sm">
              (Cost-effectiveness improved by {calculateEffectiveness(getPricePerLead(parentTotalLeads)).percentage}% (${calculateEffectiveness(getPricePerLead(parentTotalLeads)).savings})
            </span>
          )}
        </div>

        {/* Volume Pricing Table */}
        <div className="mt-8 p-4 bg-black/30 rounded-xl border border-[#EECC6E]/20 backdrop-blur-sm">
          <h4 className="text-center text-[#EECC6E] font-manrope font-semibold mb-6 text-2xl">
            Volume Pricing
          </h4>
          <div className="grid grid-cols-4 gap-px bg-[#EECC6E]/20 rounded-lg overflow-hidden">
            {[
              { tier: "Tier 1", leads: 1000, price: "$4.7" },
              { tier: "Tier 2", leads: 2000, price: "$4.3" },
              { tier: "Tier 3", leads: 3000, price: "$3.9" }
            ].map((tier, index) => {
              const isCurrentTier = 
                parentTotalLeads >= tier.leads && 
                parentTotalLeads < (index === 2 ? 4000 : tier.leads + 1000);
              
              return (
                <div
                  key={tier.tier}
                  className={cn(
                    "relative transition-all duration-300",
                    "bg-black/50",
                    isCurrentTier ? "bg-[#EECC6E]/10" : "hover:bg-[#EECC6E]/5"
                  )}
                >
                  <div className="p-2 sm:p-4 text-center h-[100px] sm:h-full flex flex-col">
  <div className="text-[#EECC6E] font-manrope font-bold text-[10px] sm:text-base mb-2">
    {tier.tier}
  </div>
  <div className="flex flex-col justify-center flex-1">
    <div className="text-white font-manrope font-medium text-[10px] sm:text-base">
      {tier.leads}+ leads
    </div>
    <div className="text-[#EECC6E] font-manrope font-bold text-[10px] sm:text-base mt-0.5 sm:mt-1">
      {tier.price}/lead
    </div>
  </div>
</div>
                  {isCurrentTier && (
                    <div className="absolute inset-0 border-2 border-[#EECC6E] rounded-lg pointer-events-none" />
                  )}
                </div>
              )
            })}

            {/* Tier 4 with sliding animation */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger 
  className={cn(
    "relative overflow-hidden bg-black/50 cursor-default", // changed from pointer-events-none to cursor-default
    parentTotalLeads >= 4000 ? "bg-[#EECC6E]/10" : "hover:bg-[#EECC6E]/5"
  )}
  onClick={(e) => e.preventDefault()} // prevent any click events
>
                  <div className="relative h-full">
  {/* Tier info */}
  <div 
  className={cn(
    "absolute inset-0 p-2 sm:p-4 text-center h-[100px] sm:h-full flex flex-col transition-all duration-500 transform",
    showGift ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
  )}
>
  <div className="text-[#EECC6E] font-manrope font-bold text-[10px] sm:text-base mb-2">
    Tier 4
  </div>
  <div className="flex flex-col justify-center flex-1">
    <div className="text-white font-manrope font-medium text-[10px] sm:text-base">
      4000+ leads
    </div>
    <div className="text-[#EECC6E] font-manrope font-bold text-[10px] sm:text-base mt-0.5 sm:mt-1">
      $3.4/lead
    </div>
  </div>
</div>
                    
                    {/* Gift image */}
                    <div 
                      className={cn(
                        "absolute inset-0 transition-all duration-500 transform",
                        showGift ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                      )}
                    >
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                      <div className="relative h-full flex items-center justify-center p-4">
                        <img 
                          src="https://res.cloudinary.com/dmbzcxhjn/image/upload/383ba6c08dc4cdf635aa5d489f08fc0c-removebg-preview_tkovqq.png"
                          alt="Gift"
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  {parentTotalLeads >= 4000 && (
                    <div className="absolute inset-0 border-2 border-[#EECC6E] rounded-lg pointer-events-none" />
                  )}
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-black/95 border border-[#EECC6E]/20 p-4">
                  <div className="text-white font-manrope">
                    <p className="font-semibold mb-2">Expert Integration Consultation</p>
                    <p className="text-sm mb-2">Schedule a personalized 1-hour strategy session with our lead distribution expert to maximize your team's efficiency and ROI.</p>
                    <p className="text-[#EECC6E] font-bold">Value: $1,000</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-lg sm:text-xl font-manrope font-bold text-[#EECC6E] tracking-tight">
          <span className="text-[#EECC6E]">* </span>Adjust the amount of leads you receive per day
        </h3>
        <SliderPrimitive.Root
          className={cn(
            "relative flex w-full touch-none select-none items-center h-14 py-4",
            parentTotalLeads === 0 && "opacity-50 pointer-events-none"
          )}
          value={[leadsPerDay]}
          onValueChange={handleLeadsPerDayChange}
          max={100}
          min={1}
          step={1}
          disabled={parentTotalLeads === 0}
        >
          <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded-full bg-[#1F1F1F]">
            <SliderPrimitive.Range className="absolute h-full bg-[#EECC6E]" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            className="block h-8 w-8 rounded-full border-4 border-[#EECC6E] bg-black ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          />
        </SliderPrimitive.Root>
        <div className={cn(
          "text-[#EECC6E] text-lg sm:text-xl font-semibold text-center font-manrope mt-4",
          parentTotalLeads === 0 && "opacity-50"
        )}>
          {leadsPerDay} {leadsPerDay === 1 ? 'lead' : 'leads'} per day = {calculateDays(parentTotalLeads, leadsPerDay)} days
        </div>
      </div>

      <Dialog open={showMinimumDialog} onOpenChange={setShowMinimumDialog}>
        <DialogContent className="bg-black/95 border-[#EECC6E]/20">
          <DialogHeader>
            <DialogTitle className="text-[#EECC6E] text-xl font-manrope">Minimum Order Required</DialogTitle>
          </DialogHeader>
          <div className="text-white/80 font-manrope py-4">
            The minimum order is 100 leads.
          </div>
          <DialogFooter>
            <Button
              onClick={setToMinimum}
              className="w-full bg-gradient-to-r from-[#EECC6E] via-[#F7DFA4] to-[#EECC6E] text-black font-manrope font-semibold hover:opacity-90 transition-opacity"
            >
              Set to 100 leads
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LeadsPerDaySlider
