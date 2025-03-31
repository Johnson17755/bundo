"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is Bundo?",
      answer:
        "Bundo is a platform that helps businesses manage their operations efficiently and connect with customers.",
    },
    {
      question: "What kind of businesses can use Bundo?",
      answer:
        "Bundo is designed for various businesses including retail, service providers, and online stores of all sizes.",
    },
    {
      question: "Must I have a CAC document to use Bundo?",
      answer:
        "Yes, a CAC document is required to verify your business identity when registering on Bundo.",
    },
    {
      question: "What kind of products can I buy on Bundo?",
      answer:
        "Bundo offers a wide range of products from various categories including electronics, fashion, home goods, and more.",
    },
    {
      question: "Is Bundo free to use?",
      answer:
        "Bundo offers both free and premium plans. The basic features are free to use, while advanced features require a subscription.",
    },
    {
      question: "How can I join the team?",
      answer:
        "To join the Bundo team, visit our careers page and check for available positions that match your skills and experience.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#f5f2e9] pt-8">
      <div className="max-w-2xl mx-auto px-4 py-4 min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="text-[#0f2a0f]">Frequently Asked </span>
          <span className="text-[#4caf50]">Questions</span>
        </h1>
        <p className="text-center mb-10 text-[#0f2a0f]">
          Need help? Check out these answers to questions you might <br /> have
          about Bundo. <b>Or send an email to help@bundo.app</b>
        </p>

        <div className="space-y-3 max-w-[450px] mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-[#0f2a0f]">
                  {item.question}
                </span>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#4caf50] flex items-center justify-center text-white mr-2">
                    <ChevronDown
                      className={`w-4 h-4 text-white transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
