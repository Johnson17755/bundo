"use client";

import React, { useState } from "react";
import { X, MapPin, Link as LinkIcon, Search } from "lucide-react";

export default function AddBusinessModal({ isOpen, onClose, onSave }) {
  const [searchAddress, setSearchAddress] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [showAddressList, setShowAddressList] = useState(false);

  // Mock addresses for demonstration
  const addresses = [
    { street: "21b joy avenue Ajao Estate", area: "Lekki" },
    { street: "21b joy avenue Ajao Estate", area: "Lekki" },
    { street: "21b joy avenue Ajao Estate", area: "Lekki" },
    { street: "21b joy avenue Ajao Estate", area: "Lekki" },
  ];

  const handleAddressSearch = (value) => {
    setSearchAddress(value);
    setShowAddressList(true);
  };

  const handleSaveBusiness = () => {
    console.log({ businessName, searchAddress, imageLink });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Add New Business</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Enter Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchAddress}
                onChange={(e) => handleAddressSearch(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-green-200 bg-green-50 placeholder-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="21b joy avenue Ajao Estate"
              />
            </div>

            {showAddressList && (
              <div className="mt-2 border rounded-lg shadow-sm">
                {addresses.map((address, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                    onClick={() => {
                      setSearchAddress(address.street);
                      setShowAddressList(false);
                    }}
                  >
                    <MapPin size={18} className="text-gray-400 mt-1 mr-2" />
                    <div>
                      <div className="text-sm">{address.street}</div>
                      <div className="text-xs text-gray-500">
                        {address.area}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Business Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-green-200 bg-green-50 placeholder-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="Hair Ventures"
            />
          </div>

          <button className="w-full py-2 bg-green-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600">
            <span>+</span>
            <span>Add Address</span>
          </button>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Business Profile Picture
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <LinkIcon size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-green-200 bg-green-50 placeholder-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="Image Link"
              />
            </div>
          </div>

          <button
            onClick={handleSaveBusiness}
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save Business
          </button>
        </div>
      </div>
    </div>
  );
}
