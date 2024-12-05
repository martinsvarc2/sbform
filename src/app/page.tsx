"use client"

import { FormState } from "@/types/form"
import LocationTargetingForm from "@/components/location-targeting-form"

export default function Page() {
  const handleSubmit = (data: FormState) => {
    console.log('Form submitted:', data)
  }

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <LocationTargetingForm onSubmit={handleSubmit} />
    </div>
  )
}
