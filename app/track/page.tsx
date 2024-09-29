// pages/track.tsx
"use client";

import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import L from "leaflet";
import { useEffect } from "react";

// Dynamically import the MapContainer to avoid SSR issues
const MapComponent = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });

const TrackPage = () => {
  const center = [18.9388, 72.8354]; // Coordinates for South Mumbai (Sobo)

  // Areas to highlight
  const scamAreas = [
    { name: "Colaba", coordinates: [18.9067, 72.8147] },
    { name: "Marine Lines", coordinates: [18.9435, 72.8235] },
    { name: "Fort", coordinates: [18.929, 72.8365] },
    { name: "Churchgate", coordinates: [18.9358, 72.8277] },
    { name: "Nariman Point", coordinates: [18.9242, 72.8236] },
  ];

  // Define the icon
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconUrl: "/leaflet/marker-icon.png",
      shadowUrl: "/leaflet/marker-shadow.png",
    });
  }, []);

  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-500 mb-2">Track Scam Areas</h1>
        <p className="text-lg text-gray-700">
          Here are some areas in South Mumbai where scams have been reported.
        </p>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-4xl h-[500px] shadow-lg rounded-lg overflow-hidden">
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="w-full h-full">
          {/* TileLayer for the base map */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Circles representing scam areas */}
          {scamAreas.map((area, index) => (
            <Circle
              key={index}
              center={area.coordinates}
              radius={400} // Adjust radius for each area
              pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.5 }}
            >
              <Popup>
                <h3>{area.name}</h3>
                <p>Scam reported in this area.</p>
              </Popup>
            </Circle>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default TrackPage;
