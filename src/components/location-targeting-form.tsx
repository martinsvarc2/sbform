"use client"

import React, { useState, useMemo } from "react"
import { Map, Building2, MapPin, X, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import LeadsPerDaySlider from './leads-per-day-slider'
import Image from "next/image"
import { FormState, LocationFormProps } from "@/types/form"

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

const generateCities = (prefix: string) => {
  return Array.from({ length: 200 }, (_, i) => `${prefix} City ${i + 1}`)
}

const MOCK_CITIES: { [key: string]: string[] } = {}
US_STATES.forEach(state => {
  MOCK_CITIES[state] = generateCities(state)
})

const LocationTargetingForm: React.FC<LocationFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    campaignName: '',
    targetingType: null,
    selectedStates: [],
    selectedCities: [],
    zipCodes: [],
    leadsPerDay: 10,
    googleSheetUrl: '',
    webhookUrl: ''
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [testDataText, setTestDataText] = useState("Send test data")

  // Tutorial images and descriptions
  const tutorialImages = [
    "https://res.cloudinary.com/drkudvyog/image/upload/v1733273873/Tutorial_1_y4l0ud.png",
    "https://res.cloudinary.com/drkudvyog/image/upload/v1733273874/Tutorial_2_r0upko.png",
    "https://res.cloudinary.com/drkudvyog/image/upload/v1733274401/Tutorial_3_jlyyxe.png",
    "https://res.cloudinar
