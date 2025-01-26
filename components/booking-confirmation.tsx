import { CheckCircle } from "lucide-react"

export function BookingConfirmation() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-lg border border-green-200">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h3 className="text-2xl font-bold text-green-700 mb-2">Reservation Confirmed!</h3>
      <p className="text-green-600 text-center">
        Your booking has been successfully validated. We look forward to seeing you!
      </p>
    </div>
  )
}

