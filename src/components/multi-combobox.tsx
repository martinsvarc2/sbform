"use client"
import * as React from "react"
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import * as Popover from "@radix-ui/react-popover"
import * as Command from "@radix-ui/react-command"
import { Button } from "@/components/ui/button"
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

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(item => item !== value))
    } else if (selected.length < maxItems) {
      onChange([...selected, value])
    }
  }

  const handleRemove = (value: string) => {
    onChange(selected.filter(item => item !== value))
  }

  return (
    <div className="flex flex-col gap-2">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-left font-normal"
          >
            {selected.length === 0 ? placeholder : `${selected.length} selected`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            align="start"
            sideOffset={4}
            className="z-50 w-[200px] overflow-hidden rounded-md border bg-popover p-0 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"
          >
            <Command.Root className="w-full">
              <Command.Input 
                placeholder="Search..."
                className="flex h-10 w-full rounded-md bg-transparent py-3 px-4 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Command.Empty className="py-6 text-center text-sm">
                No results found.
              </Command.Empty>
              <Command.Group className="max-h-64 overflow-auto p-1">
                {options.map((option) => (
                  <Command.Item
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
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.Root>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

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
