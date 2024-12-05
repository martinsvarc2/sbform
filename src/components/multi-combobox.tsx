"use client"
import * as React from "react"
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command as CommandPrimitive } from 'cmdk'
import { Badge } from "@/components/ui/badge"

interface MultiComboboxProps {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  maxItems?: number
}

export function MultiCombobox({
  options = [],
  selected = [],
  onChange,
  placeholder = "Select...",
  maxItems = Infinity
}: MultiComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(search.toLowerCase())
  )

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(item => item !== value))
    } else if (selected.length < maxItems) {
      onChange([...selected, value])
    }
    setOpen(false)
  }

  const handleRemove = (value: string) => {
    onChange(selected.filter(item => item !== value))
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-left font-normal"
          onClick={() => setOpen(!open)}
        >
          {selected.length === 0 ? placeholder : `${selected.length} selected`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>

        {open && (
          <div className="absolute z-50 mt-1 w-full min-w-[200px] overflow-hidden rounded-md border bg-popover shadow-md">
            <CommandPrimitive className="overflow-hidden">
              <input
                className="flex h-10 w-full rounded-md bg-transparent py-3 px-4 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
              />
              <div className="max-h-64 overflow-auto">
                {filteredOptions.length === 0 && (
                  <div className="py-6 text-center text-sm">No results found.</div>
                )}
                {filteredOptions.map((option) => (
                  <CommandPrimitive.Item
                    key={option}
                    value={option}
                    onSelect={() => handleSelect(option)}
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selected.includes(option) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option}
                  </CommandPrimitive.Item>
                ))}
              </div>
            </CommandPrimitive>
          </div>
        )}
      </div>

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selected.map((item) => (
            <Badge key={item} variant="secondary" className="text-sm">
              {item}
              <button
                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleRemove(item)
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
                onClick={() => handleRemove(item)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {item}</span>
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
