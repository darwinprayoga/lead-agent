"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
}

export default function FormContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.company.trim())
      newErrors.company = "Business/Company name is required.";
    if (!formData.phone.trim() || formData.phone.length < 8)
      newErrors.phone = "Please enter a valid phone number.";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = "Please enter a valid email address.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const subject = `New Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}
    `;

    const mailtoLink = `mailto:info@theleadagent.com.au?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // reset
    setFormData({ name: "", company: "", phone: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label
          htmlFor="name"
          className="text-sm font-medium text-[var(--night)]"
        >
          First/Last Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          className="mt-1"
          required
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="company"
          className="text-sm font-medium text-[var(--night)]"
        >
          Business/Company Name
        </Label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleInputChange}
          className="mt-1"
          required
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">{errors.company}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="phone"
          className="text-sm font-medium text-[var(--night)]"
        >
          Phone number
        </Label>
        <PhoneInput
          country="au"
          value={formData.phone}
          onChange={handlePhoneChange}
          preferredCountries={["au", "id", "us", "gb"]}
          inputClass="!w-full !h-10 !text-sm !pl-12"
          containerClass="mt-1"
          inputStyle={{ width: "100%" }}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="email"
          className="text-sm font-medium text-[var(--night)]"
        >
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-1"
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-[var(--forest)] hover:bg-[var(--forest)]/90 text-[var(--antiflash-white)] mt-6"
      >
        <Phone className="h-4 w-4 mr-2" />
        Book Growth Call
      </Button>

      <div className="text-center mt-4">
        <p className="text-sm text-[var(--night)] mb-1">OR</p>
        <p className="text-sm text-[var(--night)]">
          Directly contact us to The Lead Agent:{" "}
          <a
            href="https://wa.me/6285190420774?text=Hey%20Lead%20Agent!%20I%E2%80%99d%20love%20to%20know%20more.%20Could%20you%20please%20share%20the%20details%20with%20me%3F"
            className="text-[var(--forest)] font-medium"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </form>
  );
}
