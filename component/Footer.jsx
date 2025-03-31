"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Community", href: "/" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Lagos, Nigeria", href: "/" },
        {
          label: "hello@bundo.app",
          href: "mailto:hello@bundo.app",
          isEmail: true,
        },
        {
          label: "info@bundo.app",
          href: "mailto:info@bundo.app",
          isEmail: true,
        },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQs", href: "/faqs" },
        {
          label: "support@bundo.app",
          href: "mailto:support@bundo.app",
          isEmail: true,
        },
        {
          label: "help@bundo.app",
          href: "mailto:help@bundo.app",
          isEmail: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of use", href: "/terms" },
        { label: "Vendor Agreement", href: "/vendor-agreement" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", href: "/", icon: "instagram" },
    { name: "Twitter", href: "/", icon: "twitter" },
    { name: "Facebook", href: "/", icon: "facebook" },
    { name: "LinkedIn", href: "/", icon: "linkedin" },
  ];

  return (
    <footer className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 min-h-screen">
        {/* Mobile Footer */}
        <div className="md:hidden px-4 py-6">
          <div className="mb-6">
            <div className="flex items-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M19.8333 4.66667H8.16667C6.23767 4.66667 4.66667 6.23767 4.66667 8.16667V19.8333C4.66667 21.7623 6.23767 23.3333 8.16667 23.3333H19.8333C21.7623 23.3333 23.3333 21.7623 23.3333 19.8333V8.16667C23.3333 6.23767 21.7623 4.66667 19.8333 4.66667Z"
                  fill="#3CB371"
                />
                <path
                  d="M14.5833 11.6667C14.5833 10.7462 15.3295 10 16.25 10H19.8333V8.16667C19.8333 8.16667 19.8333 8.16667 19.8333 8.16667C19.8333 8.16667 19.8333 8.16667 19.8333 8.16667H16.25C13.4886 8.16667 11.25 10.4053 11.25 13.1667V14.5833H9.33333V17.5H11.25V23.3333H14.5833V17.5H17.5V14.5833H14.5833V11.6667Z"
                  fill="#3CB371"
                />
              </svg>
              <span className="text-[#3CB371] text-xl font-bold">Bundo</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">Simplifying Retail.</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="border-b border-gray-200 py-3">
              <button
                className="w-full flex justify-between items-center"
                onClick={() => toggleSection(section.title)}
              >
                <h3 className="font-medium text-gray-800">{section.title}</h3>
                {openSection === section.title ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {openSection === section.title && (
                <div className="mt-2 space-y-2">
                  {section.links.map((link, index) => (
                    <div key={index} className="text-gray-600">
                      {link.isEmail ? (
                        <a href={link.href} className="hover:text-[#3CB371]">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="hover:text-[#3CB371]">
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-6">
            <h3 className="font-medium text-gray-800 mb-3">Keep Up With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-[#3CB371]"
                  aria-label={social.name}
                >
                  {social.icon === "instagram" && (
                    <div className="bg-[#3CB371] text-white p-1 rounded-md">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  {social.icon === "twitter" && (
                    <div className="text-[#3CB371]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  {social.icon === "facebook" && (
                    <div className="text-[#3CB371]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  {social.icon === "linkedin" && (
                    <div className="text-[#3CB371]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Image
              src="/footer.png"
              width={300}
              height={300}
              alt="Bundo App"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:block px-8 py-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="flex items-center mb-2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M19.8333 4.66667H8.16667C6.23767 4.66667 4.66667 6.23767 4.66667 8.16667V19.8333C4.66667 21.7623 6.23767 23.3333 8.16667 23.3333H19.8333C21.7623 23.3333 23.3333 21.7623 23.3333 19.8333V8.16667C23.3333 6.23767 21.7623 4.66667 19.8333 4.66667Z"
                    fill="#3CB371"
                  />
                  <path
                    d="M14.5833 11.6667C14.5833 10.7462 15.3295 10 16.25 10H19.8333V8.16667C19.8333 8.16667 19.8333 8.16667 19.8333 8.16667C19.8333 8.16667 19.8333 8.16667 19.8333 8.16667H16.25C13.4886 8.16667 11.25 10.4053 11.25 13.1667V14.5833H9.33333V17.5H11.25V23.3333H14.5833V17.5H17.5V14.5833H14.5833V11.6667Z"
                    fill="#3CB371"
                  />
                </svg>
                <span className="text-[#3CB371] text-xl font-bold">Bundo</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">Simplifying Retail.</p>

              <Image
                src="/footer.png"
                width={300}
                height={300}
                alt="Bundo App"
                className="w-full max-w-xs h-auto"
              />
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-medium text-gray-800 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        {link.isEmail ? (
                          <Link
                            href={link.href}
                            className="text-gray-600 hover:text-[#3CB371]"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-gray-600 hover:text-[#3CB371]"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-medium text-gray-800 mb-3">
                Keep Up With Us
              </h3>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-[#3CB371]"
                  aria-label={social.name}
                >
                  {social.icon === "instagram" && (
                    <div className="bg-[#3CB371] text-white p-1 rounded-md">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  {social.icon === "twitter" && (
                    <div className="text-[#3CB371]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  {social.icon === "facebook" && (
                    <div className="text-[#3CB371]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  {social.icon === "linkedin" && (
                    <div className="text-[#3CB371]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
