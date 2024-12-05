export type TargetingType = 'national' | 'state' | 'zipCode' | null

export interface FormState {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  campaignName: string
  targetingType: TargetingType
  selectedStates: string[]
  selectedCities: string[]
  zipCodes: string[]
  leadsPerDay: number
  googleSheetUrl: string
  webhookUrl: string
}

export interface LocationFormProps {
  onSubmit: (data: FormState) => void
}
