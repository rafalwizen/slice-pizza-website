"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#cb3b32] mb-16">{t("contactTitle")}</h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  {t("nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#cb3b32] focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t("emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#cb3b32] focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#cb3b32] focus:outline-none transition-colors duration-200 resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#cb3b32] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#b33429] transition-colors duration-200"
              >
                {t("sendButton")}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#cb3b32] mb-3">{t("addressTitle")}</h3>
              <p className="text-gray-300 whitespace-pre-line">{t("address")}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#cb3b32] mb-3">{t("phoneTitle")}</h3>
              <p className="text-gray-300">{t("phone")}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#cb3b32] mb-3">{t("hoursTitle")}</h3>
              <p className="text-gray-300 whitespace-pre-line">{t("hours")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
