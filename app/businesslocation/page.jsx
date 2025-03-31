"use client";

import { useState, useEffect } from "react";
import AddBusinessModal from "@/component/AddBusinessModal";
import Map from "@/component/Map";

export default function BusinessLocationpage() {
  const [locations, setLocations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLocations = async () => {
    try {
      const response = await fetch("/api/locations");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLocations(Array.isArray(data) ? data : []);
      setError(null);
    } catch (error) {
      console.error("Failed to fetch locations:", error);
      setError("Failed to load locations. Please try again later.");
      setLocations([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleAddBusiness = async (business) => {
    try {
      const response = await fetch("/api/locations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(business),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsModalOpen(false);
      await fetchLocations(); // Refresh the locations
    } catch (error) {
      console.error("Failed to add business:", error);
      throw error; // Re-throw to be handled by the modal
    }
  };

  return (
    <main className="min-h-screen p-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Explore Business</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center"
          >
            <span className="mr-2">+</span>
            Add Business
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className=" overflow-hidden">
          <div className="p-4">
            {isLoading ? (
              <div className="flex justify-center items-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              </div>
            ) : (
              <div className="w-[76.6875rem] h-[31.25rem] rounded-[20px] border">
                <Map locations={locations} className="border" />
              </div>
            )}
          </div>
        </div>

        <AddBusinessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddBusiness}
        />
      </div>
    </main>
  );
}
