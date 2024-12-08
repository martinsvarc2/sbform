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

  React.useEffect(() => {
    setLeadsPerDay(value)
  }, [value])

  const handleTotalLeadsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/^0+/, '')
    
    if (inputValue === '' || inputValue === '0') {
      onTotalLeadsChange(0)
      return
    }
    
    const numValue = parseInt(inputValue)
    if (!isNaN(numValue)) {
      if (numValue < 100) {
        setShowMinimumDialog(true)
        return
      }
      onTotalLeadsChange(numValue)
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
          className="h-14 bg-black/50 border-[#EECC6E]/20 text-white text-xl font-manrope text-center"
        />
        <div className="text-[#EECC6E] text-lg sm:text-xl font-semibold text-center font-manrope mt-4">
          {parentTotalLeads} {parentTotalLeads === 1 ? 'lead' : 'leads'} = ${parentTotalLeads * 5}
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
