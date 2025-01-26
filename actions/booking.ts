"use server"

import { bookingFormSchema } from "@/lib/schema"
import type { BookingFormValues } from "@/lib/schema"

export async function createBooking(values: BookingFormValues) {
  try {
    // Validate the form data
    const validatedFields = bookingFormSchema.parse(values)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically save to a database
    // For now, we'll just return success
    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to create booking. Please try again." }
  }
}

