"use client";

import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 6.5244,
  lng: 3.3792,
};

export default function Map({ locations }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Ensure locations is an array before mapping
  const validLocations = Array.isArray(locations) ? locations : [];

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-[220px] p-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {validLocations.map((location) => (
          <Marker
            key={location.id}
            position={{
              lat: location.latitude,
              lng: location.longitude,
            }}
            onClick={() => setSelectedLocation(location)}
            title={location.businessName}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={{
              lat: selectedLocation.latitude,
              lng: selectedLocation.longitude,
            }}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="p-2">
              <h3 className="font-semibold">{selectedLocation.businessName}</h3>
              <p className="text-sm">{selectedLocation.address}</p>
              {selectedLocation.imageUrl && (
                <img
                  src={selectedLocation.imageUrl}
                  alt={selectedLocation.businessName}
                  className="w-24 h-24 object-cover rounded-full mt-2"
                />
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
