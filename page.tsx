import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran,%20le%202025-01-26%20a%CC%80%2014.09.59-hzzwjbiOcvHsZVN5dgTH8lA0s7f01s.png"
            alt="Little Lemon Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <div className="hidden md:flex gap-6">
            <Link href="#" className="text-sm hover:text-primary">
              Home
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Menu
            </Link>
            <Link href="#" className="text-sm hover:text-primary font-medium">
              Reservations
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Order Online
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Login
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#4D5D53] text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 p-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Reserve Your Table</h1>
            <p className="text-gray-200">
              Join us for an unforgettable Mediterranean dining experience. Book your table now and savor the flavors of
              Little Lemon.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran,%20le%202025-01-26%20a%CC%80%2014.13.39-MseZM8gXBLpZDVfdO8gHjKkglRRFIz.png"
              alt="Little Lemon Restaurant Interior"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="container mx-auto py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Make a Reservation</h2>
            <p className="text-muted-foreground mt-2">Fill out the form below to book your table at Little Lemon.</p>
          </div>
          <div className="bg-card rounded-lg border p-6 shadow-sm">
            <p className="text-sm text-muted-foreground mb-4">
              Please note: You can select a date up to one year in advance. If you're unable to select a date, ensure
              you're choosing a date within this range.
            </p>
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  )
}

