"use client"

import { FormState } from "@/types/form"
import LocationTargetingForm from "@/components/location-targeting-form"

export default function Page() {
  const handleSubmit = async (data: FormState) => {
    try {
      const response = await fetch(data.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit form')
      }
      
      console.log('Form submitted successfully')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
      <LocationTargetingForm onSubmit={handleSubmit} />
  )
}
