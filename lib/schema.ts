import { z } from "zod"

export const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  guests: z.number().min(1, "Must have at least 1 guest").max(10, "Maximum 10 guests allowed"),
  occasion: z.enum(["birthday", "anniversary", "casual", "business", "other"], {
    required_error: "Please select an occasion",
  }),
})

export type BookingFormValues = z.infer<typeof bookingFormSchema>

