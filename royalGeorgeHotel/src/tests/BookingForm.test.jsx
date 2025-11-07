/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";

// eslint-disable-next-line no-undef
describe("BookingForm Validation", () => {
  test("shows error if email is empty", async () => {
    render(<BookingForm />);
    fireEvent.submit(screen.getByRole("button", { name: /submit/i }));
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
  });

  test("shows error for invalid email format", async () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "invalidemail" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /submit/i }));
    expect(await screen.findByText("Invalid email address")).toBeInTheDocument();
  });

  test("shows error when first name is missing", async () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /submit/i }));
    expect(await screen.findByText("First name is required")).toBeInTheDocument();
  });

  test("does not show errors if all fields are valid", async () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByPlaceholderText("First Name"), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText("Phone Number"), { target: { value: "123456789" } });
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Booking Size"), { target: { value: "4" } });
    fireEvent.change(screen.getByPlaceholderText("Preferred Area"), { target: { value: "Indoor" } });
    fireEvent.change(screen.getByRole("textbox", { name: "" }), { target: { value: "John" } });

    // Date & Time fields
    const dateInput = screen.getByRole("textbox", { name: "" });
    fireEvent.change(screen.getByDisplayValue(""), { target: { value: "2025-12-01" } });
    fireEvent.change(screen.getByDisplayValue(""), { target: { value: "18:30" } });

    fireEvent.submit(screen.getByRole("button", { name: /submit/i }));

    // Should not show any error messages
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/invalid/i)).not.toBeInTheDocument();
  });
});
