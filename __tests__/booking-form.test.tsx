import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BookingForm } from "@/components/booking-form"

describe("BookingForm", () => {
  it("renders all form fields", () => {
    render(<BookingForm />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument()
  })

  it("displays validation errors for empty required fields", async () => {
    render(<BookingForm />)

    const submitButton = screen.getByRole("button", { name: /book table/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
      expect(screen.getByText(/please select a date/i)).toBeInTheDocument()
      expect(screen.getByText(/please select a time/i)).toBeInTheDocument()
    })
  })

  it("submits the form with valid data", async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    // Fill in the form
    await user.type(screen.getByLabelText(/name/i), "John Doe")
    await user.type(screen.getByLabelText(/email/i), "john@example.com")
    await user.type(screen.getByLabelText(/guests/i), "2")

    // Select date
    const dateButton = screen.getByRole("button", { name: /pick a date/i })
    await user.click(dateButton)
    const dateCell = screen.getByRole("gridcell", { name: new RegExp(String(new Date().getDate())) })
    await user.click(dateCell)

    // Select time
    const timeSelect = screen.getByLabelText(/time/i)
    await user.click(timeSelect)
    const timeOption = screen.getByText("17:00")
    await user.click(timeOption)

    // Submit form
    const submitButton = screen.getByRole("button", { name: /book table/i })
    await user.click(submitButton)

    // Verify submission
    await waitFor(() => {
      expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument()
    })
  })
})

