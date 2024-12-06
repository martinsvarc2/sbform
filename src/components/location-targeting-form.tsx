"use client"

import * as React from "react"
import { useState, useMemo, lazy, Suspense } from "react"
import { 
  Map, 
  Building2, 
  MapPin, 
  X, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  MinusCircle, 
  PlusCircle 
} from 'lucide-react'
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
import { FormState, LocationFormProps, CitySelector, TargetingType } from "@/types/form"

const STATE_COMPONENTS: Record<string, React.LazyExoticComponent<React.ComponentType<CitySelector>>> = {
  'Alabama': lazy(() => import('./AlabamaCitySelector')),
  'Alaska': lazy(() => import('./AlaskaCitySelector')),
  'Arizona': lazy(() => import('./ArizonaCitySelector')),
  'Arkansas': lazy(() => import('./ArkansasCitySelector')),
  'California': lazy(() => import('./CaliforniaCitySelector')),
  'Colorado': lazy(() => import('./ColoradoCitySelector')),
  'Connecticut': lazy(() => import('./ConnecticutCitySelector')),
  'Delaware': lazy(() => import('./DelawareCitySelector')),
  'Florida': lazy(() => import('./FloridaCitySelector')),
  'Georgia': lazy(() => import('./GeorgiaCitySelector')),
  'Hawaii': lazy(() => import('./HawaiiCitySelector')),
  'Idaho': lazy(() => import('./IdahoCitySelector')),
  'Illinois': lazy(() => import('./IllinoisCitySelector')),
  'Indiana': lazy(() => import('./IndianaCitySelector')),
  'Iowa': lazy(() => import('./IowaCitySelector')),
  'Kansas': lazy(() => import('./KansasCitySelector')),
  'Kentucky': lazy(() => import('./KentuckyCitySelector')),
  'Louisiana': lazy(() => import('./LouisianaCitySelector')),
  'Maine': lazy(() => import('./MaineCitySelector')),
  'Maryland': lazy(() => import('./MarylandCitySelector')),
  'Massachusetts': lazy(() => import('./MassachusettsCitySelector')),
  'Michigan': lazy(() => import('./MichiganCitySelector')),
  'Minnesota': lazy(() => import('./MinnesotaCitySelector')),
  'Mississippi': lazy(() => import('./MississippiCitySelector')),
  'Missouri': lazy(() => import('./MissouriCitySelector')),
  'Montana': lazy(() => import('./MontanaCitySelector')),
  'Nebraska': lazy(() => import('./NebraskaCitySelector')),
  'Nevada': lazy(() => import('./NevadaCitySelector')),
  'New Hampshire': lazy(() => import('./NewHampshireCitySelector')),
  'New Jersey': lazy(() => import('./NewJerseyCitySelector')),
  'New Mexico': lazy(() => import('./NewMexicoCitySelector')),
  'New York': lazy(() => import('./NewYorkCitySelector')),
  'North Carolina': lazy(() => import('./NorthCarolinaCitySelector')),
  'North Dakota': lazy(() => import('./NorthDakotaCitySelector')),
  'Ohio': lazy(() => import('./OhioCitySelector')),
  'Oklahoma': lazy(() => import('./OklahomaCitySelector')),
  'Oregon': lazy(() => import('./OregonCitySelector')),
  'Pennsylvania': lazy(() => import('./PennsylvaniaCitySelector')),
  'Rhode Island': lazy(() => import('./RhodeIslandCitySelector')),
  'South Carolina': lazy(() => import('./SouthCarolinaCitySelector')),
  'South Dakota': lazy(() => import('./SouthDakotaCitySelector')),
  'Tennessee': lazy(() => import('./TennesseeCitySelector')),
  'Texas': lazy(() => import('./TexasCitySelector')),
  'Utah': lazy(() => import('./UtahCitySelector')),
  'Vermont': lazy(() => import('./VermontCitySelector')),
  'Virginia': lazy(() => import('./VirginiaCitySelector')),
  'Washington': lazy(() => import('./WashingtonCitySelector')),
  'West Virginia': lazy(() => import('./WestVirginiaCitySelector')),
  'Wisconsin': lazy(() => import('./WisconsinCitySelector')),
  'Wyoming': lazy(() => import('./WyomingCitySelector'))
} as const;

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
];

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
  totalLeads: 0,  // Initialize with 0
  googleSheetUrl: '',
  webhookUrl: ''
});

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [testDataText, setTestDataText] = useState("Send test data");

  // Tutorial images and descriptions
  const tutorialImages = [
    "https://res.cloudinary.com/drkudvyog/image/upload/v1733273873/Tutorial_1_y4l0ud.png",
    "https://res.cloudinary.com/drkudvyog/image/upload/v1733273874/Tutorial_2_r0upko.png",
    "https://res.cloudinary.com/drkudvyog/image/upload/v1733274401/Tutorial_3_jlyyxe.png",
    "https://res.cloudinary.com/drkudvyog/image/upload/v1733273874/tutorial_4_llujtb.png",
    "https://res.cloudinary.com/drkudvyog/image/upload/v1733273875/Tutorial_5_x3rmsj.png"
  ];

  const tutorialDescriptions = [
    "1. Click the 'Share' button in the top right",
    "2. Set the access to 'Anyone with the link'",
    "3. Make sure that sharing permissions are set to 'Editor'",
    "4. Copy the URL",
    "5. Paste it into the form"
  ];

  // Event handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  
  if (name === 'phoneNumber') {
    // Remove all non-numeric characters
    const numbersOnly = value.replace(/\D/g, '');
    
    // Format the number into XXX-XXX-XXXX
    let formattedNumber = '';
    if (numbersOnly.length > 0) {
      // Add first 3 digits
      formattedNumber += numbersOnly.slice(0, 3);
      if (numbersOnly.length > 3) {
        // Add hyphen and next 3 digits
        formattedNumber += '-' + numbersOnly.slice(3, 6);
        if (numbersOnly.length > 6) {
          // Add hyphen and last 4 digits
          formattedNumber += '-' + numbersOnly.slice(6, 10);
        }
      }
    }
    
    setFormState(prev => ({ 
      ...prev, 
      [name]: formattedNumber
    }));
  } else {
    // Handle all other inputs normally
    setFormState(prev => ({ 
      ...prev, 
      [name]: value 
    }));
  }
};

  const handleTargetingChange = (type: 'national' | 'state' | 'zipCode') => {
    setFormState(prev => ({
      ...prev,
      targetingType: prev.targetingType === type ? null : type,
      selectedStates: [],
      selectedCities: [],
      zipCodes: []
    }));
  };

  const handleStateChange = (state: string) => {
    setFormState(prev => {
      if (prev.selectedStates.includes(state)) {
        return {
          ...prev,
          selectedStates: prev.selectedStates.filter(s => s !== state),
          selectedCities: []
        };
      } else if (prev.selectedStates.length < 5) {
        return {
          ...prev,
          selectedStates: [...prev.selectedStates, state],
          selectedCities: []
        };
      }
      return prev;
    });
  };

  const handleRemoveState = (stateToRemove: string) => {
    setFormState(prev => ({
      ...prev,
      selectedStates: prev.selectedStates.filter(state => state !== stateToRemove),
      selectedCities: []
    }));
  };

  const handleCityChange = (city: string) => {
    setFormState(prev => {
      if (prev.selectedCities.includes(city)) {
        return {
          ...prev,
          selectedCities: prev.selectedCities.filter(c => c !== city)
        };
      } else if (prev.selectedCities.length < 10) {
        return {
          ...prev,
          selectedCities: [...prev.selectedCities, city]
        };
      }
      return prev;
    });
  };

  const handleStateCitySelect = (city: { name: string; rank: number }) => {
  handleCityChange(city.name);
};

  const handleRemoveCity = (cityToRemove: string) => {
    setFormState(prev => ({
      ...prev,
      selectedCities: prev.selectedCities.filter(city => city !== cityToRemove)
    }));
  };

  const handleZipCodesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    const currentZipCodes = [...formState.zipCodes];
    currentZipCodes[parseInt(e.target.name)] = value;
    setFormState(prev => ({ ...prev, zipCodes: currentZipCodes }));
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const zipCodes = pastedText
      .replace(/[^0-9\n,\s]/g, '')
      .split(/[\n,\s]+/)
      .filter(code => /^\d{5}$/.test(code))
      .slice(0, 50);
    
    setFormState(prev => ({ ...prev, zipCodes }));
  };

  const addZipCode = () => {
    if (formState.zipCodes.length < 50) {
      setFormState(prev => ({ ...prev, zipCodes: [...prev.zipCodes, ''] }));
    }
  };

  const removeZipCode = (index: number) => {
    setFormState(prev => ({
      ...prev,
      zipCodes: prev.zipCodes.filter((_, i) => i !== index)
    }));
  };

  const handleLeadsPerDayChange = (value: number) => {
    setFormState(prev => ({ ...prev, leadsPerDay: value }));
  };

const handleTotalLeadsChange = (value: number) => {
    setFormState(prev => ({
      ...prev,
      totalLeads: value
    }));
  };

  const handleSendTestData = () => {
    setTestDataText("Sent!");
    setTimeout(() => {
      setTestDataText("Send test data");
    }, 5000);
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  try {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const formData = new FormData();
    
    formData.append('* firstName', formState.firstName);
    formData.append('* lastName', formState.lastName);
    formData.append('* email', formState.email);
    formData.append('* phoneNumber', formState.phoneNumber);
    formData.append('* campaignName', formState.campaignName);
    formData.append('* targetingType', formState.targetingType || '');
    formData.append('* selectedStatesArray', JSON.stringify(formState.selectedStates));
    formData.append('* selectedCitiesArray', JSON.stringify(formState.selectedCities));
    formData.append('* zipCodesArray', JSON.stringify(formState.zipCodes));
    formData.append('* leadsPerDay', formState.leadsPerDay.toString());
    formData.append('* totalLeads', formState.totalLeads.toString());
    formData.append('* googleSheetUrl', formState.googleSheetUrl);
    formData.append('* webhookUrl', formState.webhookUrl);
    formData.append('* submissionDate', formattedDate);
    formData.append('* totalAmount', `$${(formState.totalLeads * 5).toLocaleString()}`);

    // Single request with manual redirect handling
    const response = await fetch('https://hook.us1.make.com/uoo5iewklc2lvrjpfwbkui7bktgv4gy9', {
      method: 'POST',
      body: formData,
      redirect: 'manual' // Let us handle the redirect
    });

    // Wait for Make.com to process
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Check for 302 redirect status
    if (response.status === 302) {
      const redirectUrl = response.headers.get('Location');
      if (redirectUrl && redirectUrl.startsWith('https://buy.stripe.com/')) {
        window.location.href = redirectUrl;
        return;
      }
    }

    throw new Error('No redirect URL found');

  } catch (error) {
    console.error('Submission error:', error);
    alert('Failed to process order. Please try again or contact support.');
  }
};

  // Memoized states
  const availableStates = useMemo(() => US_STATES, []);

  // Render form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-black/50 border-[#EECC6E]/20 shadow-2xl backdrop-blur-sm font-manrope">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* First Name */}
            <div>
              <Label htmlFor="firstName" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-semibold mb-4">
                <span className="text-[#EECC6E]">* </span>First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formState.firstName}
                onChange={handleInputChange}
                className="h-10 sm:h-12 bg-black/50 border-[#EECC6E]/20 text-white text-xs sm:text-sm font-manrope"
                placeholder="John"
              />
            </div>
          <div>
            <Label htmlFor="lastName" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-semibold mb-4">
              <span className="text-[#EECC6E]">* </span>Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formState.lastName}
              onChange={handleInputChange}
              className="h-10 sm:h-12 bg-black/50 border-[#EECC6E]/20 text-white text-xs sm:text-sm font-manrope"
              placeholder="Smith"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-semibold mb-4">
              <span className="text-[#EECC6E]">* </span>E-mail
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleInputChange}
              className="h-10 sm:h-12 bg-black/50 border-[#EECC6E]/20 text-white text-xs sm:text-sm font-manrope"
              placeholder="john.smith@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-semibold mb-4">
              <span className="text-[#EECC6E]">* </span>Phone Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formState.phoneNumber}
              onChange={handleInputChange}
              className="h-10 sm:h-12 bg-black/50 border-[#EECC6E]/20 text-white text-xs sm:text-sm font-manrope"
              placeholder="555-123-4567"
              maxLength={12}
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="campaignName" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-semibold mb-4">
              <span className="text-[#EECC6E]">* </span>Name of your campaign
            </Label>
            <Input
              id="campaignName"
              name="campaignName"
              type="text"
              value={formState.campaignName}
              onChange={handleInputChange}
              className="h-10 sm:h-12 bg-black/50 border-[#EECC6E]/20 text-white text-xs sm:text-sm font-manrope"
              placeholder="My Campaign"
            />
          </div>
        </div>

        {/* Targeting Options Section */}
        <div className="space-y-4 sm:space-y-6">
          <Label className="text-[#EECC6E] text-base sm:text-lg font-manrope font-bold tracking-tight mb-3">
            <span className="text-[#EECC6E]">* </span>Do you want to target locations by:
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* National Targeting Option */}
            <button
              type="button"
              onClick={() => handleTargetingChange('national')}
              className={cn(
                "h-[200px] sm:h-[250px] lg:h-[300px] flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 font-manrope",
                formState.targetingType === 'national' 
                  ? "border-[#EECC6E] bg-[#EECC6E]/10" 
                  : "border-[#EECC6E]/20 hover:border-[#EECC6E]/50 hover:bg-[#EECC6E]/5"
              )}
            >
              <Map className="h-12 w-12 sm:h-16 sm:w-16 mb-4 sm:mb-6 text-[#EECC6E]" />
              <h3 className="text-[#EECC6E] text-base sm:text-xl font-manrope font-semibold mb-2 sm:mb-3">
                National Targeting
              </h3>
              <p className="text-xs sm:text-sm text-[#EECC6E]/70 text-center font-manrope">
                Target the entire United States
              </p>
            </button>

            {/* State Targeting Option */}
            <button
              type="button"
              onClick={() => handleTargetingChange('state')}
              className={cn(
                "h-[200px] sm:h-[250px] lg:h-[300px] flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 font-manrope",
                formState.targetingType === 'state' 
                  ? "border-[#EECC6E] bg-[#EECC6E]/10" 
                  : "border-[#EECC6E]/20 hover:border-[#EECC6E]/50 hover:bg-[#EECC6E]/5"
              )}
            >
              <Building2 className="h-12 w-12 sm:h-16 sm:w-16 mb-4 sm:mb-6 text-[#EECC6E]" />
              <h3 className="text-[#EECC6E] text-base sm:text-xl font-manrope font-semibold mb-2 sm:mb-3">
                State
              </h3>
              <p className="text-xs sm:text-sm text-[#EECC6E]/70 text-center font-manrope">
                Target specific states and cities
              </p>
            </button>

            {/* Zip Code Targeting Option */}
            <button
              type="button"
              onClick={() => handleTargetingChange('zipCode')}
              className={cn(
                "h-[200px] sm:h-[250px] lg:h-[300px] flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 font-manrope",
                formState.targetingType === 'zipCode' 
                  ? "border-[#EECC6E] bg-[#EECC6E]/10" 
                  : "border-[#EECC6E]/20 hover:border-[#EECC6E]/50 hover:bg-[#EECC6E]/5"
              )}
            >
              <MapPin className="h-12 w-12 sm:h-16 sm:w-16 mb-4 sm:mb-6 text-[#EECC6E]" />
              <h3 className="text-[#EECC6E] text-base sm:text-xl font-manrope font-semibold mb-2 sm:mb-3">
                Zip Code
              </h3>
              <p className="text-xs sm:text-sm text-[#EECC6E]/70 text-center font-manrope">
                Target specific ZIP codes
              </p>
            </button>
          </div>
        </div>

{/* State and City Selection Section */}
{formState.targetingType === 'state' && (
  <div className="space-y-4 sm:space-y-6">
    <Label className="text-[#EECC6E] text-base sm:text-lg font-manrope font-bold tracking-tight mb-3">
      <span className="text-[#EECC6E]">* </span>Select By States
    </Label>
    <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-4 font-manrope">
      * You can select up to 5 states maximum
    </p>
    
    {/* Selected States Pills */}
    {formState.selectedStates.length > 0 && (
      <div className="mb-2 sm:mb-4">
        <div className="flex flex-wrap gap-2">
          {formState.selectedStates.map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => handleRemoveState(state)}
              className="bg-[#EECC6E] text-black hover:bg-[#EECC6E]/90 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-manrope font-medium flex items-center gap-1 sm:gap-2 transition-all duration-200"
            >
              {state}
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          ))}
        </div>
      </div>
    )}

    {/* State Selection Dropdown */}
    <div className="relative">
      <Select onValueChange={handleStateChange}>
        <SelectTrigger 
          className="w-full bg-[#1F1F1F] border-[#EECC6E]/20 text-white h-10 sm:h-12 px-3 sm:px-4 hover:bg-[#2A2A2A] transition-all duration-200 focus:ring-2 focus:ring-[#EECC6E]/50 focus:ring-offset-0 rounded-xl font-manrope"
        >
          <div className="flex justify-between items-center w-full font-manrope">
            <SelectValue placeholder="Select State(s)" />
            <span className="text-[#EECC6E]/70 font-manrope text-xs sm:text-sm">
              {formState.selectedStates.length}/5
            </span>
          </div>
        </SelectTrigger>
        <SelectContent className="bg-[#1F1F1F] border-[#EECC6E]/20 font-manrope">
          <ScrollArea className="h-[200px] sm:h-[300px]">
            {availableStates.map((state) => (
              <SelectItem 
                key={state} 
                value={state} 
                className={cn(
                  "text-white transition-colors duration-200 rounded-lg mx-1 font-manrope",
                  formState.selectedStates.includes(state) 
                    ? "bg-[#EECC6E] text-black" 
                    : "hover:bg-[#EECC6E]/10",
                  formState.selectedStates.length >= 5 && !formState.selectedStates.includes(state)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                )}
                disabled={formState.selectedStates.length >= 5 && !formState.selectedStates.includes(state)}
              >
                <div className="flex items-center justify-between w-full font-manrope">
                  <span>{state}</span>
                  {formState.selectedStates.includes(state) && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>

    {/* City Selection Section */}
    {formState.selectedStates.length === 1 && (
      <div className="space-y-4">
        <Label className="text-[#EECC6E] text-base sm:text-lg font-manrope font-bold tracking-tight mb-3">
          Select By Cities
        </Label>
        <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-4 font-manrope">
          * You can select up to 10 cities only when a single state is selected.
        </p>

        {/* Selected Cities Pills */}
        {formState.selectedCities.length > 0 && (
          <div className="mb-2 sm:mb-4">
            <div className="flex flex-wrap gap-2">
              {formState.selectedCities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => handleRemoveCity(city)}
                  className="bg-[#EECC6E] text-black hover:bg-[#EECC6E]/90 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-manrope font-medium flex items-center gap-1 sm:gap-2 transition-all duration-200"
                >
                  {city}
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic City Selector */}
        {formState.selectedStates[0] && (
          <Suspense fallback={
            <div className="h-[200px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#EECC6E]" />
            </div>
          }>
            {STATE_COMPONENTS[formState.selectedStates[0] as keyof typeof STATE_COMPONENTS] && 
              React.createElement(
                STATE_COMPONENTS[formState.selectedStates[0] as keyof typeof STATE_COMPONENTS],
                {
                  onCitySelect: handleStateCitySelect,
                  selectedCities: formState.selectedCities
                }
              )
            }
          </Suspense>
        )}
      </div>
    )}
  </div>
)}

        {/* ZIP Code Input Section */}
        {formState.targetingType === 'zipCode' && (
<div className="space-y-4">
            <Label className="text-[#EECC6E] text-base sm:text-lg font-manrope font-bold tracking-tight mb-3">
              <span className="text-[#EECC6E]">* </span>List the ZIP codes for your campaign target:
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
              {formState.zipCodes.map((zipCode, index) => (
                <div key={index} className="relative">
                  <Input
                    type="text"
                    name={index.toString()}
                    value={zipCode}
                    onChange={handleZipCodesChange}
                    onPaste={handlePaste}
                    className="bg-black/50 border-[#EECC6E]/20 text-white text-lg sm:text-xl h-10 sm:h-12 text-center font-manrope"
                    maxLength={5}
                    placeholder="00000"
                  />
                  <button
                    type="button"
                    onClick={() => removeZipCode(index)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#EECC6E] hover:text-[#EECC6E]/80 font-manrope"
                  >
                    <MinusCircle className="h-4 w-4 sm:h-6 sm:w-6" />
                  </button>
                </div>
              ))}
              {formState.zipCodes.length < 50 && (
                <button
                  type="button"
                  onClick={addZipCode}
                  className="bg-black/50 border-2 border-dashed border-[#EECC6E]/20 text-[#EECC6E] h-10 sm:h-12 rounded-md flex items-center justify-center hover:bg-[#EECC6E]/10 transition-colors font-manrope"
                >
                  <PlusCircle className="h-6 w-6 sm:h-8 sm:w-8" />
                </button>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#EECC6E]/70 font-manrope">
              * A minimum of 1 valid ZIP code and a maximum of 50 valid ZIP codes must be provided.
            </p>
          </div>
        )}

        {/* Leads Per Day Slider */}
        <div className="space-y-2">
  <LeadsPerDaySlider
  value={formState.leadsPerDay}
  onChange={handleLeadsPerDayChange}
  onTotalLeadsChange={handleTotalLeadsChange}
  totalLeads={formState.totalLeads}
/>
</div>

        {/* Google Sheet URL Section */}
        <div className="space-y-2">
          <Label htmlFor="googleSheetUrl" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-bold tracking-tight mb-3 flex items-center gap-2">
            <span className="text-[#EECC6E]">* </span>Empty Google Sheet URL
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-[#EECC6E]/10 text-[#EECC6E] text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full hover:bg-[#EECC6E]/20 transition-colors">
                  View proper format
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] sm:max-w-2xl md:max-w-4xl bg-black/95 border-[#EECC6E]/20">
                <div className="p-4 sm:p-6">
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={tutorialImages[currentImageIndex]}
                        alt={tutorialDescriptions[currentImageIndex]}
                        layout="fill"
                        objectFit="contain"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/75 p-2 sm:p-4">
                        <p className="text-white text-center font-manrope text-xs sm:text-sm">
                          {tutorialDescriptions[currentImageIndex]}
                        </p>
                      </div>
                      <div className="absolute inset-y-0 left-2 right-2 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full bg-black/50 text-white hover:bg-black/75 disabled:opacity-50 pointer-events-auto"
                          onClick={() => setCurrentImageIndex(i => Math.max(0, i - 1))}
                          disabled={currentImageIndex === 0}
                        >
                          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full bg-black/50 text-white hover:bg-black/75 disabled:opacity-50 pointer-events-auto"
                          onClick={() => setCurrentImageIndex(i => Math.min(tutorialImages.length - 1, i + 1))}
                          disabled={currentImageIndex === tutorialImages.length - 1}
                        >
                          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                      {tutorialImages.map((_, index) => (
                        <button
                          key={index}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all",
                            currentImageIndex === index ? "bg-[#EECC6E]" : "bg-[#EECC6E]/20"
                          )}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </Label>
          <Input
            id="googleSheetUrl"
            name="googleSheetUrl"
            type="url"
            value={formState.googleSheetUrl}
            onChange={handleInputChange}
            className="h-10 sm:h-12 bg-black/50 border-[#EECC6E]/20 text-white text-xs sm:text-sm font-manrope"
            placeholder="https://docs.google.com/spreadsheets/d/..."
          />
        </div>

        {/* Webhook URL Section */}
        <div className="space-y-2">
          <Label htmlFor="webhookUrl" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-bold tracking-tight mb-3 flex items-center gap-2">
            Webhook URL
            <button
              onClick={handleSendTestData}
              className="bg-[#EECC6E]/10 text-[#EECC6E] text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full hover:bg-[#EECC6E]/20 transition-colors"
            >
              {testDataText}
            </button>
          </Label>
          <Input
            id="webhookUrl"
            name="webhookUrl"
            type="url"
            value={formState.webhookUrl}
            onChange={handleInputChange}
            className="h-10 sm:h-12 bg-black/50 border-[#EECC6E]/20 text-white text-xs sm:text-sm font-manrope"
            placeholder="https://example.com/webhook"
          />
        </div>

        {/* Submit Button */}
<Button 
  type="submit" 
  className="relative w-full h-14 overflow-hidden text-black font-manrope font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl flex items-center justify-center"
>
  {/* Background Gradients */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#EECC6E] via-[#F7DFA4] to-[#EECC6E] animate-flow-colors" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-50" />
  
  {/* Button Text */}
  <span className="relative z-10 flex-shrink-0">Place an Order</span>
  
  {/* Sparkle Animation */}
  <svg 
    className="absolute right-4 magic-sparkle" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
  >
    {/* Top Star */}
    <path d="M14 5L13.5 8.5L17 9L13.5 9.5L14 13L12.5 10L9 10.5L11.5 9L10 5.5L12.5 8.5L14 5Z" fill="white">
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        from="0 12 12" 
        to="360 12 12" 
        dur="5s" 
        repeatCount="indefinite"
      />
    </path>
    {/* Right Star */}
    <path d="M19 12L18.5 15.5L22 16L18.5 16.5L19 20L17.5 17L14 17.5L16.5 16L15 12.5L17.5 15.5L19 12Z" fill="white">
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        from="0 18 16" 
        to="-360 18 16" 
        dur="7s" 
        repeatCount="indefinite"
      />
    </path>
    {/* Left Star */}
    <path d="M5 8L4.5 11.5L8 12L4.5 12.5L5 16L3.5 13L0 13.5L2.5 12L1 8.5L3.5 11.5L5 8Z" fill="white">
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        from="0 4 12" 
        to="360 4 12" 
        dur="6s" 
        repeatCount="indefinite"
      />
    </path>
  </svg>
</Button>
</Card>
</form>
</div>
);
};

export default LocationTargetingForm;
